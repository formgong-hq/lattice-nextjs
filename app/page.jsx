import SectionHeader from "./sections/SectionHeader";
import SectionSec from "./sections/SectionSec";
import SectionWork from "./sections/SectionWork";
import SectionServices from "./sections/SectionServices";
import SectionAbout from "./sections/SectionAbout";
import SectionContact from "./sections/SectionContact";
import SectionFooter from "./sections/SectionFooter";

export default function FgHomePage() {
  return (
    <>
      <SectionHeader />
      <main id="top">
        <SectionSec />
        <SectionWork />
        <SectionServices />
        <SectionAbout />
        <SectionContact />
      </main>
      <SectionFooter />
    </>
  );
}
