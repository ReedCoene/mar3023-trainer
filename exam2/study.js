/* ============================================================
   Exam 2 test-focused study data.
   - TIERS: per-chapter topic likelihood (High/Med/Low). "High" is
     anchored on the Computational Review deck (which GUARANTEES the
     7 computation types) + concept frequency in the mined bank.
   - FACTS: high-yield specific facts Dr. Cooke likes to ask.
   - ARCHETYPES: recurring question patterns for the pattern trainer.
   ============================================================ */

const TIERS = {
  ch11:{ // Product Strategy (Seg 8)
    High:["BDI / CDI (COMPUTATIONAL — guaranteed) + what the quadrant means","3 levels of product: Core / Expected / Augmented (scenario ID)","Product item vs line vs mix","The 3 PLC 'levels': product class vs form vs brand","PLC stage + the right brand goal (growth→differentiate, etc.)"],
    Med:["Adoption groups by stage (Innovator→Laggard)","Extending the PLC (penetration/development/modification/repositioning)","Brand equity components; line vs category extension","Fad vs fashion vs high-/low-learning products","Product repositioning reasons"],
    Low:["Packaging functions","Family vs multiple branding; national vs private label","Product manager = brand manager"]
  },
  ch10:{ // New Product Strategy (Seg 9)
    High:["Levels of innovation: Continuous / Dynamically Continuous / Discontinuous","New-product development STAGE (esp. Business Analysis, Market Testing, Commercialization)","Consumer adoption process: Awareness→Interest→Evaluation→Trial→Adoption","5 diffusion factors (esp. matching a strategy to Communicability / Risk / Relative Advantage)"],
    Med:["New-product strategy stage (setting goals first)","Crowdsourcing vs crowdfunding","Cross-functional team","Failure examples (Apple stumbles)"],
    Low:["Screening & evaluation details","Kickstarter specifics"]
  },
  ch12:{ // Services Marketing (Seg 10)
    High:["CLV (COMPUTATIONAL — guaranteed)","The 4 I's + how to RESOLVE each (inconsistency→standardize, inseparability→customer participation)","Disney service-recovery matrix (Empathy / Fix it / Hero / Red Carpet)","Extended gap model — name the gap (Knowledge vs Delivery is the trap)","Levels of service: Core/Expected/Augmented/Potential"],
    Med:["RATER dimensions","Levels of market offering (Commodity→Good→Service→Experience)","Share of wallet; customer retention value","People- vs equipment-based services; ownership classification","Service blueprint / customer contact audit"],
    Low:["RFM analysis","Customer defection specifics","CEM definition"]
  },
  ch18:{ // IMC (Seg 11)
    High:["Hierarchy of effects (COMPUTATIONAL — biggest ratio = target)","MAM for message strategy (COMPUTATIONAL — rating vs importance change)","Communication process: source/encode/decode/receiver/respond","Source type 2×2: Personal/Impersonal × Marketer-Controlled/Independent"],
    Med:["The 5 promotional-mix elements & their roles","Nontraditional tools (sponsorship, product placement, branded entertainment, infomercial)","Trial stage & other hierarchy-of-effects stages","IMC definition (consistent message across audiences)"],
    Low:["Source factors (credibility/expertise/attractiveness)","Types of appeals (fear/humor/sex)"]
  },
  ch19:{ // Advertising & Sales Promotion (Seg 12)
    High:["CPM / wCPM (COMPUTATIONAL — guaranteed; lower = more efficient)","Push vs Pull + naming the promotion (deal/premium/coupon/contest/sweepstakes)","Subliminal stimuli: Ambiguous / Embedded / Truly subliminal","Advertising goals (new product → Inform first)"],
    Med:["Timing strategies: Continuous / Pulsing / Flighting","Institutional vs product (pioneering/competitive/reminder) advertising","Media terms: reach, frequency, medium vs vehicle","Digital ad forms: search / display / social / email / mobile","Theories: hierarchy of effects / low-involvement / dual mediation"],
    Low:["Full- vs limited-service agency","Why sales promotion has grown (trade vs consumer split)","Starch scores"]
  },
  ch20:{ // Personal Selling (Seg 13)
    High:["Workload method (COMPUTATIONAL — convert minutes→hours!)","Conversion rate & quota ratio (COMPUTATIONAL)","The 6 selling stages — name the stage from a scenario","Canned formats: Door-in-the-face vs Foot-in-the-door vs Ingratiation"],
    Med:["Prospecting: need/want, ability to purchase, purchase authority","Organizing the salesforce (region / product line / type of account)","Adaptive / relationship selling","Types of personal selling (order taking/getting/support); missionary rep"],
    Low:["Account management policy grid","Compensation plans (salary/commission/combination)","Sales engineer definition"]
  }
};

