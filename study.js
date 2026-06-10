/* ============================================================
   Test-focused study data:
   - TIERS: per-chapter topic likelihood (High/Med/Low) from the
     frequency analysis of the mined test bank + the computational
     review deck (which GUARANTEES the 7 computation types).
   - FACTS: high-yield "weird" specific facts Dr. Cooke likes to ask.
   - ARCHETYPES: recurring question patterns for the pattern trainer.
   ============================================================ */

const TIERS = {
  ch1:{
    High:["Market share (COMPUTATIONAL — guaranteed)","The 4 P's & which P a tactic belongs to","The 4 utilities: Time, Place, Possession, Form"],
    Med:["Definition of marketing & customer value","Exchange (both parties better off)","Four orientations: Production→Sales→Marketing→Market","Marketing program vs marketing mix"],
    Low:["CRM","Societal marketing concept"]
  },
  ch3:{
    High:["Identify the MACRO force (Social/Economic/Technological/Regulatory/Natural)","Demographics, generations & ethnicity","Regulatory acts (Sherman, Robinson-Patman, Lanham, FTC, FDA, CPSC)","Natural sector: green marketing & greenwashing","Environment LEVEL: macro vs micro vs internal"],
    Med:["Environmental scanning definition","Economic: income types & consumer confidence","Technological: media fragmentation, 3 screens, multi-screen behaviors","Consumerism"],
    Low:["Core American values list","Specific demographic statistics"]
  },
  ch4:{
    High:["Ethical/Legal matrix (e.g., legal-but-unethical)","CSR levels: Profit / Stakeholder / Societal","Moral philosophies: Idealism vs Utilitarianism","Cause marketing vs green marketing vs greenwashing"],
    Med:["Ethics vs laws (definitions)","Social audit — the 5 steps","Reasons attention to ethics rose","Native advertising / product placement"],
    Low:["Whistle-blowers","Codes of ethics"]
  },
  ch5:{
    High:["DMP — the 5 stages (incl. Feedback)","Multi-Attribute Model (COMPUTATIONAL)","NPS (COMPUTATIONAL)","DMU roles","Satisfaction: P<E / P=E / P>E"],
    Med:["Involvement levels (routine/limited/extended)","Customer profile: demographic / SES / psychographic","Symbolic consumption","Four types of time use","Loyalty types: brand / split / variety"],
    Low:["Macro lifestyle trends (99 Lives, Cashing Out…)","Flow & peak experience","Multi-screen behaviors"]
  },
  ch6:{
    High:["Buying-center roles","Buyclasses: New / Straight rebuy / Modified rebuy","Value analysis / TLC (COMPUTATIONAL)","Vendor analysis (COMPUTATIONAL)","Org buyer types: Industrial / Reseller / Government"],
    Med:["Derived demand","Cost types: initial / switching / operating / life-cycle","Key features of org buyers","NAICS"],
    Low:["Reciprocity","E-marketplaces / reverse auctions"]
  },
  ch8:{
    High:["3 research types (Exploratory / Descriptive / Causal) + matching method","Research methods (focus group, depth interview, ethnography, survey, observation)","Causal = Manipulate IV / Control / Measure DV"],
    Med:["Uses of research (demand forecasting, ad pretesting…)","Memory measures: free recall / cued recall / recognition","Data types: primary vs secondary, internal vs external","Survey error types (sampling, interviewer, questionnaire)"],
    Low:["Test marketing downsides","Neuromarketing","Scanner panels"]
  },
  ch9:{
    High:["Segmentation criteria — esp. DIFFERENTIAL RESPONSE","Targeting strategies (Mass / Concentration / Multisegment / Mass-customization)","Positioning & perceptual maps","Indexing (COMPUTATIONAL)","Benefit segmentation (COMPUTATIONAL)"],
    Med:["Segmentation definition & market heterogeneity","Majority fallacy","Points of Parity vs Points of Difference","Positioning approaches (user category, etc.)","Cannibalization"],
    Low:["Market-product grid","Segmentation bases 2×2"]
  }
};

