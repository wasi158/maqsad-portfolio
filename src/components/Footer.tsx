'use client';

import { SECTION_SCROLL_MT } from '@/lib/layout';
import { motion } from 'framer-motion';
import { Layers, Mail, Globe, Share2, ArrowUpRight } from 'lucide-react';
import { categoryOrder, categoryLabels, erpModules } from '@/data/modules';

const moduleGroups = categoryOrder.map((cat) => ({
	title: categoryLabels[cat],
	items: erpModules.filter((m) => m.category === cat).map((m) => m.label),
}));

export function Footer() {
	return (
		<footer
			id='contact'
			className={`${SECTION_SCROLL_MT} border-t border-[var(--border)] bg-[#0a0f18]`}
		>
			<div className='gradient-mesh border-b border-[var(--border)] py-16'>
				<div className='mx-auto max-w-7xl px-6 text-center'>
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
					>
						<h2 className='text-2xl font-bold text-white md:text-3xl'>
							Ready to explore Maqsad?
						</h2>
						<p className='mx-auto mt-3 max-w-lg text-[var(--text-secondary)]'>
							Full-stack inventory, POS, finance, HR, and warehouse — engineered
							for garment retail at scale.
						</p>
						<div className='mt-8 flex flex-wrap justify-center gap-4'>
							<a
								href='#showcase'
								className='inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-3 font-medium text-white hover:bg-[var(--accent-hover)]'
							>
								View Live System
								<ArrowUpRight className='h-4 w-4' />
							</a>
							<a
								href='#showcase'
								className='inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-6 py-3 font-medium text-white hover:border-[var(--accent)]'
							>
								Explore Demo
							</a>
						</div>
					</motion.div>
				</div>
			</div>

			<div className='mx-auto max-w-7xl px-6 py-14'>
				<div className='grid gap-12 md:grid-cols-2 lg:grid-cols-4'>
					<div className='lg:col-span-1'>
						<a href='#' className='flex items-center gap-2.5'>
							<span className='flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent)]'>
								<Layers className='h-5 w-5 text-white' />
							</span>
							<div>
								<p className='font-bold text-white'>Maqsad</p>
								<p className='text-xs text-[var(--text-muted)]'>
									Inventory & POS
								</p>
							</div>
						</a>
						<p className='mt-4 text-sm leading-relaxed text-[var(--text-secondary)]'>
							Inventory Management & POS for garment retail — barcode checkout,
							GRN procurement, finance ledgers, HR, and warehouse ops in one
							system.
						</p>
						<div className='mt-6 flex gap-3'>
							<a
								href='mailto:hello@example.com'
								className='flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-white'
								aria-label='Email'
							>
								<Mail className='h-4 w-4' />
							</a>
							<a
								href='#'
								className='flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-white'
								aria-label='Portfolio'
							>
								<Globe className='h-4 w-4' />
							</a>
							<a
								href='#'
								className='flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-white'
								aria-label='Share'
							>
								<Share2 className='h-4 w-4' />
							</a>
						</div>
					</div>

					{moduleGroups.slice(0, 3).map((group) => (
						<div key={group.title}>
							<p className='text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]'>
								{group.title}
							</p>
							<ul className='mt-4 space-y-2'>
								{group.items.map((item) => (
									<li key={item}>
										<a
											href='#showcase'
											className='text-sm text-[var(--text-secondary)] hover:text-white'
										>
											{item}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</footer>
	);
}
