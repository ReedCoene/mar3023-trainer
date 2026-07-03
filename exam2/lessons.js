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
      "<b>Decline</b> — sales fall; buyers = <b>Laggards</b>.",
      "<b>No set length:</b> the time to move through the PLC <b>depends on the product type</b> (consumer products usually shorter than business products).",
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
    ]},
    { h:"Branding & Brand Equity", items:[
      "<b>Brand name / brand mark / trade character / logo / trademark</b> — know the distinctions (name = spoken part; mark = symbol; trade character = a personified mark like the Geico Gecko; trademark = legally protected).",
      "<b>Family branding</b> (one name across products) vs <b>Multiple branding</b> (distinct names) vs <b>Co-branding</b>.",
      "<b>National brands</b> vs <b>Private-label</b> (store) brands; <b>Licensing</b>.",
      "<b>Brand Equity</b> = added value a name gives a product. <b>4 components:</b> Awareness, Associations, Perceived Quality, Loyalty.",
      "<b>Line extension</b> = new variant in the SAME category (new flavor/size). <b>Category extension</b> = brand enters a DIFFERENT category.",
      "<b>Packaging functions:</b> contain/protect, facilitate use, communicate, fit channel needs. A <b>product manager</b> is also called a <b>brand manager</b>."
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
      "<b>2. Idea Generation</b> — the widest stage; the most ideas exist here.",
      "<b>3. Screening & Evaluation</b> — does it fit the firm's values/mission (feasibility)?",
      "<b>4. Business Analysis</b> — the <b>financials</b>: cost to procure/manufacture and the price it could sell for.",
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
      "<b>Match-the-factor questions:</b> address fears = Risk · WOM/observe = Communicability · beat rivals = Relative Advantage · fits current life = Compatibility."
    ]}
  ],

  /* ===================== CH 12 — SERVICES MARKETING (Seg 10) ===================== */
  ch12:[
    { h:"The 4 I's of Services", items:[
      "<b>Intangibility</b> — can't be physically held/seen before purchase. <b>Fix:</b> add tangible cues — a mascot/spokesperson personifies the service (Geico Gecko, \"Felipe the Flying Squirrel\").",
      "<b>Inconsistency</b> — quality varies by who/when/where. <b>Fix:</b> <b>standardize</b> — training, a consistent process (a makeup masterclass).",
      "<b>Inseparability</b> — produced and consumed at the same time; the provider is part of it. <b>Fix:</b> <b>involve the customer</b> in the service (real-time feedback in a mirror).",
      "<b>Inventory</b> — you can't stockpile a service; idle capacity is lost (off-peak pricing helps).",
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
      "<b>Relationship marketing tools:</b> Frequency marketing, <b>Share of Wallet</b> (portion of a customer's category spend you capture), Database/CRM, and <b>RFM</b> (Recency/Frequency/Monetary) analysis.",
      "<b>Levels of market offering (increasing value):</b> Commodity → Good → Service → <b>Experience</b> (most valued — a bookstore's couches/Wi-Fi/music create an experience)."
    ]}
  ],

  /* ===================== CH 18 — IMC (Seg 11) ===================== */
  ch18:[
    { h:"IMC & the Promotional Mix", items:[
      "<b>IMC</b> = designing marketing-communication programs that <b>coordinate all promotional activities</b> to deliver a <b>consistent message/image</b> across all audiences.",
      "<b>The 5 promotional-mix elements:</b> <b>Advertising, Personal Selling, Sales Promotion, Public Relations, Direct Marketing.</b>",
      "<b>Mass selling</b> (reaches groups) = advertising, sales promotion, public relations (+ publicity, a form of PR). <b>Personal selling</b> is customized/one-to-one — <b>least</b> suited to mass selling.",
      "<b>Nontraditional (\"other\") IMC tools:</b> Sponsorships, Product Placements, Infomercials, Branded Entertainment (+ guerrilla marketing, influencer marketing).",
      "Distinguish them: <b>Product placement</b> = brand shown within content; <b>Branded entertainment</b> = brand woven into/creating the content; <b>Sponsorship</b> = paying to attach your brand to an event/venue; <b>Guerrilla</b> = unconventional low-cost surprise tactics."
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
  ],

  /* ===================== CH 19 — ADVERTISING & SALES PROMOTION (Seg 12) ===================== */
  ch19:[
    { h:"Goals & Types of Advertising", items:[
      "<b>5 goals:</b> Inform, Persuade, Sell, Reinforce, Remind. A <b>brand-new</b> product (or category) should <b>Inform</b> first.",
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
      "<b>New/digital media:</b> <b>Search</b> (pay to top a query), <b>Display</b> (pay for your ad to \"appear\" on another site's page), Social, Email, Mobile."
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
      "<b>5. Close</b> — summarize benefits, ask for the sale, confirm.",
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
    { h:"Salesforce Management & Workload (COMPUTATIONAL)", items:[
      "<b>Sales plan:</b> set objectives → make-or-buy → <b>organize the salesforce</b> → size it.",
      "<b>Organize by:</b> <b>Region</b>, <b>Product Line</b> (different reps for different product lines — Boeing splits by line of jets), or <b>Type of Account</b>.",
      "<span class='formula'>NS = (NC × CF × CL) ÷ AST</span> — # salespeople = (# customers × call frequency/yr × call length) ÷ annual selling time per rep.",
      "<b>Trap:</b> convert call length to <b>HOURS</b> first (30 min = 0.5, 90 min = 1.5).",
      "<b>Worked:</b> (15,000 × 20 × 0.5) ÷ 1,200 = 150,000/1,200 = <b>125</b> salespeople.",
      "<b>Compensation:</b> Salary, Straight Commission, or Combination (salary + commission/bonus)."
    ]},
    { h:"Evaluating Salespeople (COMPUTATIONAL)", items:[
      "<span class='formula'>Conversion Rate = # sales ÷ # calls</span>",
      "<span class='formula'>Quota Ratio = $ actual sales ÷ $ sales goal</span> (≥ 1.0 = met/beat quota).",
      "<b>Worked:</b> 13 sales / 67 calls = <b>19.4%</b> conversion; $78,000 / $75,000 = <b>1.04</b> quota ratio.",
      "<b>Account management policy grid:</b> high opportunity + strong competitive position = <b>high level of sales calls</b> (invest/retain)."
    ]}
  ]
};
