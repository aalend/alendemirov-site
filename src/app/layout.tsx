import Logo from '@/components/elements/logo';
import Icons from '@/components/social/icons';
import Container from '@/components/ui/container';
import '@/styles/globals.css';
import { Montserrat, Hind_Madurai } from '@next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['800'], variable: '--montseratt' });
const hindMadurai = Hind_Madurai({
	subsets: ['latin'],
	weight: ['400'],
	variable: '--hind_madurai',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang='en'
			className={`text-neutral-800 dark:bg-neutral-800 dark:text-neutral-50 ${hindMadurai.variable} ${montserrat.variable}`}
		>
			<body>
				<header className='mt-12'>
					<Container>
						<Logo />
					</Container>
				</header>
				<main>{children}</main>
				<footer>
					<Container>
						<div className='flex justify-between pb-12'>
							<Logo />
							<Icons width={20} />
						</div>
					</Container>
				</footer>
			</body>
		</html>
	);
}
