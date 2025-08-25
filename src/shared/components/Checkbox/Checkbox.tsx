'use client';

import { JSX } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface FormCheckboxProps {
    label: string | JSX.Element;
    registration: UseFormRegisterReturn;
    error?: FieldError;
}

export default function Checkbox({
    label,
    registration,
    error,
}: FormCheckboxProps) {
    return (
        <div className="flex flex-col">
            <label className="flex items-start gap-2 cursor-pointer">
                <input
                    type="checkbox"
                    {...registration}
                    className="w-4 h-4 text-[#C32033] focus:ring-[#C32033] focus:ring-2 accent-[#C32033] appearance-none border-[1px] border-[#C32033] rounded-sm bg-white checked:bg-[#C32033] checked:border-[#C32033] relative"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='m13.854 3.646-7.5 7.5a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L6 9.293l7.146-7.147a.5.5 0 0 1 .708.708z'/%3e%3c/svg%3e\")",
                        backgroundSize: '100% 100%',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
                <span className="text-sm text-[#535862] leading-5">
                    {label}
                </span>
            </label>
            {error && (
                <span className="text-red-500 text-sm mt-1">
                    {error.message}
                </span>
            )}
        </div>
    );
}
