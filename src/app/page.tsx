'use client';

import { useState, useEffect } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="text-lg sm:text-base bg-white dark:bg-gray-900 dark:text-white transition-all">
      {/* ヘッダー */}
      <header className="mb-10 w-full flex justify-between items-center p-12 sm:p-8">
        <div>
          <p className="font-bold">Kyo Yamasaki</p>
        </div>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md transition-all"
        >
          {isDarkMode ? "🌙" : "☀️"}
        </button>
      </header>

      {/* メインコンテンツ */}
      <div className="grid justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-6 sm:pb-16 font-[family-name:var(--font-geist-sans)]">
        <main>
          <div>
            <section id="hero" className="mb-20 sm:mb-16">
              <h1 className="text-6xl font-bold pb-5 sm:text-4xl sm:pb-3">👋 Hi, I'm Kyo Yamasaki.</h1>
              <p className="text-lg sm:text-base">
                I am a software engineer based in Tokyo, and I enjoy creating products.
              </p>
            </section>


            <hr className="border-t-2 border-gray-400 dark:border-gray-600 w-full mb-8 sm:mb-6" />

            <section id="project" className="mb-16 flex gap-4 sm:mb-12 sm:gap-2">
              <div>
                <a
                  href="https://vexapp.cloud/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl transition-transform duration-300 hover:scale-105 hover:text-purple-500 sm:text-xl"
                >
                  Vex
                </a>
                <p className="mt-10 sm:mt-6">Drawing local event information to map.</p>
                <a
                  href="https://github.com/ovrsa/vex"
                  target="_blank"
                  className="mt-2 inline-block text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  README
                </a>
              </div>
            </section>

            <hr className="border-t-2 border-gray-100 dark:border-gray-800 w-full mb-8 sm:mb-6" />
            <section id="project" className="mb-16 flex gap-4 sm:mb-12 sm:gap-2">
              <div>
                <a
                  href="https://vexapp.cloud/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl transition-transform duration-300 hover:scale-105 hover:text-purple-500 sm:text-xl"
                >
                  Bun
                </a>
                <p className="mt-10 sm:mt-6">Retrieves company info, stock prices, and financial data based on tickers.</p>
                <a
                  href="https://github.com/ovrsa/bun"
                  target="_blank"
                  className="mt-2 inline-block text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  README
                </a>
              </div>
            </section>

            <hr className="border-t-2 border-gray-100 dark:border-gray-800 w-full mb-8 sm:mb-6" />
            <section id="project" className="mb-16 flex gap-4 sm:mb-12 sm:gap-2">
              <div>
                <p
                  className="text-3xl sm:text-xl"
                >
                  Snake Game
                </p>
                <p className="mt-10 sm:mt-6">Snake Game.</p>
                <a
                  href="https://github.com/ovrsa/snake-game"
                  target="_blank"
                  className="mt-2 inline-block text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  README
                </a>
              </div>
            </section>

          </div>
        </main>
      </div>

      {/* フッター */}
      <div className="justify-items-center bg-gray-200 dark:bg-gray-800">
        <footer className="py-10 sm:py-6">
          <p>© 2024 Kyo Yamasaki</p>
        </footer>
      </div>
    </div>
  );
}