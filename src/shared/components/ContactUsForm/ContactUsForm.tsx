'use client';

import { JSX } from 'react';
import { useForm } from 'react-hook-form';

import Button from '@/shared/components/Button/Button';
import Checkbox from '@/shared/components/Checkbox/Checkbox';
import Input from '@/shared/components/Input/Input';

interface FormValues {
    name: string;
    email: string;
    comment: string;
    terms: boolean;
}

export default function ContactUsForm(): JSX.Element {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const onSubmit = (data: FormValues) => {
        console.log(data);
    };

    return (
        <div className="max-w-[1020px] mx-auto mt-[60px] px-3 py-5 lg:px-10 lg:py-10 bg-white rounded-[20px]">
            <h3 className="text-[24px] font-semibold">Still have questions?</h3>
            <p className="text-[#535862] mt-4">
                Can’t find the answer you’re looking for? Please chat to our
                friendly team.
            </p>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-10 flex flex-col gap-6"
            >
                <div className="flex flex-col lg:flex-row gap-4">
                    <Input
                        placeholder="Your Name"
                        registration={register('name', {
                            required: 'Name is required',
                        })}
                        error={errors.name}
                    />
                    <Input
                        type="email"
                        placeholder="Your Email"
                        registration={register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Invalid email',
                            },
                        })}
                        error={errors.email}
                    />
                </div>

                <Input
                    type="textarea"
                    placeholder="Comment"
                    registration={register('comment', {
                        required: 'Comment is required',
                    })}
                    error={errors.comment}
                />

                <Checkbox
                    label={
                        <>
                            You agree to our friendly{' '}
                            <a
                                href="/privacy"
                                className="text-[#C32033] font-semibold"
                            >
                                privacy policy
                            </a>
                            .
                        </>
                    }
                    registration={register('terms', {
                        required: 'You must accept the terms of use',
                    })}
                    error={errors.terms}
                />

                <div className="flex justify-end">
                    <Button text="Get in Touch" className={'px-10 py-[10px]'} />
                </div>
            </form>
        </div>
    );
}
