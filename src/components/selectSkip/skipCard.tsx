import React, { useState } from "react";
import { CheckCircleIcon, ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { SKIP_IMAGE_BASE_URL, type Skip } from "../../constants/skips";
import PrimaryButton from "./primaryButton";

interface SkipCardProps {
  skip: Skip;
  isSelected: boolean;
  onClick: (id: number) => void;
}

export default function SkipCard({ skip, isSelected, onClick }: SkipCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageUrl = `${SKIP_IMAGE_BASE_URL}/${skip.size}-yarder-skip.jpg`;

  return (
    <div
      onClick={() => onClick(skip.id)}
      className={`
        relative z-10
        flex flex-col justify-between 
        bg-surface rounded-2xl border
        overflow-hidden shadow-sm
        transition-all duration-200 ease-in-out
        ${isSelected 
          ? "border-primary shadow-lg scale-105"
          : "border-neutral-300 hover:shadow-md hover:-translate-y-1"
        }
        cursor-pointer
      `}
    >
      {/* IMAGE CONTAINER */}
      <div className="relative h-40 sm:h-48 lg:h-56 bg-gray-100">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-300 animate-pulse" />
        )}

        <img
          src={imageUrl}
          alt={`${skip.size} Yard Skip`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`
            absolute inset-0 w-full h-full object-cover
            transition-opacity duration-300 ease-in-out
            ${imageLoaded ? "opacity-100" : "opacity-0"}
          `}
        />

        {/* Yard-size badge in top right */}
        <div className="absolute top-2 right-2 bg-primary text-white text-xs font-medium px-2 py-1 rounded-full shadow">
          {skip.size} Yards
        </div>

        {!skip.allowed_on_road && (
          <div className="absolute bottom-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-lg flex items-center space-x-1">
            <ExclamationTriangleIcon className="h-4 w-4" />
            <span>Not Allowed on Road</span>
          </div>
        )}
      </div>

      {/* BODY: Title, Description, Price, Button */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Title + heavy-waste icon */}
          <div className="flex items-center space-x-2">
            <h2 className="text-lg sm:text-xl font-semibold text-neutral-900">
              {skip.size} Yard Skip
            </h2>
            {skip.allows_heavy_waste && (
              <CheckCircleIcon className="h-5 w-5 text-accent" title="Allows heavy waste" />
            )}
          </div>
          <p className="mt-1 text-sm text-neutral-700">
            {skip.hire_period_days}-day hire period
          </p>
        </div>

        {/* Price + Button */}
        <div className="mt-6">
          <div className="flex items-baseline justify-between">
            <span className="text-2xl sm:text-3xl font-bold text-primary">
              £{skip.price_before_vat}
            </span>
            <span className="text-xs font-medium uppercase text-neutral-500">
              +VAT
            </span>
          </div>

          <PrimaryButton
            isSelected={isSelected}
            onClick={(e) => {
              e.stopPropagation();
              onClick(skip.id);
            }}
            disabled={false}
          />
        </div>
      </div>
    </div>
  );
}
