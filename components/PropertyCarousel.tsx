'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const properties = [
  { src: '/images/properties/property-5.jpg', alt: 'Two-story home managed by Property Management Consultants in North Alabama' },
  { src: '/images/properties/property-2.jpg', alt: 'Craftsman bungalow managed by Property Management Consultants' },
  { src: '/images/properties/property-4.webp', alt: 'Brick home managed by Property Management Consultants in North Alabama' },
  { src: '/images/properties/property-1.jpg', alt: 'Ranch home managed by Property Management Consultants' },
  { src: '/images/properties/property-8.jpg', alt: 'Home managed by Property Management Consultants in North Alabama' },
  { src: '/images/properties/property-7.jpg', alt: 'Brick home managed by Property Management Consultants in North Alabama' },
];

export default function PropertyCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % properties.length);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + properties.length) % properties.length);

  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl text-brand-navy mb-3">Properties We Manage</h2>
          <p className="text-gray-500 text-lg">140+ units across North Alabama.</p>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[16/9] bg-gray-100">
          {properties.map((p, i) => (
            <div
              key={p.src}
              className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1024px"
                priority={i === 0}
              />
            </div>
          ))}

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow transition-colors"
            aria-label="Previous property"
          >
            <svg className="w-5 h-5 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow transition-colors"
            aria-label="Next property"
          >
            <svg className="w-5 h-5 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {properties.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? 'bg-white' : 'bg-white/50'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
