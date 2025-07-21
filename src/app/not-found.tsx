import Link from "next/link";

export default function NotFound() {
	return (
		<div className="w-full h-[400px] font-poppins text-center mt-30">
			<h1 className="text-3xl font-[800] ">404 Error</h1>
			<h2 className="text-1xl font-[400] text-white/50 mb-16">
				Nie znaleziono strony
			</h2>

			<Link
				href={"/"}
				className="bg-linear-65 from-green-900 to-green-400 text-black px-16 py-4 rounded-tl-2xl rounded-br-2xl cursor-pointer transition-opacity duration-300 ease-in-out hover:opacity-80"
			>
				Wróć na Stronę Główną
			</Link>
		</div>
	);
}
