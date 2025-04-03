import axios from "axios";

const API_URL = "http://localhost:8055";

export async function getUpcomingEvents() {
	try {
		const response = await axios.get(`${API_URL}/items/events?sort=date`);
		return response.data.data;
	} catch (error) {
		return [];
	}
}
