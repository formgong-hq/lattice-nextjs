import c from "../../content.json";

export default function SectionSec() {
  return (
    <><section className="sec hero" aria-label="Introduction">{" "}<div className="screen">{" "}<div className="frame" data-k="frame" data-orb="sphere" data-orb-color="white" data-orb-scale=".28">{" "}<i /><i /><i /><i />{" "}<span className="mono readout" data-readout="" aria-hidden="true" />{" "}</div>{" "}<p className="label h-lab" data-k="tl" dangerouslySetInnerHTML={{ __html: c.sec.p_1_html }} />{" "}<p className="label h-lab r" data-k="tr" dangerouslySetInnerHTML={{ __html: c.sec.p_2_html }} />{" "}<p className="label h-lab" data-k="bl"><b>{c.sec.b_3}</b><span dangerouslySetInnerHTML={{ __html: c.sec.span_4_html }} /></p>{" "}<p className="label h-lab r" data-k="br" dangerouslySetInnerHTML={{ __html: c.sec.p_5_html }} />{" "}<h1 className="hw" data-k="wl"><span>{c.sec.span_6}</span><span>{c.sec.span_7}</span></h1>{" "}<p className="hw r" data-k="wr"><span>{c.sec.span_8}</span><span>{c.sec.span_9}</span></p>{" "}</div>{" "}</section></>
  );
}
