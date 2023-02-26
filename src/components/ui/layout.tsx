import { ReactNode } from 'react';
import Logo from '../elements/logo';
import Icons from '../social/icons';
import Container from './container';

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<header className='mt-12'>
				<Container>
					<Logo />
				</Container>
			</header>
			<main>{children}</main>
			<footer>
				<Container>
					<div className='flex justify-between py-12'>
						<Logo />
						<Icons width={20} />
					</div>
				</Container>
			</footer>
		</>
	);
}
