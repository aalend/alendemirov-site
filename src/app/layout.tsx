import Logo from '@/components/elements/logo';
import Icons from '@/components/social/icons';
import Container from '@/components/ui/container';
import '@/styles/globals.css';
import { Hind_Madurai, Montserrat } from '@next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['800'], variable: '--montseratt' });
const hindMadurai = Hind_Madurai({
	subsets: ['latin'],
	weight: ['400'],
	variable: '--hind_madurai',
});

export const metadata = {
	title: 'Alen Demirov',
	description:
		"Front-end developer with a passion for creating websites. - I'm a curious and resourceful learner who utilizes diverse sources of knowledge, including YouTube and other similar platforms, to expand my understanding and sharpen my skills.",
	openGraph: {
		title: 'Alen Demirov',
		description:
			"Front-end developer with a passion for creating websites. - I'm a curious and resourceful learner who utilizes diverse sources of knowledge, including YouTube and other similar platforms, to expand my understanding and sharpen my skills.",
		url: 'https://alendemirov.netlify.app',
		siteName: 'Alen Demirov',
		images: [
			{
				url: 'https://ik.imagekit.io/hhrhmkcoa/alendemirov-assets/Screenshot_2023-03-18_at_23.11.41.png?updatedAt=1679177515246',
				width: 800,
				height: 600,
			},
		],
		locale: 'en-US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Alen Demirov',
		description:
			"Front-end developer with a passion for creating websites. - I'm a curious and resourceful learner who utilizes diverse sources of knowledge, including YouTube and other similar platforms, to expand my understanding and sharpen my skills.",
		siteId: '1144916338437238785',
		creator: '@aalendemirov',
		creatorId: '1144916338437238785',
		images: [
			'https://ik.imagekit.io/hhrhmkcoa/alendemirov-assets/Screenshot_2023-03-18_at_23.11.41.png?updatedAt=1679177515246',
		],
	},
};

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
