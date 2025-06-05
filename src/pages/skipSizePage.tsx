import React, { useEffect, useState } from "react";
import StepProgressBar from "../components/selectSkip/stepProgressBar";
import PageHeader from "../components/selectSkip/pageHeader";
import SkipGrid from "../components/selectSkip/skipGrid";
import SkipFooter from "../components/selectSkip/skipFooter";

import { loadSkips } from "../store/slices/skipsSlice/skipsActions";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import type { Skip } from "../constants/skips";

export default function SkipSizePage() {
  const dispatch = useAppDispatch();
  const { skips, loading, error } = useAppSelector((state) => state.skips);

  const [selectedSkipId, setSelectedSkipId] = useState<number | null>(null);

  useEffect(() => {
    loadSkips(dispatch);
  }, [dispatch]);

  const handleCardClick = (skipId: number) => {
    setSelectedSkipId((prev) => (prev === skipId ? null : skipId));
  };

  const selectedSkip: Skip | null = 
    selectedSkipId !== null 
      ? skips.find((s) => s.id === selectedSkipId) ?? null
      : null;

  const handleNext = (skip: Skip) => {
    // e.g. navigate(`/choose-date/${skip.id}`)
    console.log("Next →", skip);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="px-4 pt-6">
        <StepProgressBar currentStepKey="Select Skip" />
      </div>

      <div className="px-4 mt-4">
        <PageHeader
          title="Choose Your Skip Size"
          subtitle="Select the skip size that best suits your needs"
        />
      </div>

      <div className="max-w-4xl mx-auto w-full border-b border-neutral-300 mt-6 mb-6" />

      <div className="px-4 flex-1 ">
        {loading && (
          <p className="text-center text-neutral-500 mb-4">
            Loading skip sizes…
          </p>
        )}
        {error && (
          <p className="text-center text-red-500 mb-4">Error: {error}</p>
        )}

        {!loading && !error && (
          <SkipGrid
            skips={skips}
            selectedSkipId={selectedSkipId}
            onCardClick={handleCardClick}
          />
        )}
      </div>

      {selectedSkip && (
        <SkipFooter
          selectedSkip={selectedSkip}
          onNext={handleNext}
          onChangeSelection={() => setSelectedSkipId(null)}
        />
      )}
    </div>
  );
}
