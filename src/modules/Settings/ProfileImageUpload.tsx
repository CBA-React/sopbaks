import { JSX, useRef, useState } from 'react';
import { Camera, User } from 'lucide-react';

interface ProfileImageUploadProps {
    imageUrl?: string;
    onImageUpload: (file: File) => void;
}

const isEditing = true;
export default function ProfileImageUpload({
    imageUrl,
    onImageUpload,
}: ProfileImageUploadProps): JSX.Element {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleImageClick = () => {
        if (isEditing && fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && file.type.startsWith('image/')) {
            // Проверяем что onImageUpload это функция перед вызовом
            if (typeof onImageUpload === 'function') {
                onImageUpload(file);
            } else {
                console.error('onImageUpload is not a function');
            }
        }
    };

    return (
        <div className="flex flex-col items-center space-y-2">
            <div
                className={`relative w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200 ${
                    isEditing ? 'cursor-pointer' : ''
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleImageClick}
            >
                {imageUrl ? (
                    <>
                        <img
                            src={imageUrl}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                        {isEditing && isHovered && (
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                <Camera className="w-6 h-6 text-white" />
                            </div>
                        )}
                    </>
                ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center relative">
                        <User className="w-8 h-8 text-gray-400" />
                        {isEditing && isHovered && (
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                <div className="text-white text-xs text-center">
                                    <Camera className="w-4 h-4 mx-auto mb-1" />
                                    Upload
                                </div>
                            </div>
                        )}
                    </div>
                )}

                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                />
            </div>

            {/*{isEditing && (*/}
            {/*    <button*/}
            {/*        onClick={handleImageClick}*/}
            {/*        className="text-sm text-blue-600 hover:text-blue-800 transition-colors"*/}
            {/*    >*/}
            {/*        {imageUrl ? 'Change Photo' : 'Upload Photo'}*/}
            {/*    </button>*/}
            {/*)}*/}
        </div>
    );
}
