import React, { useEffect, useState } from "react";
import StepProgressBar from "../components/selectSkip/stepProgressBar";
import PageHeader from "../components/selectSkip/pageHeader";
import SkipGrid from "../components/selectSkip/skipGrid";
import SkipGridSkeleton from "../components/selectSkip/skipGridSkeleton";
import SkipFooter from "../components/selectSkip/skipFooter";

import { loadSkips } from "../store/slices/skipsSlice/skipsActions";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import type { Skip } from "../constants/skips";

export default function SkipSizePage() {
  const dispatch = useAppDispatch();
  const { skips, loading, error } = useAppSelector((state) => state.skips);

  const [selectedSkipId, setSelectedSkipId] = useState<number | null>(null);

  const [filterRoadAllowed, setFilterRoadAllowed] = useState(false);
  const [filterHeavyWaste, setFilterHeavyWaste] = useState(false);

  useEffect(() => {
    loadSkips(dispatch);
  }, [dispatch]);

  const handleCardClick = (skipId: number) => {
    setSelectedSkipId((prev) => (prev === skipId ? null : skipId));
  };

  const selectedSkip: Skip | null =
    selectedSkipId !== null ? skips.find((s) => s.id === selectedSkipId) ?? null : null;

  const handleNext = (skip: Skip) => {
    // e.g. navigate(`/choose-date/${skip.id}`)
    console.log("Next →", skip);
  };
    const handleBack = (skip: Skip) => {
    // e.g. navigate.goBack()
    console.log("back");
  };

  const filteredSkips = skips.filter((skip) => {
    if (filterRoadAllowed && !skip.allowed_on_road) return false;
    if (filterHeavyWaste && !skip.allows_heavy_waste) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* STEP INDICATOR */}
      <div className="px-4 pt-6">
        <StepProgressBar currentStepKey="Select Skip" />
      </div>

      {/* PAGE HEADER */}
      <div className="px-4 mt-4">
        <PageHeader
          title="Choose Your Skip Size"
          subtitle="Select the skip size that best suits your needs"
        />
      </div>

      {/* DIVIDER UNDER HEADER */}
      <div className="max-w-4xl mx-auto w-full border-b border-neutral-300 mt-6 mb-6" />

      {/* FILTER CONTROLS (PILL‐STYLE) */}
      <div className="max-w-6xl mx-auto px-4 mb-4">
        <div className="flex flex-wrap gap-3">
          {/* Road-legal toggle */}
          <button
            onClick={() => {
              setFilterRoadAllowed((prev) => !prev);
              setSelectedSkipId(null);
            }}
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition
              ${
                filterRoadAllowed
                  ? "bg-primary text-white border-transparent"
                  : "bg-white text-neutral-700 border border-neutral-300 hover:border-neutral-400"
              }
            `}
          >
            Road-legal only
          </button>

          {/* Heavy-waste toggle */}
          <button
            onClick={() => {
              setFilterHeavyWaste((prev) => !prev);
              setSelectedSkipId(null);
            }}
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition
              ${
                filterHeavyWaste
                  ? "bg-primary text-white border-transparent"
                  : "bg-white text-neutral-700 border border-neutral-300 hover:border-neutral-400"
              }
            `}
          >
            Heavy-waste allowed
          </button>

          {/* Clear both filters */}
          {(filterRoadAllowed || filterHeavyWaste) && (
            <button
              onClick={() => {
                setFilterRoadAllowed(false);
                setFilterHeavyWaste(false);
                setSelectedSkipId(null);
              }}
              className="
                px-4 py-2 rounded-full text-sm font-medium text-accent
                bg-neutral-100 hover:bg-neutral-200 transition
              "
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="px-4 flex-1">
        {/* Show error with Retry */}
        {error && (
          <div className="text-center py-8">
            <p className="text-red-500 mb-4">Error: {error}</p>
            <button
              onClick={() => loadSkips(dispatch)}
              className="px-4 py-2 bg-primary text-white rounded"
            >
              Retry
            </button>
          </div>
        )}

        {/* Show loading skeleton while fetching */}
        {loading && <SkipGridSkeleton />}

        {/* Show “No results” when filters yield nothing */}
        {!loading && !error && filteredSkips.length === 0 && skips.length > 0 && (
          <div className="text-center text-neutral-500 py-12">
            No skip sizes match your filters.
          </div>
        )}

        {/* Render filtered grid once data is loaded */}
        {!loading && !error && filteredSkips.length > 0 && (
          <SkipGrid
            skips={filteredSkips}
            selectedSkipId={selectedSkipId}
            onCardClick={handleCardClick}
          />
        )}
      </div>

      {/* STICKY FOOTER (only shown when a skip is selected) */}
      {selectedSkip && (
        <SkipFooter
          selectedSkip={selectedSkip}
          onNext={handleNext}
          onBack={()=>handleBack}
        />
      )}
    </div>
  );
}
