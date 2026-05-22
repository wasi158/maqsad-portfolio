'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Sparkles, Wifi, Cloud } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
	return (
		<section className='gradient-mesh relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-36 md:pb-28'>
			<div className='pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,var(--bg-primary))]' />

			<div className='relative mx-auto max-w-7xl px-4 sm:px-6'>
				<div className='grid items-center gap-12 lg:grid-cols-2 lg:gap-16'>
					<div>
						<motion.div
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className='mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-card)]/60 px-4 py-1.5 text-sm text-[var(--text-secondary)]'
						>
							<Sparkles className='h-4 w-4 text-[var(--accent)]' />
							Flagship Project · Garment Retail ERP
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
							className='text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl'
						>
							Maqsad
							<span className='mt-2 block text-2xl font-semibold text-[var(--accent)] md:text-3xl'>
								Inventory & POS System
							</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className='mt-6 max-w-xl text-lg leading-relaxed text-[var(--text-secondary)]'
						>
							A powerful{' '}
							<strong className='font-medium text-white'>
								Inventory Management & POS System
							</strong>{' '}
							built for garment retail — from barcode checkout to GRN
							procurement and full finance ledgers.
						</motion.p>

						{/* <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-4 text-sm text-[var(--text-muted)]"
            >
              Full-Stack / Frontend Engineer · End-to-end product delivery
            </motion.p> */}

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.35 }}
							className='mt-8 flex flex-wrap gap-4'
						>
							<a
								href='#showcase'
								className='inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-3 font-medium text-white shadow-lg shadow-[var(--accent-glow)] transition-all hover:bg-[var(--accent-hover)] hover:shadow-[var(--accent)]/40'
							>
								View Live System
								<ArrowRight className='h-4 w-4' />
							</a>
							<a
								href='#showcase'
								className='inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] px-6 py-3 font-medium text-white transition-colors hover:border-[var(--accent)] hover:bg-[var(--bg-elevated)]'
							>
								Explore Demo
								<ExternalLink className='h-4 w-4 text-[var(--text-secondary)]' />
							</a>
						</motion.div>

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.5 }}
							className='mt-10 flex flex-wrap gap-6 text-sm text-[var(--text-muted)]'
						>
							<span className='flex items-center gap-2'>
								<span className='h-2 w-2 rounded-full bg-red-500' />
								LAN-ready POS
							</span>
							<span className='flex items-center gap-2'>
								<Wifi className='h-4 w-4' />
								Offline-capable
							</span>
							<span className='flex items-center gap-2'>
								<Cloud className='h-4 w-4' />
								Cloud sync
							</span>
						</motion.div>
					</div>

					<motion.div
						initial={{ opacity: 0, scale: 0.96 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className='relative'
					>
						<div className='absolute -inset-4 rounded-2xl bg-[var(--accent)]/20 blur-3xl' />
						<div className='glass-panel relative overflow-hidden rounded-xl shadow-2xl shadow-black/50'>
							<div className='flex items-center justify-between border-b border-[var(--border)] px-4 py-3'>
								<span className='font-semibold text-white'>Maqsad</span>
								<div className='flex items-center gap-3 text-xs text-[var(--text-muted)]'>
									<span className='flex items-center gap-1'>
										<span className='h-1.5 w-1.5 rounded-full bg-red-500' />
										LAN
									</span>
									<span className='flex items-center gap-1'>
										<span className='h-1.5 w-1.5 rounded-full bg-white' />
										Cloud
									</span>
								</div>
							</div>
							<Image
								src='/images/pos-screenshot.png'
								alt='Maqsad POS Terminal'
								width={1200}
								height={750}
								className='w-full'
								priority
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
