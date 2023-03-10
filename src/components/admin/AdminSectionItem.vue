<script setup lang="ts">
import useAdminStore from '@/stores/admin';
import UiInput from '@/components/ui/ui-input.vue';
import AdminTitle from '@/components/admin/AdminTitle.vue';
import { computed } from 'vue';
import type { ISection } from '@/services/api';

export interface IAdminSectionMainProps {
	name: string;
	title: string;
}

const adminStore = useAdminStore();

const props = defineProps<IAdminSectionMainProps>();

const section = computed((): ISection<any> | undefined => adminStore.getSectionByName(props.name));

const titleName = computed((): string => `admin-section-${section.value?.name}-title`);
const descriptionName = computed((): string => `admin-section-${section.value?.name}-description`);
</script>

<template>
	<div
		class="admin-section-item"
		v-if="section"
	>
		<AdminTitle>{{ props.title }}</AdminTitle>
		<div class="admin-section-item__fields">
			<UiInput
				v-model="section.title"
				class="admin-section-item__field"
				:name="titleName"
				label="Заголовок*"
			/>

			<UiInput
				v-model="section.description"
				class="admin-section-item__field"
				:name="descriptionName"
				textarea
				:rows="1"
				label="Описание"
			/>
		</div>

		<slot></slot>
	</div>
</template>

<style lang="scss">
.admin-section-item {
	padding: 3rem 0 3rem;
	border-bottom: 1px solid $white;

	&__fields {
		width: 100%;
		display: flex;
		gap: 2rem;
	}

	&__field {
		margin: 0 0 2rem;
		width: calc(50% - 1rem);
	}
}
</style>
