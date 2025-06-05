import React from "react";
import SkipCard from "./skipCard";
import type { Skip } from "../../constants/skips";

interface SkipGridProps {
  skips: Skip[];
  selectedSkipId: number | null;
  onCardClick: (id: number) => void;
}

export default function SkipGrid({
  skips,
  selectedSkipId,
  onCardClick,
}: SkipGridProps) {
  return (
    <ul
      className="max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-40"
    >
      {skips.map((skip) => (
        <li key={skip.id}>
          <SkipCard
            skip={skip}
            isSelected={skip.id === selectedSkipId}
            onClick={onCardClick}
          />
        </li>
      ))}
    </ul>
  );
}