/* ---------- WEIRD / HIGH-YIELD FACTS  [chId, front, back] ---------- */
const FACTS = [
  // ch11
  ["ch11","BDI/CDI: low BDI + high CDI →","Category thrives locally but your brand lags → RESEARCH why you're under-performing (don't blindly invest)."],
  ["ch11","BDI/CDI: high BDI + high CDI →","You're winning in a strong market → invest to defend/build."],
  ["ch11","Prerecorded music vs streaming","Music = product CLASS; streaming/CD = product FORM. (Class = category; form = a variation within it.)"],
  ["ch11","Automobiles vs electric cars","Automobiles = product CLASS; electric cars = product FORM."],
  ["ch11","Core benefit trap","The core is WHY the customer comes (the burger at a burger joint). If the basic want isn't met, satisfaction collapses."],
  ["ch11","Which adoption group is 'venturesome, well-educated, first to buy'?","Innovators (Intro stage)."],
  ["ch11","Length of a product life cycle","There is NO set time — it depends on the product type (consumer products usually shorter than business products)."],
  // ch10
  ["ch10","Electric toothbrush / AirPods / Face-ID vs fingerprint","All DYNAMICALLY CONTINUOUS — modest learning, same basic behavior."],
  ["ch10","An all-new product that must be learned 'from the ground up'","Discontinuous innovation (e.g. the first passenger-to-the-Moon aircraft)."],
  ["ch10","'Understand the cost to make it & the price to sell it' = which NPD stage?","Business Analysis."],
  ["ch10","Real people test the product in surveys/experiments = which stage?","Market Testing."],
  ["ch10","Adoption stage where you actively COMPARE options / deep-research","Evaluation (not Interest — Interest is just being motivated to learn more)."],
  ["ch10","Match the diffusion factor: 'address virus fears'","Risk. WOM/observe-benefits = Communicability. Compare to rivals = Relative Advantage. Works on your phone = Compatibility."],
  // ch12
  ["ch12","4 I's — mnemonic","Intangibility, Inconsistency, Inseparability, Inventory."],
  ["ch12","Standardized training resolves…, customer feedback/participation resolves…","Standardize → Inconsistency. Customer participates → Inseparability."],
  ["ch12","Disney recovery: low severity + it's the FIRM'S fault →","Fix it! (High severity + firm's fault → Red Carpet.)"],
  ["ch12","Knowledge gap vs Delivery gap","Knowledge = mgmt doesn't know what customers want. Delivery = standards set & known but employees don't perform them."],
  ["ch12","CLV (class formula)","# visits × $ profit/visit × avg lifetime (years). It OVER-estimates because it ignores defection & present value."],
  ["ch12","Most valuable level of market offering","Experience (Commodity < Good < Service < Experience)."],
  ["ch12","Security guard, plumber, management consultant share…","All PEOPLE-based services (unskilled / skilled / professional labor)."],
  // ch18
  ["ch18","Hierarchy of effects — how to choose the objective","Divide each stage by the prior; the LARGEST ratio = biggest bottleneck = the stage to target."],
  ["ch18","MAM: changing a RATING vs an IMPORTANCE weight","Rating change affects only YOUR brand. Importance change affects ALL brands — beware helping a rival more; maximize the RELATIVE gain."],
  ["ch18","Friend raving about a product = which source type?","Personal + Independent (word of mouth = most trusted)."],
  ["ch18","Amazon reviews = which source type?","Personal + Independent (from customers, not the company)."],
  ["ch18","Trial stage (hierarchy of effects)","The consumer's actual FIRST purchase and use."],
  ["ch18","Source (encodes) vs Receiver (decodes & responds)","The salesperson/company encodes the message = source; the customer decodes & responds = receiver."],
  // ch19
  ["ch19","CPM vs wCPM — which is 'more efficient'?","The LOWER one. wCPM = CPM ÷ (% of audience in target). Targeted efficiency → use wCPM."],
  ["ch19","Deal vs Premium vs Coupon (all PULL)","Deal = discount for spending a threshold; Premium = free/cheap gift after a purchase; Coupon = amount off at register."],
  ["ch19","Contest vs Sweepstakes","Contest = SKILL/creativity wins. Sweepstakes = pure LUCK/random draw."],
  ["ch19","Push targets… / Pull targets…","Push → channel partners (trade allowances, dealer contests, co-op ads). Pull → consumers directly."],
  ["ch19","Embedded vs Ambiguous vs Truly subliminal","Embedded = hidden/placed to be processed (even if visible). Ambiguous = many interpretations. Truly subliminal = below awareness (flashed too fast)."],
  ["ch19","Pay to have your ad 'appear' on another site's page","Display advertising (search = pay to top a query; social = on social platforms)."],
  ["ch19","Institutional advertising","Promotes the org's image/values/cause, NOT a product (e.g. a sustainability commitment ad)."],
  ["ch19","Deceased celebrity in an ad avoids…","The risk of the spokesperson's image changing."],
  // ch20
  ["ch20","Workload method — the classic trap","Convert call length to HOURS (30 min = 0.5, 90 min = 1.5) before dividing by annual selling hours."],
  ["ch20","Prospecting qualifies a lead by…","Need/want, ability to purchase, and purchase AUTHORITY (who can actually decide)."],
  ["ch20","Pre-approach = … / Approach = …","Pre-approach = research + prepare/practice. Approach = the first in-person meeting/greeting."],
  ["ch20","Door-in-the-face vs Foot-in-the-door","DITF = absurd ask first, then the real (smaller) one. FITD = small ask first, build to a big one."],
  ["ch20","Conversion rate vs quota ratio","Conversion = #sales ÷ #calls. Quota = $actual ÷ $goal."],
  ["ch20","Missionary salesperson","Promotes but does NOT take orders."],
  ["ch20","Bowing & handing a card with both hands in Japan = which stage?","Approach (the first meeting)."],
  // ---- exam-day 'gotchas' / cross-chapter ----
  ["ch12","'Experience economy' + all employee actions mapped","Service blueprint (an expanded customer contact audit)."],
  ["ch11","FTC rule: a product may be labeled 'new' for…","Up to 6 months."],
  ["ch19","Primary vs selective demand","Pioneering ads build PRIMARY (category) demand; competitive ads build SELECTIVE (brand) demand; 'preference for a specific brand' = selective."],
  ["ch20","Order taking / order getting / customer sales support","The 3 types of personal selling."],
  // ---- "stupid" lecture-trivia questions Cooke has actually asked (memorize these) ----
  ["ch10","Apple's new-product FAILURES (book)","Apple III (1980), Apple Lisa (1983), Newton (1987), Macintosh Portable (1989), the 'Hockey Puck' Mouse (1998). TRAP: CarPlay was a SUCCESS, not a failure."],
  ["ch10","Apple II (1977) early buyers were…","Innovators (venturesome, highly educated, first to buy) — analysts wrongly predicted few sales."],
  ["ch19","2022 ad-spending split (per lecture) — who gets the MOST?","Internet ≈ 62% (the most, and growing), TV ≈ 23%, Outdoor ≈ 5%, Radio ≈ 4%, Magazines ≈ 2%. Answer to 'most ad money' = Internet."],
  ["ch19","Factors used to SELECT a medium (book p541)","Target audience, type of product, nature of the message, campaign objectives, budget, and cost. TRAP: 'purchase frequency' is NOT one."],
  ["ch18","Deceased-celebrity endorsers (John Wayne, Fred Astaire) — why?","Their image can't change — avoids the risk a living spokesperson's image shifts and clashes with the brand."],
  ["ch18","Charli D'Amelio × Dunkin' =","Influencer marketing (recruiting influencers to advocate the brand)."],
  ["ch20","TransWave using a whole team to sell to a major client =","Team selling (book p609)."],
  ["ch11","Gatorade → Gatorade Bolt24 =","Product line extension (a new product under the current Gatorade brand name)."],
  ["ch11","Walmart 'Great Value' (made for Walmart, sold only there) =","Private branding / private-label brand (like Costco's Kirkland)."],
  ["ch11","Nestlé's many separate brand names (Nespresso, KitKat) =","Multiple branding. (Nike's one name on everything = family branding.)"],
  ["ch19","Which PLC stage's promotion objective is 'to persuade'?","GROWTH (introduction=inform, growth=persuade, maturity=remind, decline=phase out). 'Accelerated development' is a RETAIL-life-cycle trap."]
];

