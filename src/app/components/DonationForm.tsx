import { useNavigate } from 'react-router-dom';
import { funds } from '../data/funds';

export const DonationForm = () => {
  const navigate = useNavigate();

  const handleDonate = () => {
    // সরাসরি DonatePage-এ পাঠিয়ে দেওয়া হচ্ছে
    navigate('/donate');
  };

  return (
    <div className="bg-[#E59F34] p-6 rounded-lg text-white shadow-lg mx-4 md:mx-20 -mt-16 relative z-20">
      <h2 className="text-2xl font-bold mb-4 text-center">আপনার অনুদান প্রদান করুন</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <select id="fund-select" className="p-3 rounded text-black w-full">
          {funds.map((f: any) => (
            <option key={f.id} value={f.name}>
              {f.name}
            </option>
          ))}
        </select>
        <input type="text" placeholder="মোবাইল/ইমেইল" className="p-3 rounded text-black" />
        <input type="number" placeholder="পরিমাণ" className="p-3 rounded text-black" />
        <button
          onClick={handleDonate}
          className="bg-[#0F6B4A] p-3 rounded font-bold hover:bg-green-900 md:col-span-3 transition"
        >
          দান করুন
        </button>
      </div>
    </div>
  );
};