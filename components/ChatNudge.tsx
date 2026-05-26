'use client';

import { useState, useEffect } from 'react';

export default function ChatNudge() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('chat-nudge-dismissed')) return;
    setMounted(true);
    const timer = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    setVisible(false);
    setTimeout(() => setMounted(false), 300);
    localStorage.setItem('chat-nudge-dismissed', '1');
  }

  if (!mounted) return null;

  return (
    <div
      className={`fixed bottom-24 right-5 z-50 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
      }`}
    >
      <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3 max-w-[210px]">
        <button
          onClick={dismiss}
          className="absolute -top-2 -right-2 w-5 h-5 bg-gray-400 hover:bg-gray-500 text-white rounded-full flex items-center justify-center text-xs leading-none transition-colors"
          aria-label="Dismiss"
        >
          ×
        </button>
        <div className="flex items-start gap-2">
          <svg className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <p className="text-sm font-semibold text-brand-navy leading-snug">
            Have a question? Ask me anything!
          </p>
        </div>
        {/* Tail pointing down toward the chat widget */}
        <div
          className="absolute -bottom-2 right-7"
          style={{
            width: 0,
            height: 0,
            borderLeft: '8px solid transparent',
            borderRight: '8px solid transparent',
            borderTop: '8px solid white',
          }}
        />
      </div>
    </div>
  );
}
