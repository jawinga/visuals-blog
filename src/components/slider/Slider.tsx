import { Slider as Sliderr } from "@mui/material";

interface SliderInterface {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
  showHint?: boolean;
  hint?: string;
}

const Slider = ({
  label,
  value,
  min,
  max,
  onChange,
  hint,
  showHint,
}: SliderInterface) => {
  return (
    <div className="slider-container">
      <span>
        {label} : {value}
      </span>
      <Sliderr
        defaultValue={50}
        value={value}
        min={min}
        max={max}
        onChange={(_, newValue) => onChange(newValue as number)}
        aria-label="Default"
        valueLabelDisplay="auto"
        sx={{
          color: "#000",
          "& .MuiSlider-thumb": {
            backgroundColor: "#000",
          },
          "& .MuiSlider-track": {
            backgroundColor: "#000",
          },
          "& .MuiSlider-rail": {
            backgroundColor: "#ddd",
          },
        }}
      />

      {showHint && <span>{hint}</span>}
    </div>
  );
};

export default Slider;
