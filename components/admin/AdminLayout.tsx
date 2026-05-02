'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from './AdminSidebar';
import AdminDashboard from './AdminDashboard';
import ProjectsManager from './ProjectsManager';
import GalleryManager from './GalleryManager';
import { FiLogOut } from 'react-icons/fi';

export default function AdminLayout() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gradient-dark flex">
      {/* Sidebar */}
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="h-20 bg-dark border-b border-gold/20 flex items-center justify-between px-8">
          <h1 className="text-2xl font-bold text-gold">
            {activeTab === 'dashboard'
              ? 'Dashboard'
              : activeTab === 'projects'
                ? 'Projects Manager'
                : activeTab === 'gallery'
                  ? 'Gallery'
                  : 'Admin'}
          </h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
          >
            <FiLogOut /> Logout
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-8">
          {activeTab === 'dashboard' && <AdminDashboard />}
          {activeTab === 'projects' && <ProjectsManager />}
          {activeTab === 'gallery' && <GalleryManager />}
        </div>
      </div>
    </div>
  );
}
