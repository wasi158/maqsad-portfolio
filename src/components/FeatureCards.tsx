"use client";

import { SECTION_SCROLL_MT } from "@/lib/layout";
import { motion } from "framer-motion";
import { featureHighlights } from "@/data/modules";
import { ScanBarcode, Calculator, Zap } from "lucide-react";

const iconMap = {
  scan: ScanBarcode,
  calc: Calculator,
  perf: Zap,
} as const;

export function FeatureCards() {
  return (
    <section
      id="features"
      className={`${SECTION_SCROLL_MT} border-t border-[var(--border)] bg-[var(--bg-secondary)]/50 py-20 md:py-28`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
            Engineering Depth
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Built for Production Retail
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--text-secondary)]">
            Beyond UI polish — hardened patterns for hardware input, financial
            precision, and in-store performance.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {featureHighlights.map((card, index) => {
            const Icon = iconMap[card.icon];
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="group rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6 transition-shadow hover:border-[var(--accent)]/50 hover:shadow-lg hover:shadow-[var(--accent-glow)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--accent)]/15 text-[var(--accent)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {card.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--border)] bg-[var(--bg-primary)] px-2.5 py-1 text-[11px] text-[var(--text-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 grid gap-4 rounded-xl border border-[var(--border)] bg-[var(--bg-primary)] p-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { label: "Modules", value: "18+ ERP screens" },
            { label: "POS", value: "9 payment methods" },
            { label: "GRN", value: "Fleet + barcode GEN" },
            { label: "Ops", value: "HR · Warehouse · Admin" },
          ].map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="text-xs uppercase tracking-wider text-[var(--text-muted)]">
                {stat.label}
              </p>
              <p className="mt-1 font-semibold text-white">{stat.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
