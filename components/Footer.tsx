'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiInstagram, FiFacebook, FiLinkedin, FiYoutube } from 'react-icons/fi';

export default function Footer() {
  const socialLinks = [
    { icon: FiFacebook, href: '#', label: 'Facebook' },
    { icon: FiInstagram, href: 'https://www.instagram.com/raas.mediaandent?igsh=MTlvNmswZnZjemh6Nw==', label: 'Instagram' },
    { icon: FiYoutube, href: '#', label: 'YouTube' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-dark border-t border-gold/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <img
                src="/images/logo.jpeg"
                alt="Raas Media & Entertainment"
                className="h-11 w-auto max-w-[200px] object-contain"
                width={200}
                height={48}
              />
            </div>
            <p className="text-lightGray/60 text-sm">
              Premium production and entertainment services for your brand's success.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lightGray font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-lightGray/60 hover:text-gold transition-colors">Home</Link></li>
              <li><Link href="/#about" className="text-lightGray/60 hover:text-gold transition-colors">About</Link></li>
              <li><Link href="/#team" className="text-lightGray/60 hover:text-gold transition-colors">Team</Link></li>
              <li><Link href="/#services" className="text-lightGray/60 hover:text-gold transition-colors">Services</Link></li>
              <li><Link href="/#projects" className="text-lightGray/60 hover:text-gold transition-colors">Projects</Link></li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lightGray font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-lightGray/60 hover:text-gold transition-colors">Pre-Production</a></li>
              <li><a href="#" className="text-lightGray/60 hover:text-gold transition-colors">Production</a></li>
              <li><a href="#" className="text-lightGray/60 hover:text-gold transition-colors">Post-Production</a></li>
              <li><a href="#" className="text-lightGray/60 hover:text-gold transition-colors">Consulting</a></li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lightGray font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                     target="_blank"
                    aria-label={social.label}
                    className="p-3 bg-gold/10 border border-gold/30 rounded-lg hover:bg-gold/20 hover:border-gold transition-all duration-300"
                  >
                    <Icon className="text-gold text-lg" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-lightGray/60 text-sm text-center md:text-left">
              © 2026 Raas Media & Entertainment. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-lightGray/60 hover:text-gold text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-lightGray/60 hover:text-gold text-sm transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
