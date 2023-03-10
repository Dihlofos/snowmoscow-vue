<script setup lang="ts">
import useAdminStore from '@/stores/admin';
import UiInput from '@/components/ui/ui-input.vue';
import { computed } from 'vue';
import type { IHeroContent } from '@/shared/types';

const adminStore = useAdminStore();

const content = computed((): IHeroContent => adminStore.getSectionByName('hero')?.content);
</script>

<template>
	<div
		class="admin-section-hero"
		v-if="content"
	>
		<div class="admin-section-hero__bullits-title">Булиты с иконками</div>
		<div class="admin-section-hero__fields">
			<template
				v-for="(bullit, index) in content.bullits"
				:key="`${bullit.icon}-${index}`"
			>
				<UiInput
					v-model="bullit.text"
					class="admin-section-hero__field"
					:name="bullit.icon"
					:label="bullit.icon"
				/>
			</template>
		</div>
	</div>
</template>

<style lang="scss">
.admin-section-hero {
	&__bullits-title {
		margin: 0 0 2rem;
	}

	&__fields {
		display: flex;
		width: 100%;
		gap: 2rem;
	}

	&__field {
		margin: 0 0 2rem;
		width: calc(33.33% - 1rem);
	}
}
</style>
