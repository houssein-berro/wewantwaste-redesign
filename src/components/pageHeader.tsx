import React from "react";

interface Props {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: Props) {
  return (
    <header className="max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-semibold text-primary-dark">{title}</h1>
      {subtitle && <p className="mt-2 text-neutral-700">{subtitle}</p>}
    </header>
  );
}
