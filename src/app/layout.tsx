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
			className={`bg-neutral-900 text-neutral-100 ${hindMadurai.variable} ${montserrat.variable}`}
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
						<div className='flex flex-wrap-reverse items-center justify-center text-center gap-8 pb-12 sm:justify-between'>
							<div>Copyright &copy; 2023 &middot; Alen Demirov</div>
							<Icons width={20} />
						</div>
					</Container>
				</footer>
			</body>
		</html>
	);
}
