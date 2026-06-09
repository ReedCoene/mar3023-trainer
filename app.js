/* ============================================================
   MAR3023 Study App — logic, quiz engine & computational drills
   ============================================================ */

/* ---------- tiny helpers ---------- */
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const el = (t, c, h) => { const e=document.createElement(t); if(c)e.className=c; if(h!=null)e.innerHTML=h; return e; };
const rint = (lo, hi) => Math.floor(Math.random()*(hi-lo+1))+lo;
const pick = arr => arr[rint(0,arr.length-1)];
const shuffle = arr => { const a=[...arr]; for(let i=a.length-1;i>0;i--){const j=rint(0,i);[a[i],a[j]]=[a[j],a[i]];} return a; };
const money = n => "$"+n.toLocaleString("en-US");
const pct = (n,d=1) => (n).toFixed(d)+"%";
// render a 2x2 (or NxM) framework grid from {title, corner, colLabels[], rowLabels[], cells[][]}
function matrixHTML(m){
  let h=`<div class="matrixbox"><div class="matrix-title">${m.title||"Framework grid"}</div><table class="matrix"><tr><td class="m-corner">${m.corner||""}</td>`;
  m.colLabels.forEach(c=>h+=`<th class="m-col">${c}</th>`);
  h+=`</tr>`;
  m.rowLabels.forEach((r,i)=>{
    h+=`<tr><th class="m-row">${r}</th>`;
    (m.cells[i]||[]).forEach(cell=>h+=`<td class="m-cell">${cell}</td>`);
    h+=`</tr>`;
  });
  return h+`</table></div>`;
}

/* ---------- progress (localStorage) ---------- */
const STORE = "mar3023_progress_v1";
let progress = JSON.parse(localStorage.getItem(STORE) || "{}");
function saveProgress(){ localStorage.setItem(STORE, JSON.stringify(progress)); }
function bump(path, n=1){
  const keys = path.split(".");
  let o = progress;
  for(let i=0;i<keys.length-1;i++){ o[keys[i]] = o[keys[i]]||{}; o=o[keys[i]]; }
  o[keys.at(-1)] = (o[keys.at(-1)]||0)+n;
  saveProgress();
}
/* ---------- flagging questions ---------- */
function qid(q){ let h=0,s=q.q||""; for(let i=0;i<s.length;i++){ h=(h*31+s.charCodeAt(i))|0; } return "q"+(h>>>0).toString(36); }
function isFlagged(q){ return !!(progress.flagged && progress.flagged[qid(q)]); }
function toggleFlag(q){ progress.flagged=progress.flagged||{}; const id=qid(q); if(progress.flagged[id]) delete progress.flagged[id]; else progress.flagged[id]=1; saveProgress(); return !!progress.flagged[id]; }
function flagBtn(q){
  const mk=()=>isFlagged(q)?"⚑ Flagged":"⚐ Flag";
  const b=el("button","flagbtn"+(isFlagged(q)?" on":""), mk());
  b.title="Flag this question as looking off / to revisit";
  b.onclick=(e)=>{ e.stopPropagation(); const on=toggleFlag(q); b.classList.toggle("on",on); b.textContent=mk(); };
  return b;
}
function refLabel(q){
  if(!q||!q.ref) return "";
  if(q.src==="L") return "📍 Lecture "+q.ref.replace(/,\s*N(\d+)/," · Noteshell pg $1").replace(/^L/,"");
  if(q.src==="T") return "📖 2023 text "+q.ref+" — page differs in your 2025 edition";
  return "";
}

/* ---------- navigation ---------- */
const VIEWS = ["dashboard","learn","cards","facts","quiz","drills","cram"];
function go(view, arg){
  if(quizIntv){ clearInterval(quizIntv); quizIntv=null; }
  $$(".nav-btn").forEach(b=>b.classList.toggle("active", b.dataset.view===view));
  const main = $("#main"); main.innerHTML="";
  ({dashboard:renderDashboard, learn:renderLearn, cards:renderCards, facts:renderFacts,
    quiz:renderQuiz, drills:renderDrills, cram:renderCram}[view])(main, arg);
  window.scrollTo(0,0);
}

/* ============================================================
   DASHBOARD
   ============================================================ */
function examCountdown(){
  const diff = new Date(EXAM_DATE) - new Date();
  if(diff<=0) return "It's exam time — you've got this! 💪";
  const h = Math.floor(diff/3.6e6), d=Math.floor(h/24), hr=h%24;
  return `${d}d ${hr}h until the exam`;
}
function renderDashboard(main){
  const hero = el("div","hero");
  hero.innerHTML = `
    <div class="hero-top">
      <div>
        <h1>MAR3023 · Exam 1 Trainer</h1>
        <p class="sub">Dr. Cooke · Principles of Marketing — Chapters 1, 3, 4, 5, 6, 8, 9</p>
      </div>
      <div class="countdown" id="cd">${examCountdown()}</div>
    </div>
    <p class="split">Exam = <b>50% lecture · 50% textbook</b>. Mix conceptual study with the computational drills every day.</p>`;
  main.appendChild(hero);

  // study path cards
  const grid = el("div","card-grid");
  const tiles = [
    ["📖","Learn","Ranked High/Med/Low by what's actually tested — each concept paired with a real past-exam question.","learn"],
    ["⭐","Weird Facts","The specific stats & lecture examples Cooke loves to ask (ethnicities, acts, lifestyle trends…).","facts"],
    ["🔁","Flashcards","Spaced-repetition cards. The fastest way to lock in terms & lists.","cards"],
    ["✅","Quiz · Timed · Patterns","228 real questions: timed mock exam, pattern trainer, practice exam, per-chapter.","quiz"],
    ["🧮","Computational Drills","Infinite randomized Market Share, MAM, NPS, TLC, Vendor, Indexing & Benefit-Seg problems.","drills"],
    ["⚡","Cram Sheet","One-screen rapid review: formulas, mnemonics & the High-yield hit list.","cram"]
  ];
  tiles.forEach(([icon,title,desc,v])=>{
    const c = el("button","tile");
    c.innerHTML = `<div class="tile-ic">${icon}</div><h3>${title}</h3><p>${desc}</p>`;
    c.onclick=()=>go(v);
    grid.appendChild(c);
  });
  main.appendChild(grid);

  // mastery bars
  const mast = el("div","panel");
  mast.appendChild(el("h2",null,"Your progress by chapter"));
  CHAPTERS.forEach(ch=>{
    const qTotal = ALLQ.filter(q=>q.ch===ch.id).length;
    const correct = (progress.quiz?.[ch.id]?.correct)||0;
    const seen = (progress.quiz?.[ch.id]?.seen)||0;
    const cardSeen = (progress.cards?.[ch.id])||0;
    const pctv = qTotal? Math.min(100, Math.round(100*correct/qTotal)) : 0;
    const row = el("div","mrow");
    row.innerHTML = `
      <div class="mrow-label">Ch ${ch.num} · ${ch.title}</div>
      <div class="bar"><div class="bar-fill" style="width:${pctv}%"></div></div>
      <div class="mrow-stat">${correct}/${qTotal} correct · ${cardSeen} cards</div>`;
    row.onclick=()=>go("learn", ch.id);
    mast.appendChild(row);
  });
  main.appendChild(mast);

  const drillStats = progress.drills||{};
  const dCorrect = drillStats.correct||0, dSeen=drillStats.seen||0;
  const note = el("div","panel small");
  note.innerHTML = `<b>Computational record:</b> ${dCorrect}/${dSeen} correct.
    The 7 computational types on Exam 1 are: Market Share, Multi-Attribute Model, NPS, Value Analysis/TLC, Vendor Analysis, Indexing, and Benefit Segmentation.`;
  main.appendChild(note);
}

