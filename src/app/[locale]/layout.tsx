import { I18nProviderClient } from '@/locales/client';
import { getStaticParams } from '@/locales/server';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';

export function generateStaticParams() {
  return getStaticParams();
}

export default async function LocaleLayout({
  params,
  children,
}: {
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
}) {
  const { locale } = await params;
  
  return (
    <I18nProviderClient locale={locale}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </I18nProviderClient>
  );
}