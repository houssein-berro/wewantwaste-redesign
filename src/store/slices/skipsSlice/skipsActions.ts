import axios from "axios";
import {
  fetchSkipsStart,
  fetchSkipsSuccess,
  fetchSkipsFailure,
} from "./skipsSlice";
import type { Skip } from "../../../constants/skips";
import { SKIPS_API_URL, LOCAL_STORAGE_KEY } from "../../../constants/skips";
import type { AppDispatch } from "../../store";
import { timeoutPromise } from "../../../utils/timeoutPromise";

export async function loadSkips(dispatch: AppDispatch) {
  let cachedData: Skip[] | null = null;

  const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (stored) {
    try {
      cachedData = JSON.parse(stored) as Skip[];
      dispatch(fetchSkipsSuccess(cachedData));
    } catch {
      cachedData = null;
    }
  }

  if (!cachedData) {
    dispatch(fetchSkipsStart());
  }

  try {
    const response = (await Promise.race([
      axios.get<Skip[]>(SKIPS_API_URL),
      timeoutPromise,
    ])) as { data: Skip[] };
    const apiData = response.data;

    const jsonApi = JSON.stringify(apiData);
    const jsonCached = cachedData ? JSON.stringify(cachedData) : null;

    if (jsonApi !== jsonCached) {
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, jsonApi);
      } catch {}
      dispatch(fetchSkipsSuccess(apiData));
    }
  } catch (err: any) {
    if (!cachedData) {
      let message = "Unknown error";
      if (axios.isAxiosError(err)) {
        message = err.response?.data
          ? JSON.stringify(err.response.data)
          : err.message;
      } else if (err instanceof Error) {
        message = err.message;
      }
      dispatch(fetchSkipsFailure(message));
    }
  }
}
