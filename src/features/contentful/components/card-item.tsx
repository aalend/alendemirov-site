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
				className='font-bold hover:underline hover:underline-offset-4 flex item gap-2'
				href={`project/${project.slug}`}
			>
				<span>View story </span>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='w-4'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25'
					/>
				</svg>
			</Link>
		</div>
	);
}
