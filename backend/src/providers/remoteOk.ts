import axios from "axios";

export async function searchRemoteOK(keyword: string) {
  const response = await axios.get("https://remoteok.com/api", {
    headers: {
      "User-Agent": "Mozilla/5.0",
    },
  });

  return response.data
    .filter((job: any) =>
      job.position?.toLowerCase().includes(keyword.toLowerCase())
    )
    .map((job: any) => ({
      title: job.position,
      company: job.company,
      location: "Remote",
      url: job.url,
    }));
}
