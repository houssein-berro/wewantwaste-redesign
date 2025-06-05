import React from "react";
import type { Skip } from "../../constants/skips";

interface SkipFooterProps {
  selectedSkip: Skip;
  onNext: (skip: Skip) => void;
  onChangeSelection: () => void;
}

export default function SkipFooter({
  selectedSkip,
  onNext,
  onChangeSelection,
}: SkipFooterProps) {
  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onNext(selectedSkip);
  };

  const handleChange = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
    onChangeSelection();
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="fixed bottom-0 left-0 right-0 bg-neutral-50 border-t border-neutral-300 shadow-xl z-50"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="text-base font-bold text-neutral-700">
            You’ve selected: {selectedSkip.size} Yard Skip ({selectedSkip.hire_period_days}-day hire)
          </div>
          <div className="text-base font-bold text-neutral-900">
            £{selectedSkip.price_before_vat}{" "}
            <span className="text-sm font-medium uppercase text-neutral-500">+ VAT</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <a
            onClick={handleChange}
            className="text-base font-bold text-accent hover:underline cursor-pointer"
          >
            Change Selection
          </a>
          <button
            onClick={handleNext}
            className="
              px-6 py-3 bg-primary hover:bg-primary-dark text-white font-bold
              text-base rounded-lg transition-colors duration-150
            "
          >
            Next: Choose Date
          </button>
          
        </div>
        
      </div>
    </div>
  );
}
