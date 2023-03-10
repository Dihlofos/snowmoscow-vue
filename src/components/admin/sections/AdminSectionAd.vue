<script setup lang="ts">
import useAdminStore from '@/stores/admin';
import UiInput from '@/components/ui/ui-input.vue';
import { computed } from 'vue';
import type { IAdContent } from '@/shared/types';

const adminStore = useAdminStore();

const content = computed((): IAdContent => adminStore.getSectionByName('ad')?.content);
</script>

<template>
	<div
		class="admin-section-ad"
		v-if="content"
	>
		<div class="admin-section-ad__fields">
			<UiInput
				v-model="content.button.text"
				class="admin-section-ad__field"
				name="admin-section-ad-button-text"
				label="Текст в кнопке"
			/>
			<UiInput
				v-model="content.button.link"
				class="admin-section-ad__field"
				name="admin-section-ad-button-link"
				label="Адрес ссылки"
			/>
		</div>
	</div>
</template>

<style lang="scss">
.admin-section-ad {
	&__fields {
		display: flex;
		gap: 2rem;
	}

	&__field {
		width: calc(50% - 1rem);
	}
}
</style>
