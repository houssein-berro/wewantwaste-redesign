export const TIMEOUT_MS = 15000;
export const timeoutPromise = new Promise<never>((_, reject) => {
  const id = setTimeout(() => {
    clearTimeout(id);
    reject(new Error("Request timed out after 15 seconds"));
  }, TIMEOUT_MS);
});
