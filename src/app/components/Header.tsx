import { Link } from 'react-router';
import { Button } from './ui/button';
import { Menu, X, User } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

          {/* Right Side Buttons */}
          <div className="flex items-center gap-2">
            <div className="flex items-center border rounded-md overflow-hidden text-xs">
              <span className="px-2 bg-green-100">বাং</span>
              <span className="px-2">EN</span>
            </div>
            <User className="h-8 w-8 p-1.5 border rounded-md cursor-pointer" />
            <Button className="bg-[#0F6B4A] hover:bg-[#0d5a3f]">দান করুন</Button>
          </div>
        </div>
      </div>
    </header>
  );
}