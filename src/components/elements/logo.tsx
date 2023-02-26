import Link from 'next/link';

export default function Logo() {
	return (
		<div>
			<Link href={'/'} className=' font-extrabold'>
				<span>Alen</span>
			</Link>
		</div>
	);
}
