export const IntroSection = () => (
  <section className="py-20 container mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F6B4A]">প্রিন্সিপাল আল্লামা ছফির উদ্দিন ফাউন্ডেশন</h2>
        <p className="text-gray-700 leading-relaxed">
          মানুষের সেবা এবং একটি সুন্দর সমাজ গঠনের লক্ষ্যে আমাদের পথচলা। আল্লামা ছফির উদ্দিনের আদর্শকে ধারণ করে আমরা প্রান্তিক মানুষের ভাগ্য উন্নয়নে কাজ করছি।
        </p>
        <button className="bg-[#E59F34] text-white px-6 py-2 rounded shadow-lg hover:bg-[#d48e2e] transition">বিস্তারিত জানুন</button>
      </div>
      <div className="w-full h-64 bg-gray-100 rounded-lg shadow-inner flex items-center justify-center">
        <span className="text-gray-400">ব্যক্তিত্বের প্রতিকৃতি</span>
      </div>
    </div>
  </section>
);