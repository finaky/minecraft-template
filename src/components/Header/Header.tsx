import { HeaderNavigation } from "./HeaderNavigation";

export const Header = () => {
	return (
		<header>
			<div className="flex items-center w-full h-[122px] bg-black/50 border-white/20 border-b-4">
				<div className="flex items-center font-outfit font-[800] ml-[185px]">
					<h1 className="text-[24px] ">SERVER NAME</h1>
					<h2 className="text-[11px] ml-4 text-gray-300">
						A private server for peoples
					</h2>
				</div>

				<HeaderNavigation />
			</div>
		</header>
	);
};
