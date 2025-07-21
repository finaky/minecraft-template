import Image from "next/image";
import CreeperImage from "@/assets/styles/images/creeper_in_GREEN_hell.png";

export const Slider = () => {
	return (
		<section className="flex justify-center mt-16">
			<div className="relative w-[1070px] h-[461px]">
				<Image src={CreeperImage} width={1070} height={421} alt="" />
				<div className="absolute bottom-0 left-0 w-full h-[30px] bg-black z-10" />
				<div className="absolute bottom-[30px] left-0 w-full h-[370px] bg-gradient-to-t from-black to-transparent z-10" />{" "}
				<div className="absolute bottom-0 z-20 ml-10 font-poppins my-5 max-w-[85%]">
					<p className="text-2xl font-bold">
						Nowe Creepery pojawily sie na serwerze...
					</p>
					<p className="text-white/50 text-[13px]">
						To już nie są tylko zwykłe wybuchające stwory. Niektóre z nich
						poruszają się błyskawicznie i eksplodują niemal natychmiast, inne po
						wybuchu zamrażają teren, spowalniając graczy. Są też takie, które
						zostawiają po sobie trujące zarodniki i gęste pnącza. Uważaj, bo
						każda eksplozja może zaskoczyć czymś nowym!
					</p>
				</div>
			</div>
		</section>
	);
};