/* ============================================================
   LEARN
   ============================================================ */
function renderLearn(main, chId){
  const tabs = el("div","chtabs");
  CHAPTERS.forEach(ch=>{
    const b = el("button","chtab"+(ch.id===chId?" active":""), `Ch ${ch.num}`);
    b.onclick=()=>go("learn", ch.id);
    tabs.appendChild(b);
  });
  main.appendChild(tabs);

  if(!chId) chId = CHAPTERS[0].id;
  const ch = CHAPTERS.find(c=>c.id===chId);

  const head = el("div","lesson-head");
  head.innerHTML = `<span class="seg-tag">Lecture Segment ${ch.seg}</span>
    <h1>Chapter ${ch.num} · ${ch.title}</h1><p class="sub">${ch.blurb}</p>`;
  main.appendChild(head);

  // "What they actually test" — likelihood ranking
  const tier=TIERS[ch.id];
  if(tier){
    const tp=el("div","tierpanel");
    tp.innerHTML=`<h2>🎯 What they actually test</h2>
      <div class="tier hi"><span class="tier-tag">HIGH</span><ul>${tier.High.map(x=>`<li>${x}</li>`).join("")}</ul></div>
      <div class="tier md"><span class="tier-tag">MED</span><ul>${tier.Med.map(x=>`<li>${x}</li>`).join("")}</ul></div>
      <div class="tier lo"><span class="tier-tag">LOW</span><ul>${tier.Low.map(x=>`<li>${x}</li>`).join("")}</ul></div>`;
    main.appendChild(tp);
  }

  // question pairing
  const used=new Set();
  const stripHtml=s=>s.replace(/<[^>]+>/g," ");
  function pairQ(sec){
    const text=(sec.h+" "+(sec.items?sec.items.slice(0,3).join(" "):sec.text||""));
    const words=[...new Set((stripHtml(text).toLowerCase().match(/[a-z][a-z\-]{4,}/g)||[]))];
    let best=null,bestN=1;
    for(const q of qsForChapter(ch.id)){
      if(used.has(q)) continue;
      const qt=stripHtml(q.q).toLowerCase();
      let n=0; for(const w of words) if(qt.includes(w)) n++;
      if(n>bestN){bestN=n;best=q;}
    }
    if(best){used.add(best);return best;}
    return null;
  }

  const lessonSecs = (typeof LESSONS!=="undefined" && LESSONS[ch.id]) ? LESSONS[ch.id] : ch.sections;
  lessonSecs.forEach(sec=>{
    const s = el("div","lesson-sec");
    s.appendChild(el("h2",null,sec.h));
    if(sec.items){
      const ul = el("ul");
      sec.items.forEach(it=>ul.appendChild(el("li",null,it)));
      s.appendChild(ul);
    }
    if(sec.text) s.appendChild(el("p",null,sec.text));
    if(sec.matrix) s.insertAdjacentHTML("beforeend", matrixHTML(sec.matrix));
    const pq=pairQ(sec);
    if(pq) s.appendChild(renderInlineQ(pq,{label:"📝 How this gets tested:"}));
    main.appendChild(s);
  });

  const mn = el("div","mnemo");
  mn.appendChild(el("h2",null,"🧠 Memory hooks"));
  const ul = el("ul");
  ch.mnemonics.forEach(m=>ul.appendChild(el("li",null,m)));
  mn.appendChild(ul);
  main.appendChild(mn);

  // end-of-chapter: more real questions (prioritize lecture-sourced, unused)
  const pool=qsForChapter(ch.id).filter(q=>!used.has(q)).sort((a,b)=>(a.src==="L"?-1:0)-(b.src==="L"?-1:0));
  const extra=pool.slice(0,3);
  if(extra.length){
    const box=el("div","endq");
    box.appendChild(el("h2",null,"📝 More real exam questions — Ch "+ch.num));
    extra.forEach(q=>box.appendChild(renderInlineQ(q,{label:"Past-exam question"})));
    main.appendChild(box);
  }

  const act = el("div","lesson-actions");
  const qb = el("button","btn", "Quiz this chapter →");
  qb.onclick=()=>go("quiz", {mode:"chapter", ch:ch.id});
  const cb = el("button","btn ghost", "Flashcards →");
  cb.onclick=()=>go("cards", ch.id);
  act.append(qb,cb);
  main.appendChild(act);

  // prev/next
  const idx = CHAPTERS.findIndex(c=>c.id===chId);
  const nav = el("div","prevnext");
  if(idx>0){ const p=el("button","btn ghost","← Ch "+CHAPTERS[idx-1].num); p.onclick=()=>go("learn",CHAPTERS[idx-1].id); nav.appendChild(p); }
  if(idx<CHAPTERS.length-1){ const n=el("button","btn ghost","Ch "+CHAPTERS[idx+1].num+" →"); n.onclick=()=>go("learn",CHAPTERS[idx+1].id); nav.appendChild(n); }
  main.appendChild(nav);
}

/* ============================================================
   FLASHCARDS  (Leitner spaced repetition)
   ============================================================ */
