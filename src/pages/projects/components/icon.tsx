import Image from 'next/image';

export default function Icon({ src, alt }: {src:string, alt: string}) {
	return (
		<div className='flex w-2/3 items-center gap-8 rounded-md px-12 shadow-md'>
			<Image className='my-4' src={src} alt={alt} width={24} height={24} />
			<span>{alt}</span>
		</div>
	);
}
