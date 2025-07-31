import Link from "next/link";

export default function NotFound() {
	return (
		<div className="w-full h-[400px] font-poppins mt-30 flex flex-col items-center">
			<div className="bg-black/80 w-[300px] h-[100px] text-center">
				<h1 className="text-3xl font-[800] mt-5">404 Error</h1>
				<h2 className="text-1xl font-[600] text-blue-500 mb-16">
					Nie znaleziono strony
				</h2>
			</div>

			<Link
				href={"/"}
				className="mt-12 bg-linear-65 from-blue-900 to-blue-400 text-white font-bold px-16 py-4 rounded-tl-2xl rounded-br-2xl cursor-pointer transition-opacity duration-300 ease-in-out hover:opacity-80"
			>
				Wróć na Stronę Główną
			</Link>
		</div>
	);
}
