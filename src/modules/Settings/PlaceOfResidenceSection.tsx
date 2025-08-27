import { JSX } from 'react';

import SettingsField from './SettingsField';
import SettingsSection from './SettingsSection';

interface PlaceOfResidenceSectionProps {
    isEditing: boolean;
    onToggleEdit: () => void;
    country: string;
    onCountryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    city: string;
    onCityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    homeAddress: string;
    onHomeAddressChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onApply?: () => void;
}

export default function PlaceOfResidenceSection({
    isEditing,
    onToggleEdit,
    country,
    onCountryChange,
    city,
    onCityChange,
    homeAddress,
    onHomeAddressChange,
    onApply,
}: PlaceOfResidenceSectionProps): JSX.Element {
    return (
        <SettingsSection
            title="Place of Residence"
            isEditing={isEditing}
            onToggleEdit={onToggleEdit}
            onApply={onApply}
        >
            <SettingsField
                label="Country"
                isEditing={isEditing}
                value={country}
                placeholder="Enter your country"
                onChange={onCountryChange}
            />
            <SettingsField
                label="City"
                isEditing={isEditing}
                value={city}
                placeholder="Enter your city"
                onChange={onCityChange}
            />
            <SettingsField
                label="Home Address"
                isEditing={isEditing}
                value={homeAddress}
                placeholder="Enter your home address"
                onChange={onHomeAddressChange}
                isLast
            />
        </SettingsSection>
    );
}
