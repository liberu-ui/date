import { format, parseISO } from 'date-fns/esm';
import i18n from './i18n';
import unicode2PHP from './unicode2php';

export default (date, formatStr, locale = 'en') => format(
    (typeof date === 'string') ? parseISO(date) : date,
    unicode2PHP(formatStr),
    { locale: i18n[locale] },
);
