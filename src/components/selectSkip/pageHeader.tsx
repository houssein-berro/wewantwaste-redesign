import React from "react";
import { responsiveFontStyle } from "../../utils/textUtils";

interface Props {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: Props) {
  return (
    <header className="max-w-4xl mx-auto px-4 text-left sm:text-center">
      <h1
      
        style={responsiveFontStyle(24, 48)}
        className="font-semibold text-primary-dark"
      >
        {title}
      </h1>
      {subtitle && (
        <p
            style={responsiveFontStyle(16, 24)}
          className="mt-1 sm:mt-2 text-neutral-700"
        >
          {subtitle}
        </p>
      )}
    </header>
  );
}
