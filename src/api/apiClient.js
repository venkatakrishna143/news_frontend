// Placeholder for API integration functions
export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};