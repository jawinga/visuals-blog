import "./Newspaper.scss";
interface NewspaperInterface {
  isOn: boolean;
}

const Newspaper = ({ isOn }: NewspaperInterface) => {
  return (
    <div className="newspaper-wrapper">
      <div
        className={`newspaper-container ${
          isOn ? "good-spacing" : "bad-spacing"
        }`}
      >
        {/* Masthead */}
        <div className="masthead">
          <div className="masthead-top">
            <span className="edition-info">Vol. XCII, No. 247</span>
            <span className="price">$2.50</span>
          </div>
          <h1 className="newspaper-title">Why White Space Matters</h1>
          <div className="masthead-bottom">
            <span className="date">Monday, October 30, 2025</span>
            <span className="motto">All the News Worth Reading</span>
          </div>
        </div>

        {/* Decorative border */}
        <div className="border-decoration"></div>

        {isOn ? (
          <div className="article-content good">
            <div className="section-header">DESIGN & TYPOGRAPHY</div>

            <h2 className="headline">The Power of Breathing Room</h2>

            <div className="byline">
              By <span className="author">Margaret Whitmore</span> | Design
              Editor
            </div>

            <div className="article-columns">
              <div className="column">
                <p className="drop-cap">
                  Generous spacing transforms content from noise into narrative.
                  Each element is given space to be seen, understood, and
                  appreciated. The eye moves effortlessly, finding natural
                  resting points along the way.
                </p>
                <p>
                  Studies reveal that well-spaced designs boost retention by 25%
                  and create lasting positive impressions. Whitespace isn't
                  wasted—it's the canvas that makes every word matter.
                </p>
              </div>
              <div className="column">
                <p>
                  When design embraces negative space, reading becomes a
                  pleasure rather than a chore. Information flows naturally,
                  hierarchy emerges organically, and users stay engaged.
                </p>
                <p>
                  Whitespace isn't luxury—it's respect for your reader. The best
                  designs understand that what you leave out is just as
                  important as what you include.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="article-content bad">
            <div className="section-header">DESIGN & TYPOGRAPHY</div>

            <h2 className="headline">The Perils of Cramped Design</h2>

            <div className="byline">
              By <span className="author">Margaret Whitmore</span> | Design
              Editor
            </div>

            <div className="article-columns">
              <div className="column">
                <p className="drop-cap">
                  Cramming content into tight spaces might seem efficient, but
                  it creates cognitive overload. Without breathing room, the eye
                  struggles to find focal points and hierarchy disappears.
                </p>
              </div>
              <div className="column">
                <p>
                  When designs lack breathing room, readability plummets and
                  users feel overwhelmed. Every element competes for attention,
                  creating visual chaos instead of clear communication.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Footer decoration */}
        <div className="footer-decoration"></div>
      </div>
    </div>
  );
};

export default Newspaper;
