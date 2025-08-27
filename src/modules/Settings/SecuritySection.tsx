'use client';

import { JSX, useState } from 'react';

import Button from '@/shared/components/Button/Button';
import Divider from '@/shared/components/Divider/Divider';

import SettingsField from './SettingsField';
import SettingsSection from './SettingsSection';

interface SecuritySectionProps {
    email?: string;
}

export default function SecuritySection({
    email = '',
}: SecuritySectionProps): JSX.Element {
    const dummyOnChange = () => {};

    return (
        <>
            <SettingsSection
                title="Security"
                isEditing={false}
                onToggleEdit={() => {}}
                showApplyButton={false}
                isDataAlertShown={false}
            >
                <SettingsField
                    label="Email"
                    isEditing={false}
                    value={email}
                    placeholder=""
                    onChange={dummyOnChange}
                    emptyText="Not set"
                />

                <SettingsField
                    label="Password"
                    isEditing={false}
                    value=""
                    placeholder=""
                    onChange={dummyOnChange}
                    emptyText=""
                    isLast
                    renderCustomValue={() => (
                        <Button
                            text="Change Password"
                            className="text-sm !p-0"
                            variant={'link'}
                        />
                    )}
                />
                <Divider />
                <SettingsField
                    label={'Phone number'}
                    isEditing={false}
                    value={'+1 555 123 4567'}
                    placeholder={''}
                    isLast={true}
                    onChange={dummyOnChange}
                />
            </SettingsSection>
        </>
    );
}
