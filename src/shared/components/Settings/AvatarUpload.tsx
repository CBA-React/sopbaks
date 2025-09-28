import { JSX, useRef, useState } from 'react';

import Button from '@/shared/components/Button/Button';

interface AvatarUploadProps {
    currentAvatar: string | null;
    onAvatarChange?: (file: File | null) => void;
    disabled?: boolean;
}

export default function AvatarUpload({
    currentAvatar,
    onAvatarChange,
    disabled = false,
}: AvatarUploadProps): JSX.Element {
    const [avatar, setAvatar] = useState<string | null>(currentAvatar || null);
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            alert('Please select an image file');
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            alert('File size must be less than 5MB');
            return;
        }

        setIsUploading(true);

        const reader = new FileReader();
        reader.onload = (e) => {
            const imageUrl = e.target?.result as string;
            setAvatar(imageUrl);
            setIsUploading(false);

            onAvatarChange?.(file);
        };

        reader.onerror = (): void => {
            setIsUploading(false);
            alert('Error reading file');
        };

        reader.readAsDataURL(file);

        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleUploadClick = () => {
        if (disabled) return;
        fileInputRef.current?.click();
    };
    const handleRemoveAvatar = () => {
        if (disabled) return;
        setAvatar(null);
        onAvatarChange?.(null);
    };

    return (
        <div className="flex items-center gap-4 flex-col lg:flex-row">
            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
                disabled={disabled}
            />
            <div className="relative">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-[#C32033] flex items-center justify-center">
                    {isUploading ? (
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : avatar ? (
                        <img
                            src={avatar}
                            alt="Avatar"
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div></div>
                    )}
                </div>

                {isUploading && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}
            </div>

            <div className="flex flex-row gap-3">
                <Button
                    text={'Change avatar'}
                    onClick={handleUploadClick}
                    disabled={disabled || isUploading}
                />

                <Button
                    text={'Remove avatar'}
                    onClick={handleRemoveAvatar}
                    disabled={disabled || isUploading || !avatar}
                />
            </div>
        </div>
    );
}
