import Link from 'next/link';
import { GitHub, Twitter } from 'react-feather';

export default function Icons({ width }: { width: number }) {
	return (
		<div className='flex items-center gap-4'>
			<Link
				rel='noopener noreferrer'
				href={'https://github.com/aalend'}
				target={'_blank'}
				className='flex w-full items-center justify-between gap-3 rounded-md border border-neutral-200 py-2 px-4'
			>
				<GitHub width={width} />
				<span>Github</span>
			</Link>
			<Link
				rel='noopener noreferrer'
				href={'https://twitter.com/aalendemirov'}
				target={'_blank'}
				className='flex w-full items-center justify-between gap-3 rounded-md border border-neutral-200 py-2 px-4'
			>
				<Twitter width={width} />
				<span>Twitter</span>
			</Link>
		</div>
	);
}
