"use client";

import { motion } from "framer-motion";
import {
  categoryOrder,
  categoryLabels,
  erpModules,
  type ModuleCategory,
} from "@/data/modules";
import { ArrowRight } from "lucide-react";

const categoryAccent: Record<ModuleCategory, string> = {
  pos: "border-blue-500/40 bg-blue-500/10",
  inventory: "border-cyan-500/40 bg-cyan-500/10",
  purchase: "border-slate-500/40 bg-slate-500/10",
  sales: "border-slate-500/40 bg-slate-500/10",
  finance: "border-indigo-500/40 bg-indigo-500/10",
  hr: "border-violet-500/40 bg-violet-500/10",
  warehouse: "border-amber-500/40 bg-amber-500/10",
  admin: "border-emerald-500/40 bg-emerald-500/10",
};

export function PlatformScopePanel() {
  const totalModules = erpModules.length;

  return (
    <div className="rounded-xl border border-[var(--border)] bg-[#0a0f18] p-5 shadow-2xl shadow-black/40 md:p-6">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4 border-b border-[var(--border)] pb-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
            Module ecosystem
          </p>
          <p className="mt-1 text-2xl font-bold text-white">
            {totalModules}{" "}
            <span className="text-lg font-medium text-[var(--text-secondary)]">
              integrated screens
            </span>
          </p>
        </div>
        <div className="flex gap-6 text-center">
          {[
            { label: "Categories", value: String(categoryOrder.length) },
            { label: "Shortcuts", value: "Ctrl+1–8" },
            { label: "Sync", value: "LAN · Cloud" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-lg font-semibold text-[var(--accent)]">
                {s.value}
              </p>
              <p className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {categoryOrder.map((cat, i) => {
          const mods = erpModules.filter((m) => m.category === cat);
          if (mods.length === 0) return null;

          return (
            <motion.a
              key={cat}
              href="#showcase"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className={`group block rounded-lg border p-4 transition-colors hover:border-[var(--accent)]/50 ${categoryAccent[cat]}`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-white">
                  {categoryLabels[cat]}
                </span>
                <span className="rounded-full bg-black/30 px-2 py-0.5 text-[10px] text-[var(--text-muted)]">
                  {mods.length} modules
                </span>
              </div>
              <ul className="mt-3 space-y-2">
                {mods.map((mod) => {
                  const Icon = mod.icon;
                  return (
                    <li
                      key={mod.id}
                      className="flex items-center gap-2 text-sm text-[var(--text-secondary)] group-hover:text-white"
                    >
                      <Icon className="h-3.5 w-3.5 shrink-0 text-[var(--accent)]" />
                      <span className="flex-1 truncate">{mod.label}</span>
                      {mod.shortcut && (
                        <span className="font-mono text-[10px] text-[var(--text-muted)]">
                          {mod.shortcut}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </motion.a>
          );
        })}
      </div>

      <div className="mt-5 flex justify-end rounded-lg border border-dashed border-[var(--border)] bg-[var(--bg-card)]/50 px-4 py-3">
        <a
          href="#showcase"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:text-white"
        >
          Explore all modules
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
