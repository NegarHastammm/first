
// Phone input component with clear (×) button
import type { FC } from 'react';

type Props = {
  value: string;
  onChange: (v: string) => void;
};

const AuthPhoneInput: FC<Props> = ({ value, onChange }: Props) => {
  return (
    <div>
      <label className="label">
        <span className="label-text">Mobile phone</span>
      </label>
      <div className="flex items-center gap-2">
        <input
          inputMode="tel"
          pattern="[0-9]*"
          value={value}
          onChange={(e) => onChange(e.target.value.replace(/[^0-9]/g, '').slice(0, 11))}
          placeholder="09xxxxxxxx"
          className="input input-bordered flex-1"
        />
        {/* Clear button */}
        <button
          aria-label="Clear phone"
          onClick={() => onChange('')}
          className="btn btn-square btn-sm"
          type="button"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default AuthPhoneInput;
