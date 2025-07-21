export const MenuToggle = ({
	isMenu,
	activeClassName,
	inactiveClassName,
}: {
	isMenu: boolean;
	activeClassName: string;
	inactiveClassName: string;
}) => {
	return (
		<div
			className={`absolute w-8 h-[2px] bg-white/80 transition-all duration-300 ease-in-out  ${
				isMenu ? `${activeClassName}` : inactiveClassName
			}`}
		></div>
	);
};
