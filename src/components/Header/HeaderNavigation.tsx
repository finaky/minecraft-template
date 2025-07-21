import { options } from "@/data/navigation";
import { HeaderOption } from "./HeaderOption";

export const HeaderNavigation = ({ className }: { className?: string }) => {
	return (
		<ul className={`flex absolute  ${className}`}>
			{options.map((option) => {
				return (
					<HeaderOption href={option.href} key={option.id}>
						{option.text}
					</HeaderOption>
				);
			})}
		</ul>
	);
};
