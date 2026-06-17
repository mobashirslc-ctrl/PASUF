import { HeroSlider } from '../components/HeroSlider';
import { NoticeBar } from '../components/NoticeBar';
import { DonationForm } from '../components/DonationForm';
import { IntroSection } from '../components/IntroSection';
import { ProjectSection } from '../components/ProjectSection';

export function Home() {
  return (
    <div className="flex flex-col">
      {/* ১. হিরো স্লাইডার */}
      <HeroSlider />

      {/* ২. নোটিশ বার */}
      <NoticeBar />

      {/* ৩. অনুদান ফর্ম (স্লাইডার ও নোটিশের ঠিক নিচেই থাকবে) */}
      <div className="relative z-30">
        <DonationForm />
      </div>

      {/* ৪. পরিচিতি সেকশন */}
      <IntroSection />

      {/* ৫. আমাদের কার্যক্রম */}
      <ProjectSection />
    </div>
  );
}