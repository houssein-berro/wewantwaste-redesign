import React from "react";

interface Props {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: Props) {
  return (
    <header className="max-w-4xl mx-auto px-4 text-left sm:text-center">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary-dark">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-1 sm:mt-2 text-sm sm:text-base md:text-lg text-neutral-700">
          {subtitle}
        </p>
      )}
    </header>
  );
}
