export async function GET() {
  return new Response(JSON.stringify({ message: 'Hello from Legion Hyt JS API! (By Death legion team)' }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
