"use client";

import { SECTION_SCROLL_MT } from "@/lib/layout";
import { motion } from "framer-motion";
import Image from "next/image";
import { depthSections, paymentMethods } from "@/data/modules";
import { PlatformScopePanel } from "./PlatformScopePanel";
import { Truck, Keyboard, LayoutGrid } from "lucide-react";

const icons = [Truck, Keyboard, LayoutGrid];

export function DepthSections() {
  return (
    <section
      id="depth"
      className={`${SECTION_SCROLL_MT} border-t border-[var(--border)] py-20 md:py-28`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
            Platform Depth
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Built for Real Garment Operations
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--text-secondary)]">
            From Pakistani payment rails and F-key POS workflows to GRN fleet
            tracking and a unified ERP shell spanning HR and warehouse.
          </p>
        </motion.div>

        <div className="space-y-24">
          {depthSections.map((section, index) => {
            const Icon = icons[index];
            const reversed = index % 2 === 1;
            const isGreen = section.accent === "green";

            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  reversed ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div className={reversed ? "lg:[direction:ltr]" : ""}>
                  <div
                    className={`mb-4 inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm ${
                      isGreen
                        ? "bg-emerald-600/20 text-emerald-400"
                        : "bg-[var(--accent)]/15 text-[var(--accent)]"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {section.subtitle}
                  </div>
                  <h3 className="text-2xl font-bold text-white md:text-3xl">
                    {section.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-[var(--text-secondary)]">
                    {section.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {section.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-sm text-[var(--text-secondary)]"
                      >
                        <span
                          className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                            isGreen ? "bg-emerald-500" : "bg-[var(--accent)]"
                          }`}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={reversed ? "lg:[direction:ltr]" : ""}>
                  {section.variant === "modules" ? (
                    <PlatformScopePanel />
                  ) : (
                    <div className="overflow-hidden rounded-xl border border-[var(--border)] shadow-2xl shadow-black/40">
                      <Image
                        src={section.image!}
                        alt={section.title}
                        width={900}
                        height={560}
                        className="w-full"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          id="payments"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-8 md:p-10"
        >
          <h3 className="text-xl font-bold text-white">
            Multi-Payment Support
          </h3>
          <p className="mt-2 max-w-2xl text-sm text-[var(--text-secondary)]">
            Nine tender types on the POS — including Pakistan-specific digital
            wallets — each posting to the correct ledger account on settlement.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {paymentMethods.map((pm, i) => (
              <div
                key={pm.name}
                className={`rounded-lg border px-4 py-3 text-center text-sm transition-colors ${
                  i === 0
                    ? "border-[var(--accent)] bg-[var(--accent)] font-medium text-white"
                    : "border-[var(--border)] bg-[var(--bg-primary)] text-[var(--text-secondary)]"
                }`}
              >
                <span className="block">{pm.name}</span>
                {pm.key && (
                  <span className="mt-1 block font-mono text-[10px] opacity-70">
                    {pm.key}
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
