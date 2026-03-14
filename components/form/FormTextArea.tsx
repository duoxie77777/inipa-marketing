'use client';

import { Input } from 'antd';
import type { TextAreaProps } from 'antd/es/input';

const { TextArea } = Input;

interface FormTextAreaProps extends TextAreaProps {
  label?: string;
  error?: string;
}

const FormTextArea = ({ label, error, ...props }: FormTextAreaProps) => {
  return (
    <div className="mb-4">
      {label && <label className="block text-xs text-[var(--text-muted)] mb-1.5 font-medium">{label}</label>}
      <TextArea {...props} className="bg-[var(--bg-card)] border-[var(--border-color)] text-white" />
      {error && <span className="text-xs text-[var(--accent-red)] mt-1 block">{error}</span>}
    </div>
  );
};

export default FormTextArea;
