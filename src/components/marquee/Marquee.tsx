import "./Marquee.scss";

const Marquee = () => {
  const text = "Typography is the unsung hero of web design";

  const fonts = [
    "Montserrat, sans-serif",
    "New Rocker, cursive",
    "Newsreader, serif",
    "Noto Sans, sans-serif",
    "Oswald, sans-serif",
    "Schoolbell, cursive",
  ];

  const renderText = () => (
    <>
      {text.split("").map((char, index) => (
        <span
          key={index}
          style={{
            fontFamily: fonts[index % fonts.length],
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </>
  );

  return (
    <div className="marquee-container">
      <div className="marquee-wrapper">
        <h1 className="marquee-text">
          {renderText()}
          {renderText()}
        </h1>
      </div>
    </div>
  );
};

export default Marquee;
