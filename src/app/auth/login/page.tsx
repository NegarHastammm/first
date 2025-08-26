
'use client';
// Phone input auth page (step 1)
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthPhoneInput from '@/components/AuthPhoneInput';

export default function LoginPage() {
  const [phone, setPhone] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleContinue() {
    // English comments only
    if (!accepted) return alert('You must accept the terms');
    if (!phone || phone.length < 9) return alert('Please enter a valid phone number');
    setLoading(true);
    try {
      // Simulate API call - replace with real call later
      await new Promise((r) => setTimeout(r, 700));
      sessionStorage.setItem('auth_phone', phone);
      router.push('/auth/otp');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          {/* Logo and app name */}
          <div className="inline-flex items-center gap-3 justify-center">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-blue-400 font-bold">S</div>
            <div className="text-xl font-bold">SalonApp</div>
          </div>
          <h2 className="mt-4 text-lg font-semibold">Login / Sign Up</h2>
        </div>

        <div className="card p-6 shadow-lg">
          <AuthPhoneInput value={phone} onChange={setPhone} />

          <label className="flex items-center gap-2 mt-4">
            <input type="checkbox" checked={accepted} onChange={(e) => setAccepted(e.target.checked)} className="checkbox" />
            <span className="text-sm">I accept the terms and conditions</span>
          </label>

          <button onClick={handleContinue} className="btn btn-primary w-full mt-4" disabled={loading}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
