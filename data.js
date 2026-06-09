/* ============================================================
   MAR3023 — Exam 1 Study Data
   Dr. Alan Cooke · Principles of Marketing
   Chapters on exam: 1, 3, 4, 5, 6, 8, 9
   Content grounded in the lecture decks + Noteshells.
   ============================================================ */

const EXAM_DATE = "2026-06-10T19:00:00"; // Wednesday 7:00 PM

/* ---------- CHAPTER LESSONS ---------- */
const CHAPTERS = [
  {
    id: "ch1", num: 1, seg: 1, title: "Introduction & Overview",
    blurb: "What marketing is, customer value, the exchange process, the 4 P's, STP, market share, and the four business orientations.",
    sections: [
      { h: "What is Marketing?", items: [
        "<b>AMA (2013):</b> Marketing is the activity, set of institutions, and processes for creating, communicating, delivering, and exchanging offerings that have value for customers, clients, partners, and society at large.",
        "<b>Textbook:</b> the activity for creating, communicating, delivering, and exchanging offerings that benefit an organization, its customers, its stakeholders, and society at large.",
        "Marketing is NOT the same as selling, advertising, or public relations — those are just pieces of it.",
        "Drucker: \"The purpose of a business is to create and keep a customer.\" Kotler: marketing = \"the art of creating genuine customer value.\""
      ]},
      { h: "Customer Value & Utility", items: [
        "<b>Customer Value</b> = the unique combination of benefits received by targeted buyers (quality, price, convenience, on-time delivery, before- & after-sale service).",
        "Synonyms for value: <b>Utility</b> and <b>Satisfaction</b>.",
        "<b>Four types of utility (memorize): Time, Place, Possession, Form.</b>"
      ]},
      { h: "Exchange", items: [
        "Marketing creates value through the <b>process of exchange</b>.",
        "<b>Exchange</b> = the trade of things of value between a buyer and a seller so that each is better off after the exchange.",
        "What's exchanged can be goods, services, or something else of value (ideas, images, places, people)."
      ]},
      { h: "Marketing Mix — the 4 P's", items: [
        "<b>Marketing Mix</b> = the controllable factors of Product, Price, Place, Promotion used by marketing managers.",
        "<b>Product:</b> variety, quality, design, features, brand name, packaging, services, warranties.",
        "<b>Price:</b> list price, discounts, allowances, payment period, credit terms.",
        "<b>Place:</b> channels, locations, inventory, transportation, atmospherics.",
        "<b>Promotion:</b> sales promotion, advertising, sales force, public relations, direct marketing, e-commerce.",
        "<b>Marketing Program</b> = a plan that integrates the marketing mix to provide a product, service, or idea to prospective customers."
      ]},
      { h: "Market Share", items: [
        "<b>Market Share</b> = ratio of the firm's sales revenue to total industry sales revenue (including the firm).",
        "Can be measured by <b>revenue</b> OR by <b>unit volume</b>.",
        "A key indicator of a successful marketing program.",
        "<span class='formula'>Market Share = (Brand Sales ÷ Total Category Sales) × 100</span>"
      ]},
      { h: "STP & Business Orientations", items: [
        "<b>STP</b> = Segmentation → Targeting → Positioning.",
        "<b>Four business orientations (in order of evolution):</b> Production → Sales → Marketing → Market orientation.",
        "Production = focus on making product; Sales = focus on selling/pushing; Marketing orientation = satisfy customer needs (within the marketing dept); Market orientation = the <i>entire organization</i> focuses on the customer.",
        "Related ideas: Customer Relationship Management (CRM), the Societal Marketing Concept."
      ]}
    ],
    mnemonics: [
      "<b>4 P's:</b> Product, Price, Place, Promotion.",
      "<b>4 Utilities:</b> \"<b>TPPF</b>\" — Time, Place, Possession, Form.",
      "<b>4 Orientations evolve:</b> Production → Sales → Marketing → Market (the whole company).",
      "<b>STP:</b> Segment, Target, Position."
    ]
  },

  {
    id: "ch3", num: 3, seg: 2, title: "The Marketing Environment",
    blurb: "Environmental scanning; the macro, micro and internal levels; the five macro sectors and key regulatory acts.",
    sections: [
      { h: "Environmental Scanning", items: [
        "<b>Environmental Scanning</b> = the process of continually acquiring information on events occurring <i>outside</i> the organization to identify and interpret potential trends.",
        "The marketing environment is: <b>Multi-level, Constraining, and Current/Future.</b>"
      ]},
      { h: "Constraint & Response", items: [
        "The environment <b>constrains</b> the firm. Means of control: <b>Adapt</b> or <b>Modify</b>.",
        "Every constraint is either a <b>Threat or an Opportunity</b> (\"an optimist sees the opportunity in every difficulty\").",
        "Ways to change macro constraints: <b>Lobbying</b> and <b>leading broad consumer change</b>."
      ]},
      { h: "Three Levels", items: [
        "<b>Macro</b> — broad forces (can't control, must adapt).",
        "<b>Micro</b> — the immediate players around the firm.",
        "<b>Internal</b> — inside the organization."
      ]},
      { h: "MACRO sectors (5)", items: [
        "<b>Social, Economic, Technological, Regulatory, Natural.</b> (Competitive is treated as MICRO, not macro.)",
        "<b>Social</b> = Cultural (core beliefs/values, micro-cultures, diversity) + Demographic (age distribution, geographic, household composition).",
        "<b>Economic</b> = GDP trend; consumer income (Nominal vs Real); income inequality. Ability to buy = income (Gross→Disposable→Discretionary); Willingness = consumer expectations / Index of Consumer Confidence.",
        "<b>Technological</b> = three screens (TV, computer, mobile); key issues: Rate of Change & Media Fragmentation; sharing/1099 economy.",
        "<b>Regulatory</b> = protecting competition, protecting consumers, political pressure (consumerism, media).",
        "<b>Natural</b> = energy, climate change, green marketing/sustainability (watch for greenwashing)."
      ]},
      { h: "Key Regulatory Acts & Agencies", items: [
        "<b>Protecting competition:</b> Sherman Antitrust Act (1890 – stops monopolies); Robinson-Patman Act (1936 – stops price discrimination); Lanham Act (1946 – trademark protection).",
        "<b>Protecting consumers:</b> FDA (1906 – food/drug); FTC (1914 – stops false/misleading ads); CPSC (1972 – product safety, 15,000+ products)."
      ]},
      { h: "Micro & Internal", items: [
        "<b>Micro:</b> Customers, Competitors, Stakeholders, Suppliers, Channels.",
        "<b>Internal:</b> Top Management, Personnel, Other Departments.",
        "<b>Strategic Environmental Scanning components:</b> Sectors, Actors, Sources, Interpretation."
      ]}
    ],
    mnemonics: [
      "<b>5 Macro sectors = \"STERN\":</b> Social, Technological, Economic, Regulatory, Natural. (Competitive = micro!)",
      "<b>Acts by date:</b> Sherman 1890 → FDA 1906 → FTC 1914 → Robinson-Patman 1936 → Lanham 1946 → CPSC 1972.",
      "<b>Competition protection vs Consumer protection:</b> Sherman/Robinson-Patman/Lanham protect <i>competition</i>; FDA/FTC/CPSC protect <i>consumers</i>.",
      "<b>Income narrows:</b> Gross → Disposable → Discretionary.",
      "<b>Scanning = \"SASI\":</b> Sectors, Actors, Sources, Interpretation."
    ]
  },

  {
    id: "ch4", num: 4, seg: 3, title: "Ethics, Laws & Social Responsibility",
    blurb: "Ethics vs. laws, the legal/ethical grid, two moral philosophies, CSR, and the social audit.",
    sections: [
      { h: "Ethics vs. Laws", items: [
        "<b>Ethics</b> = moral principles and values that govern actions and decisions.",
        "<b>Laws</b> = societal standards and values that are enforceable in a court of law.",
        "Behavior can be sorted on two axes: <b>Ethical/Unethical × Legal/Illegal</b>. Something can be legal but unethical (or vice versa).",
        "\"Marketing ethics\" is NOT an oxymoron."
      ]},
      { h: "Why more attention to ethics?", items: [
        "Diverse societal value systems.",
        "Increased public scrutiny.",
        "Expectations have risen.",
        "Ethical conduct is perceived to be dropping."
      ]},
      { h: "Framework for Ethical Behavior", items: [
        "Behavior is shaped by layers: <b>Societal culture/norms → Business culture/industry practices → Organizational culture/expectations → Personal Moral Philosophy.</b>"
      ]},
      { h: "Two Personal Moral Philosophies", items: [
        "<b>Moral Idealism:</b> individual rights and responsibilities are universal, <i>regardless of outcome</i>.",
        "<b>Utilitarianism:</b> the \"greatest good for the greatest number\" — a cost/benefit tradeoff.",
        "Current ethics topics: fake reviews (astroturfing, sockpuppets), product placement, native advertising, permission-based marketing, data privacy."
      ]},
      { h: "Corporate Social Responsibility (CSR)", items: [
        "<b>Profit Responsibility:</b> maximize profit for owners (Friedman view).",
        "<b>Stakeholder Responsibility:</b> obligations to those who can affect/are affected by the firm.",
        "<b>Societal Responsibility:</b> obligations to society at large — includes green marketing, cause marketing, the Triple Bottom Line."
      ]},
      { h: "The Social Audit (5 steps)", items: [
        "1. Recognition of responsibility.",
        "2. Identification of \"mission\".",
        "3. Determination of priorities.",
        "4. Specification of resources.",
        "5. Evaluation of results."
      ]}
    ],
    mnemonics: [
      "<b>Idealism = Intentions/rights</b> (outcome doesn't matter). <b>Utilitarianism = Use/Utility</b> (greatest good, outcomes matter).",
      "<b>CSR ladder:</b> Profit → Stakeholder → Societal (widening circle of responsibility).",
      "<b>Social Audit = \"RID-SE\":</b> Recognition, Identification of mission, Determination of priorities, Specification of resources, Evaluation."
    ]
  },

  {
    id: "ch5", num: 5, seg: 4, title: "Consumer Behavior",
    blurb: "The decision-making process & unit, the multi-attribute model (MAM), involvement, customer profiles, satisfaction & NPS, symbolic consumption.",
    sections: [
      { h: "Influences & Nature of Decision Making", items: [
        "<b>Influences:</b> Marketing Mix, Psychological, Socio-Cultural, Situational.",
        "Decision making is: <b>Goal-directed, Boundedly-rational, of Varied involvement, Selective, and Adaptive.</b>"
      ]},
      { h: "DMU — Decision-Making Unit (household roles)", items: [
        "<b>Information Gatherer, Influencer, Decision Maker, Purchaser, User.</b>",
        "One person can play several roles; in households the roles are often split."
      ]},
      { h: "DMP — Decision-Making Process (5 stages)", items: [
        "1. Problem Recognition → 2. Information Search → 3. Evaluation of Alternatives → 4. Purchase Decision → 5. Post-Purchase Behavior (with Feedback looping back)."
      ]},
      { h: "Multi-Attribute Model (MAM)", items: [
        "Used in <b>Evaluation of Alternatives</b>. Assumptions: a consideration set described by the same attributes; the consumer has <b>beliefs</b> about each brand on each attribute; and can judge the <b>importance (weight)</b> of each attribute.",
        "<span class='formula'>Value(brand) = Σ (belief on attribute × importance of attribute)</span>",
        "Higher total = more preferred. Changing importance weights can change which brand wins."
      ]},
      { h: "Involvement", items: [
        "<b>Low</b> → Routine Problem Solving (habit).",
        "<b>Moderate</b> → Limited Problem Solving.",
        "<b>High</b> → Extended Problem Solving."
      ]},
      { h: "Customer Profile", items: [
        "<b>Demographic:</b> sex, age, marital status, # children.",
        "<b>Socio-Economic (SES):</b> income, education, occupation, dual earners, own vs rent.",
        "<b>Psychographic:</b> AIOs (Activities, Interests, Opinions), lifestyle, product attribute importance, ratings."
      ]},
      { h: "Satisfaction & NPS", items: [
        "Satisfaction compares Expectations (E, before) vs Perceived Performance (P, after):",
        "<b>P &lt; E → Dissatisfaction · P = E → Satisfaction · P &gt; E → Delight.</b>",
        "<b>Net Promoter Score:</b> \"How likely are you to recommend us (0–10)?\" Detractors = 0–6, Passives = 7–8, Promoters = 9–10.",
        "<span class='formula'>NPS = %Promoters − %Detractors</span>",
        "Managing satisfaction: measurement, service after sale, 800#/website, Chief Customer Officer."
      ]},
      { h: "Symbolic Consumption", items: [
        "\"We are what we wear/drink/drive\" — building & projecting a self-concept; hedonic (experiential) consumption; product enthusiasts.",
        "Time use — four types: <b>Contracted</b> (paid work), <b>Committed</b> (household care), <b>Personal</b> (self-maintenance), <b>Free</b> (discretionary). Peak Experience & \"Flow.\""
      ]}
    ],
    mnemonics: [
      "<b>DMP = \"Please Inform Every Purchasing Person\":</b> Problem recognition, Info search, Evaluation, Purchase, Post-purchase.",
      "<b>DMU roles:</b> Gatherer, Influencer, Decider, Purchaser, User.",
      "<b>Satisfaction:</b> P&lt;E sad, P=E ok, P&gt;E delight. (Compare Perception to Expectation.)",
      "<b>NPS:</b> Promoters (9–10) − Detractors (0–6). Passives (7–8) are ignored.",
      "<b>MAM:</b> multiply belief × importance, then SUM across attributes."
    ]
  },

  {
    id: "ch6", num: 6, seg: 5, title: "Organizational Buying Behavior",
    blurb: "How B2B buying differs from consumer buying: the buying center, buyclasses, value analysis (TLC) and vendor analysis.",
    sections: [
      { h: "Types of Organizational Buyers", items: [
        "<b>Industrial, Reseller, Government</b> (plus global). \"All buyers except the end consumer.\"",
        "<b>NAICS</b> (North American Industry Classification System): classifies organizations in Canada, US, Mexico by their major activity/good/service. 6-digit code."
      ]},
      { h: "Key Features of Organizational Buyers", items: [
        "<b>Derived Demand</b> (demand derived from demand for consumer products downstream).",
        "More <b>formal</b> decision process.",
        "Larger <b>Decision-Making Unit</b>.",
        "More <b>specific</b> criteria.",
        "Greater role of <b>Relationship Marketing</b>."
      ]},
      { h: "The Buying Center (org DMU)", items: [
        "<b>Users, Influencers, Buyers (Purchasing Agent), Deciders, Gatekeepers.</b>",
        "Gatekeepers control the flow of information into the buying center."
      ]},
      { h: "Buyclasses (3)", items: [
        "<b>New Buy</b> — first time, most complex, biggest buying center.",
        "<b>Straight Rebuy</b> — routine reorder, little/no new info.",
        "<b>Modified Rebuy</b> — in between; some specs change."
      ]},
      { h: "Value Analysis / Total Lifetime Cost (TLC)", items: [
        "<b>Value Analysis</b> = understand how the buyer perceives value (benefits vs costs from their perspective) and find cost savings.",
        "Position on <b>Total Lifetime Cost (TLC)</b>, not just purchase price.",
        "<b>Types of costs:</b> Initial Purchase, Switching, Operating, Life-cycle.",
        "<span class='formula'>TLC = Purchase price + (annual costs × planning horizon)</span>",
        "Compare options on TLC and choose the lower total."
      ]},
      { h: "Vendor Analysis", items: [
        "A formal multi-attribute-model approach to compare vendors across weighted buying criteria.",
        "Rate each vendor on each criterion; weight by importance (e.g., Product Quality 40%, Delivery 25%, Reliability 20%, Price 15%).",
        "<span class='formula'>Vendor Score = Σ (rating × weight)</span> → choose the highest."
      ]}
    ],
    mnemonics: [
      "<b>Buying Center = \"U-I-B-D-G\":</b> Users, Influencers, Buyers, Deciders, Gatekeepers.",
      "<b>Buyclasses:</b> New buy / Straight rebuy / Modified rebuy.",
      "<b>Org buyer features = \"D-F-L-S-R\":</b> Derived demand, Formal process, Larger DMU, Specific criteria, Relationship marketing.",
      "<b>TLC</b> = upfront + (yearly × years). Lowest TLC wins.",
      "<b>Vendor analysis = MAM with % weights.</b>"
    ]
  },

  {
    id: "ch8", num: 8, seg: 7, title: "Marketing Research",
    blurb: "The role & uses of research, the marketing information system, and the three research types: exploratory, descriptive, causal.",
    sections: [
      { h: "What & Why", items: [
        "<b>Marketing Research</b> = the set of activities that provide information for marketing decision making.",
        "<b>Uses:</b> demand forecasting, segmentation, market tracking, new product testing, ad pretesting."
      ]},
      { h: "Marketing Information System (MIS)", items: [
        "An integrated, ongoing decision-support system.",
        "Data classification: <b>Secondary vs Primary</b>, and <b>Internal vs External</b>.",
        "Secondary = already exists; Primary = collected new for the problem. <b>Syndicated</b> firms gather data and sell reports (secondary/external)."
      ]},
      { h: "Three Forms of Research", items: [
        "<b>Exploratory</b> — discover ideas/insights. Methods: Observation, Consumer Ethnography, Focus Groups, Depth Interviews.",
        "<b>Descriptive</b> — describe the market. Methods: Observation (personal/electronic) and Surveys (mail, phone, personal, web).",
        "<b>Causal</b> — establish cause & effect. Method: Experiments (Laboratory & Field/Test Marketing)."
      ]},
      { h: "Descriptive Research — key factors", items: [
        "Population, Sample, Response Rate, Representativeness, Error (Bias).",
        "<b>Types of survey error:</b> Sampling, Interviewer, Questionnaire Design.",
        "Measures of consumer memory: <b>Free Recall</b> (no cue) → <b>Cued Recall</b> (category cue) → <b>Recognition</b> (shown the specific brand)."
      ]},
      { h: "Causal Research — the keys", items: [
        "<b>Manipulate</b> the independent variable(s); <b>Control</b> all extraneous variables; <b>Measure</b> response on the dependent variable(s).",
        "Correlation ≠ Causation — only experiments establish causation.",
        "<b>Test Marketing</b> considerations: Cost, Competition, Timing, Repurchase rate, Fine-tuning. Scanner-panel household data tracks Trial, Repeat, Frequency, Volume."
      ]}
    ],
    mnemonics: [
      "<b>3 research types = \"EDC\":</b> Exploratory (ideas) → Descriptive (who/what) → Causal (why/cause).",
      "<b>Causal = Manipulate + Control + Measure.</b> IV is manipulated, DV is measured.",
      "<b>Memory gets easier:</b> Free recall (hardest) → Cued recall → Recognition (easiest).",
      "<b>Survey error = \"SIQ\":</b> Sampling, Interviewer, Questionnaire.",
      "<b>Data 2×2:</b> Primary/Secondary × Internal/External."
    ]
  },

  {
    id: "ch9", num: 9, seg: 6, title: "Segmentation, Targeting & Positioning",
    blurb: "Defining segments, the segmentation criteria, differential response, segmentation bases, indexing, benefit segmentation, targeting strategies and positioning.",
    sections: [
      { h: "Definitions", items: [
        "<b>Market Segmentation</b> = the search for relatively homogeneous clusters in a heterogeneous market.",
        "A <b>Segment</b> = a group of current/potential customers with common needs, values, and responsiveness to marketing variables.",
        "Markets evolve toward heterogeneity over time — so we are always segmenting & differentiating."
      ]},
      { h: "Segmentation Criteria (4)", items: [
        "<b>Measurability (Assignment)</b> — can you assign customers to the segment?",
        "<b>Reachability</b> — can you reach them? (Selective Targeting & Self-Selection.)",
        "<b>Profitability</b> — is the segment worth pursuing?",
        "<b>Differential Response</b> — do segments respond differently to marketing variables? (THE key idea.)"
      ]},
      { h: "Differential Response", items: [
        "Segments respond differently to controllable marketing variables: Price, Product, Promotion, Place.",
        "Example with price: a price-<b>inelastic</b> segment barely changes quantity when price changes; a price-<b>elastic</b> segment changes a lot."
      ]},
      { h: "Segmentation Bases (4 categories)", items: [
        "A 2×2 of <b>General vs Product-Specific</b> and <b>Objective vs Subjective</b>:",
        "Objective + General = <b>Demographics/SES</b>; Objective + Product-specific = <b>Past Purchase</b>;",
        "Subjective + General = <b>Psychographics (AIO)</b>; Subjective + Product-specific = <b>Brand Ratings & Importance Weights (MAM)</b>.",
        "Demographic/SES bases: age, sex, ethnicity, income, region, education."
      ]},
      { h: "Indexing", items: [
        "Used to compare a <b>segment</b> to the overall <b>population</b> on a behavior of interest — measures targeting efficiency.",
        "<span class='formula'>Index = (% in segment ÷ % in population) × 100</span>",
        "Index = 100 → same as population. &gt;100 → segment over-indexes (does it more). &lt;100 → under-indexes."
      ]},
      { h: "Benefit Segmentation", items: [
        "Segment based on <b>what benefits</b> customers find most important.",
        "List the benefits → measure their importance → segment by those benefit weights.",
        "Can be expressed via MAM: different segments have different importance weights → prefer different brands.",
        "\"Benefit segmentation is the best available surrogate for true differential-response measurement.\"",
        "Also: Usage-Situation (occasion-based) segmentation."
      ]},
      { h: "Targeting", items: [
        "<b>Four strategies:</b> Mass Marketing, Concentration (one segment), Multisegment, Mass Customization.",
        "Other considerations: expected Size/Growth, Competition, Cost, Compatibility.",
        "<b>Majority Fallacy</b> = blindly pursuing the largest segment (everyone fights over it)."
      ]},
      { h: "Positioning", items: [
        "<b>Product Positioning</b> = the location a brand occupies in a consumer's mind (on a perceptual map) relative to competitors.",
        "<b>Points of Parity (POP)</b> = features/benefits similar to competitors (table stakes).",
        "<b>Points of Difference (POD)</b> = unique, desirable features that differentiate the brand.",
        "<b>Approaches to positioning:</b> product feature, product benefit, user category, against another brand, against a product category, specific use."
      ]}
    ],
    mnemonics: [
      "<b>Segmentation criteria = \"MR. PD\":</b> Measurability, Reachability, Profitability, Differential response.",
      "<b>Index formula:</b> (%segment ÷ %population) × 100. >100 over-indexes.",
      "<b>Targeting = \"M-C-M-M\":</b> Mass, Concentration, Multisegment, Mass-customization.",
      "<b>POP vs POD:</b> Parity = same as rivals; Difference = unique advantage.",
      "<b>Majority Fallacy:</b> biggest segment ≠ best (too much competition)."
    ]
  }
];

