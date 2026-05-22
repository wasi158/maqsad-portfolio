"use client";

import type { ErpModule } from "@/data/modules";
import Image from "next/image";

interface ModuleMockProps {
  module: ErpModule;
}

export function ModuleMock({ module }: ModuleMockProps) {
  if (module.image) {
    return (
      <div className="overflow-hidden rounded-lg border border-[var(--border)] bg-[#0a0f18]">
        <Image
          src={module.image}
          alt={module.title}
          width={800}
          height={500}
          className="h-auto w-full max-h-[280px] object-contain object-top sm:max-h-none sm:object-cover"
        />
      </div>
    );
  }

  const variant = module.mockVariant ?? "table";

  if (variant === "pos") {
    return <PosMiniMock />;
  }
  if (variant === "form") {
    return <FormMock title={module.label} />;
  }
  if (variant === "ledger") {
    return <LedgerMock title={module.label} />;
  }
  if (variant === "chart") {
    return <ChartMock />;
  }
  return <TableMock title={module.label} />;
}

function PosMiniMock() {
  return (
    <div className="rounded-lg border border-[var(--border)] bg-[#0a0f18] p-4 font-mono text-xs">
      <div className="mb-3 flex gap-2">
        <div className="h-8 flex-1 rounded border border-[var(--accent)] bg-[var(--bg-card)] px-3 py-2 text-[var(--text-muted)]">
          Scan barcode…
        </div>
        <div className="rounded bg-[var(--accent)] px-4 py-2 text-white">Add</div>
      </div>
      <div className="grid grid-cols-4 gap-2 border-b border-[var(--border)] pb-2 text-[var(--text-muted)]">
        <span>ITEM</span>
        <span>QTY</span>
        <span>PRICE</span>
        <span>TOTAL</span>
      </div>
      <div className="py-8 text-center text-[var(--text-muted)]">
        Scan a barcode or type an item code
      </div>
    </div>
  );
}

function TableMock({ title }: { title: string }) {
  const rows = [
    ["SKU-1042", "Cotton Shirt · M", "24", "In stock"],
    ["SKU-2088", "Denim Jacket · L", "8", "Low"],
    ["SKU-3310", "Linen Trouser · 32", "41", "In stock"],
  ];
  return (
    <div className="rounded-lg border border-[var(--border)] bg-[#0a0f18] overflow-hidden">
      <div className="border-b border-[var(--border)] px-4 py-2 text-sm font-medium text-white">
        {title}
      </div>
      <table className="w-full text-left text-xs">
        <thead>
          <tr className="text-[var(--text-muted)] border-b border-[var(--border)]">
            <th className="px-4 py-2">Code</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Qty</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-b border-[var(--border)]/50 text-[var(--text-secondary)]">
              {row.map((cell, i) => (
                <td key={i} className="px-4 py-2.5">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FormMock({ title }: { title: string }) {
  return (
    <div className="rounded-lg border border-[var(--border)] bg-[#0a0f18] p-4 space-y-3">
      <div className="text-sm font-medium text-white">{title} — New Entry</div>
      {["Reference No.", "Vendor / Customer", "Amount (Rs)"].map((label) => (
        <div key={label}>
          <label className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
            {label}
          </label>
          <div className="mt-1 h-9 rounded border border-[var(--border)] bg-[var(--bg-card)]" />
        </div>
      ))}
      <div className="flex gap-2 pt-2">
        <div className="rounded bg-[var(--accent)] px-4 py-2 text-xs text-white">
          Save
        </div>
        <div className="rounded border border-[var(--border)] px-4 py-2 text-xs text-[var(--text-secondary)]">
          Cancel
        </div>
      </div>
    </div>
  );
}

function LedgerMock({ title }: { title: string }) {
  const entries = [
    { date: "21 May", desc: "Opening balance", dr: "—", cr: "—", bal: "125,400" },
    { date: "20 May", desc: "Payment received", dr: "—", cr: "12,500", bal: "112,900" },
    { date: "19 May", desc: "Invoice #8841", dr: "8,200", cr: "—", bal: "121,100" },
  ];
  return (
    <div className="rounded-lg border border-[var(--border)] bg-[#0a0f18] overflow-hidden text-xs">
      <div className="border-b border-[var(--border)] px-4 py-2 font-medium text-white">
        {title} Ledger
      </div>
      <div className="grid grid-cols-5 gap-2 border-b border-[var(--border)] px-4 py-2 text-[var(--text-muted)]">
        <span>Date</span>
        <span className="col-span-2">Description</span>
        <span>Dr</span>
        <span>Balance</span>
      </div>
      {entries.map((e) => (
        <div
          key={e.desc}
          className="grid grid-cols-5 gap-2 border-b border-[var(--border)]/40 px-4 py-2 text-[var(--text-secondary)]"
        >
          <span>{e.date}</span>
          <span className="col-span-2">{e.desc}</span>
          <span>{e.dr !== "—" ? e.dr : e.cr}</span>
          <span className="text-white">{e.bal}</span>
        </div>
      ))}
    </div>
  );
}

function ChartMock() {
  const bars = [40, 65, 45, 80, 55, 90, 70];
  return (
    <div className="rounded-lg border border-[var(--border)] bg-[#0a0f18] p-4">
      <div className="mb-4 text-sm font-medium text-white">Sales & P&L Summary</div>
      <div className="flex h-32 items-end justify-between gap-2">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t bg-[var(--accent)]/80 transition-all"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="mt-3 flex justify-between text-[10px] text-[var(--text-muted)]">
        <span>Jan</span>
        <span>Mar</span>
        <span>May</span>
        <span>Jul</span>
      </div>
    </div>
  );
}
