'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Menu, X } from 'lucide-react';

const links = [
	{ href: '#showcase', label: 'Modules' },
	{ href: '#features', label: 'Features' },
	{ href: '#depth', label: 'Platform' },
	{ href: '#contact', label: 'Contact' },
];

export function Navbar() {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	const closeMenu = () => setOpen(false);

	return (
		<motion.header
			initial={{ y: -20, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5 }}
			className='fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--bg-primary)]/95 backdrop-blur-md'
		>
			<nav className='mx-auto flex h-14 min-h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6'>
				<a
					href='#'
					className='flex min-w-0 shrink items-center gap-3'
					onClick={closeMenu}
				>
					<span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--accent)] sm:h-9 sm:w-9'>
						<Layers
							className='h-4 w-4 text-white sm:h-5 sm:w-5'
							strokeWidth={2}
						/>
					</span>
					<span className='truncate text-sm font-semibold tracking-tight text-[var(--text-primary)] sm:text-base'>
						MAQSAD
					</span>
				</a>

				<ul className='hidden items-center gap-6 lg:flex lg:gap-8'>
					{links.map((link) => (
						<li key={link.href}>
							<a
								href={link.href}
								className='text-sm text-[var(--text-secondary)] transition-colors hover:text-white'
							>
								{link.label}
							</a>
						</li>
					))}
				</ul>

				<div className='flex shrink-0 items-center gap-2'>
					<a
						href='#showcase'
						className='hidden rounded-lg bg-[var(--accent)] px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-[var(--accent-hover)] sm:inline-flex sm:px-4 sm:text-sm'
					>
						Explore Demo
					</a>

					<button
						type='button'
						onClick={() => setOpen((v) => !v)}
						className='flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-white lg:hidden'
						aria-expanded={open}
						aria-label={open ? 'Close menu' : 'Open menu'}
					>
						{open ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
					</button>
				</div>
			</nav>

			<AnimatePresence>
				{open && (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className='fixed inset-0 top-14 z-40 bg-black/60 lg:hidden sm:top-16'
							onClick={closeMenu}
							aria-hidden
						/>
						<motion.div
							initial={{ opacity: 0, y: -8 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -8 }}
							transition={{ duration: 0.2 }}
							className='absolute left-0 right-0 top-full z-50 border-b border-[var(--border)] bg-[var(--bg-primary)] shadow-xl lg:hidden'
						>
							<ul className='flex flex-col px-4 py-3'>
								{links.map((link) => (
									<li key={link.href}>
										<a
											href={link.href}
											onClick={closeMenu}
											className='block rounded-lg px-3 py-3 text-base font-medium text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-card)] hover:text-white'
										>
											{link.label}
										</a>
									</li>
								))}
								<li className='mt-2 border-t border-[var(--border)] pt-3'>
									<a
										href='#showcase'
										onClick={closeMenu}
										className='flex w-full items-center justify-center rounded-lg bg-[var(--accent)] px-4 py-3 text-sm font-medium text-white hover:bg-[var(--accent-hover)]'
									>
										Explore Demo
									</a>
								</li>
							</ul>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</motion.header>
	);
}
