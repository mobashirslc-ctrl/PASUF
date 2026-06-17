import React from 'react';

export const NoticeBar = () => {
  return (
    <div className="w-full bg-[#0F6B4A] text-white py-3 overflow-hidden border-b-4 border-[#E59F34]">
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="mx-4 font-bold">📢 বিশেষ ঘোষণা:</span>
        <span className="mx-4">আমাদের নতুন প্রজেক্টের কাজ চলমান, বিস্তারিত জানতে আমাদের সেবামূলক উদ্যোগ পেজটি ভিজিট করুন।</span>
        <span className="mx-4">|</span>
        <span className="mx-4">শিক্ষাবৃত্তি আবেদন প্রক্রিয়া শুরু হয়েছে।</span>
        <span className="mx-4">|</span>
        <span className="mx-4">অসহায়দের জন্য খাদ্য সহায়তা কার্যক্রম এখন আপনার এলাকায়।</span>
      </div>
    </div>
  );
};