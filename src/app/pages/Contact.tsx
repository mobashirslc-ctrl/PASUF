import { motion } from 'motion/react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (placeholder)
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

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
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              যোগাযোগ করুন - আমরা সর্বদা আপনার সাহায্যের জন্য প্রস্তুত
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-3xl font-bold">Get In Touch</h2>
              <p className="mb-8 text-muted-foreground">
                আমাদের সাথে যোগাযোগ করুন যেকোনো প্রশ্ন, পরামর্শ বা সহায়তার জন্য। আমরা আপনার
                সেবায় নিয়োজিত।
              </p>

              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Address</h3>
                      <p className="text-sm text-muted-foreground">
                        House #123, Road #45
                        <br />
                        Dhanmondi, Dhaka - 1209
                        <br />
                        Bangladesh
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Phone</h3>
                      <p className="text-sm text-muted-foreground">
                        +880 123 456 789
                        <br />
                        +880 987 654 321
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Email</h3>
                      <p className="text-sm text-muted-foreground">
                        info@pasuf.org
                        <br />
                        contact@pasuf.org
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Office Hours</h3>
                      <p className="text-sm text-muted-foreground">
                        Saturday - Thursday: 9:00 AM - 6:00 PM
                        <br />
                        Friday: Closed
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8">
                <h2 className="mb-6 text-3xl font-bold">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm">
                      Name / নাম
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm">
                      Email / ইমেইল
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm">
                      Phone / ফোন
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+880 123 456 789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm">
                      Message / বার্তা
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                    Send Message / বার্তা পাঠান
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Donation Information */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Support Our Mission</h2>
            <p className="mb-8 text-lg text-primary-foreground/90">
              Your donations help us continue our work in education, healthcare, employment, and
              food security. Every contribution makes a difference in someone's life.
            </p>
            <p className="mb-8 text-primary-foreground/90">
              আপনার দান আমাদের শিক্ষা, স্বাস্থ্য, কর্মসংস্থান এবং খাদ্য নিরাপত্তার কাজ চালিয়ে
              যেতে সাহায্য করে। প্রতিটি অবদান কারও জীবনে পরিবর্তন আনে।
            </p>

            <Card className="bg-white p-8 text-foreground">
              <h3 className="mb-4 text-2xl font-bold">Bank Details</h3>
              <div className="space-y-2 text-left">
                <p>
                  <span className="font-semibold">Account Name:</span> Principle Allama Safir Uddin
                  Foundation
                </p>
                <p>
                  <span className="font-semibold">Bank Name:</span> Bangladesh Bank
                </p>
                <p>
                  <span className="font-semibold">Account Number:</span> 123-456-789-0123
                </p>
                <p>
                  <span className="font-semibold">Routing Number:</span> 123456789
                </p>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                For international donations, please contact us for SWIFT code and other details.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
