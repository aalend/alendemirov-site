import Image from 'next/image';
import TOOLS from '../data/skills.json';

type ToolsProps = {
	item: {
		name: string;
		icon: string;
	};
};

// export this function to component
const SkillsItem = function ({ item: { name, icon } }: ToolsProps) {
	return (
		<li className='rounded-md shadow-md'>
			<div className='rounded-md bg-gradient-to-tr from-pink-400 via-red-400 to-yellow-400 p-[2px] text-center'>
				<div className='flex h-full w-full basis-auto items-center gap-3 rounded-md bg-neutral-50 px-4 py-2 dark:bg-neutral-800'>
					<Image
						className='object-cover'
						src={icon}
						alt={name}
						width={20}
						height={20}
						priority={true}
					/>
					<span>{name}</span>
				</div>
			</div>
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
