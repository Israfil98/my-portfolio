import { type UseFormRegisterReturn } from 'react-hook-form';

interface IFormFieldProps {
  label: string;
  id: string;
  type?: 'text' | 'email';
  placeholder?: string;
  textarea?: boolean;
  rows?: number;
  register: UseFormRegisterReturn;
  error?: string;
}

const FormField = ({
  label,
  id,
  type = 'text',
  placeholder,
  textarea = false,
  rows = 5,
  register,
  error,
}: IFormFieldProps) => {
  const sharedClasses = `w-full rounded-lg border bg-white/5 px-4 py-3 text-white outline-none transition-colors placeholder:text-gray-600 ${
    error
      ? 'border-red-500/50 focus:border-red-500'
      : 'border-white/10 focus:border-emerald-glow/50'
  }`;

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block font-mono text-xs tracking-wider text-gray-400 uppercase"
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          rows={rows}
          className={`${sharedClasses} resize-none`}
          placeholder={placeholder}
          {...register}
        />
      ) : (
        <input
          type={type}
          id={id}
          className={sharedClasses}
          placeholder={placeholder}
          {...register}
        />
      )}
      {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
    </div>
  );
};

export default FormField;
