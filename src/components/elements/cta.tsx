import Container from '../ui/container';
import Content from './content';

export default function Cta() {
	return (
		<>
			<Container>
				<div className='h-px w-full bg-neutral-500'></div>
			</Container>
			<Content
				heading="Let's build something together"
				subHeading="So if you're looking for a front-end developer who is passionate about creating clean, functional, and responsive websites, look no further! Get in touch with me today to discuss your project and let's build something great together."
			>
				<a href='mailto:aalendemirov@gmail.com' className='animate-text font-bold text-bg-clip'>
					aalendemirov@gmail.com
				</a>
			</Content>
		</>
	);
}
