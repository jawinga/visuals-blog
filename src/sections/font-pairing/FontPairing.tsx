import "./FontPairing.scss";
import Section from "../../components/Section/Section";
import { useState } from "react";
import { Briefcase, Palette, Contrast } from "lucide-react";
import Result from "../../components/result/Result";
import resultsPairing from "../../utils/resultsPairing";
import { headingFonts, bodyFonts } from "../../utils/fonts";

const FontPairing = () => {
  const [titleFont, setTitleFont] = useState(headingFonts[0].family);
  const [bodyFont, setBodyFont] = useState(bodyFonts[0].family);

  const pairingResults = resultsPairing(titleFont, bodyFont);

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

      {titleFont && bodyFont ? (
        <div className="font-results">
          <Result
            icon={Briefcase}
            label="Use Cases"
            results={pairingResults.useCases}
          ></Result>
          <Result
            icon={Palette}
            label="Personality"
            results={pairingResults.personality}
          ></Result>
          <Result
            icon={Contrast}
            label="Contrast Level"
            results={pairingResults.contrastLevel}
          ></Result>
        </div>
      ) : (
        ""
      )}
    </Section>
  );
};

export default FontPairing;
