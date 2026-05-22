"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronsDown, ChevronsUp } from "lucide-react";
import {
  isNearPageBottom,
  scrollToPageEnd,
  scrollToPageTop,
} from "@/lib/scroll";

const TOP_HIDE_THRESHOLD = 16;
const NEAR_BOTTOM_THRESHOLD = 48;

export function ScrollToBottomButton() {
  const [atTop, setAtTop] = useState(true);
  const [nearBottom, setNearBottom] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setAtTop(y <= TOP_HIDE_THRESHOLD);
      setNearBottom(isNearPageBottom(NEAR_BOTTOM_THRESHOLD));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollToBottom = useCallback(() => {
    scrollToPageEnd("smooth");
  }, []);

  const scrollToTop = useCallback(() => {
    scrollToPageTop();
  }, []);

  const goDown = !nearBottom;
  const Icon = goDown ? ChevronsDown : ChevronsUp;
  const visible = !atTop;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={goDown ? scrollToBottom : scrollToTop}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="fixed bottom-5 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-blue-400/40 bg-[var(--accent)] text-white shadow-[0_8px_30px_rgba(37,99,235,0.5)] transition-colors hover:border-blue-300/60 hover:bg-[var(--accent-hover)] sm:bottom-6 sm:right-6 sm:h-12 sm:w-12"
          aria-label={
            goDown ? "Scroll to bottom of page" : "Scroll to top of page"
          }
          title={goDown ? "Go to bottom" : "Back to top"}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={goDown ? "down" : "up"}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2.25} />
            </motion.span>
          </AnimatePresence>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
