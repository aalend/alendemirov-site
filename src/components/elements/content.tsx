import { ReactNode } from 'react';
import Container from '../ui/container';

type ContentProps = {
	heading: string;
	subHeading: string;
	children?: ReactNode;
};

export default function Content({ heading, subHeading, children }: ContentProps) {
	return (
		<section>
			<Container>
				<div className='my-24 grid gap-10'>
					<div>
						<h2 className='mb-4 text-3xl'>{heading}</h2>
						<p>{subHeading}</p>
					</div>
					{children}
				</div>
			</Container>
		</section>
	);
}