/* ---------- FLASHCARDS ---------- (chapter id, front, back) */
const FLASHCARDS = [
  // Ch1
  ["ch1","Define marketing (textbook).","The activity for creating, communicating, delivering, and exchanging offerings that benefit an organization, its customers, its stakeholders, and society at large."],
  ["ch1","The four types of utility","Time, Place, Possession, Form."],
  ["ch1","Two synonyms for value","Utility and Satisfaction."],
  ["ch1","Define exchange","The trade of things of value between a buyer and a seller so that each is better off after the exchange."],
  ["ch1","The 4 P's (marketing mix)","Product, Price, Place, Promotion — the controllable factors used by marketing managers."],
  ["ch1","Marketing program","A plan that integrates the marketing mix to provide a product, service, or idea to prospective customers."],
  ["ch1","Market share formula","(Brand sales ÷ total industry sales) × 100 — by revenue OR unit volume."],
  ["ch1","STP stands for…","Segmentation, Targeting, Positioning."],
  ["ch1","Four business orientations (in order)","Production → Sales → Marketing → Market orientation."],
  ["ch1","Difference: Marketing vs Market orientation","Marketing orientation = within the marketing dept; Market orientation = the ENTIRE organization focuses on the customer."],
  // Ch3
  ["ch3","Environmental scanning","Continually acquiring information on events OUTSIDE the organization to identify and interpret potential trends."],
  ["ch3","Three characteristics of the marketing environment","Multi-level, Constraining, Current/Future."],
  ["ch3","Three levels of the environment","Macro, Micro, Internal."],
  ["ch3","Five MACRO sectors","Social, Economic, Technological, Regulatory, Natural. (Competitive = micro.)"],
  ["ch3","Two ways to respond to constraints","Adapt or Modify."],
  ["ch3","Micro-environment players","Customers, Competitors, Stakeholders, Suppliers, Channels."],
  ["ch3","Internal environment","Top Management, Personnel, Other Departments."],
  ["ch3","Sherman Antitrust Act (1890)","Prevents the development of monopolies (protects competition)."],
  ["ch3","Robinson-Patman Act (1936)","Prevents price discrimination among businesses."],
  ["ch3","Lanham Act (1946)","Provides trademark protection."],
  ["ch3","FTC (1914)","Federal Trade Commission — prevents false or misleading advertising."],
  ["ch3","FDA (1906)","Food and Drug Administration — regulates food & drug testing/advertising."],
  ["ch3","CPSC (1972)","Consumer Product Safety Commission — regulates 15,000+ products."],
  ["ch3","Income: Gross → Disposable → Discretionary","Gross = total; Disposable = after taxes; Discretionary = after necessities (for wants)."],
  ["ch3","Components of strategic environmental scanning","Sectors, Actors, Sources, Interpretation."],
  // Ch4
  ["ch4","Ethics vs Laws","Ethics = moral principles/values governing actions. Laws = societal standards enforceable in court."],
  ["ch4","Moral Idealism","Individual rights & responsibilities are universal, regardless of outcome."],
  ["ch4","Utilitarianism","The greatest good for the greatest number — a cost/benefit tradeoff."],
  ["ch4","Three views of CSR","Profit Responsibility, Stakeholder Responsibility, Societal Responsibility."],
  ["ch4","The five steps of the social audit","Recognition of responsibility, Identification of mission, Determination of priorities, Specification of resources, Evaluation of results."],
  ["ch4","Why increased attention to ethics?","Diverse value systems, increased public scrutiny, risen expectations, perceived drop in ethical conduct."],
  ["ch4","Astroturfing / sockpuppets","Fake reviews — a current marketing-ethics issue."],
  // Ch5
  ["ch5","Five stages of the DMP","Problem Recognition, Information Search, Evaluation of Alternatives, Purchase Decision, Post-Purchase Behavior."],
  ["ch5","Roles in the DMU (household)","Information Gatherer, Influencer, Decision Maker, Purchaser, User."],
  ["ch5","Multi-Attribute Model formula","Value = Σ (belief on each attribute × importance weight of that attribute)."],
  ["ch5","Three levels of involvement","Low = Routine, Moderate = Limited, High = Extended problem solving."],
  ["ch5","Satisfaction: P vs E","P<E = Dissatisfaction; P=E = Satisfaction; P>E = Delight."],
  ["ch5","NPS categories","Detractors 0–6, Passives 7–8, Promoters 9–10."],
  ["ch5","NPS formula","NPS = %Promoters − %Detractors."],
  ["ch5","AIO (psychographics)","Activities, Interests, Opinions."],
  ["ch5","Four types of time use","Contracted (work), Committed (household), Personal (self-maintenance), Free (discretionary)."],
  ["ch5","Decision making is… (5 traits)","Goal-directed, Boundedly-rational, Varied involvement, Selective, Adaptive."],
  // Ch6
  ["ch6","Three types of organizational buyers","Industrial, Reseller, Government."],
  ["ch6","NAICS","North American Industry Classification System — classifies orgs in US/Canada/Mexico by major activity."],
  ["ch6","Five key features of organizational buyers","Derived demand, formal process, larger DMU, specific criteria, relationship marketing."],
  ["ch6","Members of the buying center","Users, Influencers, Buyers (Purchasing Agent), Deciders, Gatekeepers."],
  ["ch6","The three buyclasses","New Buy, Straight Rebuy, Modified Rebuy."],
  ["ch6","Four types of costs (value analysis)","Initial purchase, Switching, Operating, Life-cycle."],
  ["ch6","TLC formula","Total Lifetime Cost = Purchase price + (annual costs × planning horizon)."],
  ["ch6","Vendor analysis","A formal MAM: score = Σ(rating × weight) for each vendor; pick the highest."],
  ["ch6","Derived demand","Demand for business goods derived from demand for the consumer products they help make."],
  // Ch8
  ["ch8","Marketing research","The set of activities that provide information for marketing decision making."],
  ["ch8","Three forms of marketing research","Exploratory, Descriptive, Causal."],
  ["ch8","Exploratory methods","Observation, Consumer Ethnography, Focus Groups, Depth Interviews."],
  ["ch8","Descriptive methods","Observation and Surveys (mail, phone, personal, web)."],
  ["ch8","Causal research method","Experiments — Laboratory and Field (Test Marketing)."],
  ["ch8","The keys to causal research","Manipulate the IV, Control extraneous variables, Measure the DV."],
  ["ch8","Three types of survey error","Sampling, Interviewer, Questionnaire Design."],
  ["ch8","Three measures of consumer memory","Free Recall, Cued Recall, Recognition."],
  ["ch8","MIS data classification","Secondary vs Primary; Internal vs External."],
  ["ch8","Syndicated data","Firms gather info and sell reports to others (secondary/external)."],
  ["ch8","Key factors in descriptive research","Population, Sample, Response Rate, Representativeness, Error/Bias."],
  // Ch9
  ["ch9","Market segmentation","The search for relatively homogeneous clusters in a heterogeneous market."],
  ["ch9","Define a market segment","A group of current/potential customers with common needs, values, and responsiveness to marketing variables."],
  ["ch9","Four segmentation criteria","Measurability, Reachability, Profitability, Differential Response."],
  ["ch9","Differential response","Segments respond differently to controllable marketing variables (price, product, promotion, place)."],
  ["ch9","Indexing formula","Index = (% in segment ÷ % in population) × 100."],
  ["ch9","Interpreting an index","100 = same as population; >100 over-indexes; <100 under-indexes."],
  ["ch9","Benefit segmentation","Segmenting based on which product benefits customers find most important."],
  ["ch9","Four targeting strategies","Mass Marketing, Concentration, Multisegment, Mass Customization."],
  ["ch9","Majority fallacy","Blindly pursuing the largest segment (too much competition)."],
  ["ch9","Product positioning","The location a brand occupies in a consumer's mind relative to competitors."],
  ["ch9","POP vs POD","Points of Parity = same as competitors; Points of Difference = unique, desirable, differentiating."],
  ["ch9","Two reachability tools","Selective Targeting and Self-Selection."]
];

