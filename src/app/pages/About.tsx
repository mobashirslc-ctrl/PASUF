import { motion } from 'motion/react';
import { Card } from '../components/ui/card';
import { Target, Eye, Heart } from 'lucide-react';

export function About() {
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
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">About Us</h1>
            <p className="text-lg text-muted-foreground">
              আমরা একটি অলাভজনক সংস্থা যা মানবতার সেবায় নিবেদিত
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="mb-4 text-2xl font-bold">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower underprivileged communities through education, healthcare, employment,
                  and food security initiatives, creating sustainable positive change in society.
                </p>
                <p className="mt-4 text-sm text-primary">
                  আমাদের লক্ষ্য হল শিক্ষা, স্বাস্থ্য, কর্মসংস্থান ও খাদ্য নিরাপত্তার মাধ্যমে সমাজে
                  টেকসই পরিবর্তন আনা।
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="mb-4 text-2xl font-bold">Our Vision</h3>
                <p className="text-muted-foreground">
                  A society where every individual has equal access to opportunities, resources, and
                  support needed to live a dignified and fulfilling life.
                </p>
                <p className="mt-4 text-sm text-primary">
                  এমন একটি সমাজ গড়া যেখানে প্রতিটি মানুষ সম্মানজনক ও পরিপূর্ণ জীবনযাপনের সুযোগ
                  পাবে।
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="mb-4 text-2xl font-bold">Our Values</h3>
                <p className="text-muted-foreground">
                  Compassion, integrity, transparency, and commitment guide our every action. We
                  believe in sustainable development and community empowerment.
                </p>
                <p className="mt-4 text-sm text-primary">
                  সহমর্মিতা, সততা, স্বচ্ছতা এবং প্রতিশ্রুতি আমাদের প্রতিটি কাজের ভিত্তি।
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-center text-3xl font-bold md:text-4xl">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Principle Allama Safir Uddin Foundation was established with a noble vision to
                  serve humanity and uplift the lives of those in need. Named after the esteemed
                  Principle Allama Safir Uddin, our foundation carries forward his legacy of
                  compassion, education, and community service.
                </p>
                <p>
                  আমাদের প্রতিষ্ঠান শুরু হয়েছিল একটি সহজ লক্ষ্য নিয়ে - দুস্থ মানুষের পাশে দাঁড়ানো
                  এবং তাদের জীবনে ইতিবাচক পরিবর্তন আনা। প্রিন্সিপাল আল্লামা সাফির উদ্দীনের মহান
                  আদর্শে অনুপ্রাণিত হয়ে আমরা শিক্ষা, স্বাস্থ্য, কর্মসংস্থান ও খাদ্য নিরাপত্তার
                  মাধ্যমে সমাজসেবায় কাজ করে যাচ্ছি।
                </p>
                <p>
                  Over the years, we have grown from a small community initiative to a recognized
                  foundation serving thousands of beneficiaries. Our programs have touched lives
                  across various sectors, from providing scholarships to deserving students to
                  ensuring healthcare for the elderly and vulnerable.
                </p>
                <p>
                  বছরের পর বছর ধরে আমরা ছোট একটি সামাজিক উদ্যোগ থেকে একটি স্বীকৃত প্রতিষ্ঠানে
                  পরিণত হয়েছি। আমাদের কর্মসূচি হাজার হাজার মানুষের জীবনে স্পর্শ করেছে - মেধাবী
                  শিক্ষার্থীদের বৃত্তি প্রদান থেকে শুরু করে বয়স্ক ও দুর্বলদের স্বাস্থ্যসেবা
                  নিশ্চিত করা পর্যন্ত।
                </p>
                <p>
                  Today, we continue to work tirelessly towards our mission, guided by the
                  principles of compassion, transparency, and sustainable development. Every life we
                  touch, every smile we bring, reinforces our commitment to building a better
                  tomorrow.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Team</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Dedicated individuals working together to make a difference
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {['President', 'Secretary', 'Treasurer', 'Program Director'].map((role, index) => (
              <motion.div
                key={role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden text-center">
                  <div className="h-48 bg-gradient-to-br from-primary to-primary/70" />
                  <div className="p-6">
                    <h3 className="mb-1 text-xl font-semibold">Team Member</h3>
                    <p className="text-sm text-muted-foreground">{role}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
