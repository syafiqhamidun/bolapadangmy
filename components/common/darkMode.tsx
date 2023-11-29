"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function DarkMode() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div>
      <div>
        <h1 className="text-xl font-bold text-center">
          {currentTheme === 'dark' ? 'Dark' : 'Light'}{' '}
          <span className="text-purple-600">Mode</span>
        </h1>
        <div className="flex justify-center">
          {currentTheme === 'dark' ? (
            <button
              className="bg-black-700 hover:bg-black w-16 rounded-md border-purple-400"
              onClick={() => setTheme('light')}
            >
              {' '}
              <Image src="/sun.svg" alt="logo" height={20} width={20} />
            </button>
          ) : (
            <button
              className="bg-gray-100 w-28 rounded-md border-purple-400 hover:bg-gray-300"
              onClick={() => setTheme('dark')}
            >
              <Image src="/moon.svg" alt="logo" height={20} width={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}