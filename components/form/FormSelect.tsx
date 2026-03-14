'use client';

import { Select } from 'antd';
import type { SelectProps } from 'antd';

interface FormSelectProps extends SelectProps {
  label?: string;
  error?: string;
}

const FormSelect = ({ label, error, ...props }: FormSelectProps) => {
  return (
    <div className="mb-4">
      {label && <label className="block text-xs text-[var(--text-muted)] mb-1.5 font-medium">{label}</label>}
      <Select {...props} className="w-full" />
      {error && <span className="text-xs text-[var(--accent-red)] mt-1 block">{error}</span>}
    </div>
  );
};

export default FormSelect;
