type PairingMap = Record<string, PairingData>;
interface PairingData {
  useCases: string[];
  personality: string[];
}

export const excellentPairings: PairingMap = {
  "Playfair Display|Source Sans Pro": {
    useCases: ["Magazines", "Luxury Brands", "Editorial Design"],
    personality: ["Elegant", "Sophisticated", "Timeless"],
  },
  "Playfair Display|Open Sans": {
    useCases: ["Blogs", "Publishing", "Fashion Sites"],
    personality: ["Refined", "Classic", "Approachable"],
  },
  "Montserrat|Lora": {
    useCases: ["Blogs", "Portfolios", "Modern Websites"],
    personality: ["Contemporary", "Balanced", "Professional"],
  },
  "Montserrat|Crimson Text": {
    useCases: ["Publishing", "Literary Sites", "Magazines"],
    personality: ["Modern-Classic", "Elegant", "Readable"],
  },
  "Bebas Neue|Open Sans": {
    useCases: ["Posters", "Creative Agencies", "Landing Pages"],
    personality: ["Bold", "Impactful", "Modern"],
  },
  "Bebas Neue|Roboto": {
    useCases: ["Sports", "Events", "Tech Startups"],
    personality: ["Strong", "Energetic", "Contemporary"],
  },
  "Oswald|Merriweather": {
    useCases: ["News Sites", "Corporate", "Reports"],
    personality: ["Authoritative", "Traditional", "Trustworthy"],
  },
  "Oswald|Lora": {
    useCases: ["Blogs", "Content Sites", "Journalism"],
    personality: ["Strong", "Readable", "Professional"],
  },
  "Merriweather|Roboto": {
    useCases: ["Documentation", "Academic", "Professional Sites"],
    personality: ["Traditional", "Clean", "Reliable"],
  },
  "Merriweather|Open Sans": {
    useCases: ["Education", "NGOs", "Informational Sites"],
    personality: ["Trustworthy", "Accessible", "Friendly"],
  },
};

export const goodPairings: PairingMap = {
  "Playfair Display|Roboto": {
    useCases: ["Blogs", "Personal Sites", "Portfolios"],
    personality: ["Elegant", "Modern", "Clean"],
  },
  "Montserrat|Open Sans": {
    useCases: ["Business", "Startups", "General Web"],
    personality: ["Modern", "Friendly", "Neutral"],
  },
  "Montserrat|Roboto": {
    useCases: ["Tech", "Apps", "SaaS"],
    personality: ["Contemporary", "Professional", "Clean"],
  },
  "Bebas Neue|Source Sans Pro": {
    useCases: ["Marketing", "Landing Pages", "Promotions"],
    personality: ["Bold", "Clear", "Impactful"],
  },
  "Oswald|Open Sans": {
    useCases: ["News", "Blogs", "Content Heavy Sites"],
    personality: ["Strong", "Readable", "Balanced"],
  },
  "Oswald|Crimson Text": {
    useCases: ["Traditional Sites", "Corporate", "News"],
    personality: ["Authoritative", "Classic", "Formal"],
  },
};

export const questionablePairings: PairingMap = {
  "Playfair Display|Lora": {
    useCases: ["Limited Use", "Very Specific Contexts"],
    personality: ["Too Elegant", "Lacks Contrast", "Overly Formal"],
  },
  "Playfair Display|Crimson Text": {
    useCases: ["Not Recommended"],
    personality: ["Competing Styles", "No Clear Hierarchy"],
  },
  "Montserrat|Source Sans Pro": {
    useCases: ["Generic", "Lacks Personality"],
    personality: ["Too Similar", "Minimal Contrast"],
  },
  "Bebas Neue|Lora": {
    useCases: ["Very Limited", "Experimental Only"],
    personality: ["Clashing Moods", "Unbalanced"],
  },
  "Bebas Neue|Crimson Text": {
    useCases: ["Not Recommended"],
    personality: ["Too Contrasting", "Jarring", "Incompatible Moods"],
  },
  "Merriweather|Lora": {
    useCases: ["Literary Only", "Very Specific"],
    personality: ["Too Traditional", "Lacks Contrast"],
  },
  "Merriweather|Crimson Text": {
    useCases: ["Limited Use"],
    personality: ["Too Similar", "Serif Overload"],
  },
  "Oswald|Roboto": {
    useCases: ["Minimal Design", "Tech"],
    personality: ["Cold", "Lacks Warmth", "Too Neutral"],
  },
};
