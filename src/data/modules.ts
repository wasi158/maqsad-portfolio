import type { LucideIcon } from 'lucide-react';
import {
	Monitor,
	ClipboardList,
	PackageSearch,
	Tag,
	ShoppingCart,
	FileText,
	ArrowDownLeft,
	ArrowUpRight,
	Landmark,
	BarChart3,
	Users,
	Calendar,
	Wallet,
	Factory,
	Truck,
	BadgePercent,
	Gift,
	RefreshCw,
} from 'lucide-react';

export type ModuleCategory =
	| 'pos'
	| 'inventory'
	| 'purchase'
	| 'sales'
	| 'finance'
	| 'hr'
	| 'warehouse'
	| 'admin';

export type ModuleId =
	| 'pos'
	| 'layaway'
	| 'stock-lookup'
	| 'item-master'
	| 'grn'
	| 'voucher'
	| 'receivable'
	| 'payable'
	| 'banks'
	| 'reports'
	| 'employees'
	| 'attendance'
	| 'payroll'
	| 'gate-pass'
	| 'builty'
	| 'promotions'
	| 'gift-cards'
	| 'sync-status';

export interface ErpModule {
	id: ModuleId;
	label: string;
	shortcut?: string;
	icon: LucideIcon;
	category: ModuleCategory;
	title: string;
	tagline: string;
	description: string;
	features: string[];
	technical: string[];
	image?: string;
	mockVariant?: 'pos' | 'table' | 'form' | 'ledger' | 'chart' | 'grn';
}

export const categoryLabels: Record<ModuleCategory, string> = {
	pos: 'POS',
	inventory: 'Inventory',
	purchase: 'Purchase',
	sales: 'Sales',
	finance: 'Finance',
	hr: 'HR',
	warehouse: 'Warehouse',
	admin: 'Admin',
};

