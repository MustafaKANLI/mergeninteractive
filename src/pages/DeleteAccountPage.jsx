import React from 'react';
import LegalDocument from '@/components/legal/LegalDocument';
import { deleteAccount } from '@/content/legal/deleteAccount';

function DeleteAccountPage() {
	return <LegalDocument doc={deleteAccount} />;
}

export default DeleteAccountPage;
