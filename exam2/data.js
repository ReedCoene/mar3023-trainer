/* ============================================================
   Exam 2 — MAR3023 (Dr. Cooke). Chapters map to lecture segments:
     Seg 8  = Ch 11  Product Strategy
     Seg 9  = Ch 10  New Product Strategy
     Seg 10 = Ch 12  Services Marketing
     Seg 11 = Ch 18  Integrated Marketing Communication (IMC)
     Seg 12 = Ch 19  Advertising & Sales Promotion
     Seg 13 = Ch 20-21  Personal Selling
   Detailed teaching content lives in LESSONS (lessons.js), which
   overrides CHAPTERS[].sections. Here we keep metadata + flashcards.
   ============================================================ */
const EXAM_DATE = "2026-07-06T19:00:00"; // Exam 2 — Monday 7:00 PM

/* Exam 2 has no separate hand-written "conceptual MCQ" set — the verified
   testbank (testbank.js) is the whole question pool. QUESTIONS stays empty
   so app.js's `ALLQ = QUESTIONS.concat(...)` still works. */
const QUESTIONS = [];

const CHAPTERS = [
  { id:"ch11", num:11, seg:8,  title:"Product Strategy",
    blurb:"The 3 levels of product (core/expected/augmented), item vs line vs mix, the product life cycle & its 3 PLC levels, BDI/CDI, branding, and brand equity.", sections:[], mnemonics:["PLC order: Introduction → Growth → Maturity → Decline.","Adopters by stage: Innovators → Early Adopters → Early/Late Majority → Laggards.","Core = need it · Expected = assume it · Augmented = delighted by it.","BDI = Brand index, CDI = Category index. Low BDI + High CDI = research WHY you lag.","Class = whole category · Form = a variation within it."] },
  { id:"ch10", num:10, seg:9,  title:"New Product Strategy",
    blurb:"The 3 levels of innovation, the new-product development process, the consumer adoption process, and the 5 factors driving diffusion.", sections:[], mnemonics:["Innovation ladder (more learning): Continuous → Dynamically Continuous → Discontinuous.","NPD: Strategy → Idea → Screen → Business Analysis → Prototype → Market Test → Commercialize.","Adoption = A-I-E-T-A: Awareness, Interest, Evaluation, Trial, Adoption.","Diffusion factors: Relative advantage, Communicability, Complexity, Compatibility, Risk.","Deep research/compare = Evaluation (not Interest)."] },
  { id:"ch12", num:12, seg:10, title:"Services Marketing",
    blurb:"The 4 I's of services, levels of service, RATER, the gap model, service recovery, Customer Lifetime Value (CLV), and levels of market offering.", sections:[], mnemonics:["4 I s: Intangibility, Inconsistency, Inseparability, Inventory.","Standardize fixes Inconsistency; Customer participates fixes Inseparability.","RATER: Reliability, Assurance, Tangibles, Empathy, Responsiveness.","Gaps: Knowledge, Standards, Delivery, Communications (Delivery = staff dont perform set standards).","Recovery matrix: Empathy / Fix it / Hero / Red Carpet. CLV = visits × profit/visit × years."] },
  { id:"ch18", num:18, seg:11, title:"Integrated Marketing Communication",
    blurb:"The promotional mix, the communication process, source types, the hierarchy of effects, and the multi-attribute model for message strategy.", sections:[], mnemonics:["Promo mix: Advertising, Personal Selling, Sales Promotion, PR, Direct Marketing.","Comm process: Source ENCODES → message/channel → Receiver DECODES & responds → feedback.","Source 2×2: Personal/Impersonal × Marketer-Controlled/Independent (friends WOM = Personal+Independent).","Hierarchy of effects: divide each stage by the prior; biggest ratio = the stage to target.","MAM: change a RATING (helps only you) vs an IMPORTANCE weight (helps everyone)."] },
  { id:"ch19", num:19, seg:12, title:"Advertising & Sales Promotion",
    blurb:"Advertising goals & theories, subliminal stimuli, media strategy, CPM/wCPM, timing strategies, and push vs. pull sales promotions.", sections:[], mnemonics:["Ad goals: Inform, Persuade, Sell, Reinforce, Remind (new product → Inform).","Subliminal: Ambiguous / Embedded / Truly subliminal.","Timing: Continuous / Pulsing / Flighting.","Push = to the trade (retailers); Pull = to consumers.","CPM & wCPM: LOWER = more efficient. wCPM = CPM ÷ % in target."] },
  { id:"ch20", num:"20–21", seg:13, title:"Personal Selling & Sales Management",
    blurb:"Covers BOTH textbook chapters your course groups as Segment 13. Ch 20 (Personal Selling): sales positions, the 6 selling stages, canned vs. adaptive presentations. Ch 21 (Sales Management): organizing & sizing the salesforce (workload method), compensation, quotas, conversion rate, and the account-management grid.", sections:[], mnemonics:["Selling process: Prospecting, Pre-Approach, Approach, Presentation, Close, Follow-Up.","Qualify a lead: need/want, ability to purchase, purchase AUTHORITY.","Canned: Ingratiation, Foot-in-the-door, Door-in-the-face, Outlined.","Workload: NS = NC × CF × CL ÷ AST — convert minutes to HOURS first.","Conversion = sales ÷ calls; Quota = $actual ÷ $goal."] }
];

