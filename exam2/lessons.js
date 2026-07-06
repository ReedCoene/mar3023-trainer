/* ============================================================
   Exam 2 COMPREHENSIVE LESSON CONTENT (overrides CHAPTERS[].sections).
   Built from the Noteshells + lecture decks + Computational Review.
   Chapters: ch11 Product · ch10 New Product · ch12 Services ·
             ch18 IMC · ch19 Advertising/Sales Promo · ch20 Personal Selling.
   ============================================================ */
const LESSONS = {

  /* ===================== CH 11 — PRODUCT STRATEGY (Seg 8) ===================== */
  ch11:[
    { h:"What a Product Is — the 3 Levels", items:[
      "<b>Product</b> = a good, service, or idea consisting of a bundle of <b>tangible and intangible benefits</b>. It's more than a physical thing.",
      "Key distinction: <b>features vs. benefits</b> — customers buy benefits, not features.",
      "<b>Core benefit</b> = the basic reason the customer buys / the job the product does (the burger at a burger joint). If the core want isn't met, satisfaction collapses.",
      "<b>Expected benefit</b> = what a buyer <i>assumes</i> is included as standard (\"like most openers, it has a bottle-cap opener\").",
      "<b>Augmented benefit</b> = above-and-beyond extras that <i>delight</i> and aren't standard (a novelty design, a free surprise gift). Over time, augmented features become <i>expected</i>.",
      "<b>Trap:</b> the same feature can move levels over time — a delighter today becomes an expectation tomorrow (e.g. Amazon one-click was augmented, now expected)."
    ]},
    { h:"Product Item, Line & Mix", items:[
      "<b>Product Item</b> = a specific product identified by its ordering code / <b>SKU</b> (Stock Keeping Unit).",
      "<b>Product Line</b> = a group of <b>closely related</b> products (e.g. all of a company's laptops).",
      "<b>Product Mix</b> = the <b>set of ALL product lines</b> a company sells.",
      "<b>Example:</b> ASUS's Vivobook (travel), ProArt (design), and gaming laptops are each a distinct <i>line</i>; together they form ASUS's <i>mix</i>."
    ]},
    { h:"The Product Life Cycle (PLC)", items:[
      "Four stages: <b>Introduction → Growth → Maturity → Decline</b> (Decline is sometimes split, giving five).",
      "<b>Introduction</b> — build <b>awareness</b>; buyers = <b>Innovators</b> (venturesome, well-educated, first to buy).",
      "<b>Growth</b> — competitors flood in; goal = <b>stress differentiation</b> (comparative advertising); buyers = <b>Early Adopters</b>.",
      "<b>Maturity</b> — sales peak; goal = <b>hold/maintain market share</b>; buyers = <b>Early & Late Majority</b>.",
      "<b>Decline</b> — sales fall; buyers = <b>Laggards</b> (tradition-bound, last to adopt).",
      "<b>The 5 adopter categories &amp; their %s (Figure 11-5):</b> <b>Innovators 2.5%</b> (venturesome, well-educated, first to buy) · <b>Early Adopters 13.5%</b> (opinion leaders others copy) · <b>Early Majority 34%</b> (deliberate, adopt just before the average) · <b>Late Majority 34%</b> (skeptical, adopt after the average) · <b>Laggards 16%</b> (tradition-bound, last). These map onto the PLC: Innovators buy at Introduction, Early Adopters in Growth, the two Majorities at Maturity, Laggards in Decline.",
      "<b>Decline-stage STRATEGIES (know both — either can be the right answer):</b> <b>Harvesting</b> = stop investing and <i>milk</i> the product for its last profits — cut marketing &amp; R&amp;D, keep selling to whoever's left, collect the cash before it dies. <b>Deletion / Divesting</b> = <i>drop</i> the product entirely (discontinue it).",
      "<b>🔑 THE test pattern:</b> almost every PLC question is <i>identify the stage → match the strategy</i>, and the wrong choices are just the right strategy for a <i>different</i> stage. <b>Introduction → gain awareness · Growth → stress differentiation · Maturity → maintain/hold share · Decline → harvest OR delete.</b> Nail the stage and the answer falls out.",
      "<b>No set length:</b> the time to move through the PLC <b>depends on the product type</b> (consumer products usually shorter than business products).",
      "<b>Primary → Selective demand (the PLC demand shift):</b> In <b>Introduction</b> (few competitors), promotion builds <b>PRIMARY demand</b> = desire for the whole <i>product class/category</i> (\"buy electric cars\"). As competitors pour in during <b>Growth</b>, the firm switches to building <b>SELECTIVE demand</b> = preference for <i>its specific brand</i> (\"buy OUR electric car\"). TRAP answers: <i>secondary, generic,</i> and <i>derived</i> are NOT the terms — it's primary (class) vs. selective (brand).",
      "<b>Pricing at Introduction — Skimming vs Penetration (the 2 most common):</b> <b>Skimming pricing</b> = set a HIGH initial price to recover development costs and profit from early adopters who aren't price-sensitive (price is lowered later). <b>Penetration pricing</b> = set a LOW initial price to build unit volume fast and discourage competitors from entering.",
      "<b>Each stage's marketing objective (memorize):</b> <b>Introduction</b> → gain awareness &amp; stimulate <b>trial</b>. <b>Growth</b> → stress <b>differentiation</b> / build selective demand / fend off new rivals. <b>Maturity</b> → <b>maintain &amp; defend market share</b> (hold your position). <b>Decline</b> → <b>harvest</b> (milk remaining profit) or <b>divest</b> (drop it). A product declines fastest when it's <i>replaced by an improved product</i> or a superior technology.",
      "<b>Extending the PLC (at maturity):</b> Market Penetration, Market Development, Product Modification, Product Repositioning. (Repositioning often <i>reacts to a competitor's position</i> — e.g. New Balance vs Nike/Adidas.)"
    ]},
    { h:"Three PLC 'Levels' + Product Types", items:[
      "<b>Product Class</b> = the entire category/industry (e.g. prerecorded music; automobiles).",
      "<b>Product Form</b> = a variation <i>within</i> the class (streaming vs CD; electric vs gas cars).",
      "<b>Brand</b> = the individual brand's own cycle.",
      "<b>High-learning product</b> = needs consumer education (slow start). <b>Low-learning</b> = immediate benefits, quick uptake.",
      "<b>Fashion product</b> = rises, declines, then may return. <b>Fad product</b> = sudden spike then rapid crash, often <b>&lt;1 year</b>."
    ]},
    { h:"BDI / CDI (COMPUTATIONAL — guaranteed)", items:[
      "<span class='formula'>BDI = ($ brand sales per capita in territory ÷ $ brand sales per capita nationally) × 100</span>",
      "<span class='formula'>CDI = ($ category sales per capita in territory ÷ $ category sales per capita nationally) × 100</span>",
      "\"Per capita\" = divide dollars by the number of customers in that territory (or nationally).",
      "<b>Reading the quadrant:</b> <b>High BDI + High CDI</b> → strong brand in a strong market, invest. <b>Low BDI + High CDI</b> → category thrives but your brand lags → <b>research WHY you under-perform</b>. <b>High BDI + Low CDI</b> → you win a weak market, maybe harvest. <b>Low + Low</b> → reduce investment.",
      "<b>Worked example:</b> NY brand/cap = $5.92M/4M = $1.48; national brand/cap = $20M/10M = $2 → BDI = 1.48/2 ×100 = <b>74</b>. NY cat/cap = $53.76M/4M = $13.44; national = $80M/10M = $8 → CDI = 13.44/8 ×100 = <b>168</b>. Low BDI + high CDI → research the reasons."
    ], matrix:{
      title:"BDI × CDI — what action to take",
      corner:"",
      colLabels:["CDI HIGH (&gt;100)<br>category thrives here","CDI LOW (&lt;100)<br>category is weak here"],
      rowLabels:["BDI HIGH (&gt;100)<br>your brand thrives","BDI LOW (&lt;100)<br>your brand lags"],
      cells:[
        ["<b>✅ Invest &amp; build.</b> Strong brand in a strong market — pour resources in to defend and grow.",
         "<b>🐄 Maintain / harvest.</b> Your brand wins a category that's weak here — protect the cash cow, don't over-invest."],
        ["<b>🔎 Research WHY you lag.</b> The category sells great but your brand doesn't — find &amp; fix the reason before investing. <i>(This is where Peet's &amp; Target land.)</i>",
         "<b>❌ Reduce / pull out.</b> Both your brand and the category are weak here — cut investment or exit."]
      ]
    }},
    { h:"Branding & Brand Equity", items:[
      "<b>Brand name / brand mark / trade character / logo / trademark</b> — know the distinctions (name = spoken part; mark = symbol; trade character = a personified mark like the Geico Gecko; trademark = legally protected).",
      "<b>Family branding</b> (one name across products) vs <b>Multiple branding</b> (distinct names) vs <b>Co-branding</b>.",
      "<b>Subbranding</b> = combining a corporate/family brand with a NEW brand name to distinguish part of the line (Toyota + <b>Lexus</b>; Gatorade + Bolt24). An <b>endorsed brand</b> is a new brand backed by an established parent brand.",
      "<b>National brands</b> vs <b>Private-label</b> (store) brands; <b>Licensing</b>.",
      "<b>Brand Equity</b> = added value a name gives a product. <b>4 components:</b> Awareness, Associations, Perceived Quality, Loyalty.",
      "<b>Line extension</b> = new variant in the SAME category (new flavor/size). <b>Category extension</b> = brand enters a DIFFERENT category.",
      "<b>Packaging functions:</b> contain/protect, facilitate use, communicate, fit channel needs. A <b>product manager</b> is also called a <b>brand manager</b>.",
      "<b>Consumer-brand relationships &amp; Brand community:</b> a <b>brand community</b> = consumers building relationships <i>with each other</i> because of shared loyalty/interest in the same brand (two strangers bonding over Trader Joe's bags = brand community). A <b>consumer-brand relationship</b> is between one consumer and the brand itself.",
      "<b>Emerging brand concepts:</b> a <b>brand community</b> is when customers build relationships <i>with each other</i> out of shared loyalty to/interest in the same brand (Harley owners; a Trader Joe's superfan group) — it deepens loyalty and turns customers into advocates. Related: <b>consumer–brand relationships</b>."
    ]}
    ,{ h:"🔍 Deep-dive: niche facts & exam traps", items:[
      "<b>More branding &amp; product terms tested as answer choices:</b> <b>Subbranding</b> = pairing a parent brand with a subordinate one for a specific line (Marriott → Courtyard by Marriott). <b>Consumer products</b> (convenience/shopping/specialty/unsought) vs <b>business / B2B products</b> — bought for a firm's own operations (e.g. <b>support products</b>, supplies), which have <b>derived demand</b> (their demand flows from demand for something else). Real-but-usually-WRONG distractors to recognize: <b>demarketing</b> (deliberately discouraging demand), <b>creeping featurism / feature bloat</b> (piling on features until usability suffers), <b>product constellation</b> (a set of products that together signal a social role).",
      "<b>Consumer product classes (know the buying behavior for each):</b> <b>Convenience</b> = frequent, low price, little effort/shopping (subtypes: <i>staple, impulse, emergency</i>). <b>Shopping</b> = compared on price/quality/style, some effort (appliances, furniture). <b>Specialty</b> = special effort, brand-insistent, few outlets (Rolex, a specific stylist). <b>Unsought</b> = consumer <i>doesn't know about it or doesn't initially want it</i> (thesaurus, life insurance) — very infrequent, awareness is essential.",
      "<b>Branding strategies (don't mix these up):</b> <b>Multiproduct / family branding</b> = ONE brand name on all products (Nike, Samsung); enables <b>line extension</b> (same category, new variant) and <b>brand/category extension</b> (new category). <b>Co-branding</b> = two brands on one product. <b>Multibranding</b> = a DIFFERENT brand name for each product line (Nestlé: KitKat, Nespresso; P&amp;G). <b>Private-label / reseller branding</b> = made for a retailer, sold only there (Walmart Great Value, Costco Kirkland). <b>Mixed</b> = both. <b>Generic</b> = no brand.",
      "<b>Brand equity</b> = the added value a brand name gives beyond function. <b>Advantages:</b> a <b>competitive advantage</b>, a <b>price premium</b>, and easier acceptance of new products (extensions). Built via awareness → associations/perceived quality → loyalty.",
      "<b>Packaging &amp; labeling functions:</b> communication, functional (protect/store/convenience), and perceptual (shape/color shape brand image). <b>Environmental challenges</b> = solid-waste growth, landfill shortage, packaging-material composition/disposal, recycling. TRAP: <b>defective products is NOT a packaging challenge.</b> <b>FTC rule:</b> a product may be labeled <b>“new” for only 6 months.</b>",
      "<b>Warranties:</b> <b>express</b> (stated) vs <b>implied</b> (assumed by law); <b>limited</b> vs <b>full</b>. Stronger warranties signal higher quality but raise liability.",
      "<b>Extending the PLC — two families:</b> <b>Product modification</b> (change quality, performance, or style) and <b>Market modification</b> (find new users, new uses, or increase usage). Plus <b>Market penetration / development</b> and <b>Repositioning</b> (reasons: react to a competitor, reach a new market, catch a rising trend, or change the value offered).",
      "<b>Creeping featurism</b> = piling on so many features/updates that the product becomes confusing and harder to use — the downside of over-doing product modification (e.g. a remote or headphone line with too many buttons/modes).",
      "<b>Product types by adoption speed:</b> <b>High-learning</b> (needs education, slow start), <b>Low-learning</b> (instant benefit, quick uptake, easily copied), <b>Fashion</b> (rises, declines, then returns), <b>Fad</b> (spikes then crashes, usually &lt;1 yr).",
      "<b>Tested examples to remember:</b> prerecorded music = product <i>class</i>, streaming/CD = product <i>form</i>; automobiles = class, electric cars = form; Gatorade → Bolt24 = <b>line extension</b>; Apple II (1977) first buyers = <b>innovators</b>; iMac fits every category <i>except</i> ‘nondurable’ (it's a durable good)."
    ]}
  ],

  /* ===================== CH 10 — NEW PRODUCT STRATEGY (Seg 9) ===================== */
  ch10:[
    { h:"Levels of Innovation", items:[
      "<b>Continuous innovation</b> — minor improvement, <b>no new behavior</b> to learn (a new toothpaste flavor).",
      "<b>Dynamically continuous</b> — some learning required but the <b>basic use is unchanged</b> (electric toothbrush, AirPods, Face-ID vs fingerprint). This is the most-tested one.",
      "<b>Discontinuous innovation</b> — an <b>entirely new</b> product category requiring users to learn <b>from the ground up</b> (the first passenger-to-the-Moon aircraft).",
      "<b>Tell them apart:</b> No learning = continuous; a little learning, same purpose = dynamically continuous; brand-new behavior = discontinuous."
    ]},
    { h:"New-Product Development Process (7 stages)", items:[
      "<b>1. New-Product Strategy</b> — set the goals a new product should achieve (comes FIRST). Objectives like \"add a service\" or \"extend into a new category\" live here.",
      "<b>Protocol</b> = a statement written <b>BEFORE development</b> that identifies (a) a well-defined <b>target market</b>, (b) the customer's specific <b>needs/wants/preferences</b>, and (c) exactly what the product <b>will be and do</b> to satisfy them. A missing or vague protocol is a <b>top reason new products fail</b>.",
      "<b>2. Idea Generation</b> — the widest stage; the most ideas exist here.",
      "<b>3. Screening & Evaluation</b> — does it fit the firm's values/mission (feasibility)?",
      "<b>4. Business Analysis</b> — the <b>financials + fit</b>: cost to procure/manufacture, the price it could sell for, marketing/product <b>synergies</b> with existing lines, and <b>cannibalization</b> potential (will it steal sales from your OWN products?).",
      "<b>5. Prototype (Development)</b> — build and test a mockup/sample.",
      "<b>6. Market Testing</b> — real people test the product in experiments/surveys (a test market).",
      "<b>7. Commercialization</b> — the product is <b>positioned and launched in full-scale production and sales</b>.",
      "<b>Crowdsourcing</b> = welcoming/encouraging new ideas from any source (customers, public). <b>Crowdfunding</b> (Kickstarter) = raising money. A <b>cross-functional team</b> (Marketing, Sales, R&D, Production, Finance) runs NPD."
    ]},
    { h:"Consumer Adoption Process (individual level)", items:[
      "<b>Awareness → Interest → Evaluation → Trial → Adoption.</b>",
      "<b>Awareness</b> = simply knowing it exists. <b>Interest</b> = motivated to learn more (seek info, ask questions) but <b>not yet</b> deep-comparing.",
      "<b>Evaluation</b> = actively <b>comparing</b> features/benefits/value vs. alternatives (deep research). <b>Trial</b> = first hands-on use. <b>Adoption</b> = decides it meets expectations and keeps it.",
      "<b>Trap:</b> a consumer doing heavy research/comparison is at <b>Evaluation</b>, not Interest."
    ]},
    { h:"Diffusion — the 5 Factors (rate of adoption)", items:[
      "<b>Relative Advantage</b> — how much better than existing options (compare-to-rivals strategies).",
      "<b>Communicability</b> — how easily benefits are observed/described (word-of-mouth, demos).",
      "<b>Complexity</b> — how hard to understand/use (higher = slower).",
      "<b>Compatibility</b> — how well it fits existing habits/values (works on your phone, etc.).",
      "<b>Risk</b> — perceived downside (a Q&A addressing virus/safety fears reduces Risk).",
      "<b>Match-the-factor questions:</b> address fears = Risk · WOM/observe = Communicability · beat rivals = Relative Advantage · fits current life = Compatibility.",
      "<b>TRAP:</b> <b>Scalability</b> is NOT one of the five diffusion factors — it's a managerial concern, not a consumer-adoption factor. (Also not factors: brand loyalty, price.)"
    ]}
    ,{ h:"🔍 Deep-dive: niche facts & exam traps", items:[
      "<b>Innovation-term distractors:</b> the course's official levels are ONLY <b>continuous → dynamically continuous → discontinuous.</b> ‘Radical,’ ‘disruptive,’ ‘discrete,’ ‘a jump in innovation,’ ‘somewhat continuous’ are decoys — real-sounding, but not the framework's term. <b>Me-too innovation</b> = copying a rival's new product. <b>Viral marketing</b> (spreads by sharing/word-of-mouth) and <b>ambush marketing</b> (marketing around an event you did NOT pay to sponsor) also show up as choices.",
      "<b>Why new products FAIL (marketing reasons — high-yield):</b> (1) insignificant point of difference, (2) incomplete market &amp; product definition <i>before</i> development, (3) too little market attractiveness, (4) poor execution of the marketing mix, (5) poor product quality or a too-sensitive product, (6) bad timing, (7) no economical access to buyers.",
      "<b>Newness is relative:</b> a product can be new to the <b>company</b>, new to the <b>market/world</b>, or a <b>reposition/line extension</b>. The 3 innovation levels map to how much the CONSUMER must learn: <b>Continuous</b> (no new behavior) → <b>Dynamically Continuous</b> (some learning, same basic use — electric toothbrush, AirPods, Face-ID) → <b>Discontinuous</b> (all-new behavior — the first car, the Moon aircraft).",
      "<b>Newness = RISK (the firm's view):</b> a <b>product line extension</b> (a small tweak to an existing line) is the <b>LOWEST-risk</b> new-product strategy; a <b>radical invention</b> (a brand-new, new-to-the-world product) is the <b>HIGHEST-risk</b> (and highest potential reward). Rule: the more newness, the more risk.",
      "<b>NPD stages — the details:</b> <b>New-product strategy</b> (set goals first) → <b>Idea generation</b> (sources: employees, customers/<b>crowdsourcing</b>, R&amp;D, competitors, suppliers) → <b>Screening &amp; evaluation</b> (fit with mission — internal + external/concept tests) → <b>Business analysis</b> (financials: cost to make + price it can sell for) → <b>Development</b> (build a <b>prototype</b>, lab &amp; safety tests) → <b>Market testing</b> (test markets: <i>standard, controlled, simulated</i>; real consumers try it) → <b>Commercialization</b> (full launch; watch <b>slotting fees</b> and regional rollout).",
      "<b>5 diffusion factors + resistance:</b> Relative advantage, Communicability, Complexity, Compatibility, Risk. Barriers slowing adoption: <b>usage</b> barrier, <b>value</b> barrier, and <b>risk</b> barriers (physical / economic / social / psychological). Address ‘virus/safety fears’ = a RISK barrier; word-of-mouth/observability = Communicability.",
      "<b>Me-too innovation</b> = copying a competitor's innovation (rivals following Tesla). <b>Crowdsourcing</b> = soliciting ideas from anyone; <b>Crowdfunding</b> (Kickstarter) = raising money. A <b>cross-functional team</b> (Mktg, Sales, R&amp;D, Production, Finance) runs NPD.",
      "<b>Tested examples:</b> Apple's failures = Apple III, Lisa, Newton, Macintosh Portable, ‘Hockey Puck’ mouse (CarPlay was a SUCCESS); ‘understand the cost to make &amp; price to sell’ = Business Analysis; ‘real people test it in surveys’ = Market Testing; deep-research-and-compare = the <b>Evaluation</b> adoption stage (not Interest)."
    ]}
  ],

  /* ===================== CH 12 — SERVICES MARKETING (Seg 10) ===================== */
  ch12:[
    { h:"The 4 I's of Services", items:[
      "<b>Intangibility</b> — can't be physically held/seen before purchase. <b>Fix:</b> add tangible cues — a mascot/spokesperson personifies the service (Geico Gecko, \"Felipe the Flying Squirrel\").",
      "<b>Inconsistency</b> — quality varies by who/when/where. <b>Fix:</b> <b>standardize</b> — training, a consistent process (a makeup masterclass).",
      "<b>Inseparability</b> — produced and consumed at the same time; the provider is part of it. <b>Fix:</b> <b>involve the customer</b> in the service (real-time feedback in a mirror).",
      "<b>Inventory</b> — you can't stockpile a service; <b>idle production capacity</b> is lost when no one shows up. <b>Fix = capacity / yield management</b>: match demand to capacity via off-peak pricing, overbooking, or dynamic pricing (<b>yield management</b> = any method to lift demand during idle periods).",
      "<b>Trap:</b> a scenario resolving BOTH standardized training AND customer participation = resolving <b>Inconsistency &amp; Inseparability</b>."
    ]},
    { h:"Levels of Service & Classifying Services", items:[
      "<b>Core → Expected → Augmented → Potential</b> service (mirrors the 3 product levels, plus Potential = everything that might someday be added).",
      "Amazon one-click was <b>augmented</b> when new; now it's <b>expected</b> across retail.",
      "<b>Classifying services:</b> by <b>delivery</b> (people-based vs equipment-based) and by <b>ownership</b> (for-profit / nonprofit / government-sponsored). A security guard, plumber, and management consultant are all <b>people-based</b> (unskilled/skilled/professional labor).",
      "<b>Service blueprint</b> = an expanded customer-contact audit including all employee actions, treating services as \"experiences.\""
    ]},
    { h:"Service Quality — RATER + the Gap Model", items:[
      "<b>RATER dimensions:</b> <b>R</b>eliability, <b>A</b>ssurance, <b>T</b>angibles, <b>E</b>mpathy, <b>R</b>esponsiveness.",
      "<b>Quality gap</b> = difference between customer <b>expectations</b> and <b>perceptions</b>.",
      "<b>Extended gap model — the 4 gaps:</b>",
      "• <b>Knowledge gap</b> — management doesn't <i>know</i> what customers expect (misunderstands them).",
      "• <b>Standards gap</b> — management knows, but sets specs that don't match.",
      "• <b>Delivery gap</b> — standards are set &amp; communicated, but employees <b>fail to perform</b> them (Fred's baggers forget to offer).",
      "• <b>Communications gap</b> — promises/ads don't match the delivered service.",
      "<b>Knowledge vs Delivery is the trap:</b> if management knew and told staff but staff didn't do it = <b>Delivery</b>."
    ]},
    { h:"Disney's Service-Recovery Matrix", items:[
      "Two axes: <b>Problem Severity</b> (low/high) × <b>Company Responsibility</b> (low/high).",
      "<b>Low severity + Low responsibility → Empathy</b> (apologize).",
      "<b>Low severity + High responsibility (firm's fault) → \"Fix it!\"</b> (replace the wrong order; fix the mischarge).",
      "<b>High severity + Low responsibility → \"Hero\"</b> (go above and beyond though not at fault).",
      "<b>High severity + High responsibility → \"Red Carpet\"</b> (major make-good — resort stay, tickets).",
      "<b>Worked:</b> people hurt at a party the fraternity over-filled = high severity + their fault = <b>Red Carpet</b>. A 49¢→94¢ mischarge = low severity + firm's fault = <b>Fix it!</b>"
    ]},
    { h:"CLV & Customer Retention (COMPUTATIONAL)", items:[
      "Customers get more profitable over time via: larger/more-frequent purchases, reduced operating costs, referrals, price premiums.",
      "<span class='formula'>CLV = (visits/period) × ($ profit per visit) × (average lifetime) </span> — the class version. It's based on <b>profit</b>, not revenue.",
      "<b>Worked:</b> $5 profit/bottle × 3.6 bottles/mo × 12 × 5 yrs = <b>$1,080</b>. Simple gym version: (Monthly spend × 12) × years = (80×12)×5 = <b>$4,800</b>.",
      "This <b>over-estimates</b> CLV because it assumes customers stay the whole average lifetime and ignores defection and net-present-value of future money.",
      "<b>Frequency (relationship) marketing tools — know each:</b> <b>Frequency marketing</b> rewards repeat usage. <b>Share of Wallet</b> = grow the % of a customer's total category spend you capture (Rhode expanding into blushes, lip balms, phone cases = chasing share of wallet). <b>Loyalty programs</b> = points/perks for repeat business. <b>Lock-in</b> = making it costly/inconvenient to switch so customers stay. <b>Database/CRM marketing</b> = using customer data to target &amp; personalize. <b>RFM</b> = ranking customers by Recency, Frequency, Monetary value.",
      "<b>Levels of market offering (increasing value):</b> Commodity → Good → Service → <b>Experience</b> (most valued — a bookstore's couches/Wi-Fi/music create an experience)."
    ]}
    ,{ h:"🔍 Deep-dive: niche facts & exam traps", items:[
      "<b>The 4 I's — with the fix for each:</b> <b>Intangibility</b> (can't touch → add tangible cues/mascot: Geico Gecko) · <b>Inconsistency</b> (quality varies → standardize with training/process) · <b>Inseparability</b> (made &amp; used together → involve the customer) · <b>Inventory</b> (can't stockpile; <b>idle production capacity</b> is lost → off-peak pricing, manage capacity).",
      "<b>Search vs Experience vs Credence qualities (know examples):</b> <b>Search</b> properties (color, size, style) can be judged <i>before</i> buying — clothing, jewelry. <b>Experience</b> properties are judged <i>during/after</i> — restaurants, child care, a haircut. <b>Credence</b> properties are hard to judge <i>even after</i>, by specialists — medical diagnoses, legal/financial advice. More credence = more perceived risk.",
      "<b>Classifying services (textbook Ch 12):</b> by <b>delivery</b> — people-<i>delivered</i> (unskilled/skilled/professional) vs <b>equipment-delivered</b> (ATMs, taxis, airlines, movie theaters, self-checkout); and by <b>ownership</b> — for-profit, nonprofit, or government-sponsored. The <b>service continuum</b> runs goods-dominant → service-dominant (salt = pure good; teaching = pure service).",
      "<b>Industrial (business) services:</b> among business products, <i>services</i> are intangible support activities firms buy — e.g. <b>photocopier maintenance</b>, consulting, repair. (A tractor or syringes = goods, not services.)",
      "<b>Inventory carrying cost of a service</b> = the cost of paying idle people/equipment. It's LOW where providers work mostly on commission or with little idle equipment (a <b>hair salon</b>, real-estate agency) and HIGH where expensive capacity sits idle (airlines, hospitals).",
      "<b>RATER</b> service-quality dimensions: <b>R</b>eliability, <b>A</b>ssurance, <b>T</b>angibles, <b>E</b>mpathy, <b>R</b>esponsiveness. <b>Extended gap model — 4 gaps:</b> Knowledge (mgmt misreads wants) → Standards (specs don't match) → <b>Delivery</b> (staff don't perform set standards) → Communications (promises ≠ delivery).",
      "<b>Disney service recovery matrix</b> = severity × responsibility: low/low = <b>Empathy</b>; low severity + firm's fault = <b>Fix it!</b>; high severity + not their fault = <b>Hero</b>; high/high = <b>Red Carpet</b>.",
      "<b>The 3 'audit' tools (don't confuse them):</b> <b>Customer contact audit</b> = a <b>flowchart</b> of every touchpoint where a customer interacts with the service (booking → check-in → checkout). <b>Service blueprint</b> = an <i>expanded</i> contact audit that adds all employee actions and treats the service as an ‘experience.’ <b>Gap analysis / service audit</b> = comparing customer <i>expectations</i> vs the <i>actual</i> experience (e.g. a restaurant's pay-the-bill questionnaire).",
      "<b>Managing capacity (the Inventory 'I') &amp; other terms:</b> services can't be stored, so <b>idle production capacity</b> (empty seats/rooms) is lost forever — firms use <b>off-peak pricing</b> and <b>yield management</b> so <b>demand matches capacity</b> over the demand cycle. <b>Internal marketing</b> = focus on your <b>employees</b> first (as internal customers) before customer-facing programs. <b>Ancillary services</b> = the degree of support/service required <i>after</i> the sale. <b>CEM</b> (customer experience management) = the process of managing the <i>entire</i> customer experience within the company.",
      "<b>CLV</b> = visits × profit/visit × years (profit, not revenue).",
      "<b>Levels of market offering</b> (rising value): Commodity → Good → Service → <b>Experience</b> (the <b>‘experience economy’</b> — an experience is the most-valued, most-differentiated offering). The <b>sharing/collaborative economy</b> (Uber, Airbnb) monetizes idle assets. <b>CEM</b> = customer experience management (managing the whole experience within the firm)."
    ]}
  ],

  /* ===================== CH 18 — IMC (Seg 11) ===================== */
  ch18:[
    { h:"IMC & the Promotional Mix", items:[
      "<b>IMC</b> = designing marketing-communication programs that <b>coordinate all promotional activities</b> to deliver a <b>consistent message/image</b> across all audiences.",
      "<b>The 5 promotional-mix elements:</b> <b>Advertising, Personal Selling, Sales Promotion, Public Relations, Direct Marketing.</b>",
      "<b>Mass selling</b> (reaches groups) = advertising, sales promotion, public relations (+ publicity, a form of PR). <b>Personal selling</b> is customized/one-to-one — <b>least</b> suited to mass selling.",
      "<b>Nontraditional (\"other\") IMC tools:</b> Sponsorships, Product Placements, Infomercials, Branded Entertainment (+ guerrilla marketing, influencer marketing).",
      "Distinguish them: <b>Product placement</b> = brand shown within content; <b>Branded entertainment</b> = brand woven into/creating the content; <b>Sponsorship</b> = paying to attach your brand to an event/venue; <b>Guerrilla (guerilla) marketing</b> = unconventional, low-cost, surprise tactics — the budget-friendly attention-grab (Jenny the emerging designer's stunt).",
      "<b>Influencer marketing tiers:</b> <b>Micro-influencers</b> = small audiences but more relatable/authentic engagement (Sephora's #SephoraSquad deliberately used them) vs mega/celebrity influencers = huge reach, less trust. Influencer marketing is based on <b>personal influence</b> as a behavioral concept."
    ]},
    { h:"The Communication Process", items:[
      "<b>Source</b> (has info) → <b>encodes</b> a <b>message</b> → sent through a <b>channel/medium</b> → <b>receiver</b> <b>decodes</b> and <b>responds</b> → <b>feedback</b> returns to the source. <b>Noise</b> can distort any step.",
      "<b>Roles:</b> the company/salesperson who encodes = <b>Source</b>; the audience that decodes &amp; responds = <b>Receiver</b>. (P&amp;G = source; NASCAR viewers = receivers.)",
      "<b>Source types (2×2):</b> <b>Personal vs Impersonal</b> and <b>Marketer-Controlled vs Independent</b>. A friend's word-of-mouth = <b>Personal + Independent</b> (most trusted). Amazon reviews = Personal + Independent. A paid TV ad = Impersonal + Marketer-Controlled.",
      "<b>Source factors:</b> Credibility, Expertise, Trustworthiness, Attractiveness. Using a <b>deceased celebrity</b> avoids the risk of the spokesperson's image changing."
    ]},
    { h:"Hierarchy of Effects (COMPUTATIONAL)", items:[
      "Stages a prospect moves through: <b>Awareness → Knowledge → Liking → Intention (Preference) → Action (Purchase)</b>. <b>Trial</b> = the actual first purchase/use.",
      "<b>Set the objective by finding the bottleneck:</b> take each stage ÷ the prior stage; the <b>largest ratio</b> = the biggest drop-off = the stage to target.",
      "<b>Worked:</b> 100→90→85→80→75→55 gives ratios 1.11, 1.06, 1.06, 1.07, <b>1.36</b>. The last (Intention→Action) is largest → target that stage."
    ]},
    { h:"Multi-Attribute Model for Message Strategy (COMPUTATIONAL)", items:[
      "Overall attitude = <b>Σ (belief/rating × importance)</b> across attributes. Advertising can change a <b>rating</b> or an <b>importance weight</b>.",
      "<b>Changing a RATING</b> (raise one of YOUR attributes toward 10) affects <b>only your brand</b>. Gain = (10 − current rating) × importance.",
      "<b>Changing an IMPORTANCE weight</b> affects <b>ALL brands</b> that have that attribute — you may help a rival more than yourself. Judge by the <b>RELATIVE</b> gain over competitors.",
      "<b>Strategy pick:</b> compute each option's effect and choose the biggest relative advantage. (Raising a low-rated but important attribute usually wins.)"
    ]}
    ,{ h:"🔍 Deep-dive: niche facts & exam traps", items:[
      "<b>Communication process — every element:</b> <b>Source</b> → <b>encoding</b> → <b>message</b> + <b>channel/medium</b> → <b>decoding</b> → <b>receiver</b> → <b>response</b> → <b>feedback</b>; <b>noise</b> distorts any step. Communication fails when source &amp; receiver have mismatched <b>fields of experience</b> (no shared understanding).",
      "<b>The 5 promotional-mix elements — strengths/weaknesses:</b> <b>Advertising</b> (mass reach, low cost-per-contact, but impersonal &amp; hard to get feedback) · <b>Personal selling</b> (customized, immediate feedback, but very high cost-per-contact) · <b>Sales promotion</b> (short-term boost, but easily copied) · <b>Public relations</b> (credible, but hard to control) · <b>Direct marketing</b> (targeted, measurable, but response rates low / privacy concerns). Mass-selling elements = advertising, sales promotion, PR; personal selling is one-to-one.",
      "<b>Direct marketing forms:</b> direct mail, catalogs, <b>telemarketing</b> — <b>inbound</b> (customer calls a toll-free number to order/get info) vs <b>outbound</b> (the firm calls the customer) — plus direct-response TV/radio and email. It's targeted and measurable, but faces privacy/'junk' pushback.",
      "<b>How the promotional mix is chosen:</b> by (1) <b>target audience</b> (consumers vs business), (2) <b>PLC stage</b> — Intro=<i>inform</i>/awareness, Growth=<i>persuade</i>/preference, Maturity=<i>remind</i>, Decline=minimal; (3) <b>product characteristics</b> (complexity, risk, ancillary service → more personal selling); (4) <b>stage of the buying decision</b> — prepurchase leans advertising/PR, purchase leans personal selling/sales promotion, postpurchase leans personal selling/advertising (reduce dissonance); (5) <b>channel</b> — <b>push</b> (to the trade) vs <b>pull</b> (to consumers).",
      "<b>Source types (2×2):</b> Personal vs Impersonal × Marketer-Controlled vs Independent. A friend's word-of-mouth or a customer review = <b>Personal + Independent</b> (most trusted). <b>Source factors:</b> credibility, expertise, trustworthiness, attractiveness. A <b>deceased celebrity</b> avoids the risk of a spokesperson's image changing.",
      "<b>Hierarchy of effects:</b> Awareness → Knowledge → Liking → Preference/Intention → Purchase (Trial = first actual purchase/use). Pick the objective by dividing each stage by the prior — the <b>largest ratio = biggest drop-off = the stage to target.</b>",
      "<b>MAM message strategy:</b> raising your <b>rating</b> on an attribute helps ONLY your brand (gain = (10−rating)×importance); raising an <b>importance</b> weight helps EVERY brand with that attribute — so judge by the biggest <b>relative</b> gain over rivals.",
      "<b>Nontraditional / ‘other’ IMC tools (distinguish them):</b> <b>Sponsorship</b> (pay to attach your brand to an event/venue) · <b>Product placement</b> (brand shown within content) · <b>Branded entertainment</b> (brand woven into or creating the content) · <b>Infomercial</b> · <b>Influencer marketing</b> (Charli D'Amelio × Dunkin') · <b>Guerrilla marketing</b> (unconventional low-cost surprise)."
    ]}
  ],

  /* ===================== CH 19 — ADVERTISING & SALES PROMOTION (Seg 12) ===================== */
  ch19:[
    { h:"Goals & Types of Advertising", items:[
      "<b>The 5 advertising goals — know what each does (maps to the PLC):</b> <b>Inform</b> = build awareness for a NEW product (Introduction). <b>Persuade</b> = convince buyers yours is best, often comparative (Growth). <b>Reinforce</b> = <i>reassure CURRENT customers they made the right choice</i> / reduce buyer's remorse (Maturity — e.g. Hot Paws telling owners they chose well). <b>Remind</b> = keep a well-known brand top-of-mind (late Maturity). <b>Sell</b> = drive an immediate purchase. A brand-new product → <b>Inform</b> first.",
      "<b>Product advertising types:</b> <b>Pioneering</b> (informational — builds <b>primary</b>/category demand), <b>Competitive</b> (persuasive — builds <b>selective</b>/brand demand; \"preference for a specific brand\" = selective demand), <b>Reminder</b> (keeps the brand top-of-mind).",
      "<b>Institutional advertising</b> promotes the <b>organization's image/idea/values</b>, not a specific product (e.g. an ad about a firm's sustainability commitment).",
      "<b>Ad industry:</b> Full-service agency (one-stop shop) vs Limited-service (specializes in one aspect, e.g. creative or media) vs In-house."
    ]},
    { h:"Theories & Subliminal Stimuli", items:[
      "<b>Theories:</b> Hierarchy of Effects (think→feel→do), Low-Involvement Hierarchy (think→do→feel), <b>Dual Mediation</b> (attitude-toward-the-ad shapes brand attitude → purchase intention).",
      "<b>Subliminal advertising — 3 types:</b>",
      "• <b>Ambiguous stimuli</b> — abstract/symbolic; open to multiple interpretations.",
      "• <b>Embedded stimuli</b> — hidden/placed images meant to be processed more deeply (even if technically visible, like the NBC peacock).",
      "• <b>Truly subliminal</b> — presented <b>below the conscious threshold</b> (flashed too fast to see)."
    ]},
    { h:"Media Strategy", items:[
      "<b>Medium</b> = the general type (television). <b>Media vehicle</b> = the specific carrier (a particular show).",
      "<b>Reach</b> = # of target consumers exposed at least once. <b>Frequency</b> = average # of exposures per person. <b>Media mix</b> = the array of media used. Advertisers mix media to <b>maximize exposure while minimizing cost</b>.",
      "<b>Traditional media:</b> TV, radio, newspaper, magazine, outdoor. TV types include network, cable, <b>spot</b> (local slots sold after national ads), and <b>syndicated</b> (local stations lease reruns).",
      "<b>New/digital media:</b> <b>Search</b> (pay to top a query), <b>Display</b> (pay for your ad to \"appear\" on another site's page), Social, Email, Mobile.",
      "<b>Digital &amp; social-media metrics:</b> <b>Impressions</b> = number of times an ad is served. <b>Visitors</b> = total people who visit a site/page in a period; <b>Unique visitors</b> = number of <i>different</i> individuals (each counted once). <b>Engagement</b> = the degree and depth of brand-focused interactions a customer chooses to perform; <b>engagement rate</b> = total customer <b>actions</b> (likes, comments, shares, clicks) ÷ total impressions. <b>Cost-per-action (CPA)</b> = the metric that ties ad cost directly to a RESULT (a click, signup, or sale) — the tightest cost-to-outcome measure. Apps like TikTok use AI to track views/comments/searches and personalize what you're shown.",
      "<b>Social proof</b> = the theory that when people see others doing something (buying, liking, queuing), they assume it's correct and follow — why testimonials, review counts, and 'bestseller' tags work. <b>Reinforcement advertising</b> (\"we haven't changed that great taste\") reassures current users they made the right choice."
    ]},
    { h:"Timing & Media Efficiency (COMPUTATIONAL)", items:[
      "<b>Timing strategies:</b> <b>Continuous</b> (steady all year), <b>Pulsing</b> (year-round with upticks at key times), <b>Flighting</b> (on-then-off bursts).",
      "<span class='formula'>CPM = ad cost ÷ (impressions ÷ 1,000)</span> — cost per thousand viewers.",
      "<span class='formula'>wCPM = ad cost ÷ ((impressions × %-in-target) ÷ 1,000) = CPM ÷ (target proportion)</span>",
      "<b>Lower CPM/wCPM = MORE efficient.</b> For a target-market goal, compare <b>wCPM</b>.",
      "<b>Worked:</b> wCPM(FJ) = $0.40/.20 = $2.00; wCPM(SN) = $0.80/.50 = $1.60 → SN is more efficient; $100 ÷ $1.60 × 1000 = <b>62,500</b> targeted impressions."
    ]},
    { h:"Sales Promotion — Push vs Pull", items:[
      "<b>Pull</b> promotions target <b>consumers</b> directly: coupons, <b>deals</b> (discount for spending a threshold), <b>rebates</b>, <b>samples</b>, <b>premiums</b> (free/cheap gift after a purchase), <b>contests</b>, <b>sweepstakes</b>.",
      "<b>Push</b> promotions target <b>channel partners</b> (retailers/distributors): trade allowances, <b>dealer contests</b>, trade shows, co-op advertising.",
      "<b>Contest vs Sweepstakes:</b> Contest = win by <b>skill/creativity</b>; Sweepstakes = win by <b>pure chance/luck</b> (random draw).",
      "<b>Point-of-purchase (POP) display's</b> main objective = drive impulse purchases at the shelf.",
      "<b>Why sales promotion has grown:</b> growing retailer power, promotion sensitivity, ad clutter, accountability, short-term focus — spending shifted toward <b>trade</b> promotion over time."
    ]}
    ,{ h:"🔍 Deep-dive: niche facts & exam traps", items:[
      "<b>Digital advertising details (tested as choices):</b> pricing models — <b>CPM</b> (cost per thousand impressions), <b>CPC</b> (cost per click), <b>CPA</b> (cost per action/acquisition), <b>CPV</b> (cost per view). Targeting — <b>behavioral</b> (based on your past online behavior) vs <b>contextual</b> (matched to the page's content). <b>Programmatic</b> = automated real-time ad buying; <b>SEO / SEM</b> = optimizing or paying (sponsored links) to rank on search queries. <b>UGC</b> (user-generated content) = brand-relevant content consumers make and post <i>publicly</i> — note it is NOT personal e-mails and NOT primarily for commercial profit.",
      "<b>Product advertising — 3 types:</b> <b>Pioneering</b> (introductory — <i>informs</i>, builds PRIMARY/category demand) · <b>Competitive</b> (<i>persuades</i>, builds SELECTIVE/brand demand; comparative ads name rivals) · <b>Reminder</b> (reinforces; for well-established products). ‘Preference for a specific brand’ = selective demand.",
      "<b>Institutional advertising — 4 types (promotes the ORG, not a product):</b> <b>Advocacy</b> (states a position/issue) · <b>Pioneering institutional</b> (announces what the company is/does — Bayer ‘we cure more than headaches’) · <b>Competitive institutional</b> (one product CLASS vs another — dairy's ‘got milk?’) · <b>Reminder institutional</b> (keeps the org's name up — U.S. Army).",
      "<b>Media strengths/weaknesses:</b> <b>TV</b> (huge reach, senses engaged; costly, low selectivity, clutter) · <b>Radio</b> (cheap, targeted; audio-only, short attention) · <b>Magazines</b> (highly targeted, long life; long lead time) · <b>Newspapers</b> (timely, local; short life, poor color) · <b>Internet</b> (interactive, targeted, measurable; privacy/cookie &amp; brand-safety concerns) · <b>Outdoor/billboard</b> (repetition, low cost; very brief message) · <b>Direct mail</b> (highly targeted; ‘junk’ image, high cost/contact).",
      "<b>Media terms &amp; math:</b> <b>Reach</b> = % of audience exposed ≥1×; <b>Frequency</b> = avg # exposures; <b>GRP</b> = reach × frequency; <b>Rating</b> = % of TV households; <b>CPM</b> = cost per thousand = cost ÷ (impressions/1000); <b>wCPM</b> = CPM ÷ (% in target). <b>Lower CPM/wCPM = more efficient.</b>",
      "<b>Scheduling:</b> <b>Continuous</b> (steady all year) · <b>Flighting</b> (on-then-off bursts) · <b>Pulse</b> (steady year-round WITH seasonal upticks — a swim-goggle brand that runs all year but ramps in summer = pulsing).",
      "<b>Pretests vs Posttests:</b> <b>Pretests</b> (before running): portfolio, jury, theater tests. <b>Posttests</b> (after): <b>aided recall</b> (Starch test), <b>unaided recall</b> (day-after recall), attitude tests, inquiry tests, sales tests.",
      "<b>Consumer (PULL) sales promotions:</b> coupons, <b>deals</b> (temporary price cut / spend-threshold discount), <b>premiums</b> (free/cheap gift with purchase), <b>contests</b> (win by SKILL), <b>sweepstakes</b> (win by CHANCE), samples, loyalty/frequency programs, <b>point-of-purchase (POP) displays</b> (drive impulse buys), rebates, product placements. <b>Trade (PUSH) promotions:</b> allowances (merchandise/case/finance), <b>cooperative advertising</b>, <b>dealer/trade contests</b>, training. <b>Ad-spend fact:</b> internet ≈ 62% of 2022 spending (the most, and growing)."
    ]}
  ],

  /* ===================== CH 20 — PERSONAL SELLING (Seg 13) ===================== */
  ch20:[
    { h:"Sales Positions & Types of Selling", items:[
      "<b>3 types of personal selling:</b> <b>order taking</b>, <b>order getting</b>, and <b>customer sales support</b> (a firm may use one or all three).",
      "<b>Missionary salesperson</b> = does promotional work but <b>does NOT take actual orders</b>.",
      "<b>Sales engineer</b> = technical specialist supporting the sale.",
      "Common positions by size: retail sales &gt; manufacturer's reps &gt; insurance/financial/real-estate &gt; sales engineers."
    ]},
    { h:"The Selling Process — 6 Stages", items:[
      "<b>1. Prospecting</b> — find leads and <b>qualify</b> them into prospects: establish <b>need/want</b>, ascertain <b>ability to purchase</b>, and determine <b>purchase authority</b> (who can actually decide). Missing the decision-maker check = neglecting <i>purchase authority</i>.",
      "<b>2. Pre-Approach</b> — <b>research</b> the prospect, set call goals, and <b>prepare &amp; practice</b> the presentation. (Planning an absurd-then-reasonable pitch while practicing = pre-approach.)",
      "<b>3. Approach</b> — the <b>first face-to-face meeting</b>: make a good impression, build rapport (bowing &amp; handing a card with both hands in Japan happens here).",
      "<b>4. Presentation</b> — deliver content, use visual aids/demos, handle objections; converts a prospect into a customer.",
      "<b>5. Close</b> — summarize benefits, ask for the sale, confirm. <b>Closing techniques:</b> <b>trial close</b> (ask for a small decision — 'which color?'), <b>assumptive close</b> (act as if they've decided — 'when should we deliver?'), <b>urgency close</b> ('the price goes up Monday'). These are all types of <i>closes/closing</i>.",
      "<b>6. Follow-Up</b> — ensure delivery/satisfaction, pursue add-on sales, sustain the relationship."
    ]},
    { h:"Presentation Formats", items:[
      "<b>Canned</b> formats (scripted):",
      "• <b>Ingratiation</b> — complimenting/flattering the buyer.",
      "• <b>Foot-in-the-door</b> — start with a <b>small</b> ask, build to a bigger one.",
      "• <b>Door-in-the-face</b> — start with an <b>absurd/large</b> ask, then follow with the (real) smaller one (ask for 50M units to make 2M palatable).",
      "• <b>Outlined</b> — a flexible checklist of points.",
      "<b>Adaptive selling</b> (need-satisfaction / marketing orientation) — determine the customer's needs/perceptions, then tailor the solution; \"listen more than you talk.\""
    ]},
    { h:"Ch 21 · Salesforce Management & Workload (COMPUTATIONAL)", items:[
      "<b>Sales plan:</b> set objectives → make-or-buy → <b>organize the salesforce</b> → size it. <b>Sales-objective types:</b> <b>output-related</b> (dollars/units sold), <b>input-related</b> (# of calls made), and <b>behaviorally related</b> (specific to each salesperson: product knowledge, customer service, selling &amp; communication skills).",
      "<b>Research nugget Cooke tests:</b> studies indicate a salesperson's <b>genetic predisposition</b> can influence sales performance (some selling traits are partly innate).",
      "<b>Organize by:</b> <b>Region</b>, <b>Product Line</b> (different reps for different product lines — Boeing splits by line of jets), or <b>Type of Account</b>.",
      "<span class='formula'>NS = (NC × CF × CL) ÷ AST</span> — # salespeople = (# customers × call frequency/yr × call length) ÷ annual selling time per rep.",
      "<b>Trap:</b> convert call length to <b>HOURS</b> first (30 min = 0.5, 90 min = 1.5).",
      "<b>Worked:</b> (15,000 × 20 × 0.5) ÷ 1,200 = 150,000/1,200 = <b>125</b> salespeople.",
      "<b>Compensation:</b> Salary, Straight Commission, or Combination (salary + commission/bonus)."
    ]},
    { h:"Ch 21 · Evaluating Salespeople (COMPUTATIONAL)", items:[
      "<span class='formula'>Conversion Rate = # sales ÷ # calls</span>",
      "<span class='formula'>Quota Ratio = $ actual sales ÷ $ sales goal</span> (≥ 1.0 = met/beat quota).",
      "<b>Worked:</b> 13 sales / 67 calls = <b>19.4%</b> conversion; $78,000 / $75,000 = <b>1.04</b> quota ratio.",
      "<b>Account management policy grid:</b> high opportunity + strong competitive position = <b>high level of sales calls</b> (invest/retain)."
    ]}
    ,{ h:"🔍 Deep-dive: niche facts & exam traps", items:[
      "<b>Types of personal selling:</b> <b>Order taking</b> (inside vs outside order takers — process routine reorders) · <b>Order getting</b> (creative selling; identify needs, persuade) · <b>Sales support</b> — <b>missionary</b> reps (promote, but take NO orders), <b>sales engineers</b> (technical specialists), and <b>team selling</b> (a whole team sells to a major account).",
      "<b>The 6 selling-process stages — details:</b> <b>Prospecting</b> (find leads → qualify by need/want, ability to purchase, purchase <b>authority</b>) · <b>Pre-approach</b> (research the prospect, set call goals, prepare &amp; practice) · <b>Approach</b> (first face-to-face — first impression, build rapport) · <b>Presentation</b> (deliver, demo, handle objections) · <b>Close</b> (trial close, assumptive close, urgency close) · <b>Follow-up</b> (delivery, satisfaction, add-on sales, relationship).",
      "<b>Presentation formats:</b> <b>Stimulus-response / canned</b> (scripted) · <b>Formula selling</b> (structured but flexible) · <b>Need-satisfaction / adaptive / consultative</b> (uncover needs, then tailor — a marketing orientation; ‘listen more than you talk’). <b>Canned techniques:</b> <b>Ingratiation</b> (flattery) · <b>Foot-in-the-door</b> (small ask → big ask) · <b>Door-in-the-face</b> (absurd ask → real ask) · <b>Outlined</b> (brief list of main points).",
      "<b>Selling relationships (increasing depth):</b> <b>Transaction</b> selling → <b>Relationship</b> selling (long-term, trust) → <b>Partnership/Enterprise</b> selling (joint value creation with the customer).",
      "<b>Sales management = Plan → Implement → Evaluate.</b> <b>Plan:</b> set objectives (output/input/behavioral), make-or-buy, <b>organize the salesforce</b> (by <b>geography/region</b>, <b>product line</b>, <b>customer/type of account</b>, or combination), and <b>size</b> it (workload method). <b>Implement:</b> recruit, train, motivate, and <b>compensate</b> — straight <b>salary</b> (security, no incentive), straight <b>commission</b> (incentive, no security), or <b>combination</b>. <b>Evaluate:</b> quantitative (conversion rate, quota) + behavioral.",
      "<b>Formulas:</b> <b>Workload</b> NS = (NC × CF × CL) ÷ AST — convert call length to HOURS first (30 min = 0.5). <b>Conversion rate</b> = #sales ÷ #calls. <b>Quota ratio</b> = $actual ÷ $goal (≥1.0 = met/beat).",
      "<b>Account management policy grid:</b> high account opportunity + strong competitive position = give a <b>high level of sales calls</b> (invest to retain/build). <b>Sales tech</b> (SFA/CRM) automates and supports these steps."
    ]}
  ]
};
