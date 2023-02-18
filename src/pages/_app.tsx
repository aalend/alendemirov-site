import '@/styles/globals.css';
import { Poppins } from '@next/font/google';
import type { AppProps } from 'next/app';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'], preload: true });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<style jsx global>{`
				html {
					font-family: ${poppins.style.fontFamily};
				}
			`}</style>

			<Component {...pageProps} />
		</>
	);
}
