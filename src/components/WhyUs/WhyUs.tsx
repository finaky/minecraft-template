import { whyUs } from "@/data/whyUs";
import { WhyUsCard } from "./WhyUsCard";

export const WhyUs = () => {
	return (
		<section className="grid grid-cols-3 mt-30 w-[1068px] relative left-1/2 -translate-x-1/2">
			{whyUs.map((w) => {
				return (
					<WhyUsCard
						title={w.title}
						description={w.description}
						id={w.id}
						key={w.id}
					/>
				);
			})}
		</section>
	);
};
