'use client';

import { motion } from 'framer-motion';
import { FiGrid, FiFilm, FiImage } from 'react-icons/fi';

interface AdminSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function AdminSidebar({ activeTab, setActiveTab }: AdminSidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: FiGrid },
    { id: 'projects', label: 'Projects', icon: FiFilm },
    { id: 'gallery', label: 'Gallery', icon: FiImage },
  ];

  return (
    <div className="w-64 bg-dark border-r border-gold/20 p-6">
      {/* Logo */}
      <div className="flex items-start gap-3 mb-12">
        <div className="w-12 h-12 shrink-0 rounded-lg overflow-hidden bg-darkGray flex items-center justify-center border border-gold/20">
          <img
            src="/images/logo.jpeg"
            alt=""
            className="max-w-full max-h-full w-auto h-auto object-contain p-0.5"
            width={48}
            height={48}
          />
        </div>
        <div className="min-w-0 pt-0.5">
          <p className="text-gold font-bold text-sm leading-snug">Raas Media</p>
          <p className="text-lightGray/60 text-xs">Admin Panel</p>
        </div>
      </div>

      {/* Menu */}
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <motion.button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              whileHover={{ x: 4 }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-gold text-dark'
                  : 'text-lightGray hover:bg-darkGray'
              }`}
            >
              <Icon className="text-lg" />
              <span className="font-semibold">{item.label}</span>
            </motion.button>
          );
        })}
      </nav>
    </div>
  );
}