let cardDeck=[], cardPos=0, cardFlipped=false, cardScope="all";
function deckFor(scope){
  let d = scope==="all"? FLASHCARDS : FLASHCARDS.filter(c=>c[0]===scope);
  return shuffle(d);
}
function renderCards(main, scope){
  cardScope = scope || "all";
  cardDeck = deckFor(cardScope); cardPos=0; cardFlipped=false;

  const bar = el("div","scopebar");
  const mk=(id,label)=>{ const b=el("button","chip"+(cardScope===id?" active":""),label); b.onclick=()=>renderCards(main,id); return b; };
  bar.appendChild(mk("all","All chapters"));
  CHAPTERS.forEach(ch=>bar.appendChild(mk(ch.id,"Ch "+ch.num)));
  main.appendChild(bar);

  const wrap = el("div","card-wrap");
  main.appendChild(wrap);
  drawCard(wrap);
}
function drawCard(wrap){
  wrap.innerHTML="";
  if(cardPos>=cardDeck.length){
    wrap.appendChild(el("div","done","🎉 Deck complete! "+cardDeck.length+" cards reviewed."));
    const again=el("button","btn","Shuffle & repeat"); again.onclick=()=>{cardDeck=deckFor(cardScope);cardPos=0;cardFlipped=false;drawCard(wrap);};
    wrap.appendChild(again); return;
  }
  const [ch,front,back]=cardDeck[cardPos];
  const chMeta=CHAPTERS.find(c=>c.id===ch);
  const counter=el("div","card-counter",`Card ${cardPos+1} / ${cardDeck.length} · Ch ${chMeta.num}`);
  wrap.appendChild(counter);

  const card=el("div","flashcard"+(cardFlipped?" flipped":""));
  card.innerHTML=`<div class="fc-face fc-front"><span class="fc-hint">Q</span><div class="fc-text">${front}</div><span class="fc-tap">tap to flip</span></div>
                  <div class="fc-face fc-back"><span class="fc-hint">A</span><div class="fc-text">${back}</div></div>`;
  card.onclick=()=>{cardFlipped=!cardFlipped; card.classList.toggle("flipped");};
  wrap.appendChild(card);

  const ctrl=el("div","card-ctrl");
  const hard=el("button","btn ghost","Need review");
  const good=el("button","btn","Got it ✓");
  const next=()=>{ bump("cards."+ch); cardPos++; cardFlipped=false; drawCard(wrap); };
  hard.onclick=()=>{ cardDeck.push(cardDeck[cardPos]); next(); }; // re-queue at end
  good.onclick=next;
  ctrl.append(hard,good);
  wrap.appendChild(ctrl);
}

/* ============================================================
   QUIZ  (multiple choice with explanations)
   ============================================================ */
/* ============================================================
   WEIRD / HIGH-YIELD FACTS  (rapid recall)
   ============================================================ */
let factDeck=[], factPos=0, factShown=false, factScope="all";
function factsFor(scope){ let d=scope==="all"?FACTS:FACTS.filter(f=>f[0]===scope); return shuffle(d); }
function renderFacts(main, scope){
  factScope=scope||"all"; factDeck=factsFor(factScope); factPos=0; factShown=false;
  main.appendChild(el("h1","page-h","⭐ High-Yield Facts"));
  main.appendChild(el("p","sub","The specific stats, lists, and lecture examples Dr. Cooke likes to ask as 'gotcha' questions. Recall the answer, then reveal."));
  const bar=el("div","scopebar");
  const mk=(id,label)=>{ const b=el("button","chip"+(factScope===id?" active":""),label); b.onclick=()=>renderFacts(main,id); return b; };
  bar.appendChild(mk("all","All"));
  CHAPTERS.forEach(ch=>{ if(FACTS.some(f=>f[0]===ch.id)) bar.appendChild(mk(ch.id,"Ch "+ch.num)); });
  main.appendChild(bar);
  const wrap=el("div","card-wrap"); main.appendChild(wrap); drawFact(wrap);
}
function drawFact(wrap){
  wrap.innerHTML="";
  if(factPos>=factDeck.length){
    wrap.appendChild(el("div","done","🎉 Done! "+factDeck.length+" facts reviewed."));
    const again=el("button","btn","Shuffle & repeat"); again.onclick=()=>{factDeck=factsFor(factScope);factPos=0;factShown=false;drawFact(wrap);};
    wrap.appendChild(again); return;
  }
  const [ch,front,back]=factDeck[factPos];
  const chMeta=CHAPTERS.find(c=>c.id===ch)||{num:"?"};
  wrap.appendChild(el("div","card-counter",`Fact ${factPos+1} / ${factDeck.length} · Ch ${chMeta.num}`));
  const card=el("div","flashcard"+(factShown?" flipped":""));
  card.innerHTML=`<div class="fc-face fc-front"><span class="fc-hint">?</span><div class="fc-text">${front}</div><span class="fc-tap">tap to reveal</span></div>
                  <div class="fc-face fc-back"><span class="fc-hint">FACT</span><div class="fc-text">${back}</div></div>`;
  card.onclick=()=>{factShown=!factShown;card.classList.toggle("flipped");};
  wrap.appendChild(card);
  const ctrl=el("div","card-ctrl");
  const hard=el("button","btn ghost","Review again");
  const good=el("button","btn","Got it ✓");
  const next=()=>{ factPos++; factShown=false; drawFact(wrap); };
  hard.onclick=()=>{ factDeck.push(factDeck[factPos]); next(); };
  good.onclick=next;
  ctrl.append(hard,good); wrap.appendChild(ctrl);
}

// combined pool: conceptual MCQs + real practice exam + mined+verified test bank
const ALLQ = QUESTIONS
  .concat(typeof PRACTICE!=="undefined"?PRACTICE:[])
  .concat(typeof TESTBANK!=="undefined"?TESTBANK:[]);
