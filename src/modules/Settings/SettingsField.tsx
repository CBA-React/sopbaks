import { JSX, ReactNode } from 'react';

interface SettingsFieldProps {
    label: string | ReactNode;
    isEditing: boolean;
    value: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputType?: 'text' | 'date' | 'email';
    emptyText?: string;
    isLast?: boolean;
    renderCustomInput?: () => ReactNode;
    renderCustomValue?: () => ReactNode;
    leftAlign?: boolean;
}

export default function SettingsField({
    label,
    isEditing,
    value,
    placeholder,
    onChange,
    inputType = 'text',
    emptyText = 'Not chosen',
    isLast = false,
    renderCustomInput,
    renderCustomValue,
    leftAlign = false,
}: SettingsFieldProps): JSX.Element {
    const containerClasses = `text-[#333333] flex items-center ${leftAlign ? 'justify-start gap-5' : 'justify-between'} max-w-[516px] mt-4 px-6 ${isLast ? 'mb-4' : ''}`;
    return (
        <div className={containerClasses}>
            {typeof label === 'string' ? (
                <p className={'font-medium'}>{label}</p>
            ) : (
                <div className="flex items-center justify-center">{label}</div>
            )}
            {isEditing ? (
                renderCustomInput ? (
                    renderCustomInput()
                ) : (
                    <input
                        type={inputType}
                        className={
                            'border-[#E5E5E5] border rounded px-2 py-1 mt-1'
                        }
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                    />
                )
            ) : renderCustomValue ? (
                renderCustomValue()
            ) : (
                <p className={`font-light ${!value && 'text-[#82888D]'}`}>
                    {value || emptyText}
                </p>
            )}
        </div>
    );
}
