import type { Metadata } from "next";
import { Geist, Poppins, Outfit } from "next/font/google";
import "./../assets/styles/globals.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const poppins = Poppins({
	variable: "--font-poppins",
	weight: ["400", "700"],
	style: "normal",
});

const outfit = Outfit({
	variable: "--font-outfit",
	weight: ["300", "400", "800"],
	style: "normal",
});

export const metadata: Metadata = {
	title: "Minecraft Template",
	description: "Free Minecraft Template Website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${poppins.variable} ${outfit.variable} antialiased`}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
