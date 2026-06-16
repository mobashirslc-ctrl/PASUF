import { Link } from 'react-router';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
              <span className="font-semibold text-white">P</span>
            </div>
            <span className="hidden font-semibold text-foreground sm:inline-block">
              প্রিন্সিপাল আল্লামা ছফির উদ্দিন ফাউন্ডেশন
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-6 md:flex">
            <Link
              to="/"
              className="transition-colors hover:text-primary"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="transition-colors hover:text-primary"
            >
              About Us
            </Link>
            <Link
              to="/initiatives"
              className="transition-colors hover:text-primary"
            >
              Initiatives
            </Link>
            <Link
              to="/impact"
              className="transition-colors hover:text-primary"
            >
              Impact
            </Link>
            <Link
              to="/contact"
              className="transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-2">
            <Button
              asChild
              className="bg-accent hover:bg-accent/90"
            >
              <Link to="/contact">Donate Now</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="border-t py-4 md:hidden">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                className="px-2 py-2 transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="px-2 py-2 transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/initiatives"
                className="px-2 py-2 transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Initiatives
              </Link>
              <Link
                to="/impact"
                className="px-2 py-2 transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Impact
              </Link>
              <Link
                to="/contact"
                className="px-2 py-2 transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
