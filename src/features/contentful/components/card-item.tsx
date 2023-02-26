import Image from 'next/image';
import Link from 'next/link';
import { ProjectProps } from '../types/data';

export default function CardItem({ project }: { project: ProjectProps }) {
	return (
		<div>
			<Image
				className='mb-8 aspect-video rounded-md object-cover'
				src={project.image.url}
				alt={project.image.title}
				width={project.image.width}
				height={project.image.height}
				priority={true}
			/>
			<h3 className='mb-4 text-xl'>{project.title}</h3>
			<p className='mb-2 line-clamp-3'>{project.description}</p>
			<Link
				className='font-bold hover:underline hover:underline-offset-4'
				href={`${project.slug}`}
			>
				View story
			</Link>
		</div>
	);
}
