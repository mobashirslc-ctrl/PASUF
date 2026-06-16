import { motion } from 'motion/react';
import { Card } from '../components/ui/card';
import { GraduationCap, Briefcase, Heart, Utensils, BookOpen, Stethoscope, Users, HandHeart } from 'lucide-react';

export function Initiatives() {
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
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Our Initiatives</h1>
            <p className="text-lg text-muted-foreground">
              আমাদের বিভিন্ন উদ্যোগের মাধ্যমে মানুষের জীবনে ইতিবাচক পরিবর্তন আনছি
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Initiatives */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {/* Education Initiative */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid gap-8 md:grid-cols-2 md:items-center"
            >
              <div>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h2 className="mb-4 text-3xl font-bold">Education Program</h2>
                <h3 className="mb-4 text-xl font-semibold text-primary">মেধাবীদের বৃত্তি</h3>
                <p className="mb-4 text-muted-foreground">
                  Education is the foundation of progress. Our scholarship program supports
                  meritorious students from underprivileged backgrounds, ensuring they have access
                  to quality education and the opportunity to achieve their dreams.
                </p>
                <p className="mb-4 text-muted-foreground">
                  শিক্ষা হল উন্নতির ভিত্তি। আমাদের বৃত্তি কর্মসূচি দরিদ্র পরিবারের মেধাবী
                  শিক্ষার্থীদের সহায়তা করে, যাতে তারা মানসম্মত শিক্ষা পেতে পারে এবং তাদের স্বপ্ন
                  পূরণ করতে পারে।
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <BookOpen className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Scholarships for primary to university level students</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BookOpen className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Books and educational materials support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BookOpen className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Mentorship and career guidance programs</span>
                  </li>
                </ul>
              </div>
              <Card className="h-64 overflow-hidden bg-gradient-to-br from-primary to-primary/70 md:h-96" />
            </motion.div>

            {/* Employment Initiative */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid gap-8 md:grid-cols-2 md:items-center"
            >
              <Card className="order-2 h-64 overflow-hidden bg-gradient-to-br from-accent to-accent/70 md:order-1 md:h-96" />
              <div className="order-1 md:order-2">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
                <h2 className="mb-4 text-3xl font-bold">Employment Program</h2>
                <h3 className="mb-4 text-xl font-semibold text-primary">কর্মসংস্থান তৈরি</h3>
                <p className="mb-4 text-muted-foreground">
                  Economic independence is key to breaking the cycle of poverty. We provide
                  vocational training and job placement support to help individuals build
                  sustainable careers and support their families.
                </p>
                <p className="mb-4 text-muted-foreground">
                  অর্থনৈতিক স্বাধীনতা দারিদ্র্যের চক্র ভাঙার মূল চাবিকাঠি। আমরা পেশাগত প্রশিক্ষণ
                  এবং চাকরির সহায়তা প্রদান করি যাতে মানুষ টেকসই ক্যারিয়ার গড়তে এবং তাদের পরিবারকে
                  সহায়তা করতে পারে।
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Users className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Vocational skills training programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Job placement and career counseling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Small business startup support</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Healthcare Initiative */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid gap-8 md:grid-cols-2 md:items-center"
            >
              <div>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h2 className="mb-4 text-3xl font-bold">Healthcare Program</h2>
                <h3 className="mb-4 text-xl font-semibold text-primary">চিকিৎসা সহায়তা</h3>
                <p className="mb-4 text-muted-foreground">
                  Good health is a fundamental right. Our healthcare initiative provides medical
                  assistance to those who cannot afford treatment, ensuring they receive the care
                  they need to lead healthy lives.
                </p>
                <p className="mb-4 text-muted-foreground">
                  সুস্বাস্থ্য একটি মৌলিক অধিকার। আমাদের স্বাস্থ্যসেবা উদ্যোগ তাদের চিকিৎসা সহায়তা
                  প্রদান করে যারা চিকিৎসা ব্যয় বহন করতে পারে না, যাতে তারা সুস্থ জীবনযাপনের জন্য
                  প্রয়োজনীয় যত্ন পান।
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Stethoscope className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Free medical checkup camps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Stethoscope className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Medicine and treatment cost support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Stethoscope className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Health awareness and prevention programs</span>
                  </li>
                </ul>
              </div>
              <Card className="h-64 overflow-hidden bg-gradient-to-br from-primary/60 to-accent/60 md:h-96" />
            </motion.div>

            {/* Food Security Initiative */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid gap-8 md:grid-cols-2 md:items-center"
            >
              <Card className="order-2 h-64 overflow-hidden bg-gradient-to-br from-accent/70 to-primary/70 md:order-1 md:h-96" />
              <div className="order-1 md:order-2">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                  <Utensils className="h-8 w-8 text-white" />
                </div>
                <h2 className="mb-4 text-3xl font-bold">Food Security Program</h2>
                <h3 className="mb-4 text-xl font-semibold text-primary">খাদ্য নিরাপত্তা</h3>
                <p className="mb-4 text-muted-foreground">
                  No one should go to bed hungry. Our food security initiative ensures that
                  vulnerable families have access to nutritious meals, especially during times of
                  crisis and need.
                </p>
                <p className="mb-4 text-muted-foreground">
                  কারো উপবাসে থাকা উচিত নয়। আমাদের খাদ্য নিরাপত্তা উদ্যোগ নিশ্চিত করে যে দুর্বল
                  পরিবারগুলি পুষ্টিকর খাবার পায়, বিশেষত সংকট এবং প্রয়োজনের সময়।
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <HandHeart className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Regular food distribution programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <HandHeart className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Emergency relief during disasters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <HandHeart className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Nutritional support for children and elderly</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Support Our Initiatives</h2>
            <p className="mb-8 text-lg text-primary-foreground/90">
              Your contribution can help us expand these programs and reach more people in need.
            </p>
            <p className="text-primary-foreground/90">
              আপনার অবদান এই কর্মসূচিগুলি সম্প্রসারণ করতে এবং আরও বেশি মানুষের কাছে পৌঁছাতে
              সাহায্য করতে পারে।
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
