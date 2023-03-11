import { IConfigs } from './domain/IConfigs';

export const configs: IConfigs = {
	mongodb: {
		url: process.env.MONGO_DB_HOST || '127.0.0.1',
		port: 27017,
		username: '',
		password: '',
		collection: 'new_design'
	}
};
