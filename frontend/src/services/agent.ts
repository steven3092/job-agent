const API_URL = "http://localhost:3000";

export async function sendMessage(message: string) {
  const response = await fetch(`${API_URL}/agent`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
    }),
  });

  if (!response.ok) {
    throw new Error("Unable to contact agent");
  }

  return response.json();
}
