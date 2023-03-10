<script setup lang="ts">
import useAdminStore from '@/stores/admin';
import UiInput from '@/components/ui/ui-input.vue';
import UiButton from '@/components/ui/ui-button.vue';

import IconDelete from '@/components/icons/IconDelete.vue';
import IconPlus from '@/components/icons/IconPlus.vue';
import { computed } from 'vue';
import type { IAboutContent } from '@/shared/types';

const adminStore = useAdminStore();

const content = computed((): IAboutContent => adminStore.getSectionByName('about')?.content);

function onDeleteParagraph(idx: number) {
	content.value.paragraphs.splice(idx, 1);
}

function onAddParagraph() {
	content.value.paragraphs.push('');
}
</script>

<template>
	<div
		class="admin-section-about"
		v-if="content"
	>
		<div class="admin-section-about__paragraphs">
			<div class="admin-section-about__title">Параграфы</div>
			<div
				class="admin-section-about__paragraph"
				v-for="(paragraph, index) in content.paragraphs"
				:key="index"
			>
				<UiInput
					v-model="content.paragraphs[index]"
					class="admin-section-about__field"
					:name="`admin-section-about-par${index}`"
					textarea
					:rows="3"
				/>
				<UiButton
					class="admin-nav__field-delete"
					title="Удалить элемент навигации"
					@click="onDeleteParagraph(index)"
				>
					<IconDelete />
				</UiButton>
			</div>
			<UiButton
				class="admin-nav__add-button"
				@click="onAddParagraph"
				theme="transparent"
			>
				<IconPlus />
				Добавить параграф
			</UiButton>
		</div>
	</div>
</template>

<style lang="scss">
.admin-section-about {
	&__title {
		margin: 0 0 1rem;
	}
	&__paragraph {
		width: 100%;
		display: flex;
		align-items: center;
		gap: 2rem;
	}

	&__field {
		flex-grow: 1;
	}
}
</style>
