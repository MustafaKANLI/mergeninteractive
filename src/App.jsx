import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import MainLayout from '@/layouts/MainLayout';
import { LanguageProvider } from '@/i18n/LanguageContext';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import PrivacyPage from '@/pages/PrivacyPage';
import KVKKPage from '@/pages/KVKKPage';
import TermsPage from '@/pages/TermsPage';
import DeleteAccountPage from '@/pages/DeleteAccountPage';
import AppDetailPage from '@/pages/AppDetailPage';

// /privacy ve /kvkk adresleri yayındaki uygulamalarda kullanılıyor: değiştirme.
// Router dışarıdan gelir: tarayıcıda BrowserRouter, build'deki ön-render'da StaticRouter (src/entry-server.jsx).
export function AppRoutes() {
	return (
		<>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<HomePage />} />
					<Route path="about" element={<AboutPage />} />
					<Route path="privacy" element={<PrivacyPage />} />
					<Route path="kvkk" element={<KVKKPage />} />
					<Route path="terms" element={<TermsPage />} />
					<Route path="delete-account" element={<DeleteAccountPage />} />
					<Route path="apps/:id" element={<AppDetailPage />} />
					{/* Sık yazılan diğer adresler */}
					<Route path="gizlilik" element={<Navigate to="/privacy" replace />} />
					<Route path="privacy-policy" element={<Navigate to="/privacy" replace />} />
					<Route path="kullanim-kosullari" element={<Navigate to="/terms" replace />} />
					<Route path="eula" element={<Navigate to="/terms" replace />} />
					<Route path="hesap-silme" element={<Navigate to="/delete-account" replace />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Route>
			</Routes>
		</>
	);
}

// prerendered: sayfa build'de HTML'e çevrildiyse ilk çizim sunucudaki gibi Türkçe olur, dil tercihi hemen ardından uygulanır.
function App({ prerendered = false }) {
	return (
		<LanguageProvider prerendered={prerendered}>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</LanguageProvider>
	);
}

export default App;
