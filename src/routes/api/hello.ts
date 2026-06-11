export async function GET() {
  return new Response(JSON.stringify({ message: 'Hello from Death legion team API!' }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
