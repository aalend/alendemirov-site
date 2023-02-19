import Image from 'next/image';

type PhotoProps = {
	src: string;
	alt: string;
	className?: string;
};

export default function Photo({ src, alt, className }: PhotoProps) {
	return (
		<Image
			className={`${className ?? ''}`}
			src={src}
			alt={alt}
			priority={true}
			width={736}
			height={441}
		/>
	);
}
