'use client';

import { JSX, useState } from 'react';

import ContactsSection from '@/modules/Settings/ContactsSection';
import MainInfoSection from '@/modules/Settings/MainInfoSection';
import PlaceOfResidenceSection from '@/modules/Settings/PlaceOfResidenceSection';
import SecuritySection from '@/modules/Settings/SecuritySection';
import { formatDate } from '@/utils/formatDate';


interface IState {
    mainInfo: boolean;
    placeResidence: boolean;
    contacts: boolean;
}


export default function Settings(): JSX.Element {
    const [profileImage, setProfileImage] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [birth, setBirth] = useState<string>('');
    const [country, setCountry] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [homeAddress, setHomeAddress] = useState<string>('');
    const [telegram, setTelegram] = useState<string>('');
    const [facebook, setFacebook] = useState<string>('');
    const [instagram, setInstagram] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');


    const [isEditing, setIsEditing] = useState<IState>({
        mainInfo: false,
        placeResidence: false,
        contacts: false,
    });

    const toggleEditing = (field: keyof IState): void => {
        setIsEditing((prev) => ({
            ...prev,
            [field]: !prev[field],
        }));
    };

    const handleImageUpload = (file: File) => {
        // Создаем URL для превью изображения
        const imageUrl = URL.createObjectURL(file);
        setProfileImage(imageUrl);
        console.log('Image selected:', file.name);
    };

    const onHandleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const onBirthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedDate = formatDate(e.target.value);
        setBirth(formattedDate);
    };

    const onCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(e.target.value);
    };

    const onCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
    };

    const onHomeAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHomeAddress(e.target.value);
    };

    const onTelegramChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTelegram(e.target.value);
    };

    const onFacebookChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFacebook(e.target.value);
    };

    const onInstagramChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInstagram(e.target.value);
    };

    const onPhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
    };

    const handleMainInfoApply = () => {
        console.log('Saving main info:', { name, birth });
        toggleEditing('mainInfo');
    };

    const handlePlaceResidenceApply = () => {
        console.log('Saving place of residence:', {
            country,
            city,
            homeAddress,
        });
        toggleEditing('placeResidence');
    };

    const handleContactsApply = () => {
        console.log('Saving contacts');
        toggleEditing('contacts');
    };

    return (
        <article className={'max-w-[988px] w-full px-6'}>
            <h1 className={'text-[24px] font-semibold'}>Profile Settings</h1>

            <MainInfoSection
                profileImage={profileImage}
                isEditing={isEditing.mainInfo}
                onToggleEdit={() => toggleEditing('mainInfo')}
                name={name}
                onNameChange={onHandleNameChange}
                birth={birth}
                onBirthChange={onBirthChange}
                onApply={handleMainInfoApply}
                onImageUpload={handleImageUpload}
            />

            <PlaceOfResidenceSection
                isEditing={isEditing.placeResidence}
                onToggleEdit={() => toggleEditing('placeResidence')}
                country={country}
                onCountryChange={onCountryChange}
                city={city}
                onCityChange={onCityChange}
                homeAddress={homeAddress}
                onHomeAddressChange={onHomeAddressChange}
                onApply={handlePlaceResidenceApply}
            />

            <ContactsSection
                isEditing={isEditing.contacts}
                onToggleEdit={() => toggleEditing('contacts')}
                onApply={handleContactsApply}
                telegram={telegram}
                onTelegramChange={onTelegramChange}
                facebook={facebook}
                onFacebookChange={onFacebookChange}
                instagram={instagram}
                onInstagramChange={onInstagramChange}
                phoneNumber={phoneNumber}
                onPhoneNumberChange={onPhoneNumberChange}
            />
            <SecuritySection email="user@example.com" />
        </article>
    );
}
