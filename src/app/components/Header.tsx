import { Link } from 'react-router-dom'; // নিশ্চিত করুন react-router-dom ব্যবহার করছেন
import { Button } from './ui/button';
import { User } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="h-10 w-10" />
          </Link>

          <nav className="hidden items-center space-x-4 md:flex text-sm font-medium">
            <Link to="/">মূলপাতা</Link>
            <Link to="/about">পরিচিতি</Link>
            <Link to="/initiatives">সেবামূলক উদ্যোগ</Link>
            <Link to="/gallery">ফটো অ্যালবাম</Link>
            <Link to="/volunteer">স্বেচ্ছাসেবী হোন</Link>
            <Link to="/blog">নিবন্ধ</Link>
            <Link to="/notice">ঘোষণা</Link>
            <Link to="/contact">যোগাযোগ</Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link to="/donate">
               <Button className="bg-[#0F6B4A] hover:bg-[#0d5a3f]">দান করুন</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}