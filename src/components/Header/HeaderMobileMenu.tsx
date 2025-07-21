import { HeaderNavigation } from "./HeaderNavigation";

export const HeaderMobileMenu = () => {
	return (
		<div className="lg:hidden absolute w-full h-[250px] top-29 flex justify-center bg-black/70 z-30 backdrop-blur-md shadow-2xl shadow-black">
			<HeaderNavigation className="flex-col mt-15" />
		</div>
	);
};