/* ---------- QUESTION ARCHETYPES (pattern trainer) ----------
   ordered by priority; first match wins. Tested at runtime over the question text. */
const ARCHETYPES = [
  ["🧮 Computation: BDI / CDI", /\bbdi\b|\bcdi\b|development index|per capita/i],
  ["🧮 Computation: CLV", /customer lifetime value|\bclv\b|profit per (visit|flight)|avg\.? lifetime/i],
  ["🧮 Computation: CPM / wCPM", /\bcpm\b|wcpm|cost per thousand|most efficient (medium|website|vehicle)|impressions/i],
  ["🧮 Computation: Workload / quota", /workload method|number of salespeople|call frequency|conversion rate|sales quota|selling time/i],
  ["🧮 Computation: Hierarchy of effects", /hierarchy of effects.*(stage|ratio|bottleneck)|awareness.*knowledge.*liking|largest ratio/i],
  ["🧮 Computation: Multi-attribute (MAM)", /multi-?attribute|weighted (rating|total|attitude)|importance (weight|of)|belief score/i],
  ["🧱 3 levels of product (core/expected/augmented)", /core (benefit|service)|expected (benefit|service)|augmented (benefit|service)|which level of.*product/i],
  ["📦 Item vs line vs mix", /product (item|line|mix)|product line|product mix|sku/i],
  ["🔁 PLC stage / level", /product life ?cycle|introduction|growth stage|maturity|decline|product (class|form)|fad|fashion product/i],
  ["💡 Level of innovation", /continuous innovation|dynamically continuous|discontinuous|level of innovation/i],
  ["🚦 NPD stage", /new-?product (development|planning|strategy)|idea generation|screening|business analysis|prototype|market testing|commercializ/i],
  ["📈 Adoption process stage", /adoption process|awareness.*interest|trial stage|evaluat.*product.*(adopt|trial)/i],
  ["🌱 Diffusion factor", /diffusion|relative advantage|communicability|compatibility|complexity(?!.*gap)/i],
  ["🅰️ 4 I's of services", /intangibility|inconsistency|inseparability|inventory.*service|four i|4 ?i.?s/i],
  ["🛟 Service recovery (Disney)", /service recovery|red carpet|fix it|\bhero\b|empathy.*(severity|responsib)/i],
  ["🕳️ Gap model", /knowledge gap|delivery gap|standards gap|communications gap|gap model/i],
  ["🎁 Level of market offering", /commodity|good.*service.*experience|experience economy|level of (market )?offering/i],
  ["🗣️ Communication process role", /\bsource\b|receiver|encod|decod|feedback|communication process/i],
  ["👥 Source type (personal/independent)", /personal.*independent|impersonal|marketer[- ]controlled|word of mouth|type of source/i],
  ["🎯 Advertising goal / type", /\binform\b|persuade|reinforce|remind|institutional advertis|pioneering|competitive advertis|reminder advertis/i],
  ["🌀 Subliminal stimuli", /subliminal|embedded stimuli|ambiguous stimuli/i],
  ["🕒 Media timing strategy", /pulsing|flighting|continuous (schedule|advertising)|timing strateg/i],
  ["💸 Push vs Pull / promotion type", /\bpush\b|\bpull\b|sweepstake|contest|premium|coupon|rebate|dealer contest|trade allowance|point of purchase/i],
  ["📱 Digital ad form", /display advertising|search advertising|social media ad|mobile ad|email advertis/i],
  ["🧑‍💼 Selling-process stage", /prospecting|pre-?approach|approach stage|presentation|close|follow-?up|selling process/i],
  ["🎭 Canned presentation format", /door-in-the-face|foot-in-the-door|ingratiation|adaptive selling|canned/i],
  ["🏢 Salesforce organization", /organiz.*salesforce|type of account|product line.*salesforce|regional.*salesforce|account management policy/i],
  ["🧑‍💼 Sales personnel type (missionary/order taking/etc)", /missionary|order (taker|getter|taking|getting)|sales engineer|telemarketing|team selling|vector sales/i],
  ["🏷️ Branding strategy (family/multi/private-label/co-brand/subbrand)", /family brand|multibrand|multiple branding|private label|private brand|co-brand|subbrand|national brand|generic brand/i],
  ["🏷️ Brand equity / extension", /brand equity|line extension|category extension|brand loyalty|awareness.*association/i]
];
function archetypeOf(q){
  const t=q.q+" "+q.choices.join(" ");
  for(const [name,re] of ARCHETYPES) if(re.test(t)) return name;
  return "📖 Definitions / other";
}
