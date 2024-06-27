import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // Handle registration logic here (e.g., save to database)
  
  // For demonstration, let's assume registration is successful and return user data
  const userData = {
    id: 1, // this should be the actual user id from the database
    email,
    password
  };

  return NextResponse.json(userData, { status: 200 });
}
