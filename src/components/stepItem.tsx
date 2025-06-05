import React from "react";

export type StepStatus = "completed" | "active" | "upcoming";

interface Props {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement> & { title?: string; titleId?: string }>;
  label: string;
  status: StepStatus;
}

export default function StepItem({ Icon, label, status }: Props) {
  const circleBg =
    status === "completed"
      ? "bg-primary"
      : status === "active"
      ? "bg-primary-light"
      : "bg-neutral-300";

  const iconColor = status === "upcoming" ? "text-neutral-500" : "text-surface";

  const textColor =
    status === "completed"
      ? "text-primary"
      : status === "active"
      ? "text-primary-dark font-semibold"
      : "text-neutral-500";

  return (
    <div className="flex flex-col items-center space-y-1">
      <div
        title={label}
        tabIndex={0}
        className={`
          ${circleBg}
          p-1 sm:p-2
          rounded-full flex items-center justify-center
          transition-transform duration-200
          ${
            status === "active"
              ? "scale-105 sm:scale-110"
              : "hover:scale-105 sm:hover:scale-110 focus:scale-105 sm:focus:scale-110"
          }
          focus:outline-none focus:ring-2 focus:ring-primary-light
        `}
      >
        <Icon className={`h-4 w-4 sm:h-5 sm:w-5 ${iconColor}`} />
      </div>
      <span className={`text-[10px] sm:text-xs ${textColor}`}>{label}</span>
    </div>
  );
}
