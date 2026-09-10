import { searchRemoteOK } from "../providers/remoteOk.js";

export async function searchJobs(query: string) {
  return await searchRemoteOK(query);
}
