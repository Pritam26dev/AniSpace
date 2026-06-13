import { ANIME } from "@consumet/extensions";

export async function GET() {
  try {
    const zoro = new ANIME.Zoro();
    const results = await zoro.search("Naruto");
    return Response.json(results);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}