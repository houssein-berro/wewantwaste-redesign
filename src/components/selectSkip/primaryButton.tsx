import React from "react";

interface PrimaryButtonProps {
  isSelected: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

export default function PrimaryButton({
  isSelected,
  onClick,
  disabled = false,
}: PrimaryButtonProps) {
  const label = isSelected ? "Selected" : "Select This Skip →";

  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`
        mt-4 w-full px-4 py-2 rounded-lg 
        text-white font-semibold text-sm sm:text-base
        transition-colors duration-200 ease-in-out
        ${
          isSelected
            ? "bg-primary-dark cursor-default"
            : "bg-primary hover:bg-primary-light"
        }
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      {label}
    </button>
  );
}
