import { ReactNode } from 'react';

type ChildrenProps = {
	children: ReactNode;
};

export default function Splitter({ children }: ChildrenProps) {
	return <div className='splitter grid gap-16 md:grid-cols-2 '>{children}</div>;
}
