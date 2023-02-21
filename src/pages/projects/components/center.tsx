import { ChildrenProps } from '../type/children';

export default function Center({ children }: ChildrenProps) {
	return <div className='text-center'>{children}</div>;
}
