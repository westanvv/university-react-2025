import packageJSON from '../package.json';

export const VERSION = packageJSON.version;
export const DEVELOPMENT_MODE = import.meta.env.VITE_MODE === 'development';
export const API_URL = import.meta.env.VITE_API_URL;
