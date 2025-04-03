import axios from "axios";

export async function getUpcomingEvents() {
  try {
    const response = await axios.get(`/api/items/events?sort=date`);
    return response.data.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des événements :", error);
    return [];
  }
}