const REALQ = ALLQ.filter(q=>q.src==="L"||q.src==="T"||typeof PRACTICE!=="undefined"&&PRACTICE.includes(q)); // real past questions
function qsForChapter(ch){ return ALLQ.filter(q=>q.ch===ch); }
// reusable inline question card (used in Learn). Returns the element.
function renderInlineQ(q, opts={}){
  const wrap=el("div","inlineq");
  const tag = q.src==="L"?"<span class='src src-l'>LECTURE Q</span>":q.src==="T"?"<span class='src src-t'>TEXTBOOK Q</span>":"<span class='src src-p'>PRACTICE Q</span>";
  wrap.innerHTML=`<div class="inlineq-head">${tag}<span class="inlineq-label">${opts.label||"Try a real past-exam question"}</span></div>
    <div class="inlineq-q">${q.q}</div>`;
  wrap.querySelector(".inlineq-head").appendChild(flagBtn(q));
  if(refLabel(q)) wrap.querySelector(".inlineq-q").insertAdjacentHTML("afterend",`<div class="qref">${refLabel(q)}</div>`);
  const cwrap=el("div","choices small");
  let answered=false;
  const order=shuffle(q.choices.map((c,i)=>({c,i})));
  order.forEach(({c,i})=>{
    const b=el("button","choice",c);
    b.onclick=()=>{ if(answered)return; answered=true;
      const correct=i===q.a;
      if(correct) b.classList.add("right");
      else { b.classList.add("wrong"); $$(".choice",cwrap).forEach((bb,k)=>{ if(order[k].i===q.a) bb.classList.add("right"); }); }
      $$(".choice",cwrap).forEach(bb=>bb.classList.add("locked"));
      const exp=el("div","explain "+(correct?"ok":"no")); exp.innerHTML=`<b>${correct?"Correct ✓":"Answer"}</b> — ${q.why}`;
      wrap.appendChild(exp);
    };
    cwrap.appendChild(b);
  });
  wrap.appendChild(cwrap);
  return wrap;
}
let quizSet=[], quizPos=0, quizScore=0, quizCfg=null, quizMissed=[], quizDeadline=0, quizIntv=null;
function startQuizTimer(main){
  if(quizIntv) clearInterval(quizIntv);
  quizIntv=setInterval(()=>{
    const t=$("#qtimer"); const left=Math.max(0,Math.round((quizDeadline-Date.now())/1000));
    if(t){ const m=Math.floor(left/60), s=left%60; t.textContent=`${m}:${String(s).padStart(2,"0")}`; if(left<=60)t.classList.add("danger"); }
    if(left<=0){ clearInterval(quizIntv); quizIntv=null; quizPos=quizSet.length; drawQuiz(main); }
  },1000);
}
function renderQuiz(main, cfg){
  if(!cfg){ // chooser
    main.appendChild(el("h1","page-h","Practice Quiz"));
    main.appendChild(el("p","sub","Pick a mode. Every question has an explanation so wrong answers still teach you."));

    // featured: timed exam simulator
    const ft=el("button","quiz-feature timed");
    ft.innerHTML=`<div class="feat-badge gold">⏱ TIMED MOCK EXAM</div>
      <h3>Timed Exam Simulator — 40 questions, 40 min</h3>
      <p>Real conditions: countdown clock, no answers until the end, then a full scored review of every miss.</p>`;
    ft.onclick=()=>go("quiz",{mode:"timed",n:40,secs:40*60,timed:true});
    main.appendChild(ft);

    // featured: pattern trainer
    const fp=el("button","quiz-feature pattern");
    fp.innerHTML=`<div class="feat-badge teal">🧩 PATTERN TRAINER</div>
      <h3>Learn the question types</h3>
      <p>Drill one question archetype at a time ("which environmental force?", "name the buying-center role"…) so you recognize them instantly.</p>`;
    fp.onclick=()=>go("quiz",{mode:"patterns"});
    main.appendChild(fp);

    // featured: the real practice exam
    const feat=el("button","quiz-feature");
    feat.innerHTML=`<div class="feat-badge">★ REAL EXAM-STYLE</div>
      <h3>Fall 2023 Practice Exam — all 56 questions</h3>
      <p>The actual practice set, recreated with answers & explanations.</p>`;
    feat.onclick=()=>go("quiz",{mode:"practice"});
    main.appendChild(feat);

    const fc=ALLQ.filter(isFlagged).length;
    if(fc){
      const ff=el("button","quiz-feature flagged");
      ff.innerHTML=`<div class="feat-badge red">⚑ FLAGGED</div>
        <h3>Review your flagged questions (${fc})</h3>
        <p>The questions you marked to revisit or that looked off.</p>`;
      ff.onclick=()=>go("quiz",{mode:"flagged"});
      main.appendChild(ff);
    }

    const grid=el("div","quiz-modes");
    const start=(c)=>go("quiz",c);
    const modes=[
      ["Full Exam Simulation","35 mixed questions, immediate feedback.",{mode:"mixed",n:35}],
      ["Lecture-example questions","Only the real questions built from lecture brands/scenarios.",{mode:"lecture"}],
      ["Quick Mix (10)","A fast 10-question mixed set.",{mode:"mixed",n:10}],
    ];
    modes.forEach(([t,d,c])=>{ const b=el("button","quiz-mode"); b.innerHTML=`<h3>${t}</h3><p>${d}</p>`; b.onclick=()=>start(c); grid.appendChild(b); });
    CHAPTERS.forEach(ch=>{
      const n=ALLQ.filter(q=>q.ch===ch.id).length;
      const b=el("button","quiz-mode"); b.innerHTML=`<h3>Ch ${ch.num}: ${ch.title}</h3><p>${n} questions</p>`;
      b.onclick=()=>start({mode:"chapter",ch:ch.id}); grid.appendChild(b);
    });
    main.appendChild(grid);
    return;
  }
  // pattern archetype chooser
  if(cfg.mode==="patterns"){
    main.appendChild(el("h1","page-h","🧩 Question-Pattern Trainer"));
    main.appendChild(el("p","sub","Each card is a recurring question type. Drill it to train instant recognition."));
    const groups={};
    REALQ.forEach(q=>{ const a=archetypeOf(q); (groups[a]=groups[a]||[]).push(q); });
    const grid=el("div","quiz-modes");
    Object.entries(groups).sort((a,b)=>b[1].length-a[1].length).forEach(([name,qs])=>{
      if(qs.length<2) return;
      const b=el("button","quiz-mode"); b.innerHTML=`<h3>${name}</h3><p>${qs.length} questions</p>`;
      b.onclick=()=>go("quiz",{mode:"pattern",pattern:name}); grid.appendChild(b);
    });
    main.appendChild(grid);
    const back=el("button","btn ghost","← Quiz menu"); back.onclick=()=>go("quiz"); main.appendChild(back);
    return;
  }
  // build set
  quizCfg=cfg;
  if(cfg.mode==="chapter") quizSet=shuffle(ALLQ.filter(q=>q.ch===cfg.ch));
  else if(cfg.mode==="practice") quizSet=shuffle(PRACTICE);
  else if(cfg.mode==="lecture") quizSet=shuffle(ALLQ.filter(q=>q.src==="L"));
  else if(cfg.mode==="pattern") quizSet=shuffle(REALQ.filter(q=>archetypeOf(q)===cfg.pattern));
  else if(cfg.mode==="flagged") quizSet=shuffle(ALLQ.filter(isFlagged));
  else if(cfg.mode==="timed") quizSet=shuffle(ALLQ).slice(0,cfg.n||40);
  else quizSet=shuffle(ALLQ).slice(0,cfg.n||20);
  quizPos=0; quizScore=0; quizMissed=[];
  if(cfg.timed){ quizDeadline=Date.now()+(cfg.secs||2400)*1000; drawQuiz(main); startQuizTimer(main); return; }
  drawQuiz(main);
}
function drawQuiz(main){
  main.innerHTML="";
  const timed=quizCfg&&quizCfg.timed;
  if(!quizSet.length){
    main.appendChild(el("div","quiz-result","<p>No questions here yet — flag some while you study and they'll show up.</p>"));
    const back=el("button","btn ghost","Quiz menu"); back.onclick=()=>go("quiz"); main.appendChild(back); return;
  }
  if(quizPos>=quizSet.length){ // results
    if(quizIntv){ clearInterval(quizIntv); quizIntv=null; }
    const p=Math.round(100*quizScore/quizSet.length);
    const res=el("div","quiz-result");
    let msg = p>=90?"Outstanding — exam-ready on this material.":p>=75?"Solid. Review the misses and run it again.":p>=60?"Getting there — revisit the High-yield topics, then retry.":"Go back to Learn for this material, then come back.";
    res.innerHTML=`<div class="big-score">${quizScore}/${quizSet.length}</div><div class="score-pct">${p}%</div><p>${msg}</p>`;
    const again=el("button","btn","Retry"); again.onclick=()=>renderQuiz(main,quizCfg);
    const back=el("button","btn ghost","Quiz menu"); back.onclick=()=>go("quiz");
    res.append(again,back); main.appendChild(res);
    if(quizMissed.length){
      const rev=el("div","review");
      rev.appendChild(el("h2",null,`Review your ${quizMissed.length} miss${quizMissed.length>1?"es":""}`));
      quizMissed.forEach(q=>{
        const c=el("div","review-q");
        c.innerHTML=`<div class="rv-q">${q.q}</div><div class="rv-a">✓ ${q.choices[q.a]}</div><div class="rv-why">${q.why}</div>`+
          (refLabel(q)?`<div class="qref">${refLabel(q)}</div>`:"");
        c.appendChild(flagBtn(q));
        rev.appendChild(c);
      });
      main.appendChild(rev);
    }
    return;
  }
  const q=quizSet[quizPos];
  const chMeta=CHAPTERS.find(c=>c.id===q.ch)||{num:"?"};
  const srcTag = q.src==="L"?"<span class='src src-l'>LECTURE</span>":q.src==="T"?"<span class='src src-t'>TEXT</span>":"";
  const head=el("div","quiz-head");
  head.innerHTML=`<div class="q-prog">Question ${quizPos+1} / ${quizSet.length}</div>
    <div class="q-right">${srcTag}<div class="q-tag">Ch ${chMeta.num}</div>${timed?`<div class="q-timer" id="qtimer">--:--</div>`:""}</div>`;
  main.appendChild(head);
  head.querySelector(".q-right").appendChild(flagBtn(q));
  const pbar=el("div","bar slim"); pbar.innerHTML=`<div class="bar-fill" style="width:${100*quizPos/quizSet.length}%"></div>`;
  main.appendChild(pbar);

  main.appendChild(el("div","q-text",q.q));
  if(!timed && refLabel(q)) main.appendChild(el("div","qref",refLabel(q)));
  const order=shuffle(q.choices.map((c,i)=>({c,i})));
  const choicesWrap=el("div","choices");
  let answered=false;
  order.forEach(({c,i})=>{
    const b=el("button","choice",c);
    b.onclick=()=>{
      if(answered)return; answered=true;
      bump("quiz."+q.ch+".seen");
      const correct = i===q.a;
      if(correct){ quizScore++; bump("quiz."+q.ch+".correct"); b.classList.add("right"); }
      else { quizMissed.push(q); b.classList.add("wrong");
        $$(".choice",choicesWrap).forEach((bb,k)=>{ if(order[k].i===q.a) bb.classList.add("right"); });
      }
      $$(".choice",choicesWrap).forEach(bb=>bb.classList.add("locked"));
      if(!timed){
        const exp=el("div","explain"+(correct?" ok":" no"));
        exp.innerHTML=`<b>${correct?"Correct ✓":"Not quite"}</b> — ${q.why}`;
        main.appendChild(exp);
      }
      const nx=el("button","btn",quizPos+1>=quizSet.length?"Finish →":"Next →"); nx.onclick=()=>{quizPos++;drawQuiz(main);};
      main.appendChild(nx);
    };
    choicesWrap.appendChild(b);
  });
  main.appendChild(choicesWrap);
}

