import Image, { StaticImageData } from 'next/image';

type PhotoProps = {
	src: StaticImageData;
	alt: string;
	className?: string;
};

export default function Photo({ src, alt, className }: PhotoProps) {
	return <Image className={`${className ?? ''}`} src={src} alt={alt} priority={true} />;
}