/* ---------- WEIRD / HIGH-YIELD FACTS (front, back, chapter) ---------- */
const FACTS = [
  // Ch3 — the "random" demographic/stat questions Cooke likes
  ["ch3","The 3 main US racial/ethnic subcultures Cooke lists (with sizes)","Hispanic/Latino ≈ 17% (largest), African-American ≈ 13.2%, Asian-American ≈ 5.6%."],
  ["ch3","Which US ethnic groups are the FASTEST growing?","Hispanic/Latino and Asian-American populations (Asian-American fastest by rate)."],
  ["ch3","The three 'screens' of advertising (+ possible 4th)","Television, Computer, Mobile (+ Tablet as a possible 4th)."],
  ["ch3","Multi-screen behaviors: meshing vs stacking vs shifting","Meshing = simultaneous + RELATED content; Stacking = simultaneous + UNRELATED; Shifting = sequential (the biggest opportunity, ~65%)."],
  ["ch3","America's time orientation (vs others)","America = FUTURE-oriented; France = present-oriented; many Asian cultures = past-oriented."],
  ["ch3","Sherman Antitrust Act — year & purpose","1890 — prevents monopolies (protects competition)."],
  ["ch3","Robinson-Patman Act — year & purpose","1936 — prevents price discrimination among businesses."],
  ["ch3","Lanham Act — year & purpose","1946 — provides trademark protection."],
  ["ch3","FTC — year & purpose","1914 — prevents false/misleading advertising."],
  ["ch3","FDA — year & purpose","1906 — regulates food & drug testing/advertising."],
  ["ch3","CPSC — year & purpose","1972 — Consumer Product Safety Commission; regulates 15,000+ products."],
  ["ch3","The 5 MACRO sectors (and the trap)","Social, Economic, Technological, Regulatory, Natural. TRAP: Competitive is treated as MICRO."],
  ["ch3","Income narrows in this order","Gross → Disposable (after taxes) → Discretionary (after necessities)."],
  ["ch3","The 1099 / sharing economy size Cooke cites","~53 million Americans are 1099 workers."],
  ["ch3","Two key issues in the technological environment","Rate of Change and Media Fragmentation."],
  ["ch3","4 components of strategic environmental scanning","Sectors, Actors, Sources, Interpretation."],
  // Ch1
  ["ch1","The 4 types of utility","Time, Place, Possession, Form."],
  ["ch1","The 4 P's","Product, Price, Place, Promotion."],
  ["ch1","Four business orientations IN ORDER","Production → Sales → Marketing → Market (whole org)."],
  ["ch1","Customer value formula (lecture)","Value = Perceived Benefits ÷ Price."],
  ["ch1","Market share formula","Brand sales ÷ TOTAL industry sales (incl. the brand) × 100."],
  // Ch4
  ["ch4","Two personal moral philosophies","Moral Idealism (rights are universal, ignore outcome) vs Utilitarianism (greatest good for greatest number)."],
  ["ch4","Three levels of CSR","Profit → Stakeholder → Societal responsibility."],
  ["ch4","Social audit — 5 steps","Recognition, Identification of mission, Determination of priorities, Specification of resources, Evaluation of results."],
  ["ch4","Cause vs Green marketing vs Greenwashing","Cause = donate per purchase to a cause; Green = real environmental benefit; Greenwashing = FALSE/exaggerated green claims."],
  ["ch4","TOMS ending 'buy-one-give-one' = which CSR level?","Profit responsibility (a real lecture example)."],
  ["ch4","Warby Parker 'buy a pair, give a pair' = ?","Cause marketing (lecture example)."],
  // Ch5
  ["ch5","DMP — 5 stages","Problem Recognition → Information Search → Evaluation of Alternatives → Purchase Decision → Post-Purchase Behavior (+ Feedback)."],
  ["ch5","DMU roles (household)","Information Gatherer, Influencer, Decision Maker, Purchaser, User."],
  ["ch5","NPS bands","Detractors 0–6, Passives 7–8, Promoters 9–10. NPS = %P − %D."],
  ["ch5","Satisfaction comparison","P<E = Dissatisfaction, P=E = Satisfaction, P>E = Delight."],
  ["ch5","Four types of time use","Contracted (work), Committed (household), Personal (self-maintenance), Free (discretionary)."],
  ["ch5","Macro lifestyle trends (the 4)","Fantasy Adventure, Being Alive, 99 Lives, Cashing Out."],
  ["ch5","Loyalty types","Brand loyal (one brand), Split loyal (alternates 2), Variety seeker (many)."],
  ["ch5","MAM value formula","Σ (belief × importance) across attributes; highest wins."],
  // Ch6
  ["ch6","Buying-center roles (5)","Users, Influencers, Buyers (Purchasing Agent), Deciders, Gatekeepers."],
  ["ch6","The 3 buyclasses","New Buy, Straight Rebuy, Modified Rebuy."],
  ["ch6","Four cost types (value analysis)","Initial purchase, Switching, Operating, Life-cycle."],
  ["ch6","TLC formula","Purchase price + (annual costs × planning horizon). Lowest wins."],
  ["ch6","Derived demand (definition)","Demand for a business good derived from demand for the consumer products it ends up in."],
  ["ch6","Three organizational buyer types","Industrial, Reseller, Government."],
  // Ch8
  ["ch8","Three research types","Exploratory (ideas), Descriptive (who/what), Causal (cause→effect)."],
  ["ch8","Exploratory methods","Observation, Consumer Ethnography, Focus Groups, Depth Interviews."],
  ["ch8","Memory measures — easiest to hardest","Recognition (highest) → Cued Recall → Free Recall (lowest)."],
  ["ch8","Causal research = 3 keys","Manipulate the IV, Control extraneous variables, Measure the DV."],
  ["ch8","Three survey error types","Sampling, Interviewer, Questionnaire design."],
  // Ch9
  ["ch9","Four segmentation criteria","Measurability, Reachability, Profitability, Differential Response (the key one)."],
  ["ch9","Four targeting strategies","Mass Marketing, Concentration, Multisegment, Mass Customization."],
  ["ch9","Index formula & meaning","(% in segment ÷ % in population) × 100; >100 over-indexes (attractive)."],
  ["ch9","Positioning approaches (6)","Product feature, Product benefit, User category, Against a brand, Against a category, Specific use."],
  ["ch9","Majority fallacy","Blindly chasing the largest segment (everyone competes there)."],
  ["ch9","POP vs POD","Points of Parity = same as rivals; Points of Difference = unique advantage."],
  // ---- 2025-26 lecture-note additions ----
  ["ch1","4 requirements for marketing to occur","Two+ parties with unmet needs; desire & ability to satisfy; a way to communicate; something to exchange."],
  ["ch1","Need vs Want","Need = deprived of a basic necessity; Want = a need shaped by knowledge, culture & personality."],
  ["ch1","Three value strategies (+ brands)","Best Price (Target), Best Product (Starbucks), Best Service (Nordstrom)."],
  ["ch1","The four eras","Production (to 1920s) → Sales (1920s–60s) → Marketing Concept → Customer Relationship (1980s+)."],
  ["ch1","Customer experience: direct vs indirect","Direct = buying/using/getting service; Indirect = word-of-mouth, reviews, news."],
  ["ch3","CFPB","Consumer Financial Protection Bureau — financial services as a product category; born from the 2008 crisis."],
  ["ch3","Rejected energy & biggest opportunity","~2/3 of energy is wasted ('rejected energy'); the biggest opportunity is energy storage."],
  ["ch4","Pinkwashing","Overstating a social-cause contribution (the cause-marketing version of greenwashing)."],
  ["ch4","Social entrepreneurship","The cause/charity comes FIRST, profit second."],
  ["ch4","Common thread across ethics issues","Deception."],
  ["ch4","Profit / People / Planet","Profit → People (stakeholder) → Planet (societal) responsibility."],
  ["ch5","Choice overload + nudge","Too many options → defer/avoid; nudge theory uses a smart default (organ-donor) while keeping choice."],
  ["ch5","Inert vs inept set","Inert = brands you're indifferent to; Inept = brands you reject. (Consideration set = the ones you weigh.)"],
  ["ch5","Expectancy-disconfirmation theory","The gap between expectations and performance sets satisfaction; P>E = delight/loyalty."],
  ["ch5","Product constellation","The group of products someone buys that together signal their identity."],
  ["ch6","Razors-and-blades model","Cheap main product, expensive proprietary add-ons (cheap printer, pricey ink)."],
  ["ch6","Supplier development","A big buyer trains/develops its suppliers to make better products."],
  ["ch8","Laddering","Depth-interview technique: keep asking 'why?' to reach the terminal needs."],
  ["ch8","Lab vs field validity","Lab = internal validity (control); Field/test market = external validity (generalizes)."],
  ["ch9","Shifting loyal","Loyal to one brand, then switches and stays loyal to another (Dunkin'→Starbucks)."],
  ["ch9","Positioning statement","Who the target is + what needs are met + why the brand is the best option."],
  // ---- exam-day 'gotchas' ----
  ["ch3","Generational birth years","Boomers 1946–64; Gen X 1965–80; Millennials 1981–96; Gen Z 1997–2012."],
  ["ch3","Which generation = the 'baby bust'?","Generation X (1965–1980) — birth rates fell after the boom."],
  ["ch3","Millennials' nickname","'Echo boom' / 'baby boomlet' (the boomers' children)."],
  ["ch4","Astroturfing","Faking grassroots support — making company/paid promotion look like real consumer enthusiasm (via sockpuppets = fake identities)."],
  ["ch1","Tell the 4 utilities apart","Form = made/customized; Place = WHERE; Time = WHEN/speed; Possession = easy to obtain/pay (credit, delivery)."],
  ["ch1","Cognitive dissonance","Post-purchase doubt / buyer's remorse (e.g., seeing it cheaper right after buying)."],
  ["ch9","Mass customization vs Multisegment","Mass customization = a CUSTOM product per person (segment of one). Multisegment = DIFFERENT existing products for different groups."]
];

