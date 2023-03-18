import TOOLS from '../data/skills.json';
import SkillItem from './skill-item';

export default function Skills() {
	return (
		<ul className='flex  flex-wrap gap-4'>
			{TOOLS.map((item, index) => {
				return <SkillItem key={index} item={item} />;
			})}
		</ul>
	);
}
