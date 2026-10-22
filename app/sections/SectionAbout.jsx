import c from "../../content.json";

export default function SectionAbout() {
  return (
    <><section className="sec about" id="about" aria-labelledby="about-h">{" "}<div className="screen">{" "}<div className="head" data-k="a-head" data-snap="">{" "}<p className="sub" data-reveal="">{c.about.p_1}</p>{" "}<h2 id="about-h" data-reveal="" style={{ "--d": ".08s" }}><span>{c.about.span_2}</span> <span>{c.about.span_3}</span></h2>{" "}</div>{" "}<p className="b a-text" data-k="a-text" data-snap="" data-words="">{c.about.p_4}</p>{" "}<div className="b a-orb" data-k="a-orb" data-rows="4" data-orb="blob" data-orb-color="white" data-orb-scale=".3" />{" "}<ul className="tools" aria-label="Tools">{" "}<li className="b" data-k="tool">{c.about.li_5}</li><li className="b" data-k="tool">{c.about.li_6}</li><li className="b" data-k="tool">{c.about.li_7}</li><li className="b" data-k="tool">{c.about.li_8}</li><li className="b" data-k="tool">{c.about.li_9}</li><li className="b" data-k="tool">{c.about.li_10}</li>{" "}</ul>{" "}</div>{" "}</section></>
  );
}
