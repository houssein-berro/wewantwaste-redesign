import React from "react";

export default function SkipGridSkeleton() {
  const placeholders = Array.from({ length: 6 });

  return (
    <ul
      role="list"
      className="max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-40"
    >
      {placeholders.map((_, idx) => (
        <li key={idx}>
          <div className="animate-pulse relative z-10 flex flex-col justify-between bg-gray-50 rounded-2xl border border-gray-300 overflow-hidden shadow-sm">
            {/* IMAGE SKELETON */}
            <div className="relative h-40 sm:h-48 lg:h-56 bg-gray-300" />

            {/* BODY SKELETON */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                {/* Title placeholder */}
                <div className="h-6 bg-gray-300 rounded w-1/2" />
                {/* Subtitle placeholder */}
                <div className="h-4 bg-gray-300 rounded w-3/4 mt-2" />
              </div>

              <div className="mt-6 space-y-4">
                {/* Price placeholder */}
                <div className="h-6 bg-gray-300 rounded w-1/4" />
                {/* Button placeholder */}
                <div className="h-10 bg-gray-300 rounded w-full" />
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
