import React from 'react';
import LegalDocument from '@/components/legal/LegalDocument';
import { terms } from '@/content/legal/terms';

function TermsPage() {
	return <LegalDocument doc={terms} />;
}

export default TermsPage;
