'use client';

import { useSelector, useDispatch } from 'react-redux';
import { setLocale as setLocaleAction } from '@/store/i18nSlice';
import type { RootState } from '@/store/store';
import zh from '@/locales/zh';
import en from '@/locales/en';

const translations = { zh, en };

export const useI18n = () => {
  const locale = useSelector((state: RootState) => state.i18n.locale);
  const dispatch = useDispatch();

  const t = (key: string): string => {
    return (translations[locale] as Record<string, string>)[key] || key;
  };

  const setLocale = (newLocale: 'zh' | 'en') => {
    dispatch(setLocaleAction(newLocale));
  };

  return { t, locale, setLocale };
};