export const erpModules: ErpModule[] = [
	{
		id: 'pos',
		label: 'POS Terminal',
		shortcut: 'Ctrl+1',
		icon: Monitor,
		category: 'pos',
		title: 'Point of Sale Terminal',
		tagline: 'Keyboard-first checkout for garment retail floors',
		description:
			'Full-screen POS with F-key shortcuts (Hold, Recall, Return, Search, End Shift, Charge). Scan barcodes or type item codes, apply invoice discounts, and split across nine payment methods including Raast, JazzCash, and EasyPaisa — with LAN/Cloud status and a built-in digital keypad.',
		features: [
			'Hardware barcode scanner (keyboard wedge)',
			'F2 Hold · F3 Recall · F4 Return · F9 Search',
			'Invoice-level discount %',
			'Cash, Card, Transfer, Raast, JazzCash, EasyPaisa, Cheque, Credit, Gift Card',
			'Digital keypad & tender display',
			'LAN + Cloud connectivity indicators',
		],
		technical: [
			'Global keyboard shortcut layer',
			'Event-driven scan pipeline',
			'Decimal-safe rupee calculations',
			'Optimistic cart line updates',
		],
		image: '/images/pos-screenshot.png',
		mockVariant: 'pos',
	},
	{
		id: 'layaway',
		label: 'Layaway',
		icon: ClipboardList,
		category: 'pos',
		title: 'Layaway Management',
		tagline: 'Reserve stock and collect partial payments over time',
		description:
			'Customers place items on hold with scheduled installments. Layaway integrates with POS hold/recall and reserves inventory until the contract is completed.',
		features: [
			'Create layaway from active cart',
			'Partial payment schedules',
			'Automatic stock reservation',
			'Recall & complete from POS',
		],
		technical: [
			'Linked POS hold/recall state machine',
			'Reservation flags on item master',
			'Audit trail per contract',
		],
		mockVariant: 'form',
	},
	{
		id: 'stock-lookup',
		label: 'Stock Lookup',
		shortcut: 'Ctrl+2',
		icon: PackageSearch,
		category: 'inventory',
		title: 'Real-Time Stock Lookup',
		tagline: 'Instant visibility across variants and locations',
		description:
			'Floor staff and cashiers query on-hand quantity by barcode, SKU, or description — variant breakdown and reorder hints without leaving the sales flow.',
		features: [
			'Barcode & text search',
			'Variant-level quantities',
			'Multi-location stock view',
			'Quick jump to item master',
		],
		technical: [
			'Indexed search under 100ms',
			'Cached variant metadata',
			'Read-optimized query path',
		],
		mockVariant: 'table',
	},
	{
		id: 'item-master',
		label: 'Item Master',
		shortcut: 'Ctrl+8',
		icon: Tag,
		category: 'inventory',
		title: 'Item Master & Variants',
		tagline: 'Products, sizes, colors, and live stock tracking',
		description:
			'Central garment catalog with variant matrices. Tracks on-hand stock, supports barcode GEN generation, and label printing for warehouse and floor teams.',
		features: [
			'Product & variant hierarchy',
			'Per-variant stock levels',
			'Barcode GEN & print',
			'Pricing and cost history',
		],
		technical: [
			'Normalized variant schema',
			'Code 128 / EAN generation',
			'Batch print queue',
		],
		mockVariant: 'table',
	},
	{
		id: 'grn',
		label: 'GRN (Receiving)',
		shortcut: 'Ctrl+5',
		icon: ShoppingCart,
		category: 'inventory',
		title: 'Goods Receipt Note',
		tagline: 'Scan-to-receive with vendor, vehicle & driver tracking',
		description:
			'Receive stock against purchase orders: scan or type each item barcode (unknown barcodes can create new items), track vehicle number and driver name, match vendor invoices, and post to inventory with one green Post GRN action.',
		features: [
			'Vendor search & GRN date',
			'PO / reference & vendor invoice #',
			'Vehicle no. & driver name logs',
			'Line grid: ordered, received, unit cost',
			'GEN barcode on each line',
			'GRN notes & Post GRN workflow',
		],
		technical: [
			'Scan-to-add with auto item creation',
			'Three-way match PO → GRN → invoice',
			'Transactional stock on post',
			'Fleet metadata on delivery batch',
		],
		image: '/images/grn-screenshot.png',
		mockVariant: 'grn',
	},
	{
		id: 'voucher',
		label: 'Voucher Entry',
		shortcut: 'Ctrl+3',
		icon: FileText,
		category: 'finance',
		title: 'Voucher Entry',
		tagline: 'Double-entry bookkeeping with balanced postings',
		description:
			'Journal, payment, receipt, and contra vouchers with multi-line debit/credit grids. Server validates balance before commit and rolls up to general ledger.',
		features: [
			'Journal, payment & receipt types',
			'Multi-line debit/credit grid',
			'Auto-balance validation',
			'Reference numbers & attachments',
		],
		technical: [
			'Immutable voucher numbering',
			'Server-side balance enforcement',
			'GL rollup on post',
		],
		mockVariant: 'form',
	},
	{
		id: 'receivable',
		label: 'Receivable',
		icon: ArrowDownLeft,
		category: 'finance',
		title: 'Accounts Receivable',
		tagline: 'Customer credit, aging, and collections',
		description:
			'Credit sales from POS (AR), customer statements, and aging buckets (30/60/90) for finance teams to prioritize collections.',
		features: [
			'Customer ledger & statements',
			'POS credit sale integration',
			'Aging analysis',
			'Receipt allocation',
		],
		technical: [
			'Sub-ledger from POS AR payments',
			'Payment allocation rules',
			'Export-ready aging datasets',
		],
		mockVariant: 'ledger',
	},
	{
		id: 'payable',
		label: 'Payable',
		icon: ArrowUpRight,
		category: 'finance',
		title: 'Accounts Payable',
		tagline: 'Vendor liabilities from GRN and purchase invoices',
		description:
			'Track amounts owed to vendors, schedule payments, and reconcile with bank outflows — linked to GRN and purchase workflows.',
		features: [
			'Vendor balance & due dates',
			'GRN-linked payable creation',
			'Payment scheduling',
			'Early payment discounts',
		],
		technical: [
			'Auto-payable on GRN invoice match',
			'Payment voucher linkage',
			'Vendor sub-ledger isolation',
		],
		mockVariant: 'ledger',
	},
	{
		id: 'banks',
		label: 'Banks',
		icon: Landmark,
		category: 'finance',
		title: 'Bank Ledgers',
		tagline: 'Multi-account cash book with reconciliation',
		description:
			'Separate ledgers per bank account — deposits, withdrawals, transfers, and POS card settlements with reconciliation markers.',
		features: [
			'Multiple bank accounts',
			'Deposit / withdrawal / transfer',
			'POS settlement mapping',
			'Statement reconciliation',
		],
		technical: [
			'Per-account running balance',
			'Paired transfer entries',
			'Reconciliation diff detection',
		],
		mockVariant: 'ledger',
	},
	{
		id: 'reports',
		label: 'Reports',
		shortcut: 'Ctrl+4',
		icon: BarChart3,
		category: 'finance',
		title: 'Financial Reports',
		tagline: 'P&L, balance sheet, and operational dashboards',
		description:
			'Trial balance, profit & loss, balance sheet, sales summaries, and inventory valuation with date-range and branch filters.',
		features: [
			'Trial balance & GL',
			'P&L / balance sheet',
			'Sales & stock valuation',
			'Date-range & branch filters',
		],
		technical: [
			'Materialized report aggregates',
			'Parameterized query layer',
			'PDF & spreadsheet export',
		],
		mockVariant: 'chart',
	},
	{
		id: 'employees',
		label: 'Employees',
		shortcut: 'Ctrl+6',
		icon: Users,
		category: 'hr',
		title: 'Employee Management',
		tagline: 'Staff records tied to attendance and payroll',
		description:
			'Maintain employee profiles, roles, and branch assignments — the foundation for attendance tracking and monthly payroll runs.',
		features: [
			'Employee master records',
			'Role & branch assignment',
			'Active / inactive status',
			'Link to attendance & payroll',
		],
		technical: [
			'Normalized employee entities',
			'Role-based access hooks',
			'Payroll eligibility flags',
		],
		mockVariant: 'table',
	},
	{
		id: 'attendance',
		label: 'Attendance',
		icon: Calendar,
		category: 'hr',
		title: 'Attendance Tracking',
		tagline: 'Daily check-in/out for retail staff',
		description:
			'Record shift attendance for store and warehouse teams. Feeds payroll calculations and HR reporting.',
		features: [
			'Daily check-in / check-out',
			'Shift & overtime markers',
			'Branch-wise attendance view',
			'Monthly attendance sheets',
		],
		technical: [
			'Date-indexed attendance rows',
			'Overtime rule configuration',
			'Payroll batch input',
		],
		mockVariant: 'table',
	},
	{
		id: 'payroll',
		label: 'Payroll',
		icon: Wallet,
		category: 'hr',
		title: 'Payroll Processing',
		tagline: 'Salary runs from attendance and deductions',
		description:
			'Generate monthly payroll from attendance, allowances, and deductions — with voucher integration for salary payments.',
		features: [
			'Monthly payroll batches',
			'Allowances & deductions',
			'Attendance-based calculation',
			'Payment voucher export',
		],
		technical: [
			'Batch payroll computation',
			'GL voucher on disbursement',
			'Payslip generation pipeline',
		],
		mockVariant: 'form',
	},
	{
		id: 'gate-pass',
		label: 'Gate Pass',
		shortcut: 'Ctrl+7',
		icon: Factory,
		category: 'warehouse',
		title: 'Gate Pass',
		tagline: 'Controlled movement of goods in and out',
		description:
			'Authorize stock leaving or entering the premises — linked to sales deliveries, transfers, and returns with audit trail.',
		features: [
			'Inbound / outbound gate passes',
			'Link to sales & transfers',
			'Security check workflow',
			'Printable gate pass slips',
		],
		technical: [
			'Status workflow on pass approval',
			'Stock movement validation',
			'Immutable pass numbering',
		],
		mockVariant: 'form',
	},
	{
		id: 'builty',
		label: 'Builty Register',
		icon: Truck,
		category: 'warehouse',
		title: 'Builty Register',
		tagline: 'Dispatch documents and carrier tracking',
		description:
			'Register builty (consignment notes) for outbound shipments — carrier, weight, and destination tied to sales or transfer orders.',
		features: [
			'Builty number registration',
			'Carrier & destination tracking',
			'Link to sales orders',
			'Delivery status updates',
		],
		technical: [
			'Builty entity linked to orders',
			'Carrier master integration',
			'Dispatch audit trail',
		],
		mockVariant: 'table',
	},
	{
		id: 'promotions',
		label: 'Promotions',
		icon: BadgePercent,
		category: 'admin',
		title: 'Promotions Engine',
		tagline: 'Discount rules applied at POS automatically',
		description:
			'Configure percentage or fixed promotions by item, category, or date range. POS applies rules in real time during checkout.',
		features: [
			'Item & category promotions',
			'Date-range activation',
			'Stacking rules & priorities',
			'POS auto-apply at scan',
		],
		technical: [
			'Rule evaluation on cart mutation',
			'Cached promotion sets per branch',
			'Audit log on applied discounts',
		],
		mockVariant: 'form',
	},
	{
		id: 'gift-cards',
		label: 'Gift Cards',
		icon: Gift,
		category: 'admin',
		title: 'Gift Card Management',
		tagline: 'Issue, redeem, and balance-track gift cards',
		description:
			'Sell gift cards from POS, track balances, and redeem against future purchases — integrated with the Gift Card payment method on the terminal.',
		features: [
			'Issue & top-up gift cards',
			'Balance inquiry at POS',
			'Redeem as payment method',
			'Expiry & serial tracking',
		],
		technical: [
			'Unique serial generation',
			'Balance ledger per card',
			'POS payment type integration',
		],
		mockVariant: 'form',
	},
	{
		id: 'sync-status',
		label: 'Sync Status',
		icon: RefreshCw,
		category: 'admin',
		title: 'Sync Status',
		tagline: 'LAN and cloud synchronization health',
		description:
			'Monitor connectivity between branch LAN nodes and cloud backend — queue status, last sync time, and conflict resolution for offline-first retail.',
		features: [
			'LAN / Cloud status dashboard',
			'Pending sync queue view',
			'Last successful sync timestamp',
			'Manual retry & conflict resolve',
		],
		technical: [
			'Offline queue with replay',
			'Conflict detection on master data',
			'Heartbeat to cloud endpoint',
		],
		mockVariant: 'table',
	},
];

