export interface IConfig {
  port: number;
  prettyLog: boolean;
  clientId: string;
  clientSecret: string;
}

export const config = {
  port: process.env.NODE_PORT || 8001,
  prettyLog: process.env.NODE_ENV === 'development',
  clientId: process.env.CLIENT_ID || '',
  clientSecret: process.env.CLIENT_SECRET || ''
} as IConfig;
