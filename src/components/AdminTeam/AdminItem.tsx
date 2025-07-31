import Image, { StaticImageData } from "next/image";

type AdminItem = {
	nick: string;
	rank: string;
	image: StaticImageData;
};

export const AdminItem = ({ nick, rank, image }: AdminItem) => {
	return (
		<div className="w-[300px] h-[300px] bg-black/70 mx-3 flex flex-col justify-center items-center border-white/10 border-5 rounded-tl-2xl rounded-br-2xl mt-10">
			<p className="text-3xl font-[800] mt-5">{nick}</p>
			<p className="text-white/50 mb-3">{rank}</p>

			<Image src={image} width={200} height={200} alt="" />
		</div>
	);
};
