// src/components/OTPInputs.tsx
'use client';
import { useRef } from 'react';

type Props = {
  length?: number;
  value: string;
  onChange: (v: string) => void;
};

export default function OTPInputs({ length = 6, value, onChange }: Props) {
  // Create a fixed-length array of refs
  const refs = useRef<HTMLInputElement[]>(Array.from({ length }));

  function handleChange(e: React.ChangeEvent<HTMLInputElement>, i: number) {
    const v = e.target.value.replace(/[^0-9]/g, '').slice(0, 1);
    const next = value.split('');
    next[i] = v;
    onChange(next.join('').slice(0, length));

    if (v && i < length - 1) {
      refs.current[i + 1]?.focus();
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>, i: number) {
    if (e.key === 'Backspace' && !value[i] && i > 0) {
      refs.current[i - 1]?.focus();
    }
  }

  return (
    <div className="flex justify-center gap-2">
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          ref={(el) => {
            if (el) refs.current[i] = el;
          }}
          value={value[i] ?? ''}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          className="w-12 h-12 text-center input input-bordered"
          maxLength={1}
          inputMode="numeric"
          aria-label={`OTP digit ${i + 1}`}
        />
      ))}
    </div>
  );
}
