/**
 * Skip interface: matches each object returned by the API
 */
export interface Skip {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
  
}

/**
 * Shape of the slice’s state object
 */
export interface SkipsState {
  skips: Skip[];
  loading: boolean;
  error: string | null;
}

/**
 * The initial state for the slice
 */
export const initialSkipsState: SkipsState = {
  skips: [],
  loading: false,
  error: null,
};


/**
 * API for fetching skips
 */
export const SKIPS_API_URL = "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft";

/**
 * Base URL for skip‐size images in Supabase Storage.
 */
export const SKIP_IMAGE_BASE_URL =
  "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes";

/**
 * Local storage key
 */
export const LOCAL_STORAGE_KEY = "skips";
