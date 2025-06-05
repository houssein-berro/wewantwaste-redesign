import React from "react";
import type { Skip } from "../../constants/skips";

interface SkipFooterProps {
  selectedSkip: Skip;
  onNext: (skip: Skip) => void;
}

export default function SkipFooter({
  selectedSkip,
  onNext,
}: SkipFooterProps) {
  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onNext(selectedSkip);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-neutral-50 border-t border-neutral-300 shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 py-4">
        <div className="flex items-baseline space-x-2 mb-2 sm:mb-0">
          <span className="text-sm sm:text-base font-medium text-neutral-700">
            {selectedSkip.size} Yard Skip
          </span>
          <span className="text-sm sm:text-base text-neutral-700">/</span>
          <span className="text-sm sm:text-base text-neutral-700">
            {selectedSkip.hire_period_days}-day hire
          </span>
          <span className="text-sm sm:text-base text-neutral-700">/</span>
          <div className="flex items-baseline space-x-1">
            <span className="text-sm sm:text-base font-medium text-neutral-900">
              £{selectedSkip.price_before_vat}
            </span>
            <span className="text-xs sm:text-sm font-normal text-neutral-500">
              + VAT
            </span>
          </div>
        </div>

        <button
          onClick={handleNext}
          className="
            w-full sm:w-auto bg-primary text-white font-semibold
            px-4 py-2 text-sm sm:text-base rounded-md hover:bg-primary-dark
            transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-primary
          "
        >
          Continue
        </button>
      </div>
    </div>
  );
}
