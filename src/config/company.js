// ============================================================
//  WAYPOINT ASSETS — COMPANY INFO
//  Edit everything about the site from THIS file only.
//  Every page/component reads its text & images from here.
// ============================================================

const IMG = "assets/img";

const company = {
  // --- Brand ---
  name: "Waypoint Assets Realty",
  tagline: "Buy & Sell Houses and Lots in Texas",
  logo: `${IMG}/logo.webp`,
  logoWhite: `${IMG}/logo-white.webp`,

  // --- Contact ---
  phone: "(214) 896-5370",
  email: "info@waypointassets.com",
  address: "30 N Gould St Ste R, Sheridan, WY 82801",
  hours: {
    weekdays: "Mon–Fri: 9:00 AM – 6:00 PM",
    weekend: "Sat–Sun: 10:00 AM – 3:00 PM",
  },

  // --- Social links ---
  social: {
    facebook: "#",
    twitter: "#",
    linkedin: "#",
    instagram: "#",
  },

  // --- Google Maps embed (contact page) ---
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d707.7899068223807!2d-106.95541203032543!3d44.797935398191974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335fabe8182314f%3A0x16eb18eacf1e0aff!2s30%20N%20Gould%20St%20Ste%20r%2C%20Sheridan%2C%20WY%2082801!5e0!3m2!1sen!2sus!4v1787090284490!5m2!1sen!2sus",

  // --- Home hero banner ---
  hero: {
    bg: `${IMG}/photos/hero.webp`,
    eyebrow: "Texas Real Estate",
    title: "Homes & Land Across Texas, Made Simple",
    text:
      "Waypoint Assets Realty guides buyers, sellers, and investors through the Texas market with honest advice, sharp strategy, and a smooth experience from the first look to closing day.",
    cta: "Browse Properties",
    ctaLink: "/services",
  },

  // --- About section ---
  about: {
    img: `${IMG}/photos/about.webp`,
    badge: `${IMG}/about-badge.svg`,
    eyebrow: "About Us",
    title: "Real Estate Guidance You Can Rely On",
    text:
      "At Waypoint Assets Realty, we help Texans move with confidence. Our approach is simple — clear advice, a strong market strategy, and a stress-free process whether you're buying your first home, selling for top value, or investing for the long term.",
    mission:
      "We're here to make real estate simple, clear, and rewarding. On every deal we lead with transparency, straight answers, and strong negotiation, so you can move forward knowing exactly where you stand.",
    points: [
      "Client-first guidance that protects your interests",
      "Deep local market and pricing expertise",
      "A trusted network of lenders and inspectors",
      "A clear process with no pressure and no guesswork",
    ],
    strong: "Honest advice and dependable service for buyers and sellers across Texas.",
  },

  // --- Stats counters ---
  stats: [
    { value: "500", suffix: "+", label: "Transactions Guided", icon: `${IMG}/icons/stat-sold.svg` },
    { value: "98", suffix: "%", label: "Client Satisfaction", icon: `${IMG}/icons/stat-clients.svg` },
    { value: "20", suffix: "+", label: "Years Serving Texas", icon: `${IMG}/icons/stat-exp.svg` },
    { value: "50", suffix: "+", label: "Texas Cities Covered", icon: `${IMG}/icons/stat-cities.svg` },
  ],

  // --- Services ---
  services: {
    eyebrow: "What We Do",
    title: "Houses, Lots & Local Expertise Across Texas",
    items: [
      { title: "Buy a House", text: "Move-in-ready homes in the best Texas neighborhoods, with expert guidance from the first tour to the keys.", icon: `${IMG}/icons/buy-house.svg`, photo: `${IMG}/photos/svc-buy-house.webp` },
      { title: "Sell a House", text: "A fair valuation, sharp marketing, and skilled negotiation to sell your home quickly and for top value.", icon: `${IMG}/icons/sell-house.svg`, photo: `${IMG}/photos/svc-sell-house.webp` },
      { title: "Buy a Lot", text: "Build-ready lots and acreage in Texas growth corridors, matched to your plans and your budget.", icon: `${IMG}/icons/buy-lot.svg`, photo: `${IMG}/photos/svc-buy-lot.webp` },
      { title: "Sell a Lot", text: "Turn vacant land into cash through our active network of qualified Texas buyers.", icon: `${IMG}/icons/sell-lot.svg`, photo: `${IMG}/photos/svc-sell-lot.webp` },
      { title: "Property Investment", text: "Cash-flow analysis, rental comps, and value-add opportunities to help grow your portfolio.", icon: `${IMG}/icons/invest.svg`, photo: `${IMG}/photos/svc-invest.webp` },
      { title: "Buyer & Seller Advisory", text: "Clear, no-pressure advice on pricing, timing, and paperwork through every transaction.", icon: `${IMG}/icons/advisory.svg`, photo: `${IMG}/photos/svc-advisory.webp` },
    ],
  },

  // --- Work process ---
  process: {
    eyebrow: "How It Works",
    title: "Your Path to the Right Property",
    steps: [
      { title: "Consult", text: "We learn your goals — location, budget, timeline, and must-haves.", icon: `${IMG}/icons/step-consult.svg` },
      { title: "Search", text: "We narrow Texas listings and lots down to the ones that fit you exactly.", icon: `${IMG}/icons/step-search.svg` },
      { title: "Tour", text: "In-person or virtual tours, plus comps, zoning, and inspection guidance.", icon: `${IMG}/icons/step-tour.svg` },
      { title: "Close", text: "Negotiation and contract support all the way through to the keys.", icon: `${IMG}/icons/step-close.svg` },
    ],
  },

  // --- Gallery / featured ---
  gallery: {
    eyebrow: "Featured",
    title: "A Look at Our Texas Properties",
    items: [
      { title: "Austin Family Home", text: "3-bed, 2-bath in a quiet, family-friendly Austin neighborhood.", img: `${IMG}/photos/prop-austin.webp` },
      { title: "Dallas Building Lot", text: "Prime, build-ready residential lot in a growing Dallas corridor.", img: `${IMG}/photos/prop-dallas.webp` },
      { title: "Houston Townhouse", text: "Modern townhouse minutes from downtown Houston.", img: `${IMG}/photos/prop-houston.webp` },
      { title: "Hill Country Acreage", text: "Scenic acreage with room to build in the Texas Hill Country.", img: `${IMG}/photos/prop-hillcountry.webp` },
    ],
  },

  // --- Home CTA / contact block ---
  contactCta: {
    eyebrow: "Get In Touch",
    title: "Ready to Buy or Sell in Texas?",
    text: "Tell us what you're looking for — buying, selling, or investing — and we'll match you with the right options and guide you from there.",
  },

  // --- Contact page intro ---
  contactPage: {
    title: "Let's Talk Real Estate",
    text: "Whether you're buying a home, selling property, or securing land for a future build, share a few details and our Texas team will follow up with options and clear next steps.",
  },

  // --- Contact page side image ---
  contactImg: `${IMG}/photos/contact.webp`,

  // --- Privacy policy (reworded, real-estate appropriate) ---
privacy: {
  updated: "December 1, 2025",

  intro:
    "This Privacy Policy explains how Waypoint Assets Realty collects, uses, protects, and otherwise handles your Personally Identifiable Information (PII). PII, as described in U.S. privacy law and information security principles, is information that can be used on its own or with other information to identify, contact, or locate an individual. Please read this Privacy Policy carefully to understand how we handle your information when you use our website or communicate with us.",

  sections: [
    {
      title: "1. Information We Collect",
      body:
        "When registering, submitting information, or otherwise interacting with our website, you may be asked to provide personal information to help us serve you and improve your experience.",

      bullets: [
        "Full name",
        "Email address",
        "Mailing address",
        "Phone number",
        "Property or service-related information",
        "Other information you voluntarily provide through our website",
      ],
    },

    {
      title: "2. When We Collect Information",
      body:
        "We collect information from you when you interact with our website or services, including when you:",

      bullets: [
        "Register on our website.",
        "Fill out a form.",
        "Use Live Chat.",
        "Enter information on our website.",
        "Provide feedback regarding our products or services.",
        "Contact us through email, phone, text message, or other communication channels.",
      ],
    },

    {
      title: "3. How We Use Your Information",
      body:
        "We may use the information we collect when you register, submit an inquiry, sign up for communications, respond to a survey or marketing communication, browse our website, or use other website features.",

      bullets: [
        "To personalize your experience and provide content or services that may be relevant to you.",
        "To improve our website and better serve our visitors.",
        "To respond to customer service requests and inquiries.",
        "To administer promotions, surveys, or other website features.",
        "To process applicable transactions efficiently.",
        "To request ratings, reviews, or feedback about our services.",
        "To follow up after correspondence through live chat, email, telephone, or other communication channels.",
        "To send marketing materials, service information, property-related communications, and other updates through calls, emails, or text messages where permitted.",
      ],
    },

    {
      title: "4. How We Protect Your Information",
      body:
        "We implement administrative and technical security measures designed to maintain the safety of your personal information when you enter, submit, or access your information.",

      bullets: [
        "We use regular malware scanning.",
        "Personal information is maintained behind secured networks.",
        "Access to personal information is limited to authorized individuals who are required to keep the information confidential.",
        "Sensitive information transmitted through our website may be protected using Secure Socket Layer (SSL) technology.",
        "We use reasonable security measures designed to reduce unauthorized access, disclosure, alteration, or misuse of personal information.",
      ],

      outro:
        "No method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.",
    },

    {
      title: "5. Cookies",
      body:
        "Yes, we may use cookies. Cookies are small files that a website or its service provider transfers to your computer or device through your web browser, if permitted. Cookies allow website systems to recognize your browser and capture or remember certain information.",

      bullets: [
        "Understand and save user preferences for future visits.",
        "Keep track of advertisements.",
        "Understand previous or current website activity.",
        "Compile aggregate data about website traffic and website interactions.",
        "Improve website experiences, functionality, and services.",
        "Allow trusted third-party services to analyze website activity on our behalf.",
      ],

      outro:
        "You may configure your browser to warn you when cookies are being sent or to disable cookies entirely. If cookies are disabled, some website features may not function properly.",
    },

    {
      title: "6. Third-Party Disclosure",
      body:
        "We do not sell, trade, or otherwise transfer your Personally Identifiable Information to outside parties without appropriate notice, except as described in this Privacy Policy.",

      bullets: [
        "Website hosting providers and other parties that assist us in operating our website.",
        "Service providers that assist us in conducting our business or serving our users, provided they agree to appropriately protect the information.",
        "Government agencies, regulators, law enforcement, or other parties when disclosure is appropriate or required by law.",
        "Parties involved when necessary to enforce our website policies or protect our rights, property, safety, or the rights, property, or safety of others.",
      ],

      outro:
        "Non-personally identifiable visitor information may be provided to other parties for marketing, advertising, analytics, or other permitted purposes.",
    },

    {
      title: "7. Third-Party Links",
      body:
        "Our website may occasionally include or offer links to third-party products, websites, or services. These third-party websites maintain separate and independent privacy policies. We are not responsible for the privacy practices, content, or activities of third-party websites. However, we seek to protect the integrity of our website and welcome feedback regarding third-party links.",
    },

    {
      title: "8. Google and Advertising Technologies",
      body:
        "We may use Google advertising, analytics, remarketing, or related technologies to better understand website activity and improve advertising performance.",

      bullets: [
        "Google Analytics or similar website measurement technologies.",
        "Google advertising and remarketing technologies.",
        "Google Display Network Impression Reporting, where applicable.",
        "Demographics and Interests Reporting, where applicable.",
        "First-party cookies and third-party cookies or identifiers used together to understand user interactions with advertisements and website services.",
      ],

      outro:
        "Users may manage advertising preferences through Google's advertising controls and may use available browser tools or industry opt-out mechanisms to limit certain forms of advertising or analytics tracking.",
    },

    {
      title: "9. California Online Privacy Protection Act (CalOPPA)",
      body:
        "Consistent with applicable California privacy requirements, we maintain a publicly accessible Privacy Policy explaining the types of information we collect and how information may be shared.",

      bullets: [
        "Users may visit our website anonymously where website functionality permits.",
        "A link to this Privacy Policy will be made available through our website.",
        "Our Privacy Policy link will include the word 'Privacy' and be reasonably easy to locate.",
        "Privacy Policy changes will be reflected on this Privacy Policy page.",
        "Users may contact us to request changes to applicable personal information.",
      ],
    },

    {
      title: "10. Managing or Correcting Your Information",
      body:
        "Where applicable, you may request access to or correction of certain personal information by contacting us through an available communication method.",

      bullets: [
        "By emailing us.",
        "By calling us.",
        "By logging into your account, where account functionality is available.",
        "By using Live Chat or submitting a support request where available.",
      ],
    },

    {
      title: "11. Do Not Track and Behavioral Tracking",
      body:
        "Where supported and applicable, our website may respond to browser-based Do Not Track signals or similar mechanisms. Our website may also use third-party behavioral tracking technologies for analytics, advertising, and website optimization purposes.",
    },

    {
      title: "12. Children's Privacy",
      body:
        "The Children's Online Privacy Protection Act (COPPA) provides protections regarding the online collection of personal information from children under 13 years of age.",

      bullets: [
        "We do not specifically market our services to children under 13 years of age.",
        "We do not knowingly authorize third parties, including advertising networks or plug-ins, to collect personal information from children under 13 through our services.",
      ],
    },

    {
      title: "13. Fair Information Practices",
      body:
        "We recognize the importance of Fair Information Practice principles in protecting personal information and providing individuals with appropriate rights and remedies.",

      bullets: [
        "If an applicable data breach occurs, we may notify affected users by email within 7 business days where required.",
        "We may provide an on-site notification within 7 business days where appropriate.",
        "Individuals may have rights to pursue remedies against data collectors or processors that fail to comply with applicable law.",
      ],
    },

    {
      title: "14. CAN-SPAM and Email Communications",
      body:
        "We may collect and use your email address to respond to inquiries, provide requested information, communicate regarding our services, and send marketing communications where permitted.",

      bullets: [
        "Send information and respond to inquiries, requests, or questions.",
        "Provide additional information regarding our products or services.",
        "Send appropriate marketing communications to our mailing list or existing clients.",
        "Avoid false or misleading subject lines or sender information.",
        "Identify advertising messages where required.",
        "Include applicable business contact information in commercial communications.",
        "Monitor third-party email marketing services for compliance where applicable.",
        "Honor applicable opt-out and unsubscribe requests.",
        "Provide an unsubscribe mechanism in applicable marketing emails.",
      ],
    },

    {
      title: "15. SMS Terms and Conditions",
      body:
        "By providing your phone number and affirmatively opting in to receive SMS communications from Waypoint Assets Realty, you consent to receive text messages from us. Information obtained through the SMS consent process will be used for the purposes described in this policy.",

      bullets: [
        "SMS opt-in consent and phone numbers collected specifically for SMS purposes will not be shared with third parties or affiliates for their own marketing or promotional purposes.",
        "We may send notifications regarding inquiries, account activity, appointments, property-related services, transactions, or other relevant communications.",
        "Promotional SMS messages may be sent where you have separately provided appropriate consent.",
        "Message frequency may vary depending on your engagement and interactions with our services.",
        "Message and data rates may apply depending on your mobile carrier and plan.",
        "By providing your phone number and selecting the applicable consent checkbox, you are opting in to receive our text messages.",
        "You may opt out at any time by replying 'STOP'.",
        "For assistance, reply 'HELP' to a message or contact our customer support team at (214) 896-5370.",
      ],

      outro:
        "After opting out, you will no longer receive applicable SMS messages unless you later provide consent again. SMS opt-in consent information and phone numbers collected specifically for SMS communications will not be shared with third parties or affiliates for marketing or promotional purposes.",
    },

    {
      title: "16. Changes to This Privacy Policy",
      body:
        "We may update this Privacy Policy periodically. Any changes will be posted on this page and reflected through the applicable updated or effective date. We encourage you to review this Privacy Policy periodically for changes.",
    },
  ],
},

  // --- Copyright ---
  year: new Date().getFullYear(),
};

export default company;
