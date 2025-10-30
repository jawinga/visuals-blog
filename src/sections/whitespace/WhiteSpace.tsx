import "./WhiteSpace.scss";
import Section from "../../components/Section/Section";
import { useState } from "react";
import SwitchInput from "../../components/SwitchInput/SwitchInput";
import Newspaper from "../../components/Newspaper/Newspaper";

const WhiteSpace = () => {
  const [isGood, setIsGood] = useState(false);

  const handleIsGood = (): void => {
    setIsGood(!isGood);
  };

  return (
    <Section id="whitespace">
      <div className="subcontainer--whitespace">
        <SwitchInput isOn={isGood} onToggle={handleIsGood} />

        <div className="newspaper-wrapper-with-labels">
          {!isGood && (
            <div className="side-label side-label--left">Bad Spacing</div>
          )}

          <Newspaper isOn={isGood} />

          {isGood && (
            <div className="side-label side-label--right">Good Spacing</div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default WhiteSpace;
