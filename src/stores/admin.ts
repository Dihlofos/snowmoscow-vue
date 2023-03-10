import type { INavLink, IPageHelmet, ISection, ISite } from '@/services/api';
import { defineStore } from 'pinia';
import useMainStore from './main';
import cloneDeep from 'lodash.clonedeep';

interface IAdminState {
	formData: ISite;
	loading: boolean;
	activePage: number;
}

const mainStore = useMainStore();

const useMainPageStore = defineStore({
	id: 'admin',

	state: (): IAdminState => ({
		formData: {
			id: 0,
			name: '',
			description: '',
			baseUrl: '',
			pageList: [],
		},
		activePage: 0,
		loading: false,
	}),

	getters: {
		helmet(): IPageHelmet {
			return (
				this.formData?.pageList[this.activePage]?.helmet ?? {
					id: 0,
					title: '',
					description: '',
					url: '',
				}
			);
		},
		nav(): INavLink[] {
			return this.formData?.pageList[this.activePage]?.nav.links ?? [];
		},
	},

	actions: {
		// Fetchers.
		async initialFormFill(): Promise<void> {
			try {
				this.loading = true;
				await mainStore.fetchSiteData();
				this.formData = cloneDeep(mainStore.siteData);
			} catch (e: unknown) {
				console.error('pageData loading error', e);
			} finally {
				this.loading = false;
			}
		},

		async uploadData(): Promise<void> {
			try {
				this.loading = true;
				this.apiService.mainApi.updateSite(this.formData);
			} catch (e: unknown) {
				console.error('pageData loading error', e);
			} finally {
				this.loading = false;
			}
		},

		// Mutations
		removeNavLinkByIndex(idx: number): void {
			if (!this.formData?.pageList[this.activePage]?.nav.links) {
				return;
			}

			this.formData.pageList[this.activePage].nav.links.splice(idx, 1);
		},

		// Resets.
		cancelChanges(): void {
			console.log(cloneDeep(mainStore.siteData));
			this.formData = cloneDeep(mainStore.siteData);
		},

		getSectionByName(sectionName: string): ISection<any> | undefined {
			return this.formData?.pageList[this.activePage]?.sections.find(({ name }) => name === sectionName);
		},
	},
});

export default useMainPageStore;
