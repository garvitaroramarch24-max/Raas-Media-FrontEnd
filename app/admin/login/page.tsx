'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import axios from 'axios';
import { apiUrl } from '@/lib/api';

export default function LoginPage() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await axios.post(apiUrl('/api/admin/login'), credentials);
      if (response.data.token) {
        localStorage.setItem('adminToken', response.data.token);
        router.push('/admin');
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-dark flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        {/* Card */}
        <div className="bg-dark border border-gold/30 rounded-lg p-8 shadow-2xl shadow-gold/10">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              src="/images/logo.jpeg"
              alt="Raas Media & Entertainment"
              className="h-20 w-auto max-w-[260px] object-contain mx-auto"
              width={260}
              height={80}
            />
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-center text-lightGray mb-2">
            Admin Login
          </h1>
          <p className="text-center text-lightGray/60 mb-8">
            Access the Raas Media Admin Panel
          </p>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500 text-red-400 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username */}
            <div>
              <label className="block text-lightGray font-semibold mb-2">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-darkGray border border-gold/30 rounded-lg text-lightGray focus:outline-none focus:border-gold transition-colors"
                placeholder="Enter username"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-lightGray font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-darkGray border border-gold/30 rounded-lg text-lightGray focus:outline-none focus:border-gold transition-colors"
                placeholder="Enter password"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-3 bg-gradient-gold text-dark font-bold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all duration-300 disabled:opacity-50"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-8 p-4 bg-gold/10 border border-gold/20 rounded-lg">
            <p className="text-gold text-sm font-semibold mb-2">Demo Credentials:</p>
            <p className="text-lightGray/70 text-xs">Username: admin</p>
            <p className="text-lightGray/70 text-xs">Password: admin123</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
