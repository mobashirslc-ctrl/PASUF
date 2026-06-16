import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import heroImage from '@/imports/image.png';

const slides = [
  
  {
    image: 'https://images.unsplash.com/photo-1731010228061-c50a53176311?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbml0YXJpYW4lMjBhaWQlMjBCYW5nbGFkZXNoJTIwd29tYW4lMjBmYXJtaW5nfGVufDF8fHx8MTc4MTYxMTYxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    isImport: false,
    headline: 'শিক্ষা ও কর্মসংস্থানে বিনিয়োগ',
    subheadline: 'Empowering Communities Through Education',
    description: 'মেধাবী শিক্ষার্থীদের বৃত্তি এবং কর্মসংস্থান তৈরিতে আমরা প্রতিশ্রুতিবদ্ধ।',
  },
  {
    image: 'https://images.unsplash.com/photo-1738233505102-1bd26c33679e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxodW1hbml0YXJpYW4lMjBhaWQlMjBCYW5nbGFkZXNoJTIwd29tYW4lMjBmYXJtaW5nfGVufDF8fHx8MTc4MTYxMTYxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    isImport: false,
    headline: 'খাদ্য নিরাপত্তা ও স্বাস্থ্য সেবা',
    subheadline: 'Food Security & Healthcare for All',
    description: 'ক্ষুধা ও দারিদ্র্যমুক্ত একটি সমাজ গড়ার লক্ষ্যে আমরা নিরলসভাবে কাজ করে যাচ্ছি।',
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  };

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative h-[75vh] min-h-[500px] w-full overflow-hidden">
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={{
            enter: (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
            center: { x: 0, opacity: 1 },
            exit: (d: number) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {slide.isImport ? (
            <ImageWithFallback
              src={slide.image}
              alt={slide.subheadline}
              className="h-full w-full object-cover"
            />
          ) : (
            <img
              src={slide.image}
              alt={slide.subheadline}
              className="h-full w-full object-cover"
            />
          )}
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Text Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6 md:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${current}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl"
            >
              <p className="mb-3 text-lg font-semibold text-[#E59F34] md:text-xl">
                {slide.subheadline}
              </p>
              <h1 className="mb-4 text-3xl font-bold text-white md:text-5xl lg:text-6xl leading-tight">
                {slide.headline}
              </h1>
              <p className="mb-8 text-base text-white/85 md:text-lg">
                {slide.description}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="bg-[#E59F34] hover:bg-[#c8891c] text-white">
                  <Link to="/contact">Donate Now</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white bg-transparent text-white hover:bg-white hover:text-[#0F6B4A]"
                >
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Prev / Next Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition hover:bg-black/60"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition hover:bg-black/60"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === current ? 'w-8 bg-[#E59F34]' : 'w-2.5 bg-white/60 hover:bg-white'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
