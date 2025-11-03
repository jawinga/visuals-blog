import { type LucideIcon } from "lucide-react";

interface ResultInterface {
  icon: LucideIcon;
  label: string;
  className?: string;
  results: string[];
}

const Result = ({ icon: Icon, label, results }: ResultInterface) => {
  return (
    <div className="result-container">
      <div className="result-title">
        <Icon></Icon>
        <h2>{label}</h2>
      </div>
      <div>
        {results.map((r, index) => (
          <ul>
            <li key={index}>{r}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Result;
