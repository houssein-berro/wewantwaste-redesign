import {
  MapPinIcon,
  TrashIcon,
  TruckIcon,
  ShieldCheckIcon,
  CalendarIcon,
  CreditCardIcon,
} from "@heroicons/react/24/solid";


export type StepKey =
  | "Postcode"
  | "Waste Type"
  | "Select Skip"
  | "Permit Check"
  | "Choose Date"
  | "Payment";


export interface Step {
  key: StepKey;
  label: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement> & { title?: string; titleId?: string }>;
}

export const ALL_STEPS: Step[] = [
  { key: "Postcode",     label: "Postcode",     Icon: MapPinIcon },
  { key: "Waste Type",   label: "Waste Type",   Icon: TrashIcon },
  { key: "Select Skip",  label: "Select Skip",  Icon: TruckIcon },
  { key: "Permit Check", label: "Permit Check", Icon: ShieldCheckIcon },
  { key: "Choose Date",  label: "Choose Date",  Icon: CalendarIcon },
  { key: "Payment",      label: "Payment",      Icon: CreditCardIcon },
];
