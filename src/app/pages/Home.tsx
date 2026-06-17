import { HeroSlider } from '../components/HeroSlider';
import { NoticeBar } from '../components/NoticeBar';
import { IntroSection } from '../components/IntroSection';
import { ProjectSection } from '../components/ProjectSection';

export function Home() {
  return (
    <div className="flex flex-col">
      {/* ১. হিরো স্লাইডার (সবার উপরে) */}
      <HeroSlider />

      {/* ২. নোটিশ বার (স্লাইডারের নিচে এবং রান্নিং এনিমেশন সহ) */}
      <NoticeBar />

      {/* ৩. পরিচিতি সেকশন */}
      <IntroSection />

      {/* ৪. আমাদের কার্যক্রম */}
      <ProjectSection />
    </div>
  );
}