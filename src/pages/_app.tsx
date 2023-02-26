import '@/styles/globals.css';
import { Montserrat, Hind_Madurai } from '@next/font/google';
import type { AppProps } from 'next/app';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['800'], variable: '--montseratt' });
const hindMadurai = Hind_Madurai({
	subsets: ['latin'],
	weight: ['400'],
	variable: '--hind_madurai',
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			{/* <style jsx global>{``}</style> */}

			<div
				className={`grid min-h-screen grid-rows-[auto_1fr_auto] ${hindMadurai.className} ${montserrat.variable}`}
			>
				<Component {...pageProps} />
			</div>
		</>
	);
}
