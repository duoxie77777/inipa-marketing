'use client';

import { Input } from 'antd';
import type { InputProps } from 'antd';

interface FormInputProps extends InputProps {
  label?: string;
  error?: string;
}

const FormInput = ({ label, error, ...props }: FormInputProps) => {
  return (
    <div className="mb-4">
      {label && <label className="block text-xs text-[var(--text-muted)] mb-1.5 font-medium">{label}</label>}
      <Input {...props} className="bg-[var(--bg-card)] border-[var(--border-color)] text-white" />
      {error && <span className="text-xs text-[var(--accent-red)] mt-1 block">{error}</span>}
    </div>
  );
};

export default FormInput;
