'use client';

import { JSX } from 'react';

import CreateNewPostForm from '@/shared/components/CreatePostModal/CreateNewPostForm';
import Modal from '@/shared/components/Modal/Modal';

interface CreateNewPostModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CreateNewPostModal({
    isOpen,
    onClose,
}: CreateNewPostModalProps): JSX.Element {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            size="lg"
            showCloseButton={true}
            closeOnOverlayClick={true}
            closeOnEscape={true}
            title={'Post something'}
        >
            <CreateNewPostForm onSuccess={onClose} />
        </Modal>
    );
}
