<script setup lang="ts">
import AdminSectionItem from '@/components/admin/AdminSectionItem.vue';

// Sections
import AdminSectionHero from '@/components/admin/sections/AdminSectionHero.vue';
import AdminSectionAd from '@/components/admin/sections/AdminSectionAd.vue';
import AdminSectionAbout from '@/components/admin/sections/AdminSectionAbout.vue';
</script>

<template>
	<div class="admin-sections">
		<AdminSectionItem
			name="hero"
			title="Стартовая секция (блок с видео)"
		>
			<AdminSectionHero />
		</AdminSectionItem>
		<AdminSectionItem
			name="ad"
			title="Блок с ссылкой на телеграм-канал"
		>
			<AdminSectionAd />
		</AdminSectionItem>
		<AdminSectionItem
			name="about"
			title="О фестивале"
		>
			<AdminSectionAbout />
		</AdminSectionItem>
		<AdminSectionItem
			name="locations"
			title="Локации"
		>
			ad component
		</AdminSectionItem>
		<div class="admin-sections__tip">
			*Заголовок может быть не виден на сайте. Но он должен быть заполнен и будет находится в разметке сайта. Это
			важно для SEO оптимизации
		</div>
	</div>
</template>
<style lang="scss">
.admin-sections {
	&__tip {
		font-size: 1.3rem;
		margin: 1rem 0 3rem;
	}
}
</style>
