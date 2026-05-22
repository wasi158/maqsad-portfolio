/** Extra space below the fixed navbar when scrolling to a section */
export const SCROLL_GAP = 20;

export function getHeaderHeight(): number {
  if (typeof document === "undefined") return 64;
  const header = document.querySelector("header");
  return header?.offsetHeight ?? 64;
}

export function getScrollOffset(extra = 0): number {
  return getHeaderHeight() + SCROLL_GAP + extra;
}

export function getMaxScrollTop(): number {
  if (typeof document === "undefined") return 0;
  const root = document.documentElement;
  return Math.max(0, root.scrollHeight - window.innerHeight);
}

/**
 * Scroll so the target's top sits just below the fixed navbar with consistent gap.
 */
export function scrollToElement(
  target: HTMLElement | string | null | undefined,
  options?: { extraOffset?: number; behavior?: ScrollBehavior },
): void {
  const el =
    typeof target === "string"
      ? document.getElementById(target.replace(/^#/, ""))
      : target ?? null;

  if (!el) return;

  const offset = getScrollOffset(options?.extraOffset ?? 0);
  const top = el.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: Math.max(0, top),
    behavior: options?.behavior ?? "smooth",
  });
}

/** Scroll to the true bottom of the page (footer fully visible) */
export function scrollToPageEnd(behavior: ScrollBehavior = "smooth"): void {
  const maxTop = getMaxScrollTop();

  window.scrollTo({ top: maxTop, behavior });

  // After smooth scroll ends, correct any layout shift / sub-pixel drift
  if (behavior === "smooth") {
    window.setTimeout(() => {
      window.scrollTo({ top: getMaxScrollTop(), behavior: "auto" });
    }, 450);
  }
}

export function scrollToPageTop(): void {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function isNearPageBottom(thresholdPx = 48): boolean {
  if (typeof window === "undefined") return false;
  return window.scrollY + window.innerHeight >= getMaxScrollTop() - thresholdPx;
}

/** Mobile demo: account for sticky bar inside the detail panel */
export function getShowcaseDetailExtraOffset(): number {
  if (typeof window === "undefined" || window.innerWidth >= 1024) return 0;
  const sticky = document.querySelector(
    "#showcase-detail [class*='sticky']",
  ) as HTMLElement | null;
  return sticky?.offsetHeight ?? 0;
}
