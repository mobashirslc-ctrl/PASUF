import { HeroSlider } from '../components/HeroSlider';
import { NoticeBar } from '../components/NoticeBar';
import { IntroSection } from '../components/IntroSection';
import { ProjectSection } from '../components/ProjectSection';

export function Home() {
  return (
    <div className="flex flex-col">
      {/* ১. নোটিশ বার */}
      <NoticeBar />

      {/* ২. হিরো স্লাইডার */}
      <HeroSlider />

      {/* ৩. পরিচিতি সেকশন */}
      <IntroSection />

      {/* ৪. আমাদের কার্যক্রম */}
      <ProjectSection />

      {/* ৫. অন্যান্য সেকশন (আপনি চাইলে Impact বা Success Story গুলোকেও আলাদা কম্পোনেন্টে নিতে পারেন) */}
      {/* এখানে আপনার আগের ইমপ্যাক্ট বা স্টোরি সেকশনগুলো রাখতে পারেন */}
    </div>
  );
}