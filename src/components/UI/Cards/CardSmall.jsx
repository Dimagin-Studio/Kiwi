import { useEffect, useState } from "react";
import { getUpcomingEvents } from "../../../services/directusService";
import { Button } from "../Buttons/Button";

const API_URL = "http://localhost:8055";
export function CardSmall() {
	const [event, setEvent] = useState(null);

	useEffect(() => {
		async function fetchEvents() {
			const events = await getUpcomingEvents();
			if (events.length > 1) {
				setEvent(events[1]);
			}
		}
		fetchEvents();
	}, []);

	if (!event) return <p>Chargement...</p>;

	return (
		<div className="relative overflow-hidden rounded-3xl w-full lg:w-1/3 h-[550px] group">
			<img
				src={`${API_URL}/assets/${event.image}`}
				alt={event.title}
				className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:blur-none opacity-50 group-hover:opacity-100"
			/>
			<div
				className="absolute inset-0 bg-gradient-to-t from-[#CFFAAC] to-[#CFFAAC] backdrop-blur-lg transition-all duration-500 opacity-50 
      group-hover:opacity-0 pointer-events-none"
			></div>
			<div className="relative z-10 p-6 text-black flex flex-col h-full">
				<div className="flex justify-between items-start">
					<span className="bg-white text-green-700 px-4 py-1 rounded-full text-sm">
						{event.category}
					</span>
					<h2 className="text-xl font-bold text-right">{event.title}</h2>
				</div>

				<div className="mt-auto bg-white/50 p-4 rounded-[30px]">
					<h3 className="text-lg font-bold">À VENIR</h3>
					<p className="mt-2 text-lg text-left mr-3 overflow-hidden text-ellipsis break-words line-clamp-4">
						{event.description}
					</p>
					<div className="mt-3 flex space-x-4 justify-center">
						<Button text="Voir Plus" color="white" />
						<Button text="S'inscrire" color="green" />
					</div>
				</div>
			</div>
		</div>
	);
}
