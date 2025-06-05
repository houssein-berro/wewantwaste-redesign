import React from "react";
import StepProgressBar from "../components/stepProgressBar";
import PageHeader from "../components/pageHeader";

export default function SkipSizePage() {

  return (
    <div className="min-h-screen bg-background px-4 py-8">
      <StepProgressBar currentStepKey="Select Skip" />
      <PageHeader
        title="Choose Your Skip Size"
        subtitle="Select the skip size that best suits your needs"
      />
    
    </div>
  );
}
