import type { Locale } from '../config';
import { privacyEn } from './en';
import { privacyEs } from './es';
import { privacyFr } from './fr';
import { privacyIt } from './it';
import { privacyPt } from './pt';
import type { PrivacyPolicy } from './types';

const policies: Record<Locale, PrivacyPolicy> = {
  pt: privacyPt,
  en: privacyEn,
  es: privacyEs,
  fr: privacyFr,
  it: privacyIt,
};

export const privacyUpdatedIso = '2026-09-23';

export const getPrivacyPolicy = (locale: Locale): PrivacyPolicy => policies[locale];
