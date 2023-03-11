import type { INavLink, IPageHelmet, ISection, ISite } from '@/services/api';
import { defineStore } from 'pinia';

interface IMainState {
	siteData: ISite;
	siteName: string;
	loading: boolean;
	activePage: number;
}

const useMainStore = defineStore({
	id: 'main',

	state: (): IMainState => ({
		siteData: {
			id: 0,
			name: '',
			description: '',
			baseUrl: '',
			pageList: [],
		},
		activePage: 0,
		siteName: '',
		loading: false,
	}),

	getters: {
		helmet(): IPageHelmet {
			return (
				this.siteData?.pageList[this.activePage]?.helmet ?? {
					id: 0,
					title: '',
					description: '',
					url: '',
				}
			);
		},
		nav(): INavLink[] {
			return this.siteData?.pageList[this.activePage]?.nav.links ?? [];
		},
	},

	actions: {
		async fetchSiteData() {
			try {
				this.loading = true;
				// @ts-ignore
				this.siteData = await this.apiService.mainApi.getSiteData();
			} catch (e: unknown) {
				console.error('siteData loading error', e);
			} finally {
				this.loading = false;
			}
		},
		getSectionByName(sectionName: string): ISection<any> | undefined {
			return this.siteData?.pageList[this.activePage]?.sections.find(({ name }) => name === sectionName);
		},
	},
});

export default useMainStore;
