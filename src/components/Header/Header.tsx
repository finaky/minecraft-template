"use client";
import { useState } from "react";
import { HeaderMobileMenu } from "./HeaderMobileMenu";
import { HeaderNavigation } from "./HeaderNavigation";
import { MenuToggle } from "./MenuToggle";

export const Header = () => {
	const [isMenu, setIsMenu] = useState<boolean>(false);

	return (
		<header>
			<div className="flex items-center w-full h-[122px] bg-blue-900/80 border-white/20 border-b-4 z-100 relative">
				<div className="flex flex-col lg:flex-row items-center font-outfit font-[800] ml-5 lg:ml-[185px]">
					<h1 className="text-[24px] ">SERVER NAME</h1>
					<h2 className="text-[11px] ml-4 text-gray-300">
						A private server for peoples
					</h2>
				</div>

				<div
					className="absolute lg:hidden right-15 cursor-pointer"
					onClick={() => setIsMenu(!isMenu)}
				>
					<MenuToggle
						isMenu={isMenu}
						activeClassName={"rotate-45"}
						inactiveClassName={"-top-2"}
					/>
					<MenuToggle
						isMenu={isMenu}
						activeClassName={"-rotate-45"}
						inactiveClassName={"top-0"}
					/>
					<MenuToggle
						isMenu={isMenu}
						activeClassName={"rotate-45 opacity-0"}
						inactiveClassName={"top-2"}
					/>
				</div>

				<HeaderNavigation className="max-lg:hidden right-[160px]" />
				{isMenu && <HeaderMobileMenu />}
			</div>
		</header>
	);
};
