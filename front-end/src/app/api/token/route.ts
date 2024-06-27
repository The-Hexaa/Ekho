
import { AccessToken } from 'livekit-server-sdk';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get('id');
  // const roomName = id || Math.random().toString(36).substring(7); // Use ID if provided, otherwise generate a random room name
  console.log("room name: ", id);

  const apiKey = process.env.NEXT_PUBLIC_LIVEKIT_API_KEY;
  const apiSecret = process.env.NEXT_PUBLIC_LIVEKIT_API_SECRET;
  console.log("key: ",process.env.NEXT_PUBLIC_LIVEKIT_API_KEY , "secret: ",process.env.NEXT_PUBLIC_LIVEKIT_API_SECRET )
  const at = new AccessToken(apiKey, apiSecret, { identity: "human_user" });

  at.addGrant({
    room: id,
    roomJoin: true,
    canPublish: true,
    canPublishData: true,
    canSubscribe: true,
  });

  return new Response(JSON.stringify({ accessToken: await at.toJwt(), url: process.env.NEXT_PUBLIC_LIVEKIT_URL }), {
    headers: { 'Content-Type': 'application/json' }
  });
}