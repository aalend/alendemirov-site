import Image from 'next/image';

type ToolsProps = {
	item: {
		name: string;
		icon: string;
	};
};

export default function SkillItem({ item: { name, icon } }: ToolsProps) {
	return (
		<li className='rounded-md'>
			<div className='rounded-md border border-neutral-400 text-center'>
				<div className='flex h-full w-full basis-auto items-center gap-3 rounded-md px-4 py-2'>
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
}
