import { JSX } from 'react';

import SettingsField from './SettingsField';
import SettingsSection from './SettingsSection';
import ProfileImageUpload from '@/modules/Settings/ProfileImageUpload';

interface MainInfoSectionProps {
    isEditing: boolean;
    onToggleEdit: () => void;
    name: string;
    onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    birth: string;
    onBirthChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onApply?: () => void;
    profileImage?: string;
    onImageUpload: (file: File) => void;
}

export default function MainInfoSection({
    isEditing,
    onToggleEdit,
    name,
    onNameChange,
    birth,
    onBirthChange,
    onApply,
    profileImage,
    onImageUpload,
}: MainInfoSectionProps): JSX.Element {
    return (
        <SettingsSection
            title="Main Info"
            isEditing={isEditing}
            onToggleEdit={onToggleEdit}
            onApply={onApply}
        >
            <div className="mb-6 flex pl-6 pt-6">
                <ProfileImageUpload
                    imageUrl={profileImage}
                    onImageUpload={onImageUpload}
                />
            </div>
            <SettingsField
                label="Name"
                isEditing={isEditing}
                value={name}
                placeholder="Enter your name"
                onChange={onNameChange}
                emptyText=""
            />
            <SettingsField
                label="Date of Birth"
                isEditing={isEditing}
                value={birth}
                placeholder="DD/MM/YYYY"
                onChange={onBirthChange}
                inputType="text"
                emptyText=""
                isLast
            />
        </SettingsSection>
    );
}
