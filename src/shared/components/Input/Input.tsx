'use client';

import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

type FormInputProps = {
    type?: 'text' | 'email' | 'textarea';
    placeholder: string;
    registration: UseFormRegisterReturn;
    error?: FieldError;
};

export default function Input({
    type = 'text',
    placeholder,
    registration,
    error,
}: FormInputProps) {
    if (type === 'textarea') {
        return (
            <div className="flex flex-col w-full">
                <textarea
                    placeholder={placeholder}
                    {...registration}
                    className="border-[1px] border-[#D8D8D8] rounded-[10px] px-4 py-3 h-[120px] resize-none placeholder:text-[#808080]"
                />
                {error && (
                    <span className="text-red-500 text-sm mt-1">
                        {error.message}
                    </span>
                )}
            </div>
        );
    }

    return (
        <div className="flex flex-col w-full">
            <input
                type={type}
                placeholder={placeholder}
                {...registration}
                className="border-[1px] border-[#D8D8D8] rounded-[10px] px-4 py-3 placeholder:text-[#808080]"
            />
            {error && (
                <span className="text-red-500 text-sm mt-1">
                    {error.message}
                </span>
            )}
        </div>
    );
}
