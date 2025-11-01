// Dashboard.tsx
import "./Dashboard.scss";
import Section from "../../components/Section/Section";
import { RadarChart } from "@mui/x-charts/RadarChart";
import { calculateTypographyScores } from "../../utils/typographyScores";
import { calculateOverallScore } from "../../utils/calculateOverallScore";
import { useMemo } from "react";

interface DashboardProps {
  fontSize: number;
  lineHeight: number;
  lineLength: number;
}

const Dashboard = ({ fontSize, lineHeight, lineLength }: DashboardProps) => {
  const scores = useMemo(
    () => calculateTypographyScores({ fontSize, lineHeight, lineLength }),
    [fontSize, lineHeight, lineLength]
  );

  const overallScore = useMemo(
    () => calculateOverallScore(fontSize, lineHeight, lineLength),
    [scores]
  );

  return (
    <Section id="dashboard">
      <RadarChart
        height={600}
        series={[
          {
            // label: "Typography Metrics",
            data: [
              scores.readability,
              scores.spacing,
              scores.balance,
              scores.flow,
            ],
            color: "#000000",
          },
        ]}
        radar={{
          max: 100,
          metrics: ["Readability", "Spacing", "Balance", "Flow"],
        }}
      />

      <div className="score-text">
        <h1>Score: {overallScore}/100</h1>
        {overallScore <= 50 ? (
          <h1>Try again...</h1>
        ) : overallScore <= 75 ? (
          <h1>That's great!</h1>
        ) : overallScore <= 90 ? (
          <h1>Superb effort!</h1>
        ) : (
          <h1>Perfect score!</h1>
        )}
      </div>
    </Section>
  );
};

export default Dashboard;
