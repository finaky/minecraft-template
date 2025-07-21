import { Header } from "@/components/Header/Header";
import { Slider } from "@/components/Slider/Slider";
import { WhyUs } from "@/components/WhyUs/WhyUs";
import { Footer } from "./Footer/Footer";

export default function IndexPageContent() {
	return (
		<>
			<Header />
			<Slider />
			<WhyUs />
			<Footer />
		</>
	);
}
