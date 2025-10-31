import "./Typography.scss";
import Section from "../../components/Section/Section";
import Marquee from "../../components/marquee/Marquee";
import Slider from "../../components/slider/Slider";

interface TypographyInterface {
  fontSize: number;
  lineHeight: number;
  lineLength: number;
  setFontSize: (value: number) => void;
  setLineHeight: (value: number) => void;
  setLineLength: (value: number) => void;
}

const Typography = ({
  fontSize = 12,
  lineHeight = 1.0,
  lineLength = 30,
  setFontSize,
  setLineHeight,
  setLineLength,
}: TypographyInterface) => {
  return (
    <Section id="typography">
      <div className="container--typography">
        <Marquee></Marquee>
        <div className="sliders_paragraph">
          <div className="sliders">
            <Slider
              label="Font Size (px)"
              min={12}
              max={24}
              value={fontSize}
              onChange={setFontSize}
            ></Slider>
            <Slider
              label="Line Height"
              min={1.0}
              max={2.5}
              value={lineHeight}
              onChange={setLineHeight}
            ></Slider>
            <Slider
              label="Line Length (ch)"
              min={30}
              max={100}
              value={lineLength}
              onChange={setLineLength}
            ></Slider>
          </div>
          <article
            style={{
              maxWidth: `${lineLength}ch`,
            }}
          >
            <h2 style={{ marginBottom: "1.5rem" }}>The Art of Typography</h2>
            <p style={{ lineHeight: lineHeight, fontSize: `${fontSize}px` }}>
              Typography is the art and technique of arranging type to make
              written language legible, readable, and appealing. Good typography
              establishes a strong visual hierarchy, provides a graphic balance
              to the website, and sets the product's overall tone.
            </p>
          </article>
        </div>
      </div>
    </Section>
  );
};

export default Typography;
