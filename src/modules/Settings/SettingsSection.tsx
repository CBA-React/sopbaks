import { JSX, ReactNode } from 'react';

import KeepDataAlert from '@/modules/Settings/KeepDataAlert';
import Button from '@/shared/components/Button/Button';

import EditIcon from '../../../public/icons/edit.svg';

interface SettingsSectionProps {
    title: string;
    isEditing: boolean;
    onToggleEdit: () => void;
    children: ReactNode;
    showApplyButton?: boolean;
    onApply?: () => void;
    isDataAlertShown?: boolean;
}

export default function SettingsSection({
    title,
    isEditing,
    onToggleEdit,
    children,
    showApplyButton = true,
    onApply,
    isDataAlertShown = true,
}: SettingsSectionProps): JSX.Element {
    return (
        <section className={'border-[#CFD8DC] border mt-5'}>
            <div
                className={
                    'border-b-[#CFD8DC] border-b px-6 py-5 flex justify-between'
                }
            >
                <h3 className={'text-[20px] font-bold'}>{title}</h3>
                {title !== 'Security' && (
                    <EditIcon
                        onClick={onToggleEdit}
                        className={'w-5 h-5 cursor-pointer'}
                    />
                )}
            </div>

            {children}

            {isDataAlertShown && (
                <div className={'px-6 mb-5 max-w-[506px]'}>
                    <KeepDataAlert />
                </div>
            )}

            {isEditing && showApplyButton && (
                <Button
                    text={'Apply changes'}
                    className={'mt-4 mx-6 mb-6'}
                    onClick={onApply}
                />
            )}
        </section>
    );
}