/* ---------- FLASHCARDS  [chId, front, back] ---------- */
const FLASHCARDS = [
  // ch11 Product Strategy
  ["ch11","The 3 levels of a product","Core (basic benefit / why you buy it), Expected (what a buyer assumes it includes), Augmented (above-and-beyond extras that delight)."],
  ["ch11","Define a product","A good, service, or idea consisting of a bundle of tangible and intangible benefits."],
  ["ch11","Product item vs line vs mix","Item = one specific product (an SKU). Line = a group of closely related products. Mix = ALL the lines a company sells."],
  ["ch11","The 3 PLC 'levels' (types)","Product CLASS (whole category, e.g. prerecorded music), product FORM (a variation, e.g. streaming vs CD), and BRAND."],
  ["ch11","The 4 stages of the product life cycle","Introduction → Growth → Maturity → Decline (Decline sometimes split, giving 5)."],
  ["ch11","Adoption groups by PLC stage","Intro = Innovators; Growth = Early Adopters; Maturity = Early/Late Majority; Decline = Laggards."],
  ["ch11","BDI formula","BDI = ($ brand sales per capita in territory ÷ $ brand sales per capita nationally) × 100."],
  ["ch11","CDI formula","CDI = ($ category sales per capita in territory ÷ $ category sales per capita nationally) × 100."],
  ["ch11","BDI<100 & CDI>100 means…","Category sells well locally but YOUR brand under-performs → research WHY you're doing poorly there."],
  ["ch11","4 ways to extend the PLC (maturity)","Market Penetration, Market Development, Product Modification, Product Repositioning."],
  ["ch11","4 components of brand equity","Awareness, Associations, Perceived Quality, Loyalty."],
  ["ch11","Line vs Category extension","Line extension = new variant in the SAME category (new flavor). Category extension = the brand enters a DIFFERENT category."],
  ["ch11","Fad vs Fashion product","Fad = sudden spike then rapid crash (often <1 year). Fashion = rises, declines, then may return."],
  ["ch11","Product manager is also called…","A brand manager."],
  // ch10 New Product Strategy
  ["ch10","The 3 levels of innovation","Continuous (no new behavior), Dynamically Continuous (some learning, same basic use), Discontinuous (all-new, learn from scratch)."],
  ["ch10","New-product development process (7)","New-Product Strategy → Idea Generation → Screening & Evaluation → Business Analysis → Prototype (Development) → Market Testing → Commercialization."],
  ["ch10","Commercialization","The stage where the product is positioned and launched in full-scale production and sales."],
  ["ch10","Consumer adoption process (5)","Awareness → Interest → Evaluation → Trial → Adoption."],
  ["ch10","5 factors influencing diffusion rate","Relative Advantage, Communicability, Complexity, Compatibility, Risk. (Lower complexity/risk = faster.)"],
  ["ch10","Business Analysis stage","Assesses the finances — cost to make and the price it could sell for — before building a prototype."],
  ["ch10","Electric toothbrush = which innovation?","Dynamically continuous — same use (brushing) with a modest new behavior."],
  // ch12 Services Marketing
  ["ch12","The 4 I's of services","Intangibility, Inconsistency, Inseparability, Inventory."],
  ["ch12","Fix inconsistency vs inseparability","Inconsistency → standardize with a consistent process/training. Inseparability → involve the customer in the service."],
  ["ch12","The 5 service-quality dimensions (RATER)","Reliability, Assurance, Tangibles, Empathy, Responsiveness."],
  ["ch12","4 levels of service","Core, Expected, Augmented, Potential."],
  ["ch12","The 4 gaps in the extended gap model","Knowledge, Standards, Delivery, Communications gap."],
  ["ch12","Knowledge gap vs Delivery gap","Knowledge = management misunderstands what customers want. Delivery = standards exist but employees fail to perform them."],
  ["ch12","Disney service-recovery matrix","Low severity + low responsibility = Empathy; Low + high (firm's fault) = Fix it!; High + low = 'Hero'; High + high = 'Red Carpet.'"],
  ["ch12","CLV formula (class version)","CLV = (# visits) × ($ profit per visit) × (average lifetime in years). Based on PROFIT, not revenue."],
  ["ch12","Levels of market offering (increasing value)","Commodity → Good → Service → Experience (Experience is most valuable)."],
  ["ch12","Share of wallet","The portion of a customer's total category spending that your brand captures."],
  // ch18 IMC
  ["ch18","Define IMC","Designing marketing communication programs that coordinate all promotional activities to give a consistent image across audiences."],
  ["ch18","The 5 promotional-mix elements","Advertising, Personal Selling, Sales Promotion, Public Relations, Direct Marketing."],
  ["ch18","Other (nontraditional) IMC tools","Sponsorships, Product Placements, Infomercials, Branded Entertainment (+ guerrilla marketing, influencers)."],
  ["ch18","Communication process roles","Source encodes → Message via channel → Receiver decodes & responds → feedback returns to source."],
  ["ch18","2×2 source types","Personal vs Impersonal, and Marketer-Controlled vs Independent (e.g. a friend's WOM = personal + independent)."],
  ["ch18","Hierarchy of effects — how to pick the objective","Take each stage ÷ prior stage; the LARGEST ratio = biggest drop-off = the stage to target."],
  ["ch18","Trial stage (hierarchy of effects)","The consumer's actual first purchase and use of the product/brand."],
  ["ch18","MAM message strategy","Changing a RATING affects only your brand; changing an IMPORTANCE weight affects ALL brands — pick the biggest RELATIVE gain."],
  // ch19 Advertising & Sales Promotion
  ["ch19","The 5 goals of advertising","Inform, Persuade, Sell, Reinforce, Remind. (A brand-new product → Inform first.)"],
  ["ch19","3 subliminal-stimuli types","Ambiguous (multiple interpretations), Embedded (hidden/placed to be processed), Truly subliminal (below conscious threshold)."],
  ["ch19","CPM formula","CPM = ad cost ÷ (impressions ÷ 1,000). Lower CPM = more efficient."],
  ["ch19","wCPM formula","wCPM = ad cost ÷ ((impressions × % in target) ÷ 1,000). Divide CPM by the target proportion. Lower = more efficient."],
  ["ch19","3 timing strategies","Continuous (steady year-round), Pulsing (year-round + upticks), Flighting (on/off periods)."],
  ["ch19","Push vs Pull promotions","Push = aimed at channel partners (trade allowances, dealer contests, co-op ads). Pull = aimed at consumers (coupons, deals, rebates, samples, premiums, contests, sweepstakes)."],
  ["ch19","Contest vs Sweepstakes","Contest = win by SKILL/creativity. Sweepstakes = win by pure CHANCE/luck."],
  ["ch19","Institutional advertising","Promotes the organization's image, ideas, or values — NOT a specific product."],
  ["ch19","Full-service vs limited-service agency","Full-service = one-stop shop for all advertising needs. Limited-service = specializes in one aspect (e.g. creative or media)."],
  // ch20 Personal Selling
  ["ch20","The 6 stages of the selling process","Prospecting → Pre-Approach → Approach → Presentation → Close → Follow-Up."],
  ["ch20","Prospecting: qualifying a lead","Establish need/want, ascertain ability to purchase, and determine purchase authority."],
  ["ch20","Pre-approach vs Approach","Pre-approach = research the prospect + prepare/practice the presentation. Approach = the first face-to-face meeting."],
  ["ch20","Canned presentation formats","Ingratiation, Foot-in-the-door (small→big), Door-in-the-face (absurd→reasonable), plus Outlined; Adaptive selling = marketing orientation."],
  ["ch20","Door-in-the-face vs Foot-in-the-door","DITF = start with an absurd ask, then the real one. FITD = start small and build to a big ask."],
  ["ch20","Workload method","NS = (NC × CF × CL) ÷ AST — customers × call frequency × call length ÷ selling time available (convert minutes to hours)."],
  ["ch20","Conversion rate vs quota","Conversion rate = # sales ÷ # calls. Quota ratio = $ actual sales ÷ $ sales goal."],
  ["ch20","3 types of personal selling","Order taking, order getting, and customer sales support."],
  ["ch20","Missionary salesperson","Does promotional work but does NOT take actual sales orders."],
  ["ch20","Organizing the salesforce","By Region, by Product Line, or by Type of Account."]
];
