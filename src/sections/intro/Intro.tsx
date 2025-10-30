import Section from "../../components/Section/Section";
import ScrollIndicator from "../../components/scroll-indicator/ScrollIndicator";
import "./Intro.scss";
import { Sparkle } from "lucide-react";

const Intro = () => {
  return (
    <Section id="intro">
      <div className="title-container">
        <h1 className="title">
          <Sparkle size={100} fill="#000000"></Sparkle> Invisible Design
        </h1>
        <div className="title-container__subtitle">
          <p>Good design is obvious.</p>
          <p>Great design goes unnoticed.</p>
        </div>

        <ScrollIndicator></ScrollIndicator>
      </div>
    </Section>
  );
};

export default Intro;
