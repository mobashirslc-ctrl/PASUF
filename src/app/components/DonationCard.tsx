import { useState } from 'react';

export const DonationCard = ({ name, description }: { name: string, description: string }) => {
  const [showCalc, setShowCalc] = useState(false);
  const [amount, setAmount] = useState('');

  return (
    <div className="border rounded-xl p-6 shadow-md hover:shadow-xl transition">
      <h3 className="text-xl font-bold text-[#0F6B4A] mb-3">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      {name === "ওয়াজিব যাকাত ফান্ড" && (
        <button 
          onClick={() => setShowCalc(!showCalc)}
          className="text-sm text-[#E59F34] underline mb-4 block"
        >
          {showCalc ? 'ক্যালকুলেটর বন্ধ করুন' : 'যাকাত ক্যালকুলেটর দেখুন'}
        </button>
      )}

      {showCalc && (
        <div className="bg-gray-50 p-4 rounded mb-4">
          <input 
            type="number" 
            placeholder="আপনার মোট সম্পদ (টাকা)" 
            className="w-full p-2 border rounded mb-2"
            onChange={(e) => setAmount(e.target.value)}
          />
          <p className="text-sm font-bold">যাকাত দিতে হবে: {Number(amount) * 0.025} টাকা</p>
        </div>
      )}

      <button className="w-full bg-[#0F6B4A] text-white py-2 rounded hover:bg-green-800">দান করুন</button>
    </div>
  );
};