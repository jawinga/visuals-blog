import "./RadarChart.scss";
import { RadarChart as Radar } from "@mui/x-charts";

interface RadarInterface {
  fontSize: number;
  lineHeight: number;
  lineLength: number;
}

const RadarChart = ({ fontSize, lineHeight, lineLength }: RadarInterface) => {
  return (
    <Radar
      height={300}
      series={[
        {
          label: "Readibility Results",
          data: [fontSize, lineHeight, lineLength],
        },
      ]}
      radar={{
        metrics: [
          { name: "Readability", max: 100 },
          { name: "Balance", max: 100 },
          { name: "Spacing", max: 100 },
          { name: "Flow", max: 100 },
        ],
      }}
    />
  );
};

export default RadarChart;
