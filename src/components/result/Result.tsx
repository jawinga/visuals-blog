import { type LucideIcon } from "lucide-react";

interface ResultInterface {
  icon: LucideIcon;
  label: string;
  results: string[];
}

const Result = ({ icon: Icon, label, results }: ResultInterface) => {
  return (
    <div className="result-container">
      <h2>
        {label} <Icon></Icon>
      </h2>
      <div>
        {results.map((r) => (
          <ul>
            <li>{r}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Result;
