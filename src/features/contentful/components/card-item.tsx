import Photo from '@/components/elements/photo';
import Link from 'next/link';
import { ProjectProps } from '../types/data';

export default function CardItem({ project }: { project: ProjectProps }) {
	return (
		<div>
			<Photo
				src={project.image.url}
				alt={project.image.title}
				className='mb-8 w-full rounded-md shadow-md'
			/>
			<h3 className='mb-4 text-xl font-bold'>{project.title}</h3>
			<p className='mb-2'>{project.description}</p>
			<Link
				className='font-bold hover:underline hover:underline-offset-4'
				href={`/projects/${project.slug}`}
			>
				View story
			</Link>
		</div>
	);
}
