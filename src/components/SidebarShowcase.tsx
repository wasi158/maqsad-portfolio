"use client";

import { useCallback, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  erpModules,
  categoryLabels,
  categoryOrder,
  type ModuleId,
} from "@/data/modules";
import { ModuleMock } from "./ModuleMock";
import { SECTION_SCROLL_MT } from "@/lib/layout";
import {
  getShowcaseDetailExtraOffset,
  scrollToElement,
} from "@/lib/scroll";
import {
  ChevronRight,
  Code2,
  CheckCircle2,
  PanelLeftClose,
  ArrowDown,
} from "lucide-react";

const MOBILE_BREAKPOINT = 1024;

export function SidebarShowcase() {
  const [activeId, setActiveId] = useState<ModuleId>("pos");
  const detailRef = useRef<HTMLDivElement>(null);
  const active = erpModules.find((m) => m.id === activeId) ?? erpModules[0];

  const scrollToDetail = useCallback(() => {
    scrollToElement(detailRef.current, {
      extraOffset: getShowcaseDetailExtraOffset(),
    });
  }, []);

  const handleSelect = useCallback(
    (id: ModuleId) => {
      setActiveId(id);
      if (typeof window !== "undefined" && window.innerWidth < MOBILE_BREAKPOINT) {
        requestAnimationFrame(scrollToDetail);
      }
    },
    [scrollToDetail],
  );

  return (
    <section
      id="showcase"
      className={`${SECTION_SCROLL_MT} py-16 sm:py-20 md:py-28`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center sm:mb-12"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
            Interactive Demo
          </span>
          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            ERP Module Showcase
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[var(--text-secondary)] sm:mt-4 sm:text-base">
            Tap a module below — details scroll into view on mobile. Desktop
            shows the panel beside the sidebar.
          </p>
        </motion.div>

        <div className="glass-panel overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl shadow-black/40">
          <div className="flex flex-col lg:min-h-[560px] lg:flex-row">
            {/* Sidebar — compact on mobile */}
            <aside className="w-full shrink-0 border-b border-[var(--border)] bg-[#111827] lg:w-60 lg:border-b-0 lg:border-r">
              <div className="flex items-center justify-between border-b border-[var(--border)] px-3 py-2.5 sm:px-4 sm:py-3">
                <p className="text-sm font-bold text-white sm:text-base">
                  Maqsad
                </p>
                <span className="flex h-7 w-7 items-center justify-center rounded bg-[var(--accent)] text-white">
                  <PanelLeftClose className="h-4 w-4" />
                </span>
              </div>

              <p className="flex items-center gap-1.5 border-b border-[var(--border)] bg-[var(--bg-card)]/40 px-3 py-2 text-xs text-[var(--text-muted)] lg:hidden">
                <span>Select a module</span>
                <ArrowDown className="h-3.5 w-3.5 text-[var(--accent)]" />
              </p>

              <nav className="scrollbar-thin max-h-[min(42vh,320px)] overflow-y-auto p-2 sm:max-h-[min(45vh,360px)] lg:max-h-[640px]">
                {categoryOrder.map((cat) => {
                  const mods = erpModules.filter((m) => m.category === cat);
                  if (mods.length === 0) return null;
                  return (
                    <SidebarGroup
                      key={cat}
                      label={categoryLabels[cat]}
                      modules={mods}
                      activeId={activeId}
                      onSelect={handleSelect}
                    />
                  );
                })}
              </nav>
            </aside>

            {/* Mobile: scroll down to module details */}
            <div className="flex justify-center border-b border-[var(--border)] bg-[var(--bg-secondary)] py-2 lg:hidden">
              <button
                type="button"
                onClick={scrollToDetail}
                className="flex flex-col items-center gap-0.5 rounded-full px-4 py-2 text-[var(--text-muted)] transition-colors hover:bg-[var(--bg-card)] hover:text-[var(--accent)]"
                aria-label="Scroll to module details"
              >
                <span className="text-[10px] font-medium uppercase tracking-wider">
                  View details
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-card)] text-[var(--accent)] animate-bounce">
                  <ArrowDown className="h-5 w-5" strokeWidth={2.5} />
                </span>
              </button>
            </div>

            {/* Detail panel */}
            <div
              ref={detailRef}
              id="showcase-detail"
              className={`${SECTION_SCROLL_MT} flex flex-1 flex-col bg-[var(--bg-secondary)]`}
            >
              {/* Mobile: sticky module header */}
              <div className="sticky top-14 z-10 border-b border-[var(--border)] bg-[var(--bg-secondary)]/95 px-4 py-3 backdrop-blur-md lg:hidden sm:top-16">
                <div className="flex items-center gap-2">
                  <active.icon className="h-4 w-4 shrink-0 text-[var(--accent)]" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-white">
                      {active.label}
                    </p>
                    <p className="truncate text-xs text-[var(--text-muted)]">
                      {categoryLabels[active.category]}
                      {active.shortcut ? ` · ${active.shortcut}` : ""}
                    </p>
                  </div>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="flex flex-1 flex-col p-4 sm:p-6 md:p-8"
                >
                  <div className="mb-5 hidden lg:block">
                    <div className="flex flex-wrap items-center gap-2 text-sm text-[var(--accent)]">
                      <active.icon className="h-4 w-4" />
                      <span className="uppercase tracking-wide">
                        {categoryLabels[active.category]}
                      </span>
                      {active.shortcut && (
                        <span className="rounded bg-[var(--bg-card)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--text-muted)]">
                          {active.shortcut}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                      {active.title}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--text-secondary)]">
                      {active.tagline}
                    </p>
                  </div>

                  <div className="flex flex-1 flex-col gap-6 lg:grid lg:grid-cols-2">
                    <div className="order-1">
                      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)] lg:mb-3">
                        Interface Preview
                      </p>
                      <ModuleMock module={active} />
                    </div>

                    <div className="order-2 space-y-5 sm:space-y-6">
                      <div className="lg:hidden">
                        <h3 className="text-lg font-bold text-white">
                          {active.title}
                        </h3>
                        <p className="mt-1 text-sm text-[var(--text-secondary)]">
                          {active.tagline}
                        </p>
                      </div>

                      <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                        {active.description}
                      </p>

                      <div>
                        <p className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)] sm:mb-3">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[var(--accent)]" />
                          Key Features
                        </p>
                        <ul className="space-y-2">
                          {active.features.map((f) => (
                            <li
                              key={f}
                              className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                            >
                              <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)] sm:mb-3">
                          <Code2 className="h-3.5 w-3.5 text-[var(--accent)]" />
                          Technical Highlights
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {active.technical.map((t) => (
                            <span
                              key={t}
                              className="rounded-md border border-[var(--border)] bg-[var(--bg-card)] px-2.5 py-1.5 text-xs text-[var(--text-secondary)] sm:px-3"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SidebarGroup({
  label,
  modules,
  activeId,
  onSelect,
}: {
  label: string;
  modules: typeof erpModules;
  activeId: ModuleId;
  onSelect: (id: ModuleId) => void;
}) {
  return (
    <div className="mb-2">
      <p className="px-2 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--text-muted)] sm:px-3 sm:py-2">
        {label}
      </p>
      <ul className="space-y-0.5">
        {modules.map((mod) => {
          const isActive = mod.id === activeId;
          const Icon = mod.icon;
          return (
            <li key={mod.id}>
              <button
                type="button"
                onClick={() => onSelect(mod.id)}
                className={`flex min-h-[44px] w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-sm transition-all active:scale-[0.98] ${
                  isActive
                    ? "bg-[var(--accent)]/25 font-medium text-white ring-1 ring-[var(--accent)]"
                    : "text-[var(--text-secondary)] hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon
                  className={`h-4 w-4 shrink-0 ${isActive ? "text-[var(--accent)]" : "opacity-80"}`}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                <span className="flex-1 truncate">{mod.label}</span>
                {mod.shortcut && (
                  <span className="shrink-0 font-mono text-[10px] text-[var(--text-muted)]">
                    {mod.shortcut}
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
