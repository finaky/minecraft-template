import { options } from "@/constants/navigation";
import { HeaderOption } from "./HeaderOption";

export const HeaderNavigation = () => {
	return (
		<ul className="flex absolute right-[160px]">
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
