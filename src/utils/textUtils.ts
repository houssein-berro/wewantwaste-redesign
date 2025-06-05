// src/utils/textUtils.ts

/**
 * Returns a CSS `clamp()` expression string that
 * scales font-size between `minSize` and `maxSize`
 * based on the viewport width.
 *
 * @param minSizePx - Minimum font size in pixels (e.g. 16)
 * @param maxSizePx - Maximum font size in pixels (e.g. 48)
 * @param preferredVw - The “preferred” viewport‐width unit (e.g. 5 for 5vw). 
 *                       Defaults to 5 (i.e. `5vw`).
 * @returns A CSS clamp() string, e.g. "clamp(16px, 5vw, 48px)"
 */
export function clampFontSize(
  minSizePx: number,
  maxSizePx: number,
  preferredVw: number = 5
): string {
  return `clamp(${minSizePx}px, ${preferredVw}vw, ${maxSizePx}px)`;
}

/**
 * If you prefer obtaining a React‐style object to spread:
 *
 * @param minSizePx - Minimum font size in pixels
 * @param maxSizePx - Maximum font size in pixels
 * @param preferredVw - The “preferred” viewport‐width unit (defaults to 5vw)
 * @returns An object suitable for a React `style` prop:
 *          { fontSize: "clamp(16px, 5vw, 48px)" }
 */
export function responsiveFontStyle(
  minSizePx: number,
  maxSizePx: number,
  preferredVw: number = 5
): React.CSSProperties {
  return {
    fontSize: clampFontSize(minSizePx, maxSizePx, preferredVw),
  };
}
