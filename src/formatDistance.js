import { formatDistance, parseISO } from 'date-fns/esm';
// eslint-disable-next-line import/no-unresolved
import i18n from './i18n';

export default (date, locale = 'en') => formatDistance(
    (typeof date === 'string') ? parseISO(date) : date,
    new Date(),
    { locale: i18n[locale] },
);
