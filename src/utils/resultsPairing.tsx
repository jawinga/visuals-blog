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

  if (!title || !body) {
    return {};
  }

  return {};
}
