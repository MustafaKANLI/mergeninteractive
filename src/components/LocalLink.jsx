import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useLang } from '@/i18n/LanguageContext';

// İç linkler kökten yazılır (to="/privacy"); İngilizce sayfalarda otomatik /en/privacy olur.
export default function LocalLink({ to, ...rest }) {
	const { path } = useLang();
	return <Link to={path(to)} {...rest} />;
}

export function LocalNavigate({ to }) {
	const { path } = useLang();
	return <Navigate to={path(to)} replace />;
}
