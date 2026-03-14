'use client';

import { useI18n } from '@/hooks/useI18n';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <button onClick={() => setLocale(locale === 'zh' ? 'en' : 'zh')}>
      {locale === 'zh' ? 'EN' : '中文'}
    </button>
  );
}
