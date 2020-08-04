// eslint-disable-next-line import/no-unresolved
import store from '@root/store';
import formatDistance from './formatDistance';

export default date => formatDistance(date, store.state.preferences.global.lang);
