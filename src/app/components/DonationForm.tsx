import { Link } from 'react-router-dom';
import { funds } from '../data/funds';

export const DonationForm = () => {
  return (
    // '-mt-16' এর জায়গায় 'mt-4' বা প্রয়োজন অনুযায়ী স্পেস দিন
    // 'relative z-20' নিশ্চিত করুন যেন এটি অন্য এলিমেন্টের ওপরে থাকে
    <div className="bg-[#E59F34] p-6 rounded-lg text-white shadow-lg mx-4 md:mx-20 mt-4 md:mt-8 relative z-50">
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
        
        {/* useNavigate সরিয়ে Link ব্যবহার করা হলো */}
        <Link to="/donate" className="md:col-span-3">
          <button className="w-full bg-[#0F6B4A] p-3 rounded font-bold hover:bg-green-900 transition">
            দান করুন
          </button>
        </Link>
      </div>
    </div>
  );
};