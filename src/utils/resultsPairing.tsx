import {
  excellentPairings,
  goodPairings,
  questionablePairings,
} from "./pairings";

export default function resultsPairing(
  title: string,
  body: string
): {
  useCases: string[];
  personality: string[];
  contrastLevel: string[];
} {
  const fontMap: { [key: string]: string } = {
    "'Playfair Display', serif": "Playfair Display",
    "'Montserrat', sans-serif": "Montserrat",
    "'Bebas Neue', sans-serif": "Bebas Neue",
    "'Oswald', sans-serif": "Oswald",
    "'Merriweather', serif": "Merriweather",
    "'Source Sans 3', sans-serif": "Source Sans Pro",
    "'Lora', serif": "Lora",
    "'Open Sans', sans-serif": "Open Sans",
    "'Roboto', sans-serif": "Roboto",
    "'Crimson Text', serif": "Crimson Text",
  };

  const titleName = fontMap[title] || title;
  const bodyName = fontMap[body] || body;

  const serif = ["Playfair Display", "Merriweather", "Lora", "Crimson Text"];
  const sans = [
    "Montserrat",
    "Oswald",
    "Source Sans Pro",
    "Open Sans",
    "Roboto",
  ];
  const display = ["Bebas Neue"];

  const isSerifTitle = serif.includes(titleName);
  const isSerifBody = serif.includes(bodyName);
  const isSansTitle = sans.includes(titleName);
  const isSansBody = sans.includes(bodyName);
  const isDisplayTitle = display.includes(titleName);

  let contrastLevel: string[] = [];
  if ((isSerifTitle && isSansBody) || (isSansTitle && isSerifBody)) {
    contrastLevel = ["High Contrast", "Serif + Sans pairing"];
  } else if (isDisplayTitle) {
    contrastLevel = ["High Contrast", "Display font pairing"];
  } else if ((isSerifTitle && isSerifBody) || (isSansTitle && isSansBody)) {
    contrastLevel = ["Low Contrast", "Same category pairing"];
  } else {
    contrastLevel = ["Medium Contrast"];
  }

  const pairKey = `${titleName}|${bodyName}`;

  if (excellentPairings[pairKey]) {
    return {
      useCases: excellentPairings[pairKey].useCases,
      personality: excellentPairings[pairKey].personality,
      contrastLevel,
    };
  }
  if (goodPairings[pairKey]) {
    return {
      useCases: goodPairings[pairKey].useCases,
      personality: goodPairings[pairKey].personality,
      contrastLevel,
    };
  }
  if (questionablePairings[pairKey]) {
    return {
      useCases: questionablePairings[pairKey].useCases,
      personality: questionablePairings[pairKey].personality,
      contrastLevel,
    };
  }

  if (contrastLevel.includes("Low Contrast")) {
    return {
      useCases: ["Limited Use", "Needs Careful Implementation"],
      personality: ["Lacks Hierarchy", "Too Similar"],
      contrastLevel,
    };
  }
  return {
    useCases: ["Experimental", "Test First"],
    personality: ["Unique", "Untested Combination"],
    contrastLevel,
  };
}
