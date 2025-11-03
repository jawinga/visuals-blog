import "./Motion.scss";
import Section from "../../components/Section/Section";
import MotionLine from "../../components/motion-line/MotionLine";

const Motion = () => {
  return (
    <Section id="motion">
      <h1>The Power of Motion</h1>
      <p>Motion guides attention and breathes life into design</p>
      <div>
        <MotionLine title="Linear" description="..." easing="linear" />
        <MotionLine title="Ease-Out" description="..." easing="easeOut" />
        <MotionLine title="Ease-In" description="..." easing="easeIn" />
        <MotionLine title="Easy-In-Out" description="..." easing="easeInOut" />
      </div>
    </Section>
  );
};

export default Motion;
