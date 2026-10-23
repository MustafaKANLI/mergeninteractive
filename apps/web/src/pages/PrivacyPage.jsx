import React from 'react';
import LegalDocument from '@/components/legal/LegalDocument';
import { privacy } from '@/content/legal/privacy';

function PrivacyPage() {
	return <LegalDocument doc={privacy} />;
}

export default PrivacyPage;
