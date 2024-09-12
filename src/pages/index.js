import { FamiliesLoveSec } from "../components/mainPage/familiesLoveOurOnlineSec/FamiliesLoveSec";
import { GallerySection } from "../components/mainPage/gallery/GallerySection";
import HeroSection from "../components/mainPage/heroSection/HeroSection";
import { HowWeTeach } from "../components/mainPage/howWeTeach/HowWeTeach";
import { KeyStagesText } from "../components/mainPage/keyStages/keyStagesText";
import MapSection from "../components/mainPage/map/MapSection";
import { OnlineSchoolFaqs } from "../components/mainPage/onlineSchoolFaqs/OnlineSchoolFaqs";
import { Rating } from "../components/mainPage/rating/Rating";
import { SchoolExperience } from "../components/mainPage/schooExperience/SchoolExperience";
import { SchoolCard } from "../components/mainPage/schoolCard/SchoolCard";
import { SchoolCategories } from "../components/mainPage/schoolCategories/SchoolCategories";
import { SchoolInsights } from "../components/mainPage/schoolInsight/SchoolInsights";
import { SchoolTrust } from "../components/mainPage/schoolTrust/SchoolTrust";
import { SignUpForOurNext } from "../components/mainPage/signUpFornextEvent/SignUpForOurNext";
import { StudentLifeImages } from "../components/mainPage/studentLifeImages/StudentLifeImages";
import { StudentSupport } from "../components/mainPage/studentSupport/StudentSupport";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <KeyStagesText />
      <SchoolCard />
      <FamiliesLoveSec />
      <SchoolTrust />
      <SchoolExperience />
      <StudentLifeImages />
      <HowWeTeach />
      {/* <StudentSupport /> */}
      {/* <SchoolCategories /> */}
      {/* <MapSection />
      <SchoolInsights /> */}
      {/* <GallerySection /> */}
      {/* <OnlineSchoolFaqs />
      <SignUpForOurNext /> */}
    </div>
  );
}