/* ============================================================
   COMPUTATIONAL DRILLS — the 7 exam problem types
   each generator returns {title, prompt(html), choices[], answerIdx, solution(html)}
   ============================================================ */

// build 4 multiple-choice options around a correct numeric value
function numChoices(correct, makeDistractors, fmt){
  let set = new Set([fmt(correct)]);
  const dist = makeDistractors();
  for(const d of dist){ if(set.size>=4) break; set.add(fmt(d)); }
  // pad if needed
  let guard=0;
  while(set.size<4 && guard++<50){ set.add(fmt(correct*(1+ (rint(-30,30)/100)))); }
  const arr=shuffle([...set]);
  return { choices:arr, answerIdx:arr.indexOf(fmt(correct)) };
}

const DRILLS = {
  marketshare(){
    const brands=["Lays","Ruffles","Pringles","Doritos","Cape Cod","Utz","Kettle","Herr's"];
    const chosen=shuffle(brands).slice(0,5);
    const sales=chosen.map(()=>rint(80,2200)*10);
    const total=sales.reduce((a,b)=>a+b,0);
    const ti=rint(0,4);
    const share=100*sales[ti]/total;
    const fmt=v=>v.toFixed(2)+"%";
    const {choices,answerIdx}=numChoices(share, ()=>[
      100*sales[ti]/(total-sales[ti]),           // forgot to include self
      100*sales[(ti+1)%5]/total,                  // wrong brand
      share*1.1, share*0.9
    ], fmt);
    let rows=chosen.map((b,i)=>`<tr><td>${b}</td><td class="r">${money(sales[i])}</td></tr>`).join("");
    const prompt=`<p>Compute the market share (by revenue) of <b>${chosen[ti]}</b>.</p>
      <table class="dtable"><tr><th>Brand</th><th class="r">Sales ($M)</th></tr>${rows}
      <tr class="tot"><td>CATEGORY TOTAL</td><td class="r">${money(total)}</td></tr></table>`;
    const solution=`<p>Market share = brand sales ÷ <b>total category sales (including the brand)</b> × 100.</p>
      <p>= ${money(sales[ti])} ÷ ${money(total)} × 100 = <b>${fmt(share)}</b></p>
      <p class="tip">Trap: the denominator must include the brand's own sales.</p>`;
    return {title:"Market Share", prompt, choices, answerIdx, solution};
  },

  mam(){
    const alts=shuffle(["Cancun","Paris","NYC","Home","Tokyo","Rome"]).slice(0,3);
    const attrs=shuffle(["Cultural","Nightlife","Cost","Safety","Food","Weather"]).slice(0,4);
    const imp=attrs.map(()=>rint(2,9));
    const bel=alts.map(()=>attrs.map(()=>rint(2,9)));
    const vals=bel.map(row=>row.reduce((s,b,j)=>s+b*imp[j],0));
    const best=vals.indexOf(Math.max(...vals));
    const choices=alts.map(a=>a);
    const answerIdx=best;
    let header=`<tr><th>Attribute</th>${alts.map(a=>`<th class="r">${a}</th>`).join("")}<th class="r">Imp.</th></tr>`;
    let body=attrs.map((at,j)=>`<tr><td>${at}</td>${alts.map((_,i)=>`<td class="r">${bel[i][j]}</td>`).join("")}<td class="r imp">${imp[j]}</td></tr>`).join("");
    const prompt=`<p>Using the Multi-Attribute Model, which alternative does the consumer prefer? (beliefs &amp; importance on a 1–10 scale)</p>
      <table class="dtable">${header}${body}</table>`;
    const work=alts.map((a,i)=>`<p>${a} = ${attrs.map((_,j)=>`${bel[i][j]}×${imp[j]}`).join(" + ")} = <b>${vals[i]}</b></p>`).join("");
    const solution=`<p>Value = Σ (belief × importance) for each alternative:</p>${work}
      <p>Highest total wins → <b>${alts[best]}</b> (${vals[best]}).</p>`;
    return {title:"Multi-Attribute Model", prompt, choices, answerIdx, solution};
  },

  nps(){
    const freq=Array.from({length:11},()=>rint(50,800));
    const total=freq.reduce((a,b)=>a+b,0);
    const det=freq.slice(0,7).reduce((a,b)=>a+b,0);   // 0-6
    const pro=freq[9]+freq[10];                        // 9-10
    const nps=100*pro/total - 100*det/total;
    const fmt=v=>Math.round(v)+"";
    const {choices,answerIdx}=numChoices(nps, ()=>[
      100*pro/total + 100*det/total,                   // added instead
      100*(freq[7]+freq[8]+pro)/total - 100*det/total, // counted passives as promoters
      100*pro/total, -nps
    ], fmt);
    let head=`<tr><th>Score</th>${freq.map((_,i)=>`<th class="r">${i}</th>`).join("")}</tr>`;
    let row=`<tr><td>Freq</td>${freq.map(f=>`<td class="r">${f}</td>`).join("")}</tr>`;
    const prompt=`<p>Compute the <b>Net Promoter Score</b> (round to nearest whole number). Total responses = ${total.toLocaleString()}.</p>
      <table class="dtable small">${head}${row}</table>`;
    const solution=`<p>Detractors = 0–6, Promoters = 9–10 (passives 7–8 ignored).</p>
      <p>%Promoters = (${freq[9]}+${freq[10]}) ÷ ${total} = ${pct(100*pro/total)}</p>
      <p>%Detractors = (${freq.slice(0,7).join("+")}) ÷ ${total} = ${pct(100*det/total)}</p>
      <p>NPS = %P − %D = ${pct(100*pro/total)} − ${pct(100*det/total)} = <b>${Math.round(nps)}</b></p>`;
    return {title:"Net Promoter Score", prompt, choices, answerIdx, solution};
  },

  tlc(){
    const horizon=pick([5,7,10]);
    const oldParts=rint(800,1400), oldEnergy=rint(300,700);
    const newPurchase=rint(8000,16000), newParts=rint(50,200), newEnergy=rint(150,400);
    const tlcOld=horizon*(oldParts+oldEnergy);
    const tlcNew=newPurchase+horizon*(newParts+newEnergy);
    const buyNew=tlcNew<tlcOld;
    const choices=["Buy the NEW machine","Keep the OLD machine"];
    const answerIdx=buyNew?0:1;
    const prompt=`<p>Your firm uses a <b>${horizon}-year</b> planning horizon. Compare Total Lifetime Cost and decide.</p>
      <table class="dtable"><tr><th></th><th class="r">Old</th><th class="r">New</th></tr>
      <tr><td>Purchase</td><td class="r">$0</td><td class="r">${money(newPurchase)}</td></tr>
      <tr><td>Parts / yr</td><td class="r">${money(oldParts)}</td><td class="r">${money(newParts)}</td></tr>
      <tr><td>Energy / yr</td><td class="r">${money(oldEnergy)}</td><td class="r">${money(newEnergy)}</td></tr></table>`;
    const solution=`<p>TLC = purchase + (annual costs × ${horizon} years).</p>
      <p>TLC<sub>Old</sub> = 0 + ${horizon}×(${money(oldParts)}+${money(oldEnergy)}) = <b>${money(tlcOld)}</b></p>
      <p>TLC<sub>New</sub> = ${money(newPurchase)} + ${horizon}×(${money(newParts)}+${money(newEnergy)}) = <b>${money(tlcNew)}</b></p>
      <p>Lower TLC wins → <b>${buyNew?"buy the NEW machine":"keep the OLD machine"}</b>.</p>`;
    return {title:"Value Analysis / TLC", prompt, choices, answerIdx, solution};
  },

  vendor(){
    const crit=["Product Quality","Delivery","Reliability","Price"];
    // weights summing to 100
    let w=[40,25,20,15];
    const vendors=["Vendor 1","Vendor 2","Vendor 3"];
    const r=vendors.map(()=>crit.map(()=>rint(2,10)));
    const score=r.map(row=>row.reduce((s,v,j)=>s+v*w[j]/100,0));
    const best=score.indexOf(Math.max(...score));
    const choices=vendors.slice();
    const answerIdx=best;
    let head=`<tr><th>Criterion (weight)</th>${vendors.map(v=>`<th class="r">${v}</th>`).join("")}</tr>`;
    let body=crit.map((c,j)=>`<tr><td>${c} (${w[j]}%)</td>${vendors.map((_,i)=>`<td class="r">${r[i][j]}</td>`).join("")}</tr>`).join("");
    const prompt=`<p>Run a <b>vendor analysis</b>. Which vendor should be chosen?</p>
      <table class="dtable">${head}${body}</table>`;
    const work=vendors.map((v,i)=>`<p>${v} = ${crit.map((_,j)=>`.${w[j]}×${r[i][j]}`).join(" + ")} = <b>${score[i].toFixed(2)}</b></p>`).join("");
    const solution=`<p>Score = Σ (rating × weight). Weights are percentages, so multiply by w/100.</p>${work}
      <p>Highest score → <b>${vendors[best]}</b>.</p>`;
    return {title:"Vendor Analysis", prompt, choices, answerIdx, solution};
  },

  indexing(){
    const places=["Florida","Tampa","Miami","Orlando","Texas","California"];
    const behaviors=["canoeing/kayaking","golf","boating","frequent flying","gourmet cooking"];
    const place=pick(places), beh=pick(behaviors);
    const segTarget=rint(8,40)/10;     // millions doing behavior in segment
    const segPop=rint(150,400)/10;     // millions in segment
    const usaTarget=rint(150,300)/10;
    const usaPop=rint(2800,3300)/10;
    const segPct=100*segTarget/segPop;
    const usaPct=100*usaTarget/usaPop;
    const index=segPct/usaPct*100;
    const fmt=v=>Math.round(v)+"";
    const {choices,answerIdx}=numChoices(index, ()=>[
      usaPct/segPct*100,            // inverted
      segPct/usaPct,                // forgot ×100
      index*1.15, index*0.85
    ], fmt);
    const prompt=`<p>Compute the <b>index</b> for ${place} for participation in "${beh}". (Round to nearest whole number.)</p>
      <table class="dtable"><tr><th></th><th class="r">Participants (M)</th><th class="r">Population (M)</th></tr>
      <tr><td>${place}</td><td class="r">${segTarget.toFixed(2)}</td><td class="r">${segPop.toFixed(2)}</td></tr>
      <tr><td>USA</td><td class="r">${usaTarget.toFixed(2)}</td><td class="r">${usaPop.toFixed(2)}</td></tr></table>`;
    const solution=`<p>Index = (% in segment ÷ % in population) × 100.</p>
      <p>% ${place} = ${segTarget.toFixed(2)} ÷ ${segPop.toFixed(2)} = ${pct(segPct)}</p>
      <p>% USA = ${usaTarget.toFixed(2)} ÷ ${usaPop.toFixed(2)} = ${pct(usaPct)}</p>
      <p>Index = ${pct(segPct)} ÷ ${pct(usaPct)} × 100 = <b>${Math.round(index)}</b>
      ${index>=100?"(over-indexes — does it more than average)":"(under-indexes — does it less than average)"}.</p>`;
    return {title:"Indexing", prompt, choices, answerIdx, solution};
  },

  benefitseg(){
    const brands=shuffle(["Honda","Volvo","Tesla","BMW","Subaru"]).slice(0,2);
    const attrs=["Safety","Price"];
    const ratings=brands.map(()=>[rint(2,10),rint(2,10)]); // [safety,price]
    const wA=[rint(6,10),rint(1,4)]; // segment A values safety
    const wB=[rint(1,4),rint(6,10)]; // segment B values price
    const vA=brands.map((_,i)=>ratings[i][0]*wA[0]+ratings[i][1]*wA[1]);
    const vB=brands.map((_,i)=>ratings[i][0]*wB[0]+ratings[i][1]*wB[1]);
    const aPref=vA.indexOf(Math.max(...vA));
    const askA=Math.random()<0.5;
    const prefIdx=askA?aPref:vB.indexOf(Math.max(...vB));
    const seg=askA?"A":"B";
    const choices=brands.slice();
    const answerIdx=prefIdx;
    const prompt=`<p>Two benefit segments rate ${brands[0]} and ${brands[1]}. Which brand does <b>Segment ${seg}</b> prefer? (1–10 scales)</p>
      <table class="dtable"><tr><th></th><th class="r">${brands[0]}</th><th class="r">${brands[1]}</th><th class="r">w(A)</th><th class="r">w(B)</th></tr>
      <tr><td>Safety</td><td class="r">${ratings[0][0]}</td><td class="r">${ratings[1][0]}</td><td class="r imp">${wA[0]}</td><td class="r imp">${wB[0]}</td></tr>
      <tr><td>Price</td><td class="r">${ratings[0][1]}</td><td class="r">${ratings[1][1]}</td><td class="r imp">${wA[1]}</td><td class="r imp">${wB[1]}</td></tr></table>`;
    const w=askA?wA:wB, v=askA?vA:vB;
    const work=brands.map((b,i)=>`<p>${b} = ${ratings[i][0]}×${w[0]} + ${ratings[i][1]}×${w[1]} = <b>${v[i]}</b></p>`).join("");
    const solution=`<p>Apply Segment ${seg}'s weights via the multi-attribute model:</p>${work}
      <p>Segment ${seg} prefers <b>${choices[prefIdx]}</b>. Different weights → different preferred brand (the point of benefit segmentation).</p>`;
    return {title:"Benefit Segmentation", prompt, choices, answerIdx, solution};
  }
};