/* ---------- QUESTION ARCHETYPES (pattern trainer) ----------
   ordered by priority; first match wins. Tested at runtime over the question text. */
const ARCHETYPES = [
  ["🧮 Computation (share/index/NPS/MAM/TLC)", /market share|index for|net promoter|nps|multi-?attribute|weighted rating|lifetime cost|tlc|cost savings/i],
  ["🌍 Which environmental FORCE/sector?", /environmental force|which.*(force|sector)|social, economic|macro-?environment/i],
  ["🏢 Environment LEVEL (macro/micro/internal)", /level.*environment|macro vs|micro-?environment|which level of the marketing/i],
  ["⚖️ Ethical–Legal matrix", /legal and|unethical but legal|legal but unethical|ethical.*legal|illegal and/i],
  ["🤝 CSR / responsibility type", /social responsib|profit responsib|stakeholder|societal responsib|cause marketing|green ?wash|green marketing/i],
  ["🧠 Moral philosophy", /moral idealism|utilitarian|moral philosophy/i],
  ["🛒 Buying-center role", /buying center|purchasing agent|gatekeeper|decider|which role/i],
  ["🔁 Buyclass (new/straight/modified)", /buy-?class|new buy|straight re-?buy|modified re-?buy/i],
  ["🏭 Organizational buyer type", /type of organizational buyer|reseller|industrial buyer|government buyer/i],
  ["💲 Type of cost", /type of cost|switching cost|operating cost|life-?cycle cost/i],
  ["🔬 Research type / method", /exploratory|descriptive research|causal research|focus group|depth interview|ethnograph|which research|independent variable|dependent variable/i],
  ["🧾 Memory measure", /free recall|cued recall|recognition/i],
  ["🔀 DMP stage", /decision-making process|problem recognition|information search|evaluation of alternativ|post-?purchase|feedback phase/i],
  ["🎯 Targeting strategy", /targeting strateg|mass marketing|concentration|multisegment|mass customization|niche/i],
  ["📍 Positioning / perceptual map", /positioning|perceptual map|points of (parity|difference)|head-to-head/i],
  ["✂️ Segmentation criterion", /segmentation criterion|differential response|measurab|reachab|profitab/i],
  ["🧰 Type of utility", /type of utility|which.*utility/i],
  ["😊 Satisfaction / loyalty", /satisfaction|delight|brand loyal|split loyal|variety seeker/i],
  ["🏷️ Orientation", /orientation/i],
  ["📦 4 P's / marketing mix", /marketing mix|four ps|element of the marketing/i]
];
function archetypeOf(q){
  const t=q.q+" "+q.choices.join(" ");
  for(const [name,re] of ARCHETYPES) if(re.test(t)) return name;
  return "📖 Definitions / other";
}
