<script setup lang="ts">
import useMainStore from '@/stores/main';
import Header from '../components/main/Header.vue';
import Info from '../components/main/Info.vue';
import About from '../components/main/About.vue';

const mainStore = useMainStore();

mainStore.fetchSiteData();
</script>

<template>
	<Header />
	<main>
		<Info />
		<About />
	</main>
</template>
