import axios from "axios";

const API_BASE_URL = import.meta.env.PROD
  ? "https://kiwi-directus.dimagin.be"
  : "/api";

// const API_BASE_URL = "https://kiwi-directus.dimagin.be";

export async function getUpcomingEvents() {
  try {
    const response = await axios.get(`${API_BASE_URL}/items/events?sort=date`);
    return response.data.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des événements :", error);
    return [];
  }
}
