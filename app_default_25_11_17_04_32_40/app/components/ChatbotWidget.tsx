"use client";

import { useState } from "react";
import { HiChat, HiX } from "react-icons/hi";

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        aria-label="Toggle chatbot"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 bg-brandBlue text-white rounded-full p-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-brandBlue flex items-center justify-center"
      >
        <HiChat size={24} />
      </button>

      {open && (
        <aside
          aria-label="Chatbot window"
          className="fixed bottom-20 right-6 w-80 max-w-full bg-brandBg text-brandText rounded-lg shadow-lg flex flex-col"
          role="region"
        >
          <header className="flex justify-between items-center p-3 border-b border-gray-300">
            <h2 className="font-heading font-semibold text-lg">
              Chatbot
            </h2>
            <button
              aria-label="Close chatbot"
              onClick={() => setOpen(false)}
              className="text-brandBlue hover:text-brandBlueDark focus:outline-none focus:ring-2 focus:ring-brandBlue rounded"
            >
              <HiX size={24} />
            </button>
          </header>
          <div className="p-4 flex-grow text-center text-brandText font-body text-base select-none">
            Chatbot coming soon
          </div>
        </aside>
      )}
    </>
  );
}
