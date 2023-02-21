import { ReactNode } from 'react';

type ChildrenProps = {
	children: ReactNode;
};

export default function Center({ children }: ChildrenProps) {
	return <div className='text-center'>{children}</div>;
}
