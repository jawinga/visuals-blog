import "./FontPairing.scss";
import Section from "../../components/Section/Section";
import { useState } from "react";
import { Shapes, Sparkles, Contrast } from "lucide-react";
import Result from "../../components/result/Result";

const FontPairing = () => {
  const headingFonts = [
    {
      id: 1,
      name: "Playfair Display",
      family: "'Playfair Display', serif",
      category: "serif",
      style: "Elegant Serif",
      weight: 700,
    },
    {
      id: 2,
      name: "Montserrat",
      family: "'Montserrat', sans-serif",
      category: "sans-serif",
      style: "Modern Sans",
      weight: 600,
    },
    {
      id: 3,
      name: "Bebas Neue",
      family: "'Bebas Neue', sans-serif",
      category: "display",
      style: "Bold Display",
      weight: 400,
    },
    {
      id: 4,
      name: "Oswald",
      family: "'Oswald', sans-serif",
      category: "sans-serif",
      style: "Strong Sans",
      weight: 600,
    },
    {
      id: 5,
      name: "Merriweather",
      family: "'Merriweather', serif",
      category: "serif",
      style: "Classic Serif",
      weight: 700,
    },
  ];
  const bodyFonts = [
    {
      id: 1,
      name: "Source Sans Pro",
      family: "'Source Sans 3', sans-serif",
      category: "sans-serif",
      style: "Clean Sans",
      weight: 400,
    },
    {
      id: 2,
      name: "Lora",
      family: "'Lora', serif",
      category: "serif",
      style: "Elegant Serif",
      weight: 400,
    },
    {
      id: 3,
      name: "Open Sans",
      family: "'Open Sans', sans-serif",
      category: "sans-serif",
      style: "Friendly Sans",
      weight: 400,
    },
    {
      id: 4,
      name: "Roboto",
      family: "'Roboto', sans-serif",
      category: "sans-serif",
      style: "Modern Sans",
      weight: 400,
    },
    {
      id: 5,
      name: "Crimson Text",
      family: "'Crimson Text', serif",
      category: "serif",
      style: "Classic Serif",
      weight: 400,
    },
  ];

  const [result, setResult] = useState("");
  const [titleFont, setTitleFont] = useState("");
  const [bodyFont, setBodyFont] = useState("");

  return (
    <Section id="font-pairing">
      {/* <h1 className="title">Let's combine different Font Families</h1> */}
      <div className="form-result-container">
        <div className="forms">
          <div className="selector-group">
            <label>Title:</label>
            <select onChange={(e) => setTitleFont(e.target.value)}>
              {headingFonts.map((f) => (
                <option key={f.id} value={f.family}>
                  <p style={{ fontFamily: f.family }}>A</p> {f.name}
                </option>
              ))}
            </select>
          </div>

          <div className="selector-group">
            <label>Body:</label>
            <select onChange={(e) => setBodyFont(e.target.value)}>
              {bodyFonts.map((f) => (
                <option key={f.id} value={f.family}>
                  <p style={{ fontFamily: f.family }}>A</p> {f.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="text-sample">
          <h1 style={{ fontFamily: titleFont }}>Text for the title</h1>
          <p style={{ fontFamily: bodyFont }}>
            Text for the body. Typography is the art and technique of arranging
            type to make written language legible and appealing.
          </p>
        </div>
      </div>

      {result.length > 0 && result}
    </Section>
  );
};

export default FontPairing;
