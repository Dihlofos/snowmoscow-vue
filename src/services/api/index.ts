import { BASE_URL, SITE_NAME } from '@/constants/index';
import type HttpService from '../http-service';

export interface ISite {
	id: number;
	name: string;
	description: string;
	baseUrl: string;
	pageList: IPage[];
}

export interface IPage {
	id: number;
	pathName: string;
	helmet: IPageHelmet;
	nav: INav;
	sections: ISection<any>[];
}

export interface IPageHelmet {
	id: number;
	title: string;
	description: string;
	url: string;
}

export interface INav {
	id: number;
	links: INavLink[];
}

export interface INavLink {
	id: number;
	label: string;
	link: string;
	external: boolean;
}

export interface ISection<T> {
	id: number;
	name: string;
	title: string;
	description: string;
	content: T;
}

export default class MainApi {
	constructor(private httpService: HttpService) {}

	getSiteData(): Promise<ISite> {
		return this.httpService.get(`${BASE_URL}/${SITE_NAME}`);
	}

	updateSite(siteData: ISite): Promise<void> {
		return this.httpService.put(`${BASE_URL}`, siteData);
	}
}
