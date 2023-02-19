import { ProjectProps } from '../types/data';
import CardItem from './card-item';

export default function Card({ projects }: { projects: ProjectProps[] }) {
	return (
		<>
			{projects.map((project, index) => (
				<CardItem key={index} project={project} />
			))}
		</>
	);
}
