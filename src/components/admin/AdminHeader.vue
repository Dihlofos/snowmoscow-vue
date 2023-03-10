<script setup lang="ts">
import router, { RouteNames } from '@/router';
import useAdminStore from '@/stores/admin';
import UiButton from '@/components/ui/ui-button.vue';

import { computed } from 'vue';
import IconBack from '@/components/icons/IconBack.vue';
import useMainStore from '@/stores/main';

const adminStore = useAdminStore();
const mainStore = useMainStore();

const backText = computed((): string => `Вернуться к сайту ${mainStore.siteName}`);

function goToMain() {
	router.push({ name: RouteNames.Home });
}

function save() {
	adminStore.uploadData();
}

function clear() {
	adminStore.cancelChanges();
}
</script>

<template>
	<div class="header">
		<div class="container">
			<div class="header__wrapper">
				<UiButton @click="goToMain">
					<IconBack />
					{{ backText }}
				</UiButton>
				<h1 class="header__title">{{ mainStore.siteData.pageList[0]?.helmet.title }}</h1>
				<div class="header__action-buttons">
					<UiButton
						class="header__back-button"
						@click="save"
					>
						Сохранить
					</UiButton>
					<UiButton
						class="header__back-button"
						theme="transparent"
						@click="clear"
					>
						Сбросить
					</UiButton>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.header {
	position: fixed;
	width: 100%;
	padding: 2rem;
	top: 0;
	left: 0;
	background-color: $darkblue;
	color: white;
	z-index: 20;

	&__wrapper {
		display: flex;
		align-items: center;
		width: 100%;
	}

	&__title {
		color: $white;
		flex-grow: 1;
		text-align: center;
		margin: 0;
		font-size: 2.6rem;
	}

	&__action-buttons {
		display: flex;
		gap: 2rem;
	}
}
</style>
