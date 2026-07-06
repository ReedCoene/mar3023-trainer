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
/* ---------- weak spots (auto-tracked misses) ---------- */
function isMissed(q){ return !!(progress.missed && progress.missed[qid(q)]); }
function markMissed(q){ progress.missed=progress.missed||{}; progress.missed[qid(q)]=1; saveProgress(); }
function clearMissed(q){ if(progress.missed && progress.missed[qid(q)]){ delete progress.missed[qid(q)]; saveProgress(); } }
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
const VIEWS = ["dashboard","learn","gotchas","cards","facts","quiz","drills","cram"];
function go(view, arg){
  if(quizIntv){ clearInterval(quizIntv); quizIntv=null; }
  $$(".nav-btn").forEach(b=>b.classList.toggle("active", b.dataset.view===view));
  const main = $("#main"); main.innerHTML="";
  ({dashboard:renderDashboard, learn:renderLearn, gotchas:renderGotchas, cards:renderCards, facts:renderFacts,
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
        <h1>MAR3023 · Exam 2 Trainer</h1>
        <p class="sub">Dr. Cooke · Principles of Marketing — Chapters 11, 10, 12, 18, 19, 20-21</p>
      </div>
      <div class="countdown" id="cd">${examCountdown()}</div>
    </div>
    <p class="split">Exam = <b>50% lecture · 50% textbook</b>. Mix conceptual study with the computational drills every day.</p>`;
  main.appendChild(hero);

  // study path cards
  const grid = el("div","card-grid");
  const tiles = [
    ["📖","Learn","Ranked High/Med/Low by what's actually tested — each concept paired with a real past-exam question.","learn"],
    ["⭐","Weird Facts","The specific distinctions & lecture examples Cooke loves to ask (BDI quadrants, the 4 I's, service recovery, push vs pull…).","facts"],
    ["🔁","Flashcards","Spaced-repetition cards. The fastest way to lock in terms & lists.","cards"],
    ["✅","Quiz · Timed · Patterns","335 verified questions: timed mock exam, pattern trainer, lecture / textbook, per-chapter.","quiz"],
    ["🧮","Computational Drills","Infinite randomized BDI/CDI, CLV, CPM/wCPM, Workload, Conversion/Quota, Hierarchy-of-Effects & MAM problems.","drills"],
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
    The 7 computational types on Exam 2 are: BDI/CDI, Customer Lifetime Value, Hierarchy of Effects, Multi-Attribute Model, CPM/wCPM, Workload Method, and Conversion/Quota.`;
  main.appendChild(note);

  const wcount=ALLQ.filter(isMissed).length;
  if(wcount){
    const wb=el("button","btn weakbtn","🩹 Review your "+wcount+" weak spot"+(wcount>1?"s":"")+" →");
    wb.onclick=()=>go("quiz",{mode:"weak"});
    main.appendChild(wb);
  }
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
  const STOP=new Set("the a an of to and or for in on with by is are as it its their our your you they we how this that these those into be can will may more most not but they're you're which what when does do using use other key each within over also both per via just very macro micro sector sectors marketing business four three five two basics detail favorite memorize know what's".split(" "));
  // generic marketing nouns are too common to prove a topic match — they must NOT drive pairing
  const GENERIC=new Set("product products benefit benefits service services customer customers company companies brand brands branded feature features marketing sales consumer consumers business businesses market markets goods good idea ideas offer offering offerings buy buyer buyers purchase purchases price prices pricing promotion promotional strategy strategies quality store stores retail people staff".split(" "));
  function distinctWords(str,minLen){ return [...new Set((stripHtml(str).toLowerCase().match(/[a-z][a-z\-]{2,}/g)||[]))].filter(w=>w.length>=minLen && !STOP.has(w) && !GENERIC.has(w)); }
  function pairQ(sec){
    const hwords=distinctWords(sec.h,4);                                // heading = the topic
    const allItems=(sec.items||[]).join(" ");
    const strong=distinctWords(allItems,6);                             // strong, specific concept terms
    const weak=distinctWords(allItems,4).filter(w=>w.length<6 && !strong.includes(w));
    let best=null,bestScore=-1;
    for(const q of qsForChapter(ch.id)){
      if(used.has(q)) continue;
      // match on the stem + the CORRECT answer only (distractor choices cause off-topic noise)
      const qt=" "+stripHtml(q.q+" "+(q.choices[q.a]||"")).toLowerCase().replace(/[^a-z\- ]/g," ").replace(/\s+/g," ")+" ";
      const has=w=>qt.includes(" "+w+" ")||qt.includes(" "+w+"s ")||qt.includes(" "+w.replace(/s$/,"")+" ");
      const hHit=hwords.filter(has).length, sHit=strong.filter(has).length, wHit=weak.filter(has).length;
      if(hHit===0 && sHit===0) continue;                               // REQUIRE a heading or strong concept word — no generic-word matches
      const score=hHit*3 + sHit*2 + wHit;
      if(score>bestScore){ bestScore=score; best=q; }
    }
    if(best){ used.add(best); return best; }
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
      if(correct){ b.classList.add("right"); clearMissed(q); }
      else { markMissed(q); b.classList.add("wrong"); $$(".choice",cwrap).forEach((bb,k)=>{ if(order[k].i===q.a) bb.classList.add("right"); }); }
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

    // featured: YOUR WEAK SPOTS (auto-tracked misses)
    const wc=ALLQ.filter(isMissed).length;
    if(wc){
      const wf=el("button","quiz-feature weak");
      wf.innerHTML=`<div class="feat-badge red">🩹 YOUR WEAK SPOTS</div>
        <h3>Redo the ${wc} question${wc>1?"s":""} you've missed</h3>
        <p>Auto-collected from every quiz & lesson. Answer one correctly and it drops off the list.</p>`;
      wf.onclick=()=>go("quiz",{mode:"weak"});
      main.appendChild(wf);
    }

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
      <p>Drill one question archetype at a time ("name the service gap", "which level of innovation?", "push or pull?"…) so you recognize them instantly.</p>`;
    fp.onclick=()=>go("quiz",{mode:"patterns"});
    main.appendChild(fp);

    // featured: the real practice exam
    const feat=el("button","quiz-feature");
    feat.innerHTML=`<div class="feat-badge">📚 TEXTBOOK-ONLY</div>
      <h3>Textbook test-bank questions (${ALLQ.filter(q=>q.src==="T").length})</h3>
      <p>The other half of the exam — every textbook-sourced question, with explanations.</p>`;
    feat.onclick=()=>go("quiz",{mode:"textbook"});
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
  else if(cfg.mode==="textbook") quizSet=shuffle(ALLQ.filter(q=>q.src==="T"));
  else if(cfg.mode==="pattern") quizSet=shuffle(REALQ.filter(q=>archetypeOf(q)===cfg.pattern));
  else if(cfg.mode==="flagged") quizSet=shuffle(ALLQ.filter(isFlagged));
  else if(cfg.mode==="weak") quizSet=shuffle(ALLQ.filter(isMissed));
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
      if(correct){ quizScore++; bump("quiz."+q.ch+".correct"); b.classList.add("right"); clearMissed(q); }
      else { quizMissed.push(q); markMissed(q); b.classList.add("wrong");
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
  bdicdi(){
    const territories=["New York","California","Florida","Texas","Illinois","Georgia","Ohio"];
    const terr=pick(territories);
    const natCust=rint(80,140)*1e6;                 // national customers
    const natCat=rint(200,400)*1e6;                 // national category $
    const natBrand=Math.round(natCat*rint(20,45)/100);
    const pop=rint(4,14)*1e6;                        // territory customers
    const catTerr=Math.round(pop*(rint(80,180)/100));   // territory category $
    const brandTerr=Math.round(pop*(rint(30,140)/100)); // territory brand $
    const bdi=100*(brandTerr/pop)/(natBrand/natCust);
    const cdi=100*(catTerr/pop)/(natCat/natCust);
    const askBDI=Math.random()<0.5;
    const target=askBDI?bdi:cdi;
    const fmt=v=>Math.round(v)+"";
    const {choices,answerIdx}=numChoices(target, ()=>[
      askBDI?cdi:bdi,                 // the other index
      target*(natCust/1e6)/(natCust/1e6+1), target*1.12, target*0.88
    ], fmt);
    const prompt=`<p>National: <b>${(natCust/1e6)}M</b> customers · category sales <b>${money(natCat)}</b> · brand sales <b>${money(natBrand)}</b>.</p>
      <p>Compute the <b>${askBDI?"BDI":"CDI"}</b> for ${terr} (round to nearest whole number).</p>
      <table class="dtable"><tr><th>${terr}</th><th class="r">Customers</th><th class="r">Category $</th><th class="r">Brand $</th></tr>
      <tr><td></td><td class="r">${(pop/1e6)}M</td><td class="r">${money(catTerr)}</td><td class="r">${money(brandTerr)}</td></tr></table>`;
    const solution=`<p>Index = (per-capita in territory ÷ per-capita nationally) × 100.</p>
      ${askBDI
        ? `<p>Terr brand/cap = ${money(brandTerr)} ÷ ${(pop/1e6)}M = $${(brandTerr/pop).toFixed(2)}; Nat brand/cap = ${money(natBrand)} ÷ ${(natCust/1e6)}M = $${(natBrand/natCust).toFixed(2)}</p>
           <p>BDI = $${(brandTerr/pop).toFixed(2)} ÷ $${(natBrand/natCust).toFixed(2)} × 100 = <b>${Math.round(bdi)}</b></p>`
        : `<p>Terr cat/cap = ${money(catTerr)} ÷ ${(pop/1e6)}M = $${(catTerr/pop).toFixed(2)}; Nat cat/cap = ${money(natCat)} ÷ ${(natCust/1e6)}M = $${(natCat/natCust).toFixed(2)}</p>
           <p>CDI = $${(catTerr/pop).toFixed(2)} ÷ $${(natCat/natCust).toFixed(2)} × 100 = <b>${Math.round(cdi)}</b></p>`}
      <p class="tip">Low BDI + high CDI = strong category, weak brand → research why you under-perform.</p>`;
    return {title:"BDI / CDI", prompt, choices, answerIdx, solution};
  },

  clv(){
    const tiers=shuffle(["Silver","Gold","Platinum","Diamond"]).slice(0,1);
    const name=pick(["Heritage","Rubicon","Summit","Apex","Vista"]);
    const visits=rint(30,72)/10;          // visits per month
    const rev=rint(20,60);                 // revenue per visit
    const margin=pick([15,20,25]);         // profit margin %
    const life=pick([3,4,5,6,7,8]);        // years
    const profitPer=rev*margin/100;
    const clv=profitPer*visits*12*life;
    const fmt=v=>money(Math.round(v));
    const {choices,answerIdx}=numChoices(clv, ()=>[
      rev*visits*12*life,          // used revenue not profit
      profitPer*visits*life,       // forgot ×12
      profitPer*visits*12,         // forgot lifetime
      clv*1.1
    ], fmt);
    const prompt=`<p>Compute the <b>Customer Lifetime Value</b> of the average ${name} customer.</p>
      <table class="dtable"><tr><th></th><th class="r">${name}</th></tr>
      <tr><td>Visits / month</td><td class="r">${visits.toFixed(1)}</td></tr>
      <tr><td>Revenue / visit</td><td class="r">${money(rev)}</td></tr>
      <tr><td>Profit margin</td><td class="r">${margin}%</td></tr>
      <tr><td>Avg. lifetime</td><td class="r">${life} yrs</td></tr></table>`;
    const solution=`<p>CLV = profit/visit × visits/month × 12 × lifetime. Use <b>profit</b>, not revenue.</p>
      <p>Profit/visit = ${money(rev)} × ${margin}% = <b>${money(profitPer)}</b></p>
      <p>CLV = ${money(profitPer)} × ${visits.toFixed(1)} × 12 × ${life} = <b>${money(Math.round(clv))}</b></p>`;
    return {title:"Customer Lifetime Value", prompt, choices, answerIdx, solution};
  },

  cpm(){
    const sites=shuffle(["FitJobs.com","SportsNet.com","NewsHub.com","StreamPlus.com","DailyByte.com"]).slice(0,2);
    const cost=[rint(40,90)/100*1000, rint(40,90)/100*1000].map(x=>Math.round(x)); // ad cost $
    const reach=[rint(80,400)*1000, rint(80,400)*1000];
    const aud=[rint(10,50), rint(10,50)]; // % in target
    const cpm=sites.map((_,i)=>cost[i]/(reach[i]/1000));
    const wcpm=sites.map((_,i)=>cost[i]/((reach[i]*aud[i]/100)/1000));
    const best=wcpm[0]<wcpm[1]?0:1; // lower wCPM = more efficient
    const choices=sites.slice();
    const answerIdx=best;
    const prompt=`<p>You want the most efficient buy for your <b>target demographic</b>. Which site is more efficient (lower wCPM)?</p>
      <table class="dtable"><tr><th>Site</th><th class="r">Ad cost</th><th class="r">Reach</th><th class="r">% in target</th></tr>
      ${sites.map((s,i)=>`<tr><td>${s}</td><td class="r">${money(cost[i])}</td><td class="r">${reach[i].toLocaleString()}</td><td class="r">${aud[i]}%</td></tr>`).join("")}</table>`;
    const solution=`<p>wCPM = ad cost ÷ ((impressions × %target) ÷ 1000). Lower = more efficient.</p>
      ${sites.map((s,i)=>`<p>${s}: CPM = ${money(cost[i])} ÷ (${reach[i].toLocaleString()}/1000) = $${cpm[i].toFixed(2)}; wCPM = $${cpm[i].toFixed(2)} ÷ ${(aud[i]/100).toFixed(2)} = <b>$${wcpm[i].toFixed(2)}</b></p>`).join("")}
      <p>Lower wCPM → <b>${sites[best]}</b>.</p>`;
    return {title:"CPM / wCPM Efficiency", prompt, choices, answerIdx, solution};
  },

  workload(){
    const firm=pick(["Nimbus","Vertex","Orion","Delta","Cobalt"]);
    const custs=rint(5,40)*1000;
    const freq=rint(8,26);
    const mins=pick([30,45,60,90,120]);
    const ast=pick([1000,1200,1400]);
    const hours=mins/60;
    const ns=(custs*freq*hours)/ast;
    const fmt=v=>Math.round(v)+"";
    const {choices,answerIdx}=numChoices(ns, ()=>[
      (custs*freq*mins)/ast,      // forgot minutes→hours
      (custs*freq*hours),         // forgot ÷ AST
      ns*1.2, ns*0.8
    ], fmt);
    const prompt=`<p>${firm} uses the <b>workload method</b> to size its salesforce. How many salespeople are needed?</p>
      <table class="dtable"><tr><th>Input</th><th class="r">Value</th></tr>
      <tr><td># Customers</td><td class="r">${custs.toLocaleString()}</td></tr>
      <tr><td>Call frequency / yr</td><td class="r">${freq}</td></tr>
      <tr><td>Avg call length</td><td class="r">${mins} min</td></tr>
      <tr><td>Selling time / rep / yr</td><td class="r">${ast.toLocaleString()} hrs</td></tr></table>`;
    const solution=`<p>NS = (NC × CF × CL) ÷ AST. <b>Convert minutes to hours first</b>: ${mins} min = ${hours} hr.</p>
      <p>NS = (${custs.toLocaleString()} × ${freq} × ${hours}) ÷ ${ast.toLocaleString()} = <b>${Math.round(ns)}</b> salespeople.</p>`;
    return {title:"Workload Method", prompt, choices, answerIdx, solution};
  },

  quota(){
    const name=pick(["Chip","Dana","Priya","Marco","Skye"]);
    const calls=rint(40,90);
    const sales=rint(8,25);
    const goal=rint(50,90)*1000;
    const actual=Math.round(goal*(rint(80,125)/100));
    const askConv=Math.random()<0.5;
    if(askConv){
      const conv=100*sales/calls;
      const fmt=v=>v.toFixed(1)+"%";
      const {choices,answerIdx}=numChoices(conv, ()=>[conv*1.25, conv*0.75, 100*sales/(calls+sales), conv+5], fmt);
      const prompt=`<p>${name} made <b>${calls} calls</b> and closed <b>${sales} sales</b>. What is the <b>conversion rate</b>?</p>`;
      const solution=`<p>Conversion rate = # sales ÷ # calls = ${sales} ÷ ${calls} = <b>${conv.toFixed(1)}%</b>.</p>`;
      return {title:"Conversion Rate", prompt, choices, answerIdx, solution};
    } else {
      const ratio=actual/goal;
      const fmt=v=>v.toFixed(2);
      const {choices,answerIdx}=numChoices(ratio, ()=>[goal/actual, ratio*1.1, ratio*0.9, ratio+0.1], fmt);
      const prompt=`<p>${name} had a sales goal of <b>${money(goal)}</b> and actually sold <b>${money(actual)}</b>. What is the <b>quota ratio</b>?</p>`;
      const solution=`<p>Quota ratio = $ actual ÷ $ goal = ${money(actual)} ÷ ${money(goal)} = <b>${ratio.toFixed(2)}</b> (${ratio>=1?"met/beat quota":"below quota"}).</p>`;
      return {title:"Quota Ratio", prompt, choices, answerIdx, solution};
    }
  },

  hoe(){
    const stages=["Awareness","Knowledge","Liking","Intention","Action"];
    // decreasing percentages from 100 (potential market)
    let vals=[100]; for(let i=0;i<5;i++){ vals.push(vals[i]-rint(4,22)); }
    // vals: [potential=100, aware, know, like, intend, act]
    const ratios=[]; for(let i=1;i<vals.length;i++) ratios.push(vals[i-1]/vals[i]);
    const bottleneck=ratios.indexOf(Math.max(...ratios)); // index into stages
    const choices=stages.slice();
    const answerIdx=bottleneck;
    const labels=["Potential",...stages];
    const prompt=`<p>Using the <b>hierarchy of effects</b>, which stage is the biggest <b>bottleneck</b> (the objective to target)?</p>
      <table class="dtable"><tr>${labels.map(l=>`<th class="r">${l}</th>`).join("")}</tr>
      <tr>${vals.map(v=>`<td class="r">${v}%</td>`).join("")}</tr></table>`;
    const solution=`<p>Divide each stage by the prior; the <b>largest ratio</b> = biggest drop-off.</p>
      <p>${stages.map((s,i)=>`${s}: ${vals[i]}/${vals[i+1]} = ${ratios[i].toFixed(2)}`).join(" · ")}</p>
      <p>Largest ratio → target <b>${stages[bottleneck]}</b>.</p>`;
    return {title:"Hierarchy of Effects", prompt, choices, answerIdx, solution};
  },

  mam(){
    const mode=pick(["preference","raiseRating","raiseImportance","mixedStrategy"]);
    const you=pick(["Lululemon","Nike","Gymshark","Alo","Vuori"]);
    const rivals=shuffle(["Nike","Adidas","Under Armour","Puma"].filter(b=>b!==you)).slice(0,mode==="preference"?2:2);
    const brands=mode==="preference"?shuffle([you,...rivals]):[you,...rivals];
    const attrs=shuffle(["Cost","Comfort","Design","Durability","Style"]).slice(0,4);
    const imp=attrs.map(()=>rint(3,9));
    const bel=brands.map(()=>attrs.map(()=>rint(3,9)));
    const totalOf=i=>attrs.reduce((s,_,j)=>s+bel[i][j]*imp[j],0);
    const totals=brands.map((_,i)=>totalOf(i));
    let header=`<tr><th>Attribute (imp)</th>${brands.map(b=>`<th class="r">${b}</th>`).join("")}</tr>`;
    let body=attrs.map((at,j)=>`<tr><td>${at} (${imp[j]})</td>${brands.map((_,i)=>`<td class="r">${bel[i][j]}</td>`).join("")}</tr>`).join("");
    const table=`<table class="dtable">${header}${body}</table>`;

    if(mode==="preference"){
      // Step 1-2: just compute totals, highest wins
      const best=totals.indexOf(Math.max(...totals));
      const choices=brands.slice();
      const prompt=`<p>Using the multi-attribute model (rating × importance, summed per brand), which brand does the consumer prefer?</p>${table}`;
      const work=brands.map((b,i)=>`<p>${b} = ${attrs.map((_,j)=>`${bel[i][j]}×${imp[j]}`).join(" + ")} = <b>${totals[i]}</b></p>`).join("");
      const solution=`<p>Score each brand = Σ(rating × importance):</p>${work}<p>Highest score wins → <b>${brands[best]}</b>.</p>`;
      return {title:"Multi-Attribute Model — Preference", prompt, choices, answerIdx:best, solution};
    }
    if(mode==="raiseRating"){
      // Step 3a: raise ONE of your ratings to 10; only helps you
      const gains=attrs.map((_,j)=>(10-bel[0][j])*imp[j]);
      const bestAttr=gains.indexOf(Math.max(...gains));
      const choices=attrs.map(a=>"Increase "+you+"'s "+a+" rating");
      const prompt=`<p>Using the multi-attribute model, which single strategy gives <b>${you}</b> the biggest gain (raise one RATING to 10)?</p>${table}`;
      const work=attrs.map((a,j)=>`<p>${a}: (10 − ${bel[0][j]}) × ${imp[j]} = <b>${gains[j]}</b></p>`).join("");
      const solution=`<p>Gain from raising a rating to 10 = (10 − current) × importance — this ONLY affects ${you}, not rivals:</p>${work}
        <p>Biggest gain → <b>Increase ${you}'s ${attrs[bestAttr]} rating</b> (+${gains[bestAttr]}).</p>
        <p class="tip">Raising a RATING helps only your brand; raising an IMPORTANCE weight helps every brand.</p>`;
      return {title:"Multi-Attribute Model — Raise a Rating", prompt, choices, answerIdx:bestAttr, solution};
    }
    if(mode==="raiseImportance"){
      // Step 3b: raise ONE importance weight to 10; helps whoever rates highest on it — check the RELATIVE gain to you
      const relGain=attrs.map((_,j)=>{
        const deltaImp=10-imp[j];
        const yourGain=bel[0][j]*deltaImp;
        const rivalGains=brands.slice(1).map((_,i)=>bel[i+1][j]*deltaImp);
        return yourGain - Math.max(...rivalGains); // relative advantage over the toughest rival
      });
      const bestAttr=relGain.indexOf(Math.max(...relGain));
      const choices=attrs.map(a=>"Increase the importance of "+a);
      const prompt=`<p>Using the multi-attribute model, which strategy gives <b>${you}</b> the biggest RELATIVE gain over its competitors (raise one IMPORTANCE weight to 10)? (Assume the weight is maximally effective.)</p>${table}`;
      const work=attrs.map((a,j)=>{
        const deltaImp=10-imp[j];
        const yourGain=bel[0][j]*deltaImp;
        const rivalStr=brands.slice(1).map((b,i)=>`${b}: ${bel[i+1][j]}×${deltaImp}=${bel[i+1][j]*deltaImp}`).join(", ");
        return `<p>${a}: ${you} gains ${bel[0][j]}×${deltaImp}=<b>${yourGain}</b>; rivals gain ${rivalStr}</p>`;
      }).join("");
      const solution=`<p>Raising an IMPORTANCE weight helps EVERY brand that has that attribute — so compare who gains MORE:</p>${work}
        <p>Biggest gain relative to the toughest rival → <b>Increase the importance of ${attrs[bestAttr]}</b>.</p>
        <p class="tip">Trap: the biggest gain for you isn't automatically the best choice if a rival gains even more on that same attribute.</p>`;
      return {title:"Multi-Attribute Model — Raise Importance", prompt, choices, answerIdx:bestAttr, solution};
    }
    // mixedStrategy: the REAL exam pattern (Align/Samsung/Shein) — choices mix "raise a RATING" and
    // "raise an IMPORTANCE" options together; must compare relative gain across BOTH families to find the true best.
    const ratingOpts=attrs.map((a,j)=>{
      const gain=(10-bel[0][j])*imp[j]; // only affects you, so relative gain = raw gain
      return {label:"Increase "+you+"'s "+a+" rating", gain, kind:"rating", attr:a};
    });
    const impOpts=attrs.map((a,j)=>{
      const deltaImp=10-imp[j];
      const yourGain=bel[0][j]*deltaImp;
      const rivalGains=brands.slice(1).map((_,i)=>bel[i+1][j]*deltaImp);
      const relGain=yourGain-Math.max(...rivalGains);
      return {label:"Increase the importance of "+a, gain:relGain, kind:"importance", attr:a};
    });
    const pool=shuffle([...ratingOpts,...impOpts]).slice(0,4);
    if(!pool.some(o=>o.kind==="rating")) pool[0]=pick(ratingOpts);
    if(!pool.some(o=>o.kind==="importance")) pool[1]=pick(impOpts);
    const best=pool.reduce((a,b)=>b.gain>a.gain?b:a);
    const choices=pool.map(o=>o.label);
    const answerIdx=pool.indexOf(best);
    const prompt=`<p>Using the multi-attribute model, which strategy gives <b>${you}</b> the biggest advantage? (Assume any change is maximally effective — raised to 10.)</p>${table}`;
    const work=pool.map(o=>{
      if(o.kind==="rating"){
        const j=attrs.indexOf(o.attr);
        return `<p><i>${o.label}</i> (RATING — only affects ${you}): (10 − ${bel[0][j]}) × ${imp[j]} = <b>${o.gain}</b></p>`;
      }
      const j=attrs.indexOf(o.attr); const deltaImp=10-imp[j];
      const rivalStr=brands.slice(1).map((b,i)=>`${b} +${bel[i+1][j]*deltaImp}`).join(", ");
      return `<p><i>${o.label}</i> (IMPORTANCE — affects everyone): ${you} +${bel[0][j]*deltaImp}, but ${rivalStr} → relative gain <b>${o.gain}</b></p>`;
    }).join("");
    const solution=`<p>Two families of moves exist: raising a RATING helps only your own brand (gain = (10−rating)×importance); raising an IMPORTANCE weight helps every brand with that attribute, so you must net out the toughest rival's gain too. Compare all options on equal footing (their true relative gain):</p>${work}
      <p>Biggest true gain → <b>${best.label}</b> (+${best.gain}).</p>
      <p class="tip">Don't just grab the biggest raw number — an importance strategy's raw gain can be inflated by a rival gaining even more on that same attribute.</p>`;
    return {title:"Multi-Attribute Model — Rating vs. Importance", prompt, choices, answerIdx, solution};
  }
};

const DRILL_META=[
  ["bdicdi","BDI / CDI","Seg 8 · Ch 11"],
  ["clv","Customer Lifetime Value","Seg 10 · Ch 12"],
  ["hoe","Hierarchy of Effects","Seg 11 · Ch 18"],
  ["mam","Multi-Attribute Model","Seg 11 · Ch 18"],
  ["cpm","CPM / wCPM","Seg 12 · Ch 19"],
  ["workload","Workload Method","Seg 13 · Ch 20"],
  ["quota","Conversion / Quota","Seg 13 · Ch 20"]
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
/* ============================================================
   GOTCHAS — high-frequency patterns + niche concepts in one place
   ============================================================ */
function renderGotchas(main){
  main.appendChild(el("h1","page-h","🎯 Gotchas & High-Yield Patterns"));
  main.appendChild(el("p","sub","The tricky, frequently-tested, and 'random' stuff your classmates warned about — consolidated for the final push."));
  function sec(title, html){ const s=el("div","lesson-sec"); s.innerHTML="<h2>"+title+"</h2>"+html; main.appendChild(s); }

  sec("🏷️ Branding Strategies <span class='gtag'>VERY COMMON</span>",
    `<table class="dtable"><tr><th>Strategy</th><th>How many names / whose?</th><th>Example</th></tr>
     <tr><td><b>Family / Multiproduct</b></td><td>ONE name, on ALL your products</td><td>Nike on every shoe</td></tr>
     <tr><td><b>Multibranding</b></td><td>MANY different names, all yours</td><td>Nestlé: KitKat, Nespresso</td></tr>
     <tr><td><b>Private label</b></td><td>Made for a RETAILER, sold only there</td><td>Walmart Great Value, Kirkland</td></tr>
     <tr><td><b>Co-branding</b></td><td>TWO brands together on ONE product</td><td>Doritos Locos Tacos</td></tr>
     <tr><td><b>Subbranding</b></td><td>Your name + a NEW spinoff name for one line</td><td>Toyota → Lexus; Gatorade → Bolt24</td></tr>
     <tr><td><b>Line extension</b></td><td>Same brand, SAME category, new variant</td><td>Gatorade → new flavor</td></tr>
     <tr><td><b>Category extension</b></td><td>Same brand, DIFFERENT category</td><td>Canon cameras → Canon printers</td></tr></table>
     <p class="tip">Fast test: "how many names, and whose?" One name/everything=family; many names/all yours=multibranding; retailer's name=private label; two names together=co-branding; your name+a spinoff=subbranding.</p>`);

  sec("🧑‍💼 Sales & Support Personnel Types <span class='gtag'>VERY COMMON</span>",
    `<table class="dtable"><tr><th>Type</th><th>Actually sells?</th><th>Job</th></tr>
     <tr><td><b>Outside order taker</b></td><td>Barely</td><td>Visits customers, restocks shelves, arranges displays (Frito-Lay rep)</td></tr>
     <tr><td><b>Inside order taker</b></td><td>Barely</td><td>Desk/counter, answers Qs; often <b>inbound</b> telemarketing (customer calls in)</td></tr>
     <tr><td><b>Order getter</b></td><td>YES — creative selling</td><td>Persuades, closes, follows up (car salesperson, IBM rep)</td></tr>
     <tr><td><b>Missionary salesperson</b></td><td>NO — never takes orders</td><td>Promotes/educates only (pharma rep → doctors)</td></tr>
     <tr><td><b>Sales engineer</b></td><td>Rarely closes</td><td>Technical expert solving problems (chemicals, equipment)</td></tr>
     <tr><td><b>Outbound telemarketer</b></td><td>YES</td><td>The COMPANY calls the customer</td></tr>
     <tr><td><b>Team selling</b></td><td>YES</td><td>A whole cross-functional team sells one major account</td></tr>
     <tr><td><b>Vector sales rep</b> <i>(lecture-only term)</i></td><td>Not directly</td><td>Trains a RETAILER'S staff to sell the manufacturer's product</td></tr></table>
     <p class="tip">Fast test: "Does this person actually complete a sale, or just support/prep the ground for one?"</p>`);

  sec("📋 Account Management Policy Grid",
    `<p>Firms group their customer accounts into a 2×2 grid based on: <b>(1) the account's level of opportunity</b> (high/low potential) and <b>(2) the firm's competitive sales position</b> for that account (strong/weak). Where an account lands decides how much sales effort it gets.</p>
     <table class="dtable"><tr><th></th><th>Strong competitive position</th><th>Weak competitive position</th></tr>
     <tr><td><b>High opportunity</b></td><td>✅ <b>High</b> level of sales calls — invest to retain &amp; build the account.</td><td>More calls IF there's a real chance of building a strong position; otherwise deprioritize.</td></tr>
     <tr><td><b>Low opportunity</b></td><td>Maintain with lower call frequency.</td><td>Shift to low-cost/no-personal-touch: <b>telemarketing, email, or direct mail</b> instead of in-person calls.</td></tr></table>
     <p class="tip">The exam's tested example: <b>high opportunity + strong competitive position → high level of sales calls</b> (invest/retain/build). Low-opportunity, weak-position accounts get pushed to telemarketing/direct mail, not face-to-face visits.</p>`);

  sec("📺 The 4 Types of TV Advertising",
    `<ul><li><b>Network</b> — bought directly for national programming (a slot during a first-run episode).</li>
     <li><b>Spot</b> — leftover national slots resold, at a discount, to LOCAL advertisers by the local station. <b>Trap:</b> the SHOW can be huge/national (Survivor) — what matters is that the ADVERTISER is small/local (a Gainesville scooter dealer).</li>
     <li><b>Cable</b> — cable-only channels (ESPN, HGTV, Golf Channel), more niche-targeted.</li>
     <li><b>Syndicated</b> — local stations LEASE the rights to air reruns of a show that already finished its network run (an old "Friends" rerun on a local Fox affiliate).</li></ul>`);

  sec("🧭 Two 'Which Type of Demand/Selling Mindset' Traps",
    `<ul>
     <li><b>Primary → Selective demand (PLC shift):</b> Introduction = build <b>PRIMARY</b> demand (the whole category — "buy electric cars"). Growth (competitors flood in) = build <b>SELECTIVE</b> demand (your brand specifically — "buy OUR electric car"). <i>Secondary, generic, derived</i> are NOT the right terms here.</li>
     <li><b>Customer orientation vs. Sales orientation:</b> Customer orientation = "align customers with products that solve their problems" (mutual, long-term). Sales orientation = "sell them all I can, even more than a wise customer should buy" (one's own short-term interest). The "even if it's more than they should buy" wording ALWAYS = <b>sales</b> orientation, not customer.</li></ul>`);

  sec("💲 Pricing & Presentation Formats at a Glance",
    `<ul><li><b>Skimming</b> (HIGH intro price, recover R&D costs, early adopters aren't price-sensitive) vs <b>Penetration</b> (LOW intro price, build volume fast, discourage rivals) — the 2 most common Introduction-stage pricing strategies.</li>
     <li><b>3 presentation formats:</b> Stimulus-Response (try appeal after appeal — "fries with that?" = suggestive selling) → Formula Selling (canned/scripted; sub-types: Ingratiation, Foot-in-the-door, Door-in-the-face, Outlined) → Need-Satisfaction (LISTEN first, then tailor — splits into <b>Adaptive selling</b> [adjust on the fly] and <b>Consultative selling</b> [expert problem-diagnosis, common in B2B]).</li>
     <li><b>Trap:</b> "two selling styles of need-satisfaction" = ALWAYS adaptive + consultative — never canned/suggestive/outlined.</li></ul>`);

  sec("🔍 Search vs. Experience vs. Credence Qualities",
    `<ul><li><b>Search</b> — judged BEFORE buying (color, size, style) — clothing, jewelry.</li>
     <li><b>Experience</b> — judged DURING/AFTER — restaurants, child care, a haircut.</li>
     <li><b>Credence</b> — hard to judge even AFTER, by non-specialists — medical diagnoses, legal/financial advice. More credence = more perceived risk.</li></ul>`);

  sec("📊 BDI × CDI — the action grid",
    `<table class="dtable"><tr><th></th><th>CDI HIGH (category thrives)</th><th>CDI LOW (category weak)</th></tr>
     <tr><td><b>BDI HIGH</b> (brand thrives)</td><td>✅ Invest &amp; build</td><td>🐄 Maintain / harvest</td></tr>
     <tr><td><b>BDI LOW</b> (brand lags)</td><td>🔎 Research WHY you lag (Peet's, Target)</td><td>❌ Reduce / pull out</td></tr></table>`);

  sec("🛟 Service Recovery (Disney) & the Gap Model",
    `<table class="dtable"><tr><th></th><th>Low responsibility</th><th>High responsibility (firm's fault)</th></tr>
     <tr><td><b>Low severity</b></td><td>Empathy</td><td>Fix it!</td></tr>
     <tr><td><b>High severity</b></td><td>Hero</td><td>Red Carpet</td></tr></table>
     <ul><li><b>Knowledge gap</b> = mgmt misreads what customers want. <b>Standards gap</b> = specs don't match. <b>Delivery gap</b> = standards ARE set/communicated but staff fail to perform them (the trap: don't confuse this with Knowledge). <b>Communications gap</b> = promises ≠ delivery.</li></ul>`);

  sec("⚡ Quick-Fire Traps",
    `<ul>
     <li><b>Scalability is NOT one of the 5 diffusion factors</b> (real 5: Relative Advantage, Communicability, Complexity, Compatibility, Risk) — it's a managerial concern, not a consumer-adoption factor.</li>
     <li><b>Defective products is NOT a packaging/environmental challenge</b> (real ones: solid-waste growth, landfill shortage, material composition/disposal, recycling).</li>
     <li><b>FTC rule:</b> a product may be labeled "new" for only <b>6 months</b>.</li>
     <li><b>4 institutional-ad types:</b> Advocacy (states a position) · Pioneering institutional (announces what a company is/does) · Competitive institutional (one product CLASS vs another — "got milk?") · Reminder institutional (keeps the org's name up).</li>
     <li><b>Subliminal stimuli — 3 types:</b> Ambiguous (multiple interpretations) · Embedded (hidden but meant to be processed, even the NBC peacock) · Truly subliminal (below conscious threshold, flashed too fast).</li>
     <li><b>MAM message strategy trap:</b> raising a RATING helps only your brand; raising an IMPORTANCE weight helps EVERY brand with that attribute — always check your gain <i>relative to the toughest rival</i>, not the raw number.</li>
     <li><b>Digital metrics:</b> Unique visitors = different individuals, each counted once. Engagement rate = actions ÷ impressions. CPA (cost-per-action) ties ad cost directly to a result (click/signup/sale) — the tightest cost-to-outcome measure.</li></ul>`);

  sec("💸 Push vs. Pull — every promotion type, defined",
    `<p><b>Pull</b> = aimed at CONSUMERS, to make them demand the product (pulling it through the channel). <b>Push</b> = aimed at the TRADE/retailers, to get them to stock &amp; promote it (pushing it down the channel).</p>
     <table class="dtable"><tr><th>PULL (to consumers)</th><th>What it actually is</th></tr>
     <tr><td><b>Coupon</b></td><td>A discounted PRICE at the register — encourages trial.</td></tr>
     <tr><td><b>Deal</b></td><td>A short-term price cut (e.g. "buy one get one") — builds trial fast or retaliates against a competitor's move.</td></tr>
     <tr><td><b>Premium</b></td><td>Free or discounted MERCHANDISE given <i>with</i> a purchase (a toy in a Happy Meal). If the price charged just covers the item's cost, it's "self-liquidating."</td></tr>
     <tr><td><b>Rebate</b></td><td>CASH BACK after the sale, based on proof of purchase (mail-in/submit a receipt) — unlike a coupon/deal, you pay full price up front and get money back later.</td></tr>
     <tr><td><b>Sample</b></td><td>A free trial-size give-away so you can try the product with zero risk.</td></tr>
     <tr><td><b>Contest</b></td><td>Win by SKILL/creativity (photo, essay, recipe contest).</td></tr>
     <tr><td><b>Sweepstakes</b></td><td>Win by pure CHANCE — just enter, no skill needed.</td></tr>
     <tr><td><b>POP display</b></td><td>An in-store display that grabs attention and drives impulse buys.</td></tr></table>
     <table class="dtable"><tr><th>PUSH (to the trade)</th><th>What it actually is</th></tr>
     <tr><td><b>Trade/dealer allowance</b></td><td>A discount or payment TO the retailer for stocking, displaying, or promoting the product.</td></tr>
     <tr><td><b>Dealer contest</b></td><td>A contest FOR retailers/their salespeople (not consumers) — incentivizes them to push more of your product.</td></tr>
     <tr><td><b>Cooperative (co-op) advertising</b></td><td>The manufacturer and retailer SPLIT the cost of local ads for the product.</td></tr>
     <tr><td><b>Training of distributors</b></td><td>Manufacturer trains the retailer's own staff to sell the product (this is the <b>vector sales rep</b>'s job).</td></tr></table>`);

  const q=el("button","btn","Drill the Facts deck →"); q.onclick=()=>go("facts"); main.appendChild(q);
}

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
      <li><b>BDI</b> = (brand $ per capita in territory ÷ brand $ per capita nationally) × 100</li>
      <li><b>CDI</b> = (category $ per capita in territory ÷ category $ per capita nationally) × 100 · <i>Low BDI + High CDI → research why you lag</i></li>
      <li><b>CLV</b> = visits × <i>profit</i>/visit × avg lifetime (years) — use profit, not revenue</li>
      <li><b>Hierarchy of Effects</b> = divide each stage by the prior; the <i>largest ratio</i> = the stage to target</li>
      <li><b>MAM message</b> = raising your RATING helps only you: gain = (10 − rating) × importance; raising IMPORTANCE helps every brand</li>
      <li><b>CPM</b> = cost ÷ (impressions ÷ 1000); <b>wCPM</b> = CPM ÷ (% in target) — <i>lower = more efficient</i></li>
      <li><b>Workload</b> NS = (NC × CF × CL) ÷ AST — convert minutes→hours! · Conversion = sales÷calls · Quota = $actual÷$goal</li>
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
    <div><b>3 product levels</b><br>Core · Expected · Augmented</div>
    <div><b>Item / Line / Mix</b><br>Item(SKU) · Line(related) · Mix(all lines)</div>
    <div><b>3 PLC levels</b><br>Product Class · Product Form · Brand</div>
    <div><b>PLC stages</b><br>Introduction · Growth · Maturity · Decline</div>
    <div><b>Adopters</b><br>Innovators · Early Adopters · Early/Late Majority · Laggards</div>
    <div><b>3 innovation levels</b><br>Continuous · Dynamically Continuous · Discontinuous</div>
    <div><b>NPD process (7)</b><br>Strategy · Idea · Screen · Business Analysis · Prototype · Market Test · Commercialize</div>
    <div><b>Adoption (5)</b><br>Awareness · Interest · Evaluation · Trial · Adoption</div>
    <div><b>Diffusion (5)</b><br>Rel. Advantage · Communicability · Complexity · Compatibility · Risk</div>
    <div><b>4 I's</b><br>Intangibility · Inconsistency · Inseparability · Inventory</div>
    <div><b>RATER</b><br>Reliability · Assurance · Tangibles · Empathy · Responsiveness</div>
    <div><b>4 Gaps</b><br>Knowledge · Standards · Delivery · Communications</div>
    <div><b>Recovery matrix</b><br>Empathy · Fix it · Hero · Red Carpet</div>
    <div><b>Market offering</b><br>Commodity · Good · Service · Experience</div>
    <div><b>Promo mix (5)</b><br>Advertising · Personal Selling · Sales Promotion · PR · Direct Marketing</div>
    <div><b>Source 2×2</b><br>Personal/Impersonal × Marketer-controlled/Independent</div>
    <div><b>HoE stages</b><br>Awareness · Knowledge · Liking · Intention · Action</div>
    <div><b>Ad goals</b><br>Inform · Persuade · Sell · Reinforce · Remind</div>
    <div><b>Subliminal</b><br>Ambiguous · Embedded · Truly subliminal</div>
    <div><b>Timing</b><br>Continuous · Pulsing · Flighting</div>
    <div><b>Push vs Pull</b><br>Push → the trade · Pull → consumers</div>
    <div><b>Selling process (6)</b><br>Prospecting · Pre-Approach · Approach · Presentation · Close · Follow-Up</div>
    <div><b>Canned formats</b><br>Ingratiation · Foot-in-door · Door-in-face · Outlined</div>
    <div><b>Salesforce org</b><br>Region · Product Line · Type of Account</div>
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
