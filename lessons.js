/* ============================================================
   COMPREHENSIVE LESSON CONTENT  (overrides CHAPTERS[].sections)
   Full detail from the lecture decks + Noteshells, kept in the
   same clean bullet layout. Goal: leave no gap a question can exploit.
   ============================================================ */
const LESSONS = {
  /* ===================== CHAPTER 1 ===================== */
  ch1:[
    { h:"What Marketing Is (and isn't)", items:[
      "<b>AMA (2007/2013):</b> marketing is the activity, set of institutions, and processes for creating, communicating, delivering, and exchanging offerings that have value for customers, clients, partners, and society at large.",
      "<b>Textbook:</b> the activity for creating, communicating, delivering, and exchanging offerings that benefit an organization, its customers, its stakeholders, and society at large.",
      "Marketing is broader than — and <b>not the same as</b> — selling, advertising, or public relations. Those are individual tools <i>within</i> marketing.",
      "<b>Drucker:</b> \"The purpose of a business is to create and keep a customer.\" · <b>Kotler:</b> marketing is \"the art of creating genuine customer value… helping your customer become better off.\"",
      "Two parties are needed, each with something the other values, able to communicate and deliver."
    ]},
    { h:"Needs, Wants & What Makes Marketing Happen", items:[
      "<b>Need</b> = feeling deprived of a basic necessity (food, clothing, shelter). <b>Want</b> = a need shaped by your knowledge, culture & personality. Marketing serves both.",
      "<b>Four requirements for an exchange/marketing to occur:</b> (1) two+ parties with <b>unsatisfied needs</b>; (2) <b>desire & ability</b> to satisfy them (money, authority, time); (3) a <b>way to communicate</b>; (4) <b>something to exchange</b>. <i>Example:</i> you want a meal & can pay; Domino's wants to sell & can make/deliver; dominos.com/phone connects you; money for pizza.",
      "<b>Market</b> = people with both the <b>desire AND the ability</b> (authority, time, money) to buy a specific offering.",
      "<b>Target Market</b> = the specific group(s) of customers an organization aims its marketing program at.",
      "Marketing's two jobs: (1) <b>discover</b> needs/wants, then (2) <b>satisfy</b> them."
    ]},
    { h:"Customer Value & the 4 Utilities", items:[
      "<b>Customer Value</b> = the unique combination of benefits received by targeted buyers: quality, price, convenience, on-time delivery, and before- & after-sale service.",
      "Lecture formula: <span class='formula'>Customer Value = Perceived Benefits ÷ Price</span> — raise value by adding benefits OR lowering price.",
      "<b>Three value strategies</b> firms use to win: <b>Best Price</b> (Target — \"Expect More, Pay Less\"), <b>Best Product</b> (Starbucks), <b>Best Service</b> (Nordstrom).",
      "Synonyms for value: <b>Utility</b> and <b>Satisfaction</b>.",
      "<b>Time utility</b> — having it <i>when</i> you want it (24-hr store, fast delivery).",
      "<b>Place utility</b> — having it <i>where</i> you want it (vending machine, gas-station ATM).",
      "<b>Possession utility</b> — making ownership/use easy (financing, layaway, delivery).",
      "<b>Form utility</b> — producing the product/its form (turning raw goods into a finished item; offering music as vinyl/CD/stream)."
    ]},
    { h:"Exchange", items:[
      "<b>Exchange</b> = the trade of things of value between a buyer and a seller so that <b>each is better off</b> after the exchange.",
      "Can be <b>barter</b> (goods for goods) or <b>money</b> for goods/services — or for ideas, images, concepts, places, and people.",
      "Marketing <i>management</i> facilitates and smooths this exchange of value."
    ]},
    { h:"The Marketing Mix — 4 P's (know the sub-elements)", items:[
      "<b>Product:</b> variety, quality, design, features, brand name, packaging, services, warranties.",
      "<b>Price:</b> list price, discounts, allowances, payment period, credit terms.",
      "<b>Place:</b> channels, locations, inventory, transportation, atmospherics.",
      "<b>Promotion:</b> sales promotion, advertising, sales force, public relations, direct marketing, e-commerce.",
      "These are the <b>controllable</b> factors managers adjust (vs. the uncontrollable environment).",
      "<b>Marketing Program</b> = a plan that <i>integrates</i> the marketing mix to deliver a product, service, or idea to prospective customers."
    ]},
    { h:"Market Share", items:[
      "<b>Market Share</b> = ratio of the firm's sales to total industry sales (<b>including</b> the firm).",
      "<span class='formula'>Market Share = (Brand Sales ÷ Total Category Sales) × 100</span>",
      "Can be by <b>revenue (dollars)</b> or by <b>unit volume</b> — read the question carefully; they can give different answers.",
      "A key indicator of a successful marketing program. The denominator already includes every competitor, so never re-add them."
    ]},
    { h:"STP", items:[
      "<b>Segmentation</b> → break the market into homogeneous groups.",
      "<b>Targeting</b> → choose which segment(s) to serve.",
      "<b>Positioning</b> → place the brand favorably in target customers' minds.",
      "STP is the strategic backbone connecting Ch 1 to Ch 9."
    ]},
    { h:"Four Business Orientations (evolution over time)", items:[
      "<b>Production orientation</b> — focus on making/producing; assume products sell themselves (scarce-supply era). <i>Example:</i> early Henry Ford — \"any color you want, as long as it's black\" — all about efficient output.",
      "<b>Sales orientation</b> — push hard to sell whatever is produced. <i>Example:</i> telemarketers or timeshare reps using aggressive tactics regardless of fit.",
      "<b>Marketing orientation</b> — identify & satisfy customer needs, but <i>led by the marketing department</i>. <i>Example:</i> a firm running customer research before designing a product.",
      "<b>Market orientation</b> — the <b>entire organization</b> (every department) focuses on customer value. <i>Example:</i> Amazon's company-wide \"customer obsession.\"",
      "<b>The four eras (the evolution):</b> <b>Production Era</b> (to ~1920s, goods scarce) → <b>Sales Era</b> (1920s–1960s, overproduction → more salespeople) → <b>Marketing Concept Era</b> (satisfy needs while meeting company goals) → <b>Customer Relationship Era</b> (1980s–today, AI/AR/VR enhance relationships).",
      "<b>Customer Experience</b> = customers' internal response to <i>all</i> aspects of the firm — through <b>direct</b> contacts (buying, using, getting service) and <b>indirect</b> contacts (word-of-mouth, reviews, news).",
      "<b>CRM</b> (Customer Relationship Management) = building long-term, value-laden relationships (e.g., Starbucks Rewards). <b>Societal Marketing Concept</b> = satisfy customers <i>and</i> preserve society's long-run well-being (e.g., Patagonia)."
    ]}
  ],

  /* ===================== CHAPTER 3 ===================== */
  ch3:[
    { h:"Environmental Scanning & the Nature of the Environment", items:[
      "<b>Environmental Scanning</b> = the process of <b>continually</b> acquiring information on events occurring <i>outside</i> the organization to identify and interpret potential trends.",
      "The marketing environment is <b>multi-level, constraining, and current/future</b> (you watch today's facts AND tomorrow's trends).",
      "It <b>constrains</b> the firm. Two responses: <b>Adapt</b> to it, or <b>Modify</b> it. Every force is either a <b>Threat</b> or an <b>Opportunity</b>.",
      "Ways to change a macro constraint: <b>lobbying</b> and <b>leading broad consumer change</b>."
    ]},
    { h:"Three Levels", items:[
      "<b>Macro</b> — broad societal forces; the firm has the <i>least</i> control (must mostly adapt).",
      "<b>Micro</b> — the immediate players around the firm (incl. competitors and customers); some influence.",
      "<b>Internal</b> — inside the organization; the firm has the <b>most</b> control here.",
      "Trap: a question asking what you control <i>most</i> → Internal; what you control <i>least</i> → Macro."
    ]},
    { h:"MACRO 1 — Social: Cultural Values", items:[
      "<b>Culture</b> = a core set of beliefs and values, plus sub- and micro-cultures, and growing diversity.",
      "<b>Core American Values</b> (Robin Williams, 1970): Equal Opportunity, Achievement & Success, Material Comfort, Activity & Work, Practicality & Efficiency, Progress, Science, Democracy & Enterprise, Freedom.",
      "<b>Materialism:</b> Americans are <i>more</i> materialistic than less-developed and many other Western countries.",
      "<b>Individualism:</b> the US is highly <b>individualist</b> — consumption expresses identity; brands act as markers of individuality; customization & 'mass-individualism' appeal. (Contrast: many <b>Asian cultures are more collectivist</b>, emphasizing the group/family.)",
      "<b>Time orientation:</b> America is <b>future-oriented</b>; <b>France is present-oriented</b>; <b>many Asian cultures are past-oriented</b>. (This is the kind of cross-country comparison Cooke likes to test.)",
      "<b>Youthfulness:</b> a prized value — reflected in cosmetics and cosmetic-surgery spending.",
      "Values are <b>NOT static</b> (e.g., political polarization shifts them over time)."
    ]},
    { h:"MACRO 1 — Social: Micro-cultures & Demographics", items:[
      "<b>Micro-culture (subculture)</b> = a subset that differs from the mainstream, sharing beliefs, values, behavior, history, and a language/symbol system (e.g., a vegan community sharing recipes & vocabulary).",
      "<b>Racial/ethnic subcultures:</b> Hispanic/Latino ≈ 17% (largest), African-American ≈ 13.2%, Asian-American ≈ 5.6%. Hispanic/Latino and Asian-American are the <b>fastest-growing</b>.",
      "<b>Demographic trends:</b> age distribution & generational cohorts; geographic shifts (population moving from rural areas — but more to <b>suburbs and exurbs</b> than into the city core); household composition (changing marital trends, fewer traditional households).",
      "<b>Generational cohorts</b> (oldest→youngest): Silent Generation, <b>Baby Boomers</b>, <b>Gen X</b>, <b>Millennials</b>, <b>Gen Z</b>. Gen Z & Millennials are the most willing to pay more for sustainable/ethical brands.",
      "<b>Exurbs</b> = remote suburbs beyond the regular suburbs."
    ]},
    { h:"MACRO 2 — Economic", items:[
      "Track the <b>trend in GDP</b>, in <b>consumer income</b>, and in <b>income inequality</b>.",
      "<b>Nominal income</b> = raw dollars. <b>Real income</b> = adjusted for inflation (actual buying power). Inflation devalues the dollar; measured by the <b>Consumer Price Index (CPI)</b>.",
      "<b>Ability to buy = income:</b> <b>Gross</b> (total) → <b>Disposable</b> (after taxes) → <b>Discretionary</b> (after necessities — what's left for wants). Marketers of fashion/luxury care most about <b>discretionary</b> income.",
      "<b>Willingness to buy</b> = consumer expectations / the <b>Index of Consumer Confidence (CCI)</b>. The 2008 recession is the classic shock example."
    ]},
    { h:"MACRO 3 — Technological", items:[
      "<b>Three screens of advertising:</b> Television, Computer, Mobile (+ a possible 4th: Tablet/display).",
      "<b>Key issues:</b> the <b>Rate of Change</b> and <b>Media Fragmentation</b> (audiences split across many channels).",
      "Fragmentation's upside: it lets marketers <b>target specific audience segments</b> by advertising on niche channels (instead of one mass message).",
      "<b>Multi-screen behavior:</b> <b>Meshing</b> = simultaneous use for <i>related</i> content (~14%); <b>Stacking</b> = simultaneous use for <i>unrelated</i> content (~22%); <b>Shifting</b> = moving sequentially between devices — the <b>biggest opportunity (~65%)</b>.",
      "Other forces: interactivity → big data, micro-targeting, personalized ads; increased automation; the <b>sharing / 1099 economy</b> (~53M Americans are 1099 workers); the <b>Internet of Things</b> (connected devices)."
    ]},
    { h:"MACRO 4 — Regulatory (know each act's PURPOSE)", items:[
      "<b>What's actually tested:</b> matching a scenario to the right act (e.g., \"a firm buys all rivals\" → Sherman). The <i>years</i> are listed for context but were NOT asked in any practice question — don't burn time memorizing them.",
      "<b>Protecting COMPETITION:</b> <b>Sherman Antitrust Act (1890)</b> — prevents monopolies; <b>Robinson-Patman Act (1936)</b> — prevents price discrimination among businesses; <b>Lanham Act (1946)</b> — provides trademark protection.",
      "<b>Protecting CONSUMERS:</b> <b>FDA (1906)</b> — food & drug testing/advertising; <b>FTC (1914)</b> — prevents false/misleading advertising; <b>CPSC (1972)</b> — regulates 15,000+ products' sale & manufacture.",
      "<b>Consumer Financial Protection Bureau (CFPB)</b> — handles <b>financial services</b> as a product category; created after the 2008 financial crisis (recently defunded).",
      "<i>Real examples:</i> Sherman → blocking big mergers (T-Mobile/Sprint); Robinson-Patman → Bumble Bee tuna price-fixing (Walmart sued); Lanham → the Taco Bell vs. Taco John's \"Taco Tuesday\" trademark fight; FTC → Epic/Fortnite's $520M children's-privacy penalty.",
      "<b>Consumerism</b> = the 1960s grassroots movement to increase consumers' influence, power, and rights vs. institutions (e.g., Consumer Reports). <b>Media</b> also pressures firms by disclosing harmful practices.",
      "<b>Self-regulation</b> = an industry policing itself instead of waiting for government. Key <b>weakness</b>: nonmember firms aren't bound by it, and trade associations often lack real enforcement power."
    ]},
    { h:"MACRO 5 — Natural", items:[
      "Issues: energy use, global warming/climate change, and <b>green marketing / sustainability</b>.",
      "<b>Energy:</b> ~2/3 of energy produced is wasted (<b>\"rejected energy\"</b>). The single biggest opportunity is <b>energy storage</b> — cheaply recapturing rejected energy.",
      "<b>Climate signals:</b> 2024 = warmest year on record; Arctic sea ice ~19% below average; CO₂ now >400 ppm (vs. a historical 180–300 range); rising extreme weather — only geophysical events (earthquakes) aren't increasing.",
      "<b>Green marketing</b> = marketing products/brands/companies with genuine environmental sustainability in mind (directly-beneficial products; sustainable processing/packaging).",
      "<b>Greenwashing</b> = a negative: <b>inflated or false</b> environmental claims to look sustainable while really chasing profit (e.g., Coca-Cola \"Life\"). Prevent it with independent certifications: <b>Energy Star, USDA Organic, WaterSense, Rainforest Alliance, Fairtrade.</b> Beware <b>virtue signaling</b> (caring only about perception)."
    ]},
    { h:"MICRO & INTERNAL Environments", items:[
      "<b>MICRO</b> (immediate, some influence): Customers, <b>Competitors</b>, Stakeholders, Suppliers, Channels. (Note: <b>Competition is treated as MICRO</b>, not macro — common trap.)",
      "<b>INTERNAL</b> (most control): Top Management, Personnel, Other Departments.",
      "<b>Strategic Environmental Scanning</b> components: <b>Sectors, Actors, Sources, Interpretation.</b>"
    ]}
  ],

  /* ===================== CHAPTER 4 ===================== */
  ch4:[
    { h:"Ethics vs. Laws", items:[
      "<b>Ethics</b> = the moral principles and values that govern the actions and decisions of an individual or group.",
      "<b>Laws</b> = societal standards and values that are <b>enforceable in a court of law</b>.",
      "\"Marketing ethics\" is <b>not</b> an oxymoron — marketing brings value; it's <i>how</i> you do it that's moral or immoral.",
      "Consumers have obligations too — to <b>act ethically and responsibly</b> in exchange and in product use/disposal."
    ]},
    { h:"The Ethical–Legal Matrix (a favorite question type)", items:[
      "Every action sits on two axes: <b>Ethical/Unethical</b> × <b>Legal/Illegal</b> → four quadrants.",
      "Read the scenario for BOTH dimensions independently; many questions hinge on spotting <b>'legal but unethical.'</b>"
    ], matrix:{
      title:"Ethical–Legal Matrix",
      corner:"", colLabels:["Legal","Illegal"], rowLabels:["Ethical","Unethical"],
      cells:[
        ["✅ Normal good business","Sci-Hub freeing paywalled science; donating restaurant leftovers despite food-safety rules"],
        ["⚠️ The classic trap — legal but morally wrong: TikTok's harmful algorithm, Amazon steamrolling rivals, layoffs just to boost bonuses","❌ Worst case: Theranos wire fraud, selling recalled baby products, Red Bull 'gives you wings' false-ad suit"]
      ]
    }},
    { h:"Why Attention to Ethics Has Risen", items:[
      "Diverse societal value systems.",
      "Increased <b>public scrutiny</b> (tools like CSR-rating sites expose company behavior).",
      "Expectations have risen.",
      "Ethical conduct is <b>perceived</b> to be dropping."
    ]},
    { h:"Framework for Ethical Behavior", items:[
      "Behavior is shaped by widening layers: <b>Societal culture & norms → Business culture & industry practices → Organizational culture & expectations → Personal Moral Philosophy.</b>",
      "Corporate culture shows up in everyday norms: dress codes, manner of work, sayings, and formal codes of ethics."
    ]},
    { h:"Two Personal Moral Philosophies", items:[
      "<b>Moral Idealism</b> — individual rights & responsibilities are <b>universal, regardless of outcome</b>; do the right thing even if it doesn't maximize good. (Refuses to lie even if lying helped more people.)",
      "<b>Utilitarianism</b> — the <b>greatest good for the greatest number</b>; a cost/benefit trade-off judged by <i>outcomes</i>.",
      "Tip: 'rights/principles no matter what' = Idealism; 'most people best off' = Utilitarianism.",
      "<b>These are the ONLY two moral philosophies in this course.</b> If you see options like <i>moral relativism, solipsism, hedonism, the Golden Rule</i> — they're real terms but <b>distractors</b> here, never the answer. \"Which moral philosophy?\" is always Idealism or Utilitarianism."
    ]},
    { h:"Current Ethics Topics", items:[
      "<b>Fake reviews</b> — astroturfing & sockpuppets.",
      "<b>Product placement</b> — products woven into shows/movies; the dilemma is <b>hidden persuasive intent</b> blurring ad vs. content.",
      "<b>Native advertising</b> — paid content disguised to look like normal editorial (e.g., a 'Presented by Brand' article).",
      "<b>Permission-based marketing</b> (opt-in) and <b>data privacy / data sharing</b> (e.g., BetterHelp selling user info).",
      "<b>Whistle-blowers</b> = employees who report their employer's unethical/illegal actions.",
      "<b>The common thread across ALL of these issues is DECEPTION.</b>",
      "<b>Does being ethical pay?</b> Yes — ethical firms tend to command higher prices. But <b>bragging</b> about being trustworthy backfires; show it through <b>deeds, not words.</b>"
    ]},
    { h:"Consumer Rights, Caveat Emptor & Espionage", items:[
      "<b>Caveat emptor</b> = \"let the buyer beware\" — the old doctrine that the buyer alone is responsible for checking quality. Consumerism shifted protection <i>toward</i> the buyer.",
      "<b>Consumer Bill of Rights</b> (President Kennedy, 1962) — four rights: the right to <b>safety</b>, to be <b>informed</b>, to <b>choose</b>, and to be <b>heard</b>. (\"What helps consumers be heard?\" → this.)",
      "<b>Economic espionage</b> = the clandestine collection of a competitor's trade secrets / proprietary information. Includes trespassing, theft, fraud, bribery, electronic hacking, and dumpster-diving — but <b>NOT</b> simply violating a noncompete clause (that's a contract issue, not espionage).",
      "<b>Whistle-blowers</b>, codes of ethics, and a personal <b>moral compass</b> all help people act ethically when laws/codes don't give a clear answer."
    ]},
    { h:"Corporate Social Responsibility (3 widening levels)", items:[
      "<b>Profit Responsibility</b> — maximize profit for owners (Friedman view). Example: TOMS ending 'buy-one-give-one' because it wasn't profitable.",
      "<b>Stakeholder Responsibility</b> — obligations to everyone who affects/is affected by the firm (employees, suppliers, customers, community).",
      "<b>Societal Responsibility</b> — obligations to society/environment at large; includes <b>green marketing</b>, <b>cause marketing</b>, and the <b>Triple Bottom Line</b>.",
      "Memory aid: <b>Profit → People</b> (stakeholder) <b>→ Planet</b> (societal).",
      "<b>Cause marketing</b> = tying purchases to a social cause (Warby Parker & Bombas 'buy one, give one' — note TOMS' version <i>didn't</i> work financially). Don't confuse with green marketing (environmental) or greenwashing (false claims).",
      "<b>Social Entrepreneurship</b> = the cause/charity comes <b>first</b>, profit second (a step beyond cause marketing).",
      "<b>Pinkwashing</b> = the cause-marketing cousin of greenwashing — <b>overstating</b> a social-cause contribution (e.g., KFC \"Buckets for the Cure\" / Campbell's pink cans donating far less than implied)."
    ]},
    { h:"The Social Audit (5 steps, in order)", items:[
      "1. <b>Recognition</b> of social responsibility.",
      "2. <b>Identification</b> of the social-responsibility 'mission'.",
      "3. <b>Determination</b> of priorities.",
      "4. <b>Specification</b> of resources.",
      "5. <b>Evaluation</b> of results.",
      "A social audit is <b>internal</b> (a company reviewing its own societal impact), not public-facing."
    ]}
  ],

  /* ===================== CHAPTER 5 ===================== */
  ch5:[
    { h:"What Shapes Consumer Decisions", items:[
      "<b>Influences:</b> the Marketing Mix, Psychological factors, Socio-Cultural factors, and <b>Situational</b> factors (e.g., shopping hungry/tired after class = situational).",
      "Decision making is: <b>Goal-directed, Boundedly-rational, of Varied involvement, Selective, and Adaptive.</b>",
      "<b>Bounded rationality:</b> people can't process everything, so they simplify and 'satisfice' rather than optimize.",
      "<b>Choice (decision) overload</b> = too many options → frustration; people <b>defer or avoid</b> choosing. <b>Nudge theory</b> fixes this with a smart <b>default option</b> that's best for most while still allowing choice (e.g., opt-out <b>organ-donor</b> defaults)."
    ]},
    { h:"Decision-Making Unit (DMU) — the household roles", items:[
      "<b>Information Gatherer</b> — collects/researches options.",
      "<b>Influencer</b> — actively tries to sway the choice (not just relaying facts).",
      "<b>Decision Maker</b> — makes the final call.",
      "<b>Purchaser</b> — actually buys it.",
      "<b>User</b> — consumes/uses it.",
      "One person can hold several roles; watch the wording (relaying info ≠ influencing)."
    ]},
    { h:"Decision-Making Process (DMP) — 5 stages + feedback", items:[
      "1. <b>Problem Recognition</b> — sensing a need/gap.",
      "2. <b>Information Search</b> — internal (memory) + external (web, friends, ads).",
      "3. <b>Evaluation of Alternatives</b> — compare a consideration set on criteria (often via the multi-attribute model).",
      "4. <b>Purchase Decision</b>.",
      "5. <b>Post-Purchase Behavior</b> — satisfaction/dissonance.",
      "<b>Feedback</b> loops back: realizing a chosen solution didn't work (e.g., the Febreze didn't fix the smell) is the feedback phase, sending you back to search.",
      "<b>Brand sets</b> narrow during search: all brands → <b>awareness set</b> → <b>consideration (evoked) set</b> → <b>choice set</b>. Two reject piles: the <b>inert set</b> (brands you're indifferent to) and the <b>inept set</b> (brands you actively reject)."
    ]},
    { h:"The Multi-Attribute Model (MAM)", items:[
      "Assumptions: a <b>consideration set</b> of brands described by the <b>same attributes</b>; the consumer holds <b>beliefs</b> (ratings) about each brand on each attribute; and can weight each attribute's <b>importance</b>.",
      "<span class='formula'>Value(brand) = Σ (belief × importance) across all attributes</span>",
      "Highest total = predicted choice.",
      "<b>Three ways a marketer can use the MAM to influence a choice:</b> (1) change a <b>belief</b> about how your brand rates on an attribute; (2) change the <b>importance weight</b> of an attribute; (3) <b>add a new attribute</b> (e.g., be the only brand with a certification). Toyota adding 'self-parking' = adding a new attribute."
    ]},
    { h:"Involvement", items:[
      "<b>Low → Routine</b> problem solving (habit; e.g., always ordering the same item).",
      "<b>Moderate → Limited</b> problem solving.",
      "<b>High → Extended</b> problem solving (big, researched purchases like a car)."
    ]},
    { h:"Building a Customer Profile", items:[
      "<b>Demographic:</b> sex, age, marital status, # children.",
      "<b>Socio-Economic (SES):</b> income, education, occupation, dual-earner?, own vs. rent.",
      "<b>Psychographic:</b> <b>AIO</b> = Activities, Interests, Opinions; lifestyle; product-attribute importance & ratings.",
      "Note the split: income/education/occupation = SES; hobbies/interests/attitudes = psychographic."
    ]},
    { h:"Satisfaction & Net Promoter Score", items:[
      "Satisfaction compares <b>Expectations (E, before)</b> with <b>Perceived Performance (P, after)</b>:",
      "<b>P < E → Dissatisfaction · P = E → Satisfaction · P > E → Delight.</b>",
      "This is <b>expectancy-disconfirmation theory</b> — the size of the gap between expectations and performance sets your satisfaction level; delight (P>E) bakes in loyalty.",
      "<b>NPS:</b> 'How likely (0–10) are you to recommend us?' <b>Detractors 0–6, Passives 7–8, Promoters 9–10.</b>",
      "<span class='formula'>NPS = %Promoters − %Detractors</span> (passives ignored). Positive NPS = generally satisfying customers.",
      "Managing satisfaction: measurement, service after the sale, 800-number/website, a Chief Customer Officer."
    ]},
    { h:"Symbolic Consumption & Perception", items:[
      "<b>Symbolic consumer behavior</b> = buying/using products for the <b>meaning</b> they convey about identity, status, or group affiliation ('we are what we wear/drink/drive'; a luxury watch to signal success).",
      "<b>Product constellation</b> = the <i>group</i> of products someone buys that together signal who they are.",
      "Also: image management, <b>hedonic (experiential) consumption</b>, and product enthusiasts (hobbies, collecting).",
      "<b>Reference groups:</b> <b>associative/membership</b> (you belong), <b>aspiration</b> (you want to join), <b>dissociative</b> (you avoid).",
      "<b>Perception:</b> <b>stimulus discrimination</b> = noticing differences between similar products (tasting which chocolate is which); <b>stimulus generalization</b> = treating similar stimuli alike.",
      "<b>Selective perception</b> filters what gets through: <b>selective exposure</b> (what we let in), <b>selective attention</b> (what we notice), <b>selective comprehension</b> (interpreting info to fit our existing attitudes/beliefs), and <b>selective retention</b> (what we remember).",
      "<b>Personality traits</b> (e.g., extroversion, assertiveness) also shape buying."
    ]},
    { h:"Understanding the Active-Recreation Consumer", items:[
      "<b>Macro lifestyle trends:</b> Fantasy Adventure, Being Alive, <b>99 Lives</b> (overcommitted/time-stressed), <b>Cashing Out</b> (simplifying, cutting work to refocus on life).",
      "<b>Leisure trends:</b> Aging Boomers, Hybrid Sports, Cross-Participation.",
      "<b>Four types of time use:</b> <b>Contracted</b> (paid work), <b>Committed</b> (household care/chores), <b>Personal</b> (self-maintenance), <b>Free</b> (discretionary/leisure — watching TV, reading for fun).",
      "<b>Peak Experience</b> = a high point, rich and fulfilling. <b>'Flow'</b> = total absorption, mastery, and oneness with the activity."
    ]}
  ],

  /* ===================== CHAPTER 6 ===================== */
  ch6:[
    { h:"Organizational Markets & Buyer Types", items:[
      "<b>Organizational buyers</b> = manufacturers, wholesalers, retailers, and government agencies that buy goods/services for their own use and/or resale — <b>everyone except the end consumer</b>.",
      "<b>Industrial</b> — buy parts/materials to <b>make</b> other goods (Toyota buying bumpers; a table-maker buying wood).",
      "<b>Reseller</b> — buy <b>finished</b> goods to resell unchanged (wholesalers, distributors, retailers; a grocery chain).",
      "<b>Government</b> — buy for public agencies/public use. (Plus <b>Global</b> organizational markets across borders.)",
      "<b>NAICS</b> (North American Industry Classification System) classifies organizations in the US, Canada & Mexico by their <b>major activity/good/service</b> — a 6-digit code (sector → subsector → industry group → industry → national)."
    ]},
    { h:"Key Features of Organizational Buyers", items:[
      "<b>Derived Demand</b> — their demand is derived from demand for the <i>consumer</i> products downstream (a paper mill's demand depends on newspaper, shipping & diaper demand).",
      "<b>More formal</b> decision process.",
      "<b>Larger Decision-Making Unit</b> — often many people/buyers.",
      "<b>More specific criteria</b>.",
      "Greater role of <b>Relationship Marketing</b> — incl. <b>supplier development</b> (a big buyer actively trains/develops its suppliers to make better products).",
      "Primary buying objective for firms: help the firm <b>increase profitability</b>."
    ]},
    { h:"The Buying Center (organizational DMU)", items:[
      "<b>Users</b> — will use the product.",
      "<b>Influencers</b> — shape specs/criteria, advocate options.",
      "<b>Buyers (Purchasing Agent)</b> — formally select the vendor and place the order.",
      "<b>Deciders</b> — have final authority on the choice.",
      "<b>Gatekeepers</b> — control the <b>flow of information</b> (and access) into the buying center (e.g., an assistant deciding what reaches the CEO).",
      "Match roles to wording: 'signs the contract/places the order' = Purchasing Agent; 'controls what info gets through' = Gatekeeper."
    ]},
    { h:"Buyclasses (3)", items:[
      "<b>New Buy</b> — first-time purchase; most complex, biggest buying center, most research (e.g., a hospital's first MRI).",
      "<b>Straight Rebuy</b> — routine reorder, same product/vendor, no changes.",
      "<b>Modified Rebuy</b> — bought before, but changing something (vendor, quantity, specs, price) — e.g., switching the gummy-shark supplier while reordering everything else as-is."
    ]},
    { h:"Value Analysis & Total Lifetime Cost (TLC)", items:[
      "<b>Value analysis</b> = understand how the buyer perceives value (benefits vs. costs <i>from their view</i>) and find cost savings; often position on <b>TLC</b>, not just purchase price.",
      "<b>Four types of cost:</b> <b>Initial purchase</b>, <b>Switching</b> (one-time costs to change over — e.g., new ingredient bags for a new machine), <b>Operating</b> (ongoing power/consumables), <b>Life-cycle</b>.",
      "<span class='formula'>TLC = Purchase price + (annual/recurring costs × planning horizon)</span>",
      "Compute each option's TLC over the same horizon; the <b>lower</b> TLC wins (mind replacement intervals — e.g., a filter replaced every 2 yrs over 10 yrs = 5 buys).",
      "<b>Razors-and-blades model:</b> sell the main product cheap, then profit on proprietary add-ons (cheap printer, pricey ink — \"black ink is the most expensive liquid\"). TLC reveals the true cost."
    ]},
    { h:"Vendor Analysis", items:[
      "A <b>formal multi-attribute model</b> for choosing suppliers.",
      "Rate each vendor on each criterion and weight by importance (e.g., Product Quality 40%, Delivery 25%, Reliability 20%, Price 15%).",
      "<span class='formula'>Vendor Score = Σ (rating × weight)</span> → choose the highest. (Weights are %, so multiply by w/100.)"
    ]},
    { h:"Other B2B Concepts", items:[
      "<b>Reciprocity</b> = two firms agreeing to buy from each other (\"you buy from me, I'll buy from you\"). Often legal, but it can obscure the true price of products.",
      "<b>Reverse auction</b> = ONE buyer, MANY sellers bidding against each other — driving the price <b>down</b> for the buyer (the opposite of a traditional auction).",
      "<b>E-marketplaces</b> = online trading communities that connect many B2B buyers and sellers (e.g., Buzzsaw for construction).",
      "<b>Long-term contracts</b> are common in organizational buyer-seller relationships — a reflection of relationship marketing."
    ]}
  ],

  /* ===================== CHAPTER 8 ===================== */
  ch8:[
    { h:"What Marketing Research Is & Its Uses", items:[
      "<b>Marketing Research</b> = the set of activities that provide information for marketing decision making.",
      "<b>Uses:</b> <b>Demand Forecasting</b> (estimate future sales to plan inventory/production), <b>Segmentation</b>, <b>Market Tracking</b>, <b>New Product Testing</b>, <b>Ad Pretesting</b> (e.g., A/B testing two ad versions).",
      "Pick the use by what's being estimated: future sales = demand forecasting; which ad performs better = ad pretesting; testing the product itself = new product testing."
    ]},
    { h:"The Five-Step Research Approach", items:[
      "1. Define the problem. 2. <b>Develop the research plan</b>. 3. Collect information. 4. Develop findings. 5. Take marketing actions.",
      "Questions sometimes ask which <b>step number</b> a task is — know the order."
    ]},
    { h:"Marketing Information System (MIS) & Data Types", items:[
      "An <b>MIS</b> is an integrated, ongoing decision-support system.",
      "Data is classified on two axes: <b>Secondary vs. Primary</b> (does it already exist, or is it collected new for this problem?) AND <b>Internal vs. External</b> (from inside or outside the firm?).",
      "<b>Syndicated</b> firms gather data and sell reports to many organizations (secondary/external). <b>Big data</b> & Nielsen panels are examples."
    ], matrix:{
      title:"MIS Data Classification",
      corner:"", colLabels:["Internal (inside firm)","External (outside firm)"], rowLabels:["Secondary (already exists)","Primary (collected new)"],
      cells:[
        ["Your own past sales reports & records","Census data, syndicated/industry reports"],
        ["New data gathered within the firm (survey your own members)","New field surveys/experiments on outside consumers"]
      ]
    }},
    { h:"Three Forms of Research", items:[
      "<b>Exploratory</b> — <i>discover/define</i> the problem & ideas. Methods: Observation, <b>Consumer Ethnography</b> (observe behavior in a natural setting), <b>Focus Groups</b> (6–12 people + a moderator), <b>Depth Interviews</b> (one-on-one, adaptive questioning).",
      "<b>Laddering</b> (a depth-interview technique) = repeatedly asking <b>\"why?\"</b> to connect product attributes up to the deeper, terminal needs they satisfy.",
      "<b>Descriptive</b> — a <i>snapshot</i> describing the current market. Methods: Observation (personal/electronic) and <b>Surveys</b> (mail, phone, personal, web) — e.g., a cross-sectional survey of 1,000 customers.",
      "<b>Causal</b> — establish <i>cause & effect</i>. Method: <b>Experiments</b> — Laboratory and Field (Test Marketing).",
      "Focus group vs. depth interview vs. ethnography are all <b>exploratory</b> — distinguish by group(focus) / one-on-one(depth) / natural observation(ethnography)."
    ]},
    { h:"Descriptive Research — Key Factors & Errors", items:[
      "Key factors: <b>Population, Sample, Response Rate, Representativeness, Error (Bias).</b>",
      "<b>Response rate</b> = the share of contacted people who actually respond.",
      "<b>Three types of survey error:</b> <b>Sampling</b> (unrepresentative sample — e.g., only surveying your similar friends), <b>Interviewer</b>, and <b>Questionnaire Design</b>.",
      "<b>Measures of consumer memory</b> (easiest→hardest, highest→lowest scores): <b>Recognition</b> ('Did you see the Chevy ad?') → <b>Cued Recall</b> ('Which trucks did you see?') → <b>Free Recall</b> ('What brands did you see?').",
      "<b>Question types:</b> <b>open-ended</b> questions invite a free written answer ('Why do you smoke cigarettes?'); <b>closed-ended</b> questions give fixed choices or scales.",
      "<b>Neuromarketing</b> = studying the <b>brain's</b> response to marketing stimuli (eye-tracking, fMRI, biometrics)."
    ]},
    { h:"Causal Research — the Keys", items:[
      "Three keys: <b>Manipulate</b> the independent variable(s), <b>Control</b> all extraneous variables, and <b>Measure</b> response on the dependent variable(s).",
      "<b>IV</b> = the cause you change (price, ad version). <b>DV</b> = the result you measure (sales, satisfaction).",
      "<b>Lab vs. Field experiments:</b> a <b>laboratory</b> experiment maximizes <b>internal validity</b> (tight control → confident the IV caused the effect); a <b>field</b> experiment / test market maximizes <b>external validity</b> (real behavior → generalizes to the population). You want both.",
      "<b>Correlation ≠ causation</b> — ice-cream sales and shark attacks rise together (both driven by summer), with no causal link between them.",
      "<b>Test Marketing</b> considerations: <b>Cost, Competition</b> (rivals can sabotage your test with promotions), <b>Timing, Repurchase Rate, Fine-tuning</b>. Scanner-panel household data tracks <b>Trial, Repeat, Frequency, Volume</b>."
    ]}
  ],

  /* ===================== CHAPTER 9 ===================== */
  ch9:[
    { h:"Segmentation Basics", items:[
      "<b>Market Segmentation</b> = the search for relatively <b>homogeneous</b> clusters within a <b>heterogeneous</b> market.",
      "A <b>Segment</b> = a group of current/potential customers with <b>common needs, values, and responsiveness</b> to marketing variables.",
      "Markets <b>evolve toward heterogeneity</b> over time (e.g., the soda market diversifying), so firms are always segmenting & differentiating.",
      "The payoff test: segmentation should lead to tangible actions that <b>increase sales and profitability</b>."
    ]},
    { h:"The Four Segmentation Criteria", items:[
      "<b>Measurability (Assignment)</b> — can you identify & assign customers to the segment?",
      "<b>Reachability</b> — can you actually reach them? Two tools: <b>Selective Targeting</b> (aim media at them) and <b>Self-Selection</b> (a broad ad that the right people self-associate with).",
      "<b>Profitability</b> — is the segment worth pursuing?",
      "<b>Differential Response</b> — do segments respond <b>differently</b> to marketing variables? This is THE core idea (a brand offering different packaging for older vs. younger buyers exploits differential response)."
    ]},
    { h:"Differential Response in Detail", items:[
      "Applies to <b>all four controllable variables</b>: Price, Product, Promotion, Place.",
      "Price example: a <b>price-inelastic</b> segment barely changes quantity when price moves; a <b>price-elastic</b> segment changes a lot.",
      "If two segments react differently to the same action, you can (and should) treat them separately."
    ]},
    { h:"Segmentation Bases (the 2×2)", items:[
      "The four ways to assign customers to segments come from crossing <b>General vs. Product-Specific</b> with <b>Objective vs. Subjective</b>. This is the 2×2 you saw in the quiz:"
    ], matrix:{
      title:"The Four Segmentation Bases",
      corner:"", colLabels:["General","Product-Specific"], rowLabels:["Objective","Subjective"],
      cells:[
        ["<b>Demographics / SES</b><br>age, sex, ethnicity, income, region","<b>Past Purchase</b><br>heavy-half usage, brand loyalty"],
        ["<b>Psychographics</b><br>AIO / lifestyle","<b>Brand Ratings & Importance Weights</b><br>(the multi-attribute model)"]
      ]
    }},
    { h:"Product-Usage & Loyalty Types", items:[
      "<b>Brand loyal</b> — buys one brand consistently (L L L L L).",
      "<b>Split loyal</b> — alternates between two brands (L D L D D L).",
      "<b>Shifting loyal</b> — loyal to one brand, then <b>switches</b> and becomes loyal to another (Dunkin' → now only Starbucks).",
      "<b>Variety seeker</b> — spreads across many brands (L S D P S).",
      "<b>Heavy half</b> — the ~20% of buyers who account for ~80% of volume (the 80/20 / Pareto rule)."
    ]},
    { h:"Indexing", items:[
      "Compares a <b>segment</b> to the overall <b>population</b> on a behavior — i.e., targeting efficiency.",
      "<span class='formula'>Index = (% in segment ÷ % in population) × 100</span>",
      "<b>= 100</b> same as population; <b>> 100</b> over-indexes (more likely → attractive); <b>< 100</b> under-indexes.",
      "E.g., 24% of Deland homes have kids+pools vs. 10% nationally → index = 240 → very attractive."
    ]},
    { h:"Benefit Segmentation & Occasion Segmentation", items:[
      "<b>Benefit segmentation</b> = segment by <b>which benefits</b> customers value most (their importance weights).",
      "Express it via MAM: different weight profiles → different preferred brands. \"Benefit segmentation is the best available <b>surrogate for true differential-response</b> measurement.\"",
      "<b>Usage-situation (occasion-based) segmentation</b> — segment by <i>when/how</i> the product is used (athletic shoes, computers, beverages for different occasions)."
    ]},
    { h:"Targeting Strategies (4) & Considerations", items:[
      "<b>Mass Marketing</b> — one offer to everyone (e.g., a basic toothpaste for all).",
      "<b>Concentration (Niche)</b> — focus on a single narrow segment (a boutique serving few but loyal, high-paying customers).",
      "<b>Multisegment</b> — separate offers for multiple segments (Gap's distinct brands).",
      "<b>Mass Customization</b> — tailor to individuals at scale.",
      "Other considerations: expected <b>Size & Growth, Competition, Cost, Compatibility.</b>",
      "<b>Market-product grid</b> = a framework that maps market <b>segments</b> (rows) against <b>products/offerings</b> (columns) to decide which segment-product combinations to target.",
      "<b>Majority Fallacy</b> = blindly chasing the <b>largest</b> segment (where competition is fiercest)."
    ]},
    { h:"Positioning", items:[
      "<b>Product positioning</b> = the location a brand occupies in the consumer's mind (on a <b>perceptual map</b>) relative to competitors.",
      "<b>Perceptual map</b> = displays brands on two key dimensions (e.g., price × quality); place a new brand in the gap nearest the target/ideal point.",
      "<b>Points of Parity (POP)</b> = features similar to competitors (table stakes). <b>Points of Difference (POD)</b> = unique, desirable, differentiating features.",
      "<b>Approaches to positioning:</b> product feature, product benefit, <b>user category</b> (defining the type of person who uses it — iPhone/Mountain Dew), against a competitor (head-to-head), against a product category, and specific use.",
      "<b>Two positioning strategies:</b> <b>head-to-head</b> (compete directly on the same attributes in the same market) vs. <b>differentiation positioning</b> (seek a <i>less-competitive</i> niche / emphasize different attributes). <b>Cannibalization</b> = your own products stealing each other's sales (Ann Taylor vs. its LOFT stores).",
      "<b>Positioning statement</b> = a concise statement of (1) who the <b>target customers</b> are, (2) what <b>needs</b> the product fills, and (3) <b>why</b> it's the best option vs. competitors/substitutes."
    ]}
  ]
};
