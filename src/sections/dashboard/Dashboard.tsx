// Dashboard.tsx
import "./Dashboard.scss";
import Section from "../../components/Section/Section";
import { RadarChart } from "@mui/x-charts/RadarChart";
import { calculateTypographyScores } from "../../utils/typographyScores";

interface DashboardProps {
  fontSize: number;
  lineHeight: number;
  lineLength: number;
}

const Dashboard = ({ fontSize, lineHeight, lineLength }: DashboardProps) => {
  const scores = calculateTypographyScores({
    fontSize,
    lineHeight,
    lineLength,
  });

  return (
    <Section id="dashboard">
      <RadarChart
        height={500}
        series={[
          {
            label: "Typography Metrics",
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
    </Section>
  );
};

export default Dashboard;
