import { redirect } from "react-router-dom";

export async function getAll(
  url: string,
  signal: RequestInit,
  redirectPathIfResponseIsNotOk = "/error",
) {
  const res = await fetch(url, signal);
  if (res.ok) return res.json();
  throw redirect(redirectPathIfResponseIsNotOk);
}
export async function getById(
  url: string,
  id: number,

  signal: RequestInit,
  redirectPathIfResponseIsNotOk = "/error",
) {
  url = `${url}/${id}`;
  const res = await fetch(url, signal);
  if (res.ok) return res.json();
  throw redirect(redirectPathIfResponseIsNotOk);
}
