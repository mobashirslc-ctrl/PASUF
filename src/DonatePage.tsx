import React, { useState } from 'react';

// কার্ড কম্পোনেন্ট
const Card = ({ name, description }: { name: string, description: string }) => {
  const [showCalc, setShowCalc] = useState(false);
  const [amount, setAmount] = useState('');

  return (
    <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow bg-white">
      <h3 className="text-xl font-bold text-[#0F6B4A] mb-3">{name}</h3>
      <p className="text-gray-600 mb-4 h-12 overflow-hidden">{description}</p>
      
      {name === "ওয়াজিব যাকাত ফান্ড" && (
        <div className="mb-4">
          <button onClick={() => setShowCalc(!showCalc)} className="text-sm text-[#E59F34] underline">
            {showCalc ? 'ক্যালকুলেটর বন্ধ করুন' : 'যাকাত ক্যালকুলেটর দেখুন'}
          </button>
          {showCalc && (
            <div className="bg-gray-50 p-3 rounded mt-2 border">
              <input type="number" placeholder="আপনার সম্পদ (টাকা)" className="w-full p-2 border rounded mb-2 text-sm" onChange={(e) => setAmount(e.target.value)} />
              <p className="text-xs font-bold">যাকাত দিতে হবে: {(Number(amount) * 0.025).toLocaleString()} টাকা</p>
            </div>
          )}
        </div>
      )}

      <button className="w-full bg-[#0F6B4A] text-white py-2 rounded font-semibold hover:bg-green-800 transition">দান করুন</button>
    </div>
  );
};

// মূল পেজ যেখানে ১২টি কার্ড আছে
export const DonatePage = () => {
  const funds = [
    { name: "দ্বীনী গবেষণা ও জ্ঞানচর্চা", desc: "ইসলামিক জ্ঞানচর্চা ও গবেষণার প্রসারে আপনার দান।" },
    { name: "সাধারণ বাৎসরিক অনুদান", desc: "প্রতিষ্ঠানের নিয়মিত কার্যক্রম পরিচালনায় সহায়তা।" },
    { name: "ওয়াজিব যাকাত ফান্ড", desc: "শরীয়ত মোতাবেক যাকাত আদায় ও বণ্টন করা হয়।" },
    { name: "কারিগরি ও দক্ষতা উন্নয়ন", desc: "বেকার যুবকদের দক্ষ করে গড়ে তোলার প্রকল্প।" },
    { name: "সদকায়ে জারিয়া কার্যক্রম", desc: "সদকায়ে জারিয়ার মাধ্যমে স্থায়ী কল্যাণ প্রকল্প।" },
    { name: "সমন্বিত উন্নয়ন তহবিল", desc: "সামাজিক উন্নয়নের সমন্বিত উদ্যোগ।" },
    { name: "মেধাবী সহায়তা প্রকল্প", desc: "মেধাবী শিক্ষার্থীদের শিক্ষাবৃত্তি প্রদান।" },
    { name: "মানবসেবা স্বাস্থ্য প্রকল্প", desc: "অসহায় রোগীদের জন্য উন্নত চিকিৎসা সেবা।" },
    { name: "আত্মকর্মসংস্থান ও উদ্যোক্তা", desc: "উদ্যোক্তা তৈরিতে সহজ শর্তে সহায়তা।" },
    { name: "জরুরি সংকট মোকাবেলা", desc: "বিপর্যস্ত মানুষের জন্য জরুরি সেবা।" },
    { name: "শীতকালীন বস্ত্র ও ত্রাণ", desc: "শীতবস্ত্র ও ত্রাণ সামগ্রী বিতরণ কার্যক্রম।" },
    { name: "দুর্যোগকালীন মানবিক সহায়তা", desc: "দুর্যোগে ক্ষতিগ্রস্তদের ত্রাণ সহায়তা প্রদান।" },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-[#0F6B4A]">আমাদের সকল তহবিলসমূহ</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {funds.map((f, index) => (
          <Card key={index} name={f.name} description={f.desc} />
        ))}
      </div>
    </div>
  );
};