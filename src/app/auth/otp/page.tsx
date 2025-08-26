
'use client';
// OTP verification page (step 2)
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import OTPInputs from '@/components/OTPInput';

export default function OTPPage() {
  const router = useRouter();
  const [phone, setPhone] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [code, setCode] = useState('');

  useEffect(() => {
    const p = sessionStorage.getItem('auth_phone') || '';
    setPhone(p);
    // simulate that OTP was sent successfully
    setSuccessMsg('Verification code has been sent successfully');
    const t = setTimeout(() => setSuccessMsg(''), 3500);
    return () => clearTimeout(t);
  }, []);

  function handleEdit() {
    router.push('/auth/login');
  }

  async function handleVerify() {
    if (code.length !== 6) return alert('Enter 6-digit code');
    // simulate verify
    await new Promise((r) => setTimeout(r, 600));
    sessionStorage.setItem('isLoggedIn', '1');
    router.push('/dashboard');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-3 justify-center">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">S</div>
            <div className="text-xl font-bold">SalonApp</div>
          </div>
          <h2 className="mt-4 text-lg font-semibold">Enter verification code</h2>
        </div>

        <div className="card p-6 shadow-lg">
          {successMsg && (
            <div className="alert alert-success shadow-lg mb-4 transition-opacity duration-500">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>{successMsg}</span>
              </div>
            </div>
          )}

          <div className="mb-3 text-sm text-muted">We sent the 6-digit code to <strong>{phone}</strong></div>

          <button className="btn btn-ghost btn-sm mb-3" onClick={handleEdit}>Edit phone number</button>

          <OTPInputs length={6} value={code} onChange={setCode} />

          <button onClick={handleVerify} className="btn btn-primary w-full mt-4">Verify</button>
        </div>
      </div>
    </div>
  );
}
