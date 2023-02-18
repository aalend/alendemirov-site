import { ReactChildren } from '../types/react-children';

export default function Container({ children, className }: ReactChildren) {
	return <div className={`container mx-auto max-w-3xl px-4 ${className ?? ''}`}>{children}</div>;
}
