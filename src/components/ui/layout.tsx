import Link from 'next/link';
import { ReactNode } from 'react';
import Icons from '../social/icons';
import Container from './container';

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<header>
				<Container>
					<div className='py-12'>
						<Link href={'/'}>Alen</Link>
					</div>
				</Container>
			</header>
			<main>{children}</main>
			<footer className='bg-gray-50'>
				<Container>
					<div className='flex justify-between py-12'>
						<Link href={'/'}>Alen</Link>
						<Icons width={20} />
					</div>
				</Container>
			</footer>
		</>
	);
}
