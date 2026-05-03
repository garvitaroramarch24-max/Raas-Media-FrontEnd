'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import axios from 'axios';
import { apiUrl } from '@/lib/api';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitError(null);

    try {
      const response = await axios.post(apiUrl('/api/contact'), formData);
      if (response.status === 200) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      if (axios.isAxiosError(error)) {
        const data = error.response?.data as { message?: string } | undefined;
        const msg =
          typeof data?.message === 'string'
            ? data.message
            : error.response?.status === 0 || !error.response
              ? 'Cannot reach the server. Check your connection and that the API URL is correct.'
              : 'Could not send your message. Please try again or use the phone or email above.';
        setSubmitError(msg);
      } else {
        setSubmitError('Something went wrong. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-lightGray mb-4">
            Get In <span className="text-gold">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 bg-darkGray border border-gold/20 rounded-lg text-center hover:border-gold/50 transition-colors"
          >
            <FiPhone className="text-4xl text-gold mx-auto mb-4" />
            <h3 className="text-xl font-bold text-lightGray mb-2">Phone</h3>
            <p className="text-lightGray/70">+91 91525 66335</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-6 bg-darkGray border border-gold/20 rounded-lg text-center hover:border-gold/50 transition-colors"
          >
            <FiMail className="text-4xl text-gold mx-auto mb-4" />
            <h3 className="text-xl font-bold text-lightGray mb-2">Email</h3>
            <p className="text-lightGray/70">raasme5@gmail.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-6 bg-darkGray border border-gold/20 rounded-lg text-center hover:border-gold/50 transition-colors"
          >
            <FiMapPin className="text-4xl text-gold mx-auto mb-4" />
            <h3 className="text-xl font-bold text-lightGray mb-2">Location</h3>
            <p className="text-lightGray/70">Raas Media & Entertainment A/ 2303, JP Decks CHSL, Gen. A.K Vaidya Marg, Malad (East). Mumbai - 400 097</p>
          </motion.div>
        </div>

        {/* Contact Form */}
        <div className="grid md:grid-cols-2 gap-12">
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {submitted && (
              <div className="p-4 bg-green-500/20 border border-green-500 text-green-400 rounded-lg">
                Thank you! We&apos;ll get back to you soon.
              </div>
            )}

            {submitError && (
              <div className="p-4 bg-red-500/15 border border-red-500/50 text-red-300 rounded-lg text-sm">
                {submitError}
              </div>
            )}

            <div>
              <label className="block text-lightGray font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-darkGray border border-gold/30 rounded-lg text-lightGray focus:outline-none focus:border-gold transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-lightGray font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-darkGray border border-gold/30 rounded-lg text-lightGray focus:outline-none focus:border-gold transition-colors"
                placeholder="Your email"
              />
            </div>

            <div>
              <label className="block text-lightGray font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-darkGray border border-gold/30 rounded-lg text-lightGray focus:outline-none focus:border-gold transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-3 bg-gradient-gold text-dark font-bold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all duration-300 disabled:opacity-50"
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-96 rounded-lg overflow-hidden border border-gold/20"
          >
            {/* <iframe
              src="https://maps.google.com/maps?q=Goregaon%20West%20Mumbai&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            /> */}
            <iframe
              src="https://maps.google.com/maps?q=Raas%20Media%20%26%20Entertainment%20A%2F2303%2C%20JP%20Decks%20CHSL%2C%20Gen.%20A.K%20Vaidya%20Marg%2C%20Malad%20East%2C%20Mumbai%20400097&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
