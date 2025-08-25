import { JSX } from 'react';
import { redirect } from 'next/navigation';

export default function RootPage(): JSX.Element {
    redirect('/home');
}
