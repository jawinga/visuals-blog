import { ArrowRight } from "lucide-react";
import "./ScrollIndicator.scss";

const ScrollIndicator = () => {
  return (
    <div className="scroll-indicator">
      <span className="scroll-indicator__text">Scroll to discover more </span>
      <ArrowRight strokeWidth={1}></ArrowRight>
    </div>
  );
};

export default ScrollIndicator;
