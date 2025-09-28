import React, { JSX } from 'react';

import SettingsField from './SettingsField';
import SettingsSection from './SettingsSection';

import FacebookIcon from 'public/icons/facebook.svg';
import InstagramIcon from 'public/icons/instagram.svg';
import PhoneIcon from 'public/icons/phone.svg';
import TelegramIcon from 'public/icons/telegram.svg';

interface ContactsSectionProps {
    isEditing: boolean;
    onToggleEdit: () => void;
    onApply?: () => void;
    isSaving?: boolean;
    telegram?: string;
    onTelegramChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    facebook?: string;
    onFacebookChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    instagram?: string;
    onInstagramChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    phoneNumber?: string;
    onPhoneNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ContactsSection({
    isEditing,
    onToggleEdit,
    onApply,
    telegram = '',
    onTelegramChange,
    facebook = '',
    onFacebookChange,
    instagram = '',
    onInstagramChange,
    phoneNumber = '',
    onPhoneNumberChange,
}: ContactsSectionProps): JSX.Element {
    return (
        <SettingsSection
            title="Contacts"
            isEditing={isEditing}
            onToggleEdit={onToggleEdit}
            onApply={onApply}
            showApplyButton={isEditing}
            isDataAlertShown={false}
        >
            <SettingsField
                label={<TelegramIcon className="w-full h-full" />}
                isEditing={isEditing}
                value={telegram}
                placeholder="@username"
                onChange={onTelegramChange}
                emptyText="Not specified"
                leftAlign={true}
            />

            <SettingsField
                label={<FacebookIcon className="w-full h-full" />}
                isEditing={isEditing}
                value={facebook}
                placeholder="facebook.com/username"
                onChange={onFacebookChange}
                emptyText="Not specified"
                leftAlign={true}
            />

            <SettingsField
                label={<InstagramIcon className="w-full h-full" />}
                isEditing={isEditing}
                value={instagram}
                placeholder="@username"
                onChange={onInstagramChange}
                emptyText="Not specified"
                leftAlign={true}
            />

            <SettingsField
                label={<PhoneIcon className="w-full h-full" />}
                isEditing={isEditing}
                value={phoneNumber}
                placeholder="+1 (555) 123-4567"
                onChange={onPhoneNumberChange}
                emptyText="Not specified"
                isLast
                leftAlign={true}
            />
        </SettingsSection>
    );
}
