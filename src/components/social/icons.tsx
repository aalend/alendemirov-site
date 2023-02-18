import Link from 'next/link';
import { GitHub, Instagram, Twitter } from 'react-feather';

export default function Icons({ width }: { width: number }) {
	return (
		<div className='flex items-center gap-4'>
			<Link
				href={'https://instagram.com/alen_demirov'}
				className='hover:scale-105'
				target={'_blank'}
			>
				<Instagram width={width} />
			</Link>
			<Link href={'https://github.com/aalend'} target={'_blank'} className='hover:scale-105'>
				<GitHub width={width} />
			</Link>
			<Link
				href={'https://twitter.com/aalendemirov'}
				target={'_blank'}
				className='hover:scale-105'
			>
				<Twitter width={width} />
			</Link>
		</div>
	);
}