/* ---------- MULTIPLE-CHOICE QUESTION BANK ---------- */
/* {ch, q, choices:[...], a: index, why} */
const QUESTIONS = [
  // ---- Ch 1 ----
  {ch:"ch1", q:"Which is NOT one of the four types of utility?", choices:["Time","Place","Promotion","Form"], a:2, why:"The four utilities are Time, Place, Possession, and Form. Promotion is a P of the marketing mix."},
  {ch:"ch1", q:"Market share is best defined as:", choices:["A firm's profit divided by its costs","The ratio of a firm's sales to total industry sales","The number of customers a firm retains","A firm's advertising budget relative to rivals"], a:1, why:"Market share = firm sales ÷ total industry sales (revenue or volume)."},
  {ch:"ch1", q:"A company in which the ENTIRE organization (not just marketing) focuses on the customer has a:", choices:["Production orientation","Sales orientation","Marketing orientation","Market orientation"], a:3, why:"Market orientation = the whole organization is customer-focused; marketing orientation is limited to the marketing dept."},
  {ch:"ch1", q:"\"The trade of things of value between a buyer and seller so each is better off\" defines:", choices:["Exchange","The marketing mix","A marketing program","Positioning"], a:0, why:"That is the definition of exchange — the core of how marketing creates value."},
  {ch:"ch1", q:"Credit terms, allowances, and payment period are elements of which P?", choices:["Product","Price","Place","Promotion"], a:1, why:"Price includes list price, discounts, allowances, payment period, and credit terms."},
  {ch:"ch1", q:"Atmospherics, channels, and inventory belong to which P?", choices:["Product","Price","Place","Promotion"], a:2, why:"Place = channels, locations, inventory, transportation, atmospherics."},
  {ch:"ch1", q:"STP marketing refers to:", choices:["Sales, Trade, Promotion","Segmentation, Targeting, Positioning","Strategy, Tactics, Planning","Supply, Transport, Pricing"], a:1, why:"STP = Segmentation, Targeting, Positioning."},
  {ch:"ch1", q:"A plan that integrates the marketing mix for a product is a:", choices:["Marketing program","Market orientation","Value proposition","Social audit"], a:0, why:"A marketing program integrates the 4 P's to deliver an offering to customers."},
  // ---- Ch 3 ----
  {ch:"ch3", q:"Which sector is treated as MICRO, not macro?", choices:["Social","Competitive","Regulatory","Natural"], a:1, why:"In this course the competitive force is treated as part of the micro-environment."},
  {ch:"ch3", q:"The Sherman Antitrust Act (1890) primarily:", choices:["Prevents false advertising","Prevents monopolies","Provides trademark protection","Regulates product safety"], a:1, why:"Sherman (1890) prevents the development of monopolies — it protects competition."},
  {ch:"ch3", q:"Which act prevents price discrimination among businesses?", choices:["Lanham Act","Robinson-Patman Act","Sherman Act","FTC Act"], a:1, why:"The Robinson-Patman Act (1936) prevents price discrimination."},
  {ch:"ch3", q:"The agency that prevents false or misleading advertising is the:", choices:["FDA","CPSC","FTC","SEC"], a:2, why:"The Federal Trade Commission (1914) targets false/misleading advertising."},
  {ch:"ch3", q:"Environmental scanning is the process of acquiring information about events:", choices:["Inside the firm","Outside the organization","Only among competitors","Only in financial markets"], a:1, why:"Scanning focuses on external events to spot trends."},
  {ch:"ch3", q:"Income available after taxes AND necessities, used for wants, is:", choices:["Gross income","Disposable income","Discretionary income","Nominal income"], a:2, why:"Discretionary income = what's left after taxes and necessities (Gross→Disposable→Discretionary)."},
  {ch:"ch3", q:"Marketing sustainable products but exaggerating the benefits is called:", choices:["Cause marketing","Greenwashing","Relationship marketing","Demarketing"], a:1, why:"Greenwashing = misleading claims about environmental benefits."},
  {ch:"ch3", q:"Which is a component of strategic environmental scanning?", choices:["Sectors, Actors, Sources, Interpretation","Product, Price, Place, Promotion","Users, Buyers, Deciders","Trial, Repeat, Volume"], a:0, why:"Scanning components: Sectors, Actors, Sources, Interpretation."},
  {ch:"ch3", q:"Cultural and Demographic forces fall under which macro sector?", choices:["Economic","Social","Technological","Natural"], a:1, why:"The Social sector splits into Cultural and Demographic trends."},
  // ---- Ch 4 ----
  {ch:"ch4", q:"\"The greatest good for the greatest number\" describes:", choices:["Moral idealism","Utilitarianism","Profit responsibility","Consumerism"], a:1, why:"Utilitarianism judges actions by their outcomes — a cost/benefit tradeoff."},
  {ch:"ch4", q:"A philosophy that individual rights are universal regardless of outcome is:", choices:["Utilitarianism","Moral idealism","Societal responsibility","Stakeholder responsibility"], a:1, why:"Moral idealism holds rights/duties as universal, independent of consequences."},
  {ch:"ch4", q:"Which is the correct definition of laws (vs ethics)?", choices:["Moral principles that govern decisions","Societal standards enforceable in a court of law","A firm's internal code of conduct","Industry best practices"], a:1, why:"Laws are enforceable in court; ethics are moral principles/values."},
  {ch:"ch4", q:"The widest circle of corporate social responsibility is:", choices:["Profit responsibility","Stakeholder responsibility","Societal responsibility","Legal responsibility"], a:2, why:"Profit → Stakeholder → Societal is the widening ladder of CSR."},
  {ch:"ch4", q:"Which is a step in the social audit?", choices:["Manipulate the variable","Determination of priorities","Self-selection","Benefit segmentation"], a:1, why:"Social audit: Recognition, Identification of mission, Determination of priorities, Specification of resources, Evaluation."},
  {ch:"ch4", q:"An action can best be described as:", choices:["Only legal or illegal","Only ethical or unethical","Both on a legal AND an ethical dimension","Neither — it depends only on profit"], a:2, why:"Decisions are classified on two axes: legal/illegal AND ethical/unethical."},
  {ch:"ch4", q:"Cause marketing and the triple bottom line are examples of:", choices:["Profit responsibility","Societal responsibility","Utilitarian failure","Sampling error"], a:1, why:"They fall under societal responsibility (obligations to society at large)."},
  // ---- Ch 5 ----
  {ch:"ch5", q:"Correct order of the decision-making process:", choices:["Info search → Problem recognition → Purchase → Evaluation","Problem recognition → Info search → Evaluation → Purchase → Post-purchase","Evaluation → Purchase → Problem recognition → Feedback","Purchase → Info search → Evaluation → Problem recognition"], a:1, why:"DMP: Problem Recognition → Information Search → Evaluation → Purchase → Post-Purchase."},
  {ch:"ch5", q:"In the multi-attribute model, a brand's value equals:", choices:["The sum of its attribute beliefs","The highest single attribute rating","The sum of (belief × importance) across attributes","Price divided by quality"], a:2, why:"MAM: multiply each belief by that attribute's importance, then sum."},
  {ch:"ch5", q:"If perceived performance EXCEEDS expectations (P > E), the result is:", choices:["Dissatisfaction","Satisfaction","Delight","Cognitive dissonance"], a:2, why:"P>E → Delight; P=E → Satisfaction; P<E → Dissatisfaction."},
  {ch:"ch5", q:"On the NPS scale, Promoters are those who answer:", choices:["0–6","7–8","9–10","Any above 5"], a:2, why:"Detractors 0–6, Passives 7–8, Promoters 9–10."},
  {ch:"ch5", q:"NPS is calculated as:", choices:["%Promoters + %Passives","%Promoters − %Detractors","%Detractors − %Promoters","Average rating × 10"], a:1, why:"NPS = %Promoters − %Detractors (passives are excluded)."},
  {ch:"ch5", q:"A high-involvement purchase typically uses:", choices:["Routine problem solving","Limited problem solving","Extended problem solving","No problem solving"], a:2, why:"High involvement → Extended Problem Solving."},
  {ch:"ch5", q:"AIO in psychographics stands for:", choices:["Age, Income, Occupation","Activities, Interests, Opinions","Attitudes, Intentions, Outcomes","Awareness, Interest, Ownership"], a:1, why:"AIO = Activities, Interests, Opinions."},
  {ch:"ch5", q:"The household member who controls whether information reaches the family is the:", choices:["Information gatherer","User","Purchaser","Decision maker"], a:0, why:"The Information Gatherer collects info; in orgs the analogous role of restricting info is the gatekeeper."},
  {ch:"ch5", q:"Which is one of the four types of time use?", choices:["Committed time","Leisure capital","Hedonic time","Bounded time"], a:0, why:"The four: Contracted, Committed, Personal, Free."},
  // ---- Ch 6 ----
  {ch:"ch6", q:"Demand for industrial goods that stems from demand for consumer goods is called:", choices:["Elastic demand","Derived demand","Latent demand","Primary demand"], a:1, why:"Derived demand is a defining feature of organizational markets."},
  {ch:"ch6", q:"Which is NOT a member of the buying center?", choices:["Gatekeeper","Decider","Influencer","Syndicator"], a:3, why:"Buying center = Users, Influencers, Buyers, Deciders, Gatekeepers."},
  {ch:"ch6", q:"A routine reorder with no new information is a:", choices:["New buy","Modified rebuy","Straight rebuy","Spot buy"], a:2, why:"Straight rebuy = routine reorder; new buy is most complex."},
  {ch:"ch6", q:"NAICS classifies organizations by:", choices:["Their stock price","Their major activity, good, or service","Number of employees only","Their advertising spend"], a:1, why:"NAICS codes are based on the major activity/good/service provided."},
  {ch:"ch6", q:"Total Lifetime Cost (TLC) is computed as:", choices:["Purchase price only","Annual cost × years only","Purchase price + (annual costs × planning horizon)","Purchase price − salvage value"], a:2, why:"TLC = upfront purchase + recurring annual costs over the planning horizon."},
  {ch:"ch6", q:"Vendor analysis is essentially:", choices:["A break-even calculation","A formal multi-attribute model with weighted criteria","An NPS survey","A perceptual map"], a:1, why:"Vendor analysis rates vendors on weighted criteria and sums — like MAM."},
  {ch:"ch6", q:"Which is a key feature distinguishing organizational from consumer buyers?", choices:["Smaller decision-making unit","Less formal process","More specific criteria","Impulse-driven decisions"], a:2, why:"Org buyers use more specific criteria, larger DMUs, and more formal processes."},
  {ch:"ch6", q:"Switching costs and operating costs are examples of:", choices:["Types of costs in value analysis","NPS categories","Segmentation bases","Survey errors"], a:0, why:"Value-analysis cost types: Initial purchase, Switching, Operating, Life-cycle."},
  // ---- Ch 8 ----
  {ch:"ch8", q:"Research designed to establish cause and effect is:", choices:["Exploratory","Descriptive","Causal","Secondary"], a:2, why:"Causal research uses experiments to establish cause and effect."},
  {ch:"ch8", q:"Focus groups and depth interviews are tools of which research type?", choices:["Exploratory","Descriptive","Causal","Syndicated"], a:0, why:"Exploratory: observation, ethnography, focus groups, depth interviews."},
  {ch:"ch8", q:"The three keys to causal research are:", choices:["Population, Sample, Bias","Manipulate, Control, Measure","Trial, Repeat, Volume","Reach, Frequency, Impact"], a:1, why:"Manipulate the IV, control extraneous variables, measure the DV."},
  {ch:"ch8", q:"\"Did you see an ad for the Chevy Silverado?\" measures:", choices:["Free recall","Cued recall","Recognition","Attitude"], a:2, why:"Showing the specific brand and asking yes/no = recognition (the easiest measure)."},
  {ch:"ch8", q:"Data a firm collects new, specifically for the problem at hand, is:", choices:["Secondary","Primary","Syndicated","Internal"], a:1, why:"Primary data is gathered new for the specific decision."},
  {ch:"ch8", q:"Which is a type of survey error?", choices:["Sampling error","Derived error","Positioning error","Index error"], a:0, why:"Survey errors: Sampling, Interviewer, Questionnaire design."},
  {ch:"ch8", q:"Surveys and observation are primarily used in which research type?", choices:["Exploratory","Descriptive","Causal","None"], a:1, why:"Descriptive research uses observation and surveys to describe the market."},
  {ch:"ch8", q:"A firm that gathers data and sells reports to other organizations provides:", choices:["Primary internal data","Syndicated (secondary/external) data","Causal data","Experimental data"], a:1, why:"Syndicated data is secondary and external — sold to many buyers."},
  // ---- Ch 9 ----
  {ch:"ch9", q:"The single most important segmentation criterion (the key idea) is:", choices:["Measurability","Reachability","Profitability","Differential response"], a:3, why:"Differential response — segments must respond differently to marketing variables."},
  {ch:"ch9", q:"An index of 130 for a segment means the segment:", choices:["Does the behavior 30% less than the population","Does the behavior 30% more than the population","Is 130% of the total market size","Has 130 members"], a:1, why:"Index >100 means the segment over-indexes; 130 ≈ 30% more likely than the population."},
  {ch:"ch9", q:"The indexing formula is:", choices:["(% in population ÷ % in segment) × 100","(% in segment ÷ % in population) × 100","% segment − % population","segment size ÷ population size"], a:1, why:"Index = (% in segment ÷ % in population) × 100."},
  {ch:"ch9", q:"Blindly pursuing the largest segment is the:", choices:["Majority fallacy","Differential response","Self-selection trap","Reachability error"], a:0, why:"Majority fallacy — the biggest segment attracts the most competition."},
  {ch:"ch9", q:"Unique, desirable features that set a brand apart are:", choices:["Points of parity","Points of difference","Self-selection","Bases of segmentation"], a:1, why:"Points of Difference (POD) differentiate; Points of Parity (POP) match competitors."},
  {ch:"ch9", q:"Segmenting customers by which benefits they value most is:", choices:["Demographic segmentation","Benefit segmentation","Geographic segmentation","Occasion segmentation"], a:1, why:"Benefit segmentation groups people by importance weights on benefits."},
  {ch:"ch9", q:"Concentrating on a single segment is which targeting strategy?", choices:["Mass marketing","Concentration","Multisegment","Mass customization"], a:1, why:"Concentration = focusing on one segment."},
  {ch:"ch9", q:"Product positioning refers to:", choices:["Where a product sits in the warehouse","The location a brand occupies in the consumer's mind vs competitors","The shelf placement in a store","A product's stage in the life cycle"], a:1, why:"Positioning = the brand's perceived location in the consumer's mind relative to rivals."},
  {ch:"ch9", q:"Which 2×2 produces the four segmentation bases?", choices:["Legal/Illegal × Ethical/Unethical","General/Product-specific × Objective/Subjective","Macro/Micro × Internal/External","Trial/Repeat × Frequency/Volume"], a:1, why:"Bases = General vs Product-specific crossed with Objective vs Subjective."}
];
