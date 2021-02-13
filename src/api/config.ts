import { STORAGE_DEFAULT_LIMIT } from '../constants';
import { Config } from './types';

export const defaultConfig: Config = {
    api: {
        authUrl: '',
        tradeUrl: '',
        applogicUrl: '',
        rangerUrl: '',
        arkeUrl: '',
    },
    minutesUntilAutoLogout: '5',
    rangerReconnectPeriod: '1',
    withCredentials: true,
    captcha: {
        captchaType: 'none',
        siteKey: '',
    },
    storage: {},
    gaTrackerKey: '',
    msAlertDisplayTime: '5000',
    incrementalOrderBook: false,
};

export const PythonEx = {
    config: defaultConfig,
};

declare global {
    interface Window {
        env: Config;
    }
}

window.env = window.env || defaultConfig;
PythonEx.config = { ...window.env };
PythonEx.config.storage = PythonEx.config.storage || {};
PythonEx.config.captcha = PythonEx.config.captcha || defaultConfig.captcha;

export const tradeUrl = () => PythonEx.config.api.tradeUrl;
export const arkeUrl = () => PythonEx.config.api.arkeUrl || tradeUrl();
export const authUrl = () => PythonEx.config.api.authUrl;
export const applogicUrl = () => PythonEx.config.api.applogicUrl;
export const rangerUrl = () => PythonEx.config.api.rangerUrl;
export const minutesUntilAutoLogout = (): string => PythonEx.config.minutesUntilAutoLogout || '5';
export const withCredentials = () => PythonEx.config.withCredentials;
export const defaultStorageLimit = () => PythonEx.config.storage.defaultStorageLimit || STORAGE_DEFAULT_LIMIT;
export const siteKey = () => PythonEx.config.captcha.siteKey;
export const captchaType = () => PythonEx.config.captcha.captchaType;
export const gaTrackerKey = (): string => PythonEx.config.gaTrackerKey || '';
export const msAlertDisplayTime = (): string => PythonEx.config.msAlertDisplayTime || '5000';
export const rangerReconnectPeriod = (): number => PythonEx.config.rangerReconnectPeriod ? Number(PythonEx.config.rangerReconnectPeriod) : 1;
export const incrementalOrderBook = (): boolean => PythonEx.config.incrementalOrderBook || false;
