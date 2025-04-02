import { useEffect, useState } from "react";
import { getUpcomingEvents } from "../../../services/directusService";
import { Button } from "../Buttons/Button";

const API_URL = "http://localhost:8055";

export function CardLong() {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    async function fetchEvents() {
      const events = await getUpcomingEvents();
      if (events.length > 0) {
        setEvent(events[0]);
      }
    }
    fetchEvents();
  }, []);

  if (!event) return <p>Chargement...</p>;

  return (
    <div className="relative overflow-hidden rounded-3xl w-full lg:w-2/3 h-[550px] group">
      <img
        src={`${API_URL}/assets/${event.image}`}
        alt={event.title}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-500 opacity-50"
      />
      <div className="relative z-10 p-8 flex flex-col items-start h-full">
        <span className="absolute top-8 left-8 bg-green-700 text-white px-4 py-1 rounded-full text-sm">
          {event.category}
        </span>

        <div className="w-[70%] mt-40">
          <h2 className="text-3xl font-bold text-left">{event.title}</h2>
          <p className="mt-2 text-lg text-left mr-3 overflow-hidden text-ellipsis break-words line-clamp-4">
            {event.description}
          </p>
          <h3 className="text-xl font-bold mt-4 text-left">À venir</h3>
          <p className="text-lg text-left">
            {new Date(event.date).toLocaleDateString()}
          </p>
          <div className="mt-4 flex space-x-4">
            <Button text="Voir Plus" color="white" />
            <Button text="S'inscrire" color="green" />
          </div>
        </div>
      </div>
    </div>
  );
}
