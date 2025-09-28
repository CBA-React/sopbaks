import { JSX, useState } from 'react';

interface Props {
    enabled?: boolean;
    onChange?: (value: boolean) => void;
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Switch({
    enabled = false,
    onChange,
    disabled = false,
    size = 'md',
}: Props): JSX.Element {
    const [isEnabled, setIsEnabled] = useState(enabled);

    const handleToggle = (): void => {
        if (disabled) return;
        const newState = !isEnabled;
        setIsEnabled(newState);
        onChange?.(newState);
    };

    // Size variants
    const sizes = {
        sm: {
            container: 'w-8 h-4',
            circle: 'w-3 h-3',
            translate: 'translate-x-4',
        },
        md: {
            container: 'w-11 h-6',
            circle: 'w-5 h-5',
            translate: 'translate-x-5',
        },
        lg: {
            container: 'w-14 h-7',
            circle: 'w-6 h-6',
            translate: 'translate-x-7',
        },
        xl: {
            container: 'w-16 h-8',
            circle: 'w-7 h-7',
            translate: 'translate-x-8',
        },
    };

    const currentSize = sizes[size];

    return (
        <div className="flex items-center space-x-3">
            <button
                type="button"
                onClick={handleToggle}
                disabled={disabled}
                className={`
          ${currentSize.container}
          relative inline-flex items-center rounded-full border-2 border-transparent
          transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 
          focus:ring-blue-500 focus:ring-offset-2
          ${
              isEnabled
                  ? 'bg-red-600 hover:bg-red-700'
                  : 'bg-gray-200 hover:bg-gray-300'
          }
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
                role="switch"
                aria-checked={isEnabled}
                aria-disabled={disabled}
            >
                <span
                    className={`
            ${currentSize.circle}
            inline-block rounded-full bg-white shadow-lg transform ring-0 
            transition duration-200 ease-in-out
            ${isEnabled ? currentSize.translate : 'translate-x-0'}
          `}
                />
            </button>
        </div>
    );
}
