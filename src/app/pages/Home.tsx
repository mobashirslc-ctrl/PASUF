import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { GraduationCap, Briefcase, Heart, Utensils } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { HeroSlider } from '../components/HeroSlider';

function CountUpAnimation({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}+</span>;
}

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Our Core Initiatives */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Core Initiatives</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              আমাদের উদ্যোগসমূহ মানুষের জীবনমান উন্নয়নে প্রতিশ্রুতিবদ্ধ
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="group h-full p-6 transition-shadow hover:shadow-lg">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary">
                  <GraduationCap className="h-8 w-8 text-primary transition-colors group-hover:text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Education</h3>
                <p className="mb-2 font-medium text-primary">মেধাবীদের বৃত্তি</p>
                <p className="text-sm text-muted-foreground">
                  Scholarships for meritorious students to build a better future.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="group h-full p-6 transition-shadow hover:shadow-lg">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary">
                  <Briefcase className="h-8 w-8 text-primary transition-colors group-hover:text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Employment</h3>
                <p className="mb-2 font-medium text-primary">কর্মসংস্থান তৈরি</p>
                <p className="text-sm text-muted-foreground">
                  Creating sustainable job opportunities for economic empowerment.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="group h-full p-6 transition-shadow hover:shadow-lg">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary">
                  <Heart className="h-8 w-8 text-primary transition-colors group-hover:text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Healthcare</h3>
                <p className="mb-2 font-medium text-primary">চিকিৎসা সহায়তা</p>
                <p className="text-sm text-muted-foreground">
                  Medical aid for the underprivileged to ensure healthy lives.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="group h-full p-6 transition-shadow hover:shadow-lg">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary">
                  <Utensils className="h-8 w-8 text-primary transition-colors group-hover:text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Food Security</h3>
                <p className="mb-2 font-medium text-primary">খাদ্য নিরাপত্তা</p>
                <p className="text-sm text-muted-foreground">
                  Ensuring food for the needy to fight hunger and poverty.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Impact</h2>
            <p className="mx-auto max-w-2xl text-primary-foreground/80">
              আমাদের কাজের মাধ্যমে অর্জিত সাফল্য
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="mb-2 text-5xl font-bold">
                <CountUpAnimation end={500} />
              </div>
              <p className="mb-1 text-lg font-semibold">মেধাবী শিক্ষার্থী</p>
              <p className="text-sm text-primary-foreground/80">Students Supported</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="mb-2 text-5xl font-bold">
                <CountUpAnimation end={200} />
              </div>
              <p className="mb-1 text-lg font-semibold">কর্মসংস্থান</p>
              <p className="text-sm text-primary-foreground/80">Jobs Created</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="mb-2 text-5xl font-bold">
                <CountUpAnimation end={1000} />
              </div>
              <p className="mb-1 text-lg font-semibold">চিকিৎসা সেবা</p>
              <p className="text-sm text-primary-foreground/80">Patients Treated</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="mb-2 text-5xl font-bold">
                <CountUpAnimation end={5000} />
              </div>
              <p className="mb-1 text-lg font-semibold">পরিবারকে খাদ্য</p>
              <p className="text-sm text-primary-foreground/80">Families Fed</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us Summary */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">About Us</h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Principle Allama Safir Uddin Foundation is dedicated to uplifting the lives of
              underprivileged communities through sustainable and impactful initiatives. Our
              vision is to create a society where every individual has access to education,
              healthcare, employment, and food security.
            </p>
            <p className="mb-8 text-lg text-muted-foreground">
              আমরা বিশ্বাস করি যে শিক্ষা, স্বাস্থ্য ও কর্মসংস্থানের মাধ্যমে একটি সমৃদ্ধ সমাজ গড়া
              সম্ভব। আমাদের প্রতিটি উদ্যোগ মানুষের জীবনে ইতিবাচক পরিবর্তন আনতে প্রতিশ্রুতিবদ্ধ।
            </p>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Success Stories</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              আমাদের কাজের মাধ্যমে পরিবর্তিত জীবনের গল্প
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary to-primary/70" />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Fatima's Journey</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  From a struggling student to a university scholar, Fatima's life changed when
                  she received our educational scholarship. Today, she's pursuing her dream of
                  becoming a doctor.
                </p>
                <p className="text-sm font-medium text-primary">Education Initiative</p>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-accent to-accent/70" />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Karim's New Beginning</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  After receiving vocational training through our employment program, Karim
                  started his own tailoring business and now supports his entire family.
                </p>
                <p className="text-sm font-medium text-primary">Employment Initiative</p>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary/60 to-accent/60" />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Rahim's Recovery</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  When Rahim fell seriously ill, our healthcare program provided him with the
                  medical treatment he needed. Today, he's healthy and back to work.
                </p>
                <p className="text-sm font-medium text-primary">Healthcare Initiative</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-lg bg-gradient-to-r from-primary to-primary/90 px-8 py-12 text-center text-primary-foreground md:px-12">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Join Us in Making a Difference</h2>
            <p className="mb-8 text-lg text-primary-foreground/90">
              Your support can change lives. Every contribution helps us reach more people in need.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90"
              >
                <Link to="/contact">Donate Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white hover:text-primary"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
