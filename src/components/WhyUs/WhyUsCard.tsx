type WhyUsCard = {
	title: string;
	description: string;
	id: number;
};

export const WhyUsCard = ({ title, description, id }: WhyUsCard) => {
	return (
		<div className="w-[300px] h-[385px] mx-0 lg:mx-10 my-5">
			<div className="w-[56px] h-[35px] bg-[#282828] text-center text-[20px] font-outfit rounded-tl-2xl">
				{id}
			</div>

			<div className="w-full h-[350px] bg-[#000]/80 border-[#3D3D3D]/50 border-5">
				<div className="my-5 mx-5 font-poppins">
					<p className="text-[20px] font-[700]">{title}</p>
					<p className="text-[14px] text-white/60">{description}</p>
				</div>
			</div>
		</div>
	);
};
