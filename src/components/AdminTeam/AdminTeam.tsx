import { administration } from "@/data/administration";
import { AdminItem } from "./AdminItem";

export const AdminTeam = () => {
	return (
		<div className="w-full text-center font-outfit mt-15 mb-20">
			<h2 className="text-3xl font-[800]">Admin Team</h2>

			<div className="flex flex-wrap justify-center mt-10">
				{administration.map((admin) => {
					return (
						<AdminItem
							nick={admin.nick}
							rank={admin.rank}
							image={admin.avatarImg}
							key={`administration. ${admin.id}`}
						/>
					);
				})}
			</div>
		</div>
	);
};
