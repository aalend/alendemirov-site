import { ReactNode } from 'react';

type ChildrenProps = {
	children: ReactNode;
};

export default function Splitter({ children }: ChildrenProps) {
	return <div className='splitter grid grid-cols-2 gap-16'>{children}</div>;
}
