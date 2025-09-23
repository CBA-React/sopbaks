'use client';

import { JSX, useEffect, useRef, useState } from 'react';
import { FieldError } from 'react-hook-form';

// Типы для форматов
type PhoneFormat = 'US' | 'UA' | 'custom';

// Типы для форматов маски
type FormatMasks = Record<PhoneFormat, string>;

// Типы для максимальной длины по форматам
type FormatLengths = Record<PhoneFormat, number>;

// Типы для пропсов компонента
interface PhoneInputProps {
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    onBlur?: () => void;
    error?: FieldError;
    countryCode?: string;
    format?: PhoneFormat;
    disabled?: boolean;
}

export default function PhoneInput({
    placeholder = 'Phone number',
    value = '',
    onChange,
    onBlur,
    error,
    countryCode = '+1',
    format = 'US',
    disabled = false,
}: PhoneInputProps): JSX.Element {
    const [displayValue, setDisplayValue] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    const formats: FormatMasks = {
        US: '(xxx) xxx-xxxx',
        UA: 'xxx xxx xx xx',
        custom: 'xxx-xxx-xxxx',
    } as const;

    const maxLengths: FormatLengths = {
        US: 14,
        UA: 13,
        custom: 12,
    } as const;

    const formatPhoneNumber = (
        inputValue: string,
        formatType: PhoneFormat,
    ): string => {
        const numbers: string = inputValue.replace(/\D/g, '');

        switch (formatType) {
            case 'US':
                if (numbers.length <= 3) return numbers;
                if (numbers.length <= 6)
                    return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
                return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;

            case 'UA':
                if (numbers.length <= 3) return numbers;
                if (numbers.length <= 6)
                    return `${numbers.slice(0, 3)} ${numbers.slice(3)}`;
                if (numbers.length <= 8)
                    return `${numbers.slice(0, 3)} ${numbers.slice(3, 6)} ${numbers.slice(6)}`;
                return `${numbers.slice(0, 3)} ${numbers.slice(3, 6)} ${numbers.slice(6, 8)} ${numbers.slice(8, 10)}`;

            case 'custom':
            default:
                if (numbers.length <= 3) return numbers;
                if (numbers.length <= 6)
                    return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
                return `${numbers.slice(0, 3)}-${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (disabled) return;

        const inputValue: string = e.target.value;
        const formattedValue: string = formatPhoneNumber(inputValue, format);

        const maxLength: number = maxLengths[format];
        if (formattedValue.length <= maxLength) {
            setDisplayValue(formattedValue);

            const numbersOnly: string = formattedValue.replace(/\D/g, '');
            onChange?.(numbersOnly);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (disabled) return;

        const allowedKeys: string[] = [
            'Backspace',
            'Delete',
            'Tab',
            'Escape',
            'Enter',
            'Home',
            'End',
            'ArrowLeft',
            'ArrowRight',
            'ArrowUp',
            'ArrowDown',
        ];

        if (allowedKeys.includes(e.key)) {
            return;
        }

        const allowedCtrlKeys: string[] = ['a', 'c', 'v', 'x'];
        if (e.ctrlKey && allowedCtrlKeys.includes(e.key.toLowerCase())) {
            return;
        }

        if (!/^\d$/.test(e.key)) {
            e.preventDefault();
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>): void => {
        if (disabled) return;

        e.preventDefault();
        const pastedData: string = e.clipboardData.getData('text');
        const numbersOnly: string = pastedData.replace(/\D/g, '');

        if (numbersOnly) {
            const formattedValue: string = formatPhoneNumber(
                numbersOnly,
                format,
            );
            const maxLength: number = maxLengths[format];

            if (formattedValue.length <= maxLength) {
                setDisplayValue(formattedValue);
                onChange?.(numbersOnly);
            }
        }
    };

    const handleBlur = (): void => {
        onBlur?.();
    };

    useEffect(() => {
        if (value !== undefined) {
            const formatted: string = formatPhoneNumber(value, format);
            setDisplayValue(formatted);
        }
    }, [value, format]);

    return (
        <div className="flex flex-col w-full">
            <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none z-10">
                    {countryCode}
                </div>

                <input
                    ref={inputRef}
                    type="text"
                    placeholder={placeholder}
                    value={displayValue}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    onPaste={handlePaste}
                    onBlur={handleBlur}
                    disabled={disabled}
                    className={`
                        border-[1px] w-full border-[#D8D8D8] rounded-[10px] px-4 py-3 pl-12
                        placeholder:text-[#808080] focus:outline-none focus:ring-2 
                        focus:ring-blue-500 focus:border-transparent transition-all
                        ${error ? 'border-red-500 focus:ring-red-500' : ''}
                        ${disabled ? 'bg-gray-100 cursor-not-allowed opacity-60' : ''}
                    `}
                />
            </div>

            {!error && displayValue === '' && (
                <span className="text-gray-400 text-xs mt-1">
                    Format: {countryCode} {formats[format]}
                </span>
            )}

            {error && (
                <span className="text-red-500 text-sm mt-1">
                    {error.message}
                </span>
            )}
        </div>
    );
}
