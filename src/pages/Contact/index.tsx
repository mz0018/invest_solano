import { useState, FormEvent } from 'react';
import { Container, Section, Card, Button } from '@/components/ui';
import { Icon } from '@/components/ui/Icon';
import { SolanoMap } from '@/components/ui/SolanoMap';
import { contactInfo } from '@/data/content';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Section className="pt-24 md:pt-28 pb-16">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about investing in Solano? Our Investment Desk is here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div>
            <Card className="h-full">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Investment Desk</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 min-w-0">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center">
                      <Icon name="MapPinned" size={20} />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-medium text-gray-900">Address</h3>
                    <p className="text-gray-600">{contactInfo.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 min-w-0">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center">
                      <Icon name="Phone" size={20} />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600">{contactInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 min-w-0">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center">
                      <Icon name="Mail" size={20} />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">{contactInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 min-w-0">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center">
                      <Icon name="Clock" size={20} />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-medium text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">{contactInfo.hours}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <SolanoMap />
                </div>
              </div>
            </Card>
          </div>

          <div>
            <Card>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                      placeholder="+63 999 123 4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                      placeholder="Your Company"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition resize-none"
                    placeholder="Tell us about your investment interests..."
                  />
                </div>
                <Button type="submit" fullWidth disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
}
