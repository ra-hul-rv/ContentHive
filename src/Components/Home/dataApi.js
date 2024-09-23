import { baseUrl, data } from "./config";

export const getDataEndpoint = async (page) => {
  try {
    const response = await fetch(`${baseUrl}${data}${page}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
