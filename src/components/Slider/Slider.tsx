import { sliders } from "@/data/slider";
import Image from "next/image";

export const Slider = () => {
	return (
		<section className="flex justify-center mt-16">
			<div className="relative w-[1070px] h-[461px]">
				<Image src={sliders[0].image} width={1070} height={421} alt="" />
				<div className="absolute bottom-0 left-0 w-full h-[30px] bg-black z-10" />
				<div className="absolute bottom-[30px] left-0 w-full h-[370px] bg-gradient-to-t from-black to-transparent z-10" />{" "}
				<div className="absolute bottom-0 z-20 ml-10 font-poppins my-5 max-w-[85%]">
					<p className="text-2xl font-bold">{sliders[0].title}</p>
					<p className="text-white/50 text-[13px]">{sliders[0].description}</p>
				</div>
			</div>
		</section>
	);
};
