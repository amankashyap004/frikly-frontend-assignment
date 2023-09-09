export async function fetchData() {
  try {
    const response = await fetch("./mockData/data.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
