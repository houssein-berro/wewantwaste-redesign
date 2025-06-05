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
          ${circleBg} p-2 rounded-full flex items-center justify-center
          transition-transform duration-200
          ${status === "active" ? "scale-110" : "hover:scale-110 focus:scale-110"}
          focus:outline-none focus:ring-2 focus:ring-primary-light
        `}
      >
        <Icon className={`h-5 w-5 ${iconColor}`} />
      </div>
      <span className={`text-xs ${textColor}`}>{label}</span>
    </div>
  );
}