export const categoryOrder: ModuleCategory[] = [
	'pos',
	'inventory',
	'finance',
	'hr',
	'warehouse',
	'admin',
];

export const featureHighlights = [
	{
		icon: 'scan' as const,
		title: 'Barcode Scanning System',
		description:
			'Hardware wedge scanners emit keyboard events at document level. POS and GRN share scan-to-add — unknown barcodes can create new items on the fly.',
		tags: ['Keyboard wedge', 'GEN barcode', 'GRN scan lines'],
	},
	{
		icon: 'calc' as const,
		title: 'Real-Time POS Calculations',
		description:
			'Line totals, invoice discounts, and change due recompute on every keystroke with precision-safe decimal math — no floating-point drift on rupee amounts.',
		tags: ['Decimal precision', 'Multi-pay split', 'F-key shortcuts'],
	},
	{
		icon: 'perf' as const,
		title: 'Localized Payment Integration',
		description:
			'Built for Pakistani retail: Raast, JazzCash, EasyPaisa alongside Cash, Card, Transfer, Cheque, Credit (AR), and Gift Card — each mapped to ledger accounts.',
		tags: ['Raast', 'JazzCash', 'EasyPaisa'],
	},
];

export type DepthSectionVariant = 'image' | 'modules';

export const depthSections: {
	id: string;
	title: string;
	subtitle: string;
	description: string;
	bullets: string[];
	image?: string;
	accent: 'green' | 'blue';
	variant?: DepthSectionVariant;
}[] = [
	{
		id: 'logistics',
		title: 'Logistics & Fleet Integration',
		subtitle: 'GRN captures more than stock — it tracks how goods arrive',
		description:
			'Every goods receipt records vehicle number and driver name alongside vendor and invoice references. Purchase teams reconcile deliveries with fleet logs and warehouse gate passes.',
		bullets: [
			'Vehicle No. & Driver Name on every GRN',
			'Vendor invoice matching',
			'PO / reference linkage',
			'Post GRN → instant stock update',
		],
		image: '/images/grn-screenshot.png',
		accent: 'green',
	},
	{
		id: 'payments',
		title: 'Keyboard-First POS Workflow',
		subtitle: 'Power users never touch the mouse during peak hours',
		description:
			'Cashiers operate entirely from the keyboard: F2 Hold, F3 Recall, F4 Return, F9 Search, Ctrl+E End Shift, F12 Charge, Esc Clear — plus Ctrl+number shortcuts to jump ERP modules from the sidebar.',
		bullets: [
			'F-key shortcuts across POS actions',
			'Ctrl+1…8 module navigation',
			'Dark theme for long shifts',
			'LAN + Cloud status at a glance',
		],
		image: '/images/pos-screenshot.png',
		accent: 'blue',
	},
	{
		id: 'platform',
		title: 'Full-Platform ERP Scope',
		subtitle: 'One sidebar — POS through HR, warehouse, and admin',
		description:
			'Maqsad is not just a register. Finance ledgers, HR payroll, warehouse gate passes, builty registers, promotions, gift cards, and sync status live in the same cohesive navigation shell.',
		bullets: [
			'18+ modules in unified sidebar',
			'POS, inventory & finance workflows',
			'HR: Employees, Attendance, Payroll',
			'Admin: Promotions, Gift Cards, Sync',
		],
		accent: 'blue',
		variant: 'modules',
	},
];

export const paymentMethods = [
	{ name: 'Cash', key: 'F5' },
	{ name: 'Card', key: 'F6' },
	{ name: 'Transfer', key: 'F7' },
	{ name: 'Raast', key: '' },
	{ name: 'JazzCash', key: '' },
	{ name: 'EasyPaisa', key: '' },
	{ name: 'Credit (AR)', key: '' },
	{ name: 'Cheque', key: '' },
	{ name: 'Gift Card', key: '' },
];
