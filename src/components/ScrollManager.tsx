"use client";

import { useEffect } from "react";
import { scrollToElement } from "@/lib/scroll";

/**
 * Intercepts in-page anchor clicks for precise scroll positioning below the navbar.
 */
export function ScrollManager() {
  useEffect(() => {
    const scrollFromHash = () => {
      const hash = window.location.hash;
      if (!hash || hash === "#") return;
      const target = document.getElementById(hash.slice(1));
      if (target) {
        requestAnimationFrame(() => scrollToElement(target));
      }
    };

    scrollFromHash();
    window.addEventListener("hashchange", scrollFromHash);

    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      if (!link) return;

      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;

      const id = hash.slice(1);
      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();
      scrollToElement(target);
    };

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("hashchange", scrollFromHash);
    };
  }, []);

  return null;
}
