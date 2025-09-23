'use client';

import { JSX, useEffect, useRef, useState } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface SelectOption {
    value: string;
    label: string;
}

interface CustomSelectProps {
    placeholder?: string;
    registration: UseFormRegisterReturn<string>;
    error?: FieldError;
    options: SelectOption[];
    defaultValue?: string;
    disabled?: boolean;
}

const ChevronDownIcon = ({ className = '' }: { className?: string }) => (
    <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
        />
    </svg>
);

export default function CustomSelect({
    placeholder = 'Select an option',
    registration,
    error,
    options = [],
    defaultValue = '',
    disabled = false,
}: CustomSelectProps): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedValue, setSelectedValue] = useState<string>(defaultValue);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const selectRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const selectedOption = options.find(
        (option) => option.value === selectedValue,
    );
    const displayValue = selectedOption ? selectedOption.label : '';

    const filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    const handleSelect = (option: SelectOption): void => {
        setSelectedValue(option.value);
        setSearchTerm('');
        setIsOpen(false);

        registration.onChange({
            target: {
                name: registration.name,
                value: option.value,
            },
        });
    };

    const handleToggle = (): void => {
        if (disabled) return;

        setIsOpen(!isOpen);
        if (!isOpen) {
            // При открытии фокусируемся на поиске
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    };

    const handleSearchChange = (
        e: React.ChangeEvent<HTMLInputElement>,
    ): void => {
        setSearchTerm(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent): void => {
        if (e.key === 'Escape') {
            setIsOpen(false);
            setSearchTerm('');
        } else if (e.key === 'Enter' && filteredOptions.length === 1) {
            handleSelect(filteredOptions[0]);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent): void => {
            if (
                selectRef.current &&
                !selectRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
                setSearchTerm('');
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        if (defaultValue) {
            setSelectedValue(defaultValue);
        }
    }, [defaultValue]);

    const handleFocus = (): void => {
        if (!disabled) {
            setIsOpen(true);
        }
    };

    const handleBlur = (e: React.FocusEvent): void => {
        if (selectRef.current?.contains(e.relatedTarget as Node)) {
            return;
        }
        registration.onBlur(e);
    };

    return (
        <div className="flex flex-col w-full" ref={selectRef}>
            <div className="relative">
                <div
                    onClick={handleToggle}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    tabIndex={disabled ? -1 : 0}
                    className={`
                        w-full border-[1px] border-[#D8D8D8] rounded-[10px] px-4 py-3 
                        cursor-pointer flex items-center justify-between
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                        transition-all
                        ${disabled ? 'bg-gray-100 cursor-not-allowed opacity-60' : 'bg-white hover:border-gray-300'}
                        ${error ? 'border-red-500 focus:ring-red-500' : ''}
                        ${isOpen ? 'ring-2 ring-blue-500 border-transparent' : ''}
                    `}
                >
                    <span
                        className={`${displayValue ? 'text-black' : 'text-[#808080]'}`}
                    >
                        {displayValue || placeholder}
                    </span>
                    <ChevronDownIcon
                        className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                </div>

                <input type="hidden" value={selectedValue} {...registration} />

                {isOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-[10px] shadow-lg z-50 max-h-60 overflow-hidden">
                        {/* Поле поиска */}
                        <div className="p-2 border-b border-gray-100">
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                                onKeyDown={handleKeyDown}
                                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>

                        <div className="max-h-48 overflow-y-auto">
                            {filteredOptions.length > 0 ? (
                                filteredOptions.map((option) => (
                                    <div
                                        key={option.value}
                                        onClick={() => handleSelect(option)}
                                        className={`
                                            px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors
                                            ${selectedValue === option.value ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-900'}
                                        `}
                                    >
                                        {option.label}
                                    </div>
                                ))
                            ) : (
                                <div className="px-4 py-3 text-gray-500 text-sm">
                                    No options found
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {error && (
                <span className="text-red-500 text-sm mt-1">
                    {error.message}
                </span>
            )}
        </div>
    );
}
