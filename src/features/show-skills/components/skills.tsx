const LIST_OF_TOOLS = [
	'HTML',
	'CSS',
	'Sass',
	'JavaScript',
	'TypeScript',
	'React',
	'NextJS',
	'Git',
	'Figma',
];

export default function Skills() {
	return (
		<ul className='flex  flex-wrap gap-4'>
			{LIST_OF_TOOLS.map((t, i) => {
				return (
					<li className='basis-auto rounded-md border py-2 px-6 text-center shadow-md' key={i}>
						{t}
					</li>
				);
			})}
		</ul>
	);
}
