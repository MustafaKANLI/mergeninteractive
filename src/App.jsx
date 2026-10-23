import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LocalNavigate } from '@/components/LocalLink';
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
// Router ve LanguageProvider dışarıdan gelir: tarayıcıda BrowserRouter, build'deki ön-render'da StaticRouter (src/entry-server.jsx).
export function AppRoutes() {
	return (
		<>
			<ScrollToTop />
			<Routes>
				{/* "/en?": aynı sayfalar Türkçe kökte ve İngilizce /en altında; düzen dil değişince yeniden kurulmaz */}
				<Route path="/en?" element={<MainLayout />}>
					<Route index element={<HomePage />} />
					<Route path="about" element={<AboutPage />} />
					<Route path="privacy" element={<PrivacyPage />} />
					<Route path="kvkk" element={<KVKKPage />} />
					<Route path="terms" element={<TermsPage />} />
					<Route path="delete-account" element={<DeleteAccountPage />} />
					<Route path="apps/:id" element={<AppDetailPage />} />
					{/* Sık yazılan diğer adresler */}
					<Route path="gizlilik" element={<LocalNavigate to="/privacy" />} />
					<Route path="privacy-policy" element={<LocalNavigate to="/privacy" />} />
					<Route path="kullanim-kosullari" element={<LocalNavigate to="/terms" />} />
					<Route path="eula" element={<LocalNavigate to="/terms" />} />
					<Route path="hesap-silme" element={<LocalNavigate to="/delete-account" />} />
					<Route path="*" element={<LocalNavigate to="/" />} />
				</Route>
			</Routes>
		</>
	);
}

function App() {
	return (
		<BrowserRouter>
			<LanguageProvider>
				<AppRoutes />
			</LanguageProvider>
		</BrowserRouter>
	);
}

export default App;
