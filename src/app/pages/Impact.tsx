import { motion } from 'motion/react';
import { Card } from '../components/ui/card';
import { useEffect, useState } from 'react';

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

export function Impact() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Our Impact</h1>
            <p className="text-lg text-muted-foreground">
              আমাদের কাজের মাধ্যমে অর্জিত সাফল্য এবং মানুষের জীবনে ইতিবাচক পরিবর্তন
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">By The Numbers</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our commitment to serving humanity reflected in numbers
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 text-center">
                <div className="mb-4 text-5xl font-bold text-primary">
                  <CountUpAnimation end={500} />
                </div>
                <h3 className="mb-2 text-xl font-semibold">মেধাবী শিক্ষার্থী</h3>
                <p className="text-sm text-muted-foreground">
                  Students Supported with Scholarships
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="p-8 text-center">
                <div className="mb-4 text-5xl font-bold text-primary">
                  <CountUpAnimation end={200} />
                </div>
                <h3 className="mb-2 text-xl font-semibold">কর্মসংস্থান</h3>
                <p className="text-sm text-muted-foreground">
                  Jobs Created Through Our Programs
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-8 text-center">
                <div className="mb-4 text-5xl font-bold text-primary">
                  <CountUpAnimation end={1000} />
                </div>
                <h3 className="mb-2 text-xl font-semibold">চিকিৎসা সেবা</h3>
                <p className="text-sm text-muted-foreground">
                  Patients Treated and Supported
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="p-8 text-center">
                <div className="mb-4 text-5xl font-bold text-primary">
                  <CountUpAnimation end={5000} />
                </div>
                <h3 className="mb-2 text-xl font-semibold">পরিবারকে খাদ্য</h3>
                <p className="text-sm text-muted-foreground">
                  Families Provided with Food
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Success Stories</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Real stories of lives transformed through our initiatives
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary to-primary/70" />
                <div className="p-6">
                  <div className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    Education
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">From Struggle to Success</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    "I never thought I could go to university. PASUF's scholarship changed my life.
                    Now I'm studying engineering and planning to give back to my community."
                  </p>
                  <p className="text-sm font-medium">- Fatima Rahman, Scholarship Recipient</p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-accent to-accent/70" />
                <div className="p-6">
                  <div className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    Employment
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Building a Better Future</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    "The vocational training I received helped me start my own business. Today, I
                    employ five people and support my entire family."
                  </p>
                  <p className="text-sm font-medium">- Karim Ahmed, Business Owner</p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/60 to-accent/60" />
                <div className="p-6">
                  <div className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    Healthcare
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">A Second Chance at Life</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    "When I needed urgent surgery, PASUF covered all my medical expenses. They
                    literally saved my life and gave me hope."
                  </p>
                  <p className="text-sm font-medium">- Rahim Miah, Healthcare Beneficiary</p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-accent/70 to-primary/70" />
                <div className="p-6">
                  <div className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    Food Security
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Hope in Hard Times</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    "During the pandemic, PASUF's food distribution program ensured my children
                    didn't go hungry. We are forever grateful."
                  </p>
                  <p className="text-sm font-medium">- Ayesha Begum, Mother of Three</p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="h-full overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/80 to-accent/80" />
                <div className="p-6">
                  <div className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    Education
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Dreams Come True</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    "I wanted to be a teacher but couldn't afford college. Thanks to PASUF, I
                    graduated and now teach at a local school."
                  </p>
                  <p className="text-sm font-medium">- Nusrat Jahan, Teacher</p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="h-full overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-accent to-primary" />
                <div className="p-6">
                  <div className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    Employment
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">A Path to Independence</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    "The skills training program gave me confidence and a career. I'm now
                    financially independent and can support my parents."
                  </p>
                  <p className="text-sm font-medium">- Mahmud Hasan, IT Professional</p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Areas of Impact</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our work spans across multiple sectors to create holistic change
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-8">
              <h3 className="mb-4 text-2xl font-bold">Education & Skill Development</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 500+ scholarships awarded to students</li>
                <li>• 1,000+ books and materials distributed</li>
                <li>• 50+ vocational training sessions conducted</li>
                <li>• 100+ students received career mentorship</li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="mb-4 text-2xl font-bold">Healthcare & Wellness</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 1,000+ patients treated through medical camps</li>
                <li>• 500+ free medicine distributions</li>
                <li>• 20+ health awareness programs</li>
                <li>• 100+ elderly care support provided</li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="mb-4 text-2xl font-bold">Economic Empowerment</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 200+ individuals trained and employed</li>
                <li>• 50+ small businesses supported</li>
                <li>• 150+ families achieved financial stability</li>
                <li>• 30+ entrepreneurs mentored</li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="mb-4 text-2xl font-bold">Food & Nutrition</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 5,000+ families received food support</li>
                <li>• 50+ food distribution drives organized</li>
                <li>• 2,000+ children received nutritional meals</li>
                <li>• 10+ emergency relief operations conducted</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
