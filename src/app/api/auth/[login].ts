
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'secret';
const REFRESH_SECRET = process.env.REFRESH_SECRET || 'refresh_secret';

export async function POST(req: NextRequest) {
  const { phone, otp } = await req.json();

  // Simple fake OTP validation
  if (otp !== '123456') {
    return NextResponse.json({ error: 'Invalid OTP' }, { status: 401 });
  }

  // Create access token
  const accessToken = jwt.sign({ phone }, SECRET, { expiresIn: '15m' });
  const refreshToken = jwt.sign({ phone }, REFRESH_SECRET, { expiresIn: '7d' });

  const res = NextResponse.json({ success: true });
  res.cookies.set('accessToken', accessToken, { httpOnly: true, path: '/' });
  res.cookies.set('refreshToken', refreshToken, { httpOnly: true, path: '/' });
  return res;
}
