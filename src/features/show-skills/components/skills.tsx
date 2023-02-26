import Image from 'next/image';
import TOOLS from '../data/skills.json';

type ToolsProps = {
	item: {
		name: string;
		icon: string;
	};
};

const SkillsItem = function ({ item: { name, icon } }: ToolsProps) {
	return (
		<li className='flex basis-auto items-center gap-4 rounded-md border py-2 px-4 text-center shadow-md'>
			<Image
				className='object-cover'
				src={icon}
				alt={name}
				width={24}
				height={24}
				priority={true}
			/>
			<span>{name}</span>
		</li>
	);
};

export default function Skills() {
	return (
		<ul className='flex  flex-wrap gap-4'>
			{TOOLS.map((item, index) => {
				return <SkillsItem key={index} item={item} />;
			})}
		</ul>
	);
}
