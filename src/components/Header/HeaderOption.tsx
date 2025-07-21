"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const HeaderOption = ({
	children,
	href,
}: {
	children: React.ReactNode;
	href: string;
}) => {
	const pathname = usePathname();
	const color = pathname === href ? "text-[#00AA00]" : "text-white";

	return (
		<li className={`mx-2 font-outfit text-[16px] ${color}`}>
			<Link href={href}>{children?.toString().toUpperCase()}</Link>
		</li>
	);
};
