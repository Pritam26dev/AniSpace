export async function GET() {
  try {
    const consumet = await import("@consumet/extensions");

    return Response.json({
      success: true,
      keys: Object.keys(consumet),
    });
  } catch (error) {
    return Response.json({
      success: false,
      error: error.message,
    });
  }
}