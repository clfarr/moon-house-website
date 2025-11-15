import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { password } = body;

    // Get the password from environment variables
    const correctPassword = process.env.PROJECT_PASSWORD;

    if (!correctPassword) {
      console.error('PROJECT_PASSWORD environment variable is not set');
      return NextResponse.json(
        { message: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Verify the password
    if (password === correctPassword) {
      // Create response with success message
      const response = NextResponse.json(
        { message: 'Authentication successful' },
        { status: 200 }
      );

      // Set an HTTP-only cookie for authentication
      // The cookie will be valid for 30 days
      response.cookies.set('auth-token', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
      });

      return response;
    } else {
      return NextResponse.json(
        { message: 'Invalid password' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { message: 'An error occurred during authentication' },
      { status: 500 }
    );
  }
}