const DRILL_META=[
  ["marketshare","Market Share","Seg 1 · Ch 1"],
  ["mam","Multi-Attribute Model","Seg 4 · Ch 5"],
  ["nps","Net Promoter Score","Seg 4 · Ch 5"],
  ["tlc","Value Analysis / TLC","Seg 5 · Ch 6"],
  ["vendor","Vendor Analysis","Seg 5 · Ch 6"],
  ["indexing","Indexing","Seg 6 · Ch 9"],
  ["benefitseg","Benefit Segmentation","Seg 6 · Ch 9"]
];
let drillType="mix", drillCur=null;
function renderDrills(main, type){
  drillType = type || "mix";
  const bar=el("div","scopebar");
  const mk=(id,label)=>{ const b=el("button","chip"+(drillType===id?" active":""),label); b.onclick=()=>renderDrills(main,id); return b; };
  bar.appendChild(mk("mix","🎲 Mixed"));
  DRILL_META.forEach(([id,label])=>bar.appendChild(mk(id,label)));
  main.appendChild(bar);

  const intro=el("p","sub","These regenerate with new numbers every time. Work it on paper first, then check. The real exam's computational items are multiple-choice — same as here.");
  main.appendChild(intro);

  const stage=el("div","drill-stage");
  main.appendChild(stage);
  nextDrill(stage);
}
function nextDrill(stage){
  const key = drillType==="mix" ? pick(DRILL_META.map(m=>m[0])) : drillType;
  drillCur = DRILLS[key]();
  drillCur._key=key;
  stage.innerHTML="";
  const meta=DRILL_META.find(m=>m[0]===key);
  stage.appendChild(el("div","drill-tag",`${drillCur.title} · ${meta[2]}`));
  stage.appendChild(el("div","drill-prompt",drillCur.prompt));

  const choicesWrap=el("div","choices");
  let answered=false;
  drillCur.choices.forEach((c,i)=>{
    const b=el("button","choice",c);
    b.onclick=()=>{
      if(answered)return; answered=true;
      bump("drills.seen");
      const correct=i===drillCur.answerIdx;
      if(correct){ bump("drills.correct"); b.classList.add("right"); }
      else { b.classList.add("wrong"); $$(".choice",choicesWrap)[drillCur.answerIdx].classList.add("right"); }
      $$(".choice",choicesWrap).forEach(bb=>bb.classList.add("locked"));
      const sol=el("div","solution"+(correct?" ok":" no"));
      sol.innerHTML=`<div class="sol-h">${correct?"Correct ✓":"Not quite — here's the work:"}</div>${drillCur.solution}`;
      stage.appendChild(sol);
      const nx=el("button","btn","New problem →"); nx.onclick=()=>nextDrill(stage);
      stage.appendChild(nx);
    };
    choicesWrap.appendChild(b);
  });
  stage.appendChild(choicesWrap);

  const skip=el("button","btn ghost small","Show solution / skip");
  skip.onclick=()=>{ if(answered)return; answered=true;
    $$(".choice",choicesWrap).forEach((bb,i)=>{bb.classList.add("locked"); if(i===drillCur.answerIdx)bb.classList.add("right");});
    const sol=el("div","solution"); sol.innerHTML=`<div class="sol-h">Solution</div>${drillCur.solution}`;
    stage.appendChild(sol);
    const nx=el("button","btn","New problem →"); nx.onclick=()=>nextDrill(stage); stage.appendChild(nx);
  };
  stage.appendChild(skip);
}

