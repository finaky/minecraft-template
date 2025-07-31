"use client";
import { useSlider } from "@/hooks/useSliderHook";
import Image from "next/image";

export default function Slider() {
	const { image, title, description, progress } = useSlider();

	return (
		<section className="flex justify-center mt-16 ">
			<div className="relative w-[500px] lg:w-[1070px] h-[461px] shadow-blue-500 shadow-2xl">
				<Image src={image} fill alt="" className="object-cover hue-rotate-60" />
				<div className="absolute bottom-0 left-0 w-full h-[30px] bg-black z-10" />
				<div className="absolute bottom-[30px] left-0 w-full h-[370px] bg-gradient-to-t from-black to-transparent z-10" />{" "}
				<div className="absolute bottom-0 z-20 ml-10 font-poppins my-5 max-w-[85%]">
					<p className="text-2xl font-bold">{title}</p>
					<p className="text-white/50 text-[13px]">{description}</p>
				</div>
				<div
					className={`h-2 bg-blue-500/30 absolute bottom-0 z-10`}
					id="progress-bar"
					style={{ width: `${progress}%` }}
				></div>
			</div>
		</section>
	);
}
