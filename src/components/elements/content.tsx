import { ReactNode } from 'react';
import Container from '../ui/container';

type ContentProps = {
	heading: string;
	subHeading: string;
	children?: ReactNode;
	className?: string;
};

export default function Content({ heading, subHeading, children, className }: ContentProps) {
	return (
		<section className={`${className ?? ''}`}>
			<Container>
				<div className='grid gap-8 py-12'>
					<div>
						<h2 className='mb-4 text-3xl font-bold'>{heading}</h2>
						<p className='text-gray-700'>{subHeading}</p>
					</div>
					{children}
				</div>
			</Container>
		</section>
	);
}