/* ============================================================
   CRAM SHEET
   ============================================================ */
function renderCram(main){
  main.appendChild(el("h1","page-h","⚡ Cram Sheet"));
  main.appendChild(el("p","sub","Everything compressed. Read top-to-bottom the morning of the exam."));

  const hit=el("div","cram-hitlist");
  hit.appendChild(el("h2",null,"🎯 Highest-yield by chapter (hit these first)"));
  const hg=el("div","hit-grid");
  CHAPTERS.forEach(ch=>{ const t=TIERS[ch.id]; if(!t)return;
    const d=el("div","hit-ch"); d.innerHTML=`<b>Ch ${ch.num} ${ch.title}</b><ul>${t.High.map(x=>`<li>${x}</li>`).join("")}</ul>`;
    hg.appendChild(d);
  });
  hit.appendChild(hg); main.appendChild(hit);

  const formulas=el("div","cram-formulas");
  formulas.innerHTML=`<h2>The 7 computational formulas</h2>
    <ul>
      <li><b>Market Share</b> = brand sales ÷ <i>total</i> category sales × 100 (include the brand!)</li>
      <li><b>MAM Value</b> = Σ (belief × importance) — highest wins</li>
      <li><b>NPS</b> = %Promoters(9–10) − %Detractors(0–6) — ignore passives(7–8)</li>
      <li><b>TLC</b> = purchase + (annual costs × years) — lowest wins</li>
      <li><b>Vendor score</b> = Σ (rating × weight%) — highest wins</li>
      <li><b>Index</b> = (% in segment ÷ % in population) × 100 — &gt;100 over-indexes</li>
      <li><b>Benefit Seg</b> = MAM with each segment's own weights → different segments prefer different brands</li>
    </ul>`;
  main.appendChild(formulas);

  CHAPTERS.forEach(ch=>{
    const c=el("div","cram-ch");
    c.appendChild(el("h2",null,`Ch ${ch.num} · ${ch.title}`));
    const ul=el("ul");
    ch.mnemonics.forEach(m=>ul.appendChild(el("li",null,m)));
    c.appendChild(ul);
    main.appendChild(c);
  });

  const lists=el("div","cram-lists");
  lists.innerHTML=`<h2>Must-know lists</h2>
  <div class="cram-grid">
    <div><b>4 P's</b><br>Product · Price · Place · Promotion</div>
    <div><b>4 Utilities</b><br>Time · Place · Possession · Form</div>
    <div><b>5 Macro sectors</b><br>Social · Economic · Technological · Regulatory · Natural</div>
    <div><b>Micro</b><br>Customers · Competitors · Stakeholders · Suppliers · Channels</div>
    <div><b>DMP (5)</b><br>Problem rec → Info search → Eval → Purchase → Post-purchase</div>
    <div><b>DMU roles</b><br>Gatherer · Influencer · Decider · Purchaser · User</div>
    <div><b>Buying center</b><br>Users · Influencers · Buyers · Deciders · Gatekeepers</div>
    <div><b>Buyclasses</b><br>New buy · Straight rebuy · Modified rebuy</div>
    <div><b>Cost types</b><br>Initial · Switching · Operating · Life-cycle</div>
    <div><b>Research types</b><br>Exploratory · Descriptive · Causal</div>
    <div><b>Survey error</b><br>Sampling · Interviewer · Questionnaire</div>
    <div><b>Memory measures</b><br>Free recall · Cued recall · Recognition</div>
    <div><b>Seg criteria</b><br>Measurability · Reachability · Profitability · Differential response</div>
    <div><b>Targeting</b><br>Mass · Concentration · Multisegment · Mass-customization</div>
    <div><b>Moral philosophies</b><br>Moral Idealism · Utilitarianism</div>
    <div><b>CSR</b><br>Profit · Stakeholder · Societal</div>
    <div><b>Social audit (5)</b><br>Recognition · Mission · Priorities · Resources · Evaluation</div>
    <div><b>Orientations</b><br>Production · Sales · Marketing · Market</div>
    <div><b>Satisfaction</b><br>P&lt;E sad · P=E ok · P&gt;E delight</div>
    <div><b>Reg. acts</b><br>Sherman'90 · FDA'06 · FTC'14 · Robinson-Patman'36 · Lanham'46 · CPSC'72</div>
  </div>`;
  main.appendChild(lists);

  const go2=el("button","btn","Drill the computations →"); go2.onclick=()=>go("drills");
  main.appendChild(go2);
}

/* ---------- boot ---------- */
function boot(){
  $$(".nav-btn").forEach(b=>b.onclick=()=>go(b.dataset.view));
  go("dashboard");
  setInterval(()=>{ const cd=$("#cd"); if(cd) cd.textContent=examCountdown(); }, 60000);
}
// app.js is injected after the passcode gate unlocks, so the document is
// already loaded by then — run immediately in that case.
if(document.readyState!=="loading") boot(); else document.addEventListener("DOMContentLoaded", boot);
