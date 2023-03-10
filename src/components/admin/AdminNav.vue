<script setup lang="ts">
import useAdminStore from '@/stores/admin';
import AdminTitle from '@/components/admin/AdminTitle.vue';
import UiInput from '@/components/ui/ui-input.vue';
import UiButton from '@/components/ui/ui-button.vue';
import UiCheckbox from '@/components/ui/ui-checkbox.vue';

import IconDelete from '@/components/icons/IconDelete.vue';

import IconPlus from '@/components/icons/IconPlus.vue';
import { addBlankElement } from '@/utils';

const adminStore = useAdminStore();

function onDeleteNavLink(idx: number) {
	adminStore.removeNavLinkByIndex(idx);
}

function onAddNavField() {
	adminStore.formData.pageList[adminStore.activePage].nav.links = addBlankElement(adminStore.nav);
}
</script>

<template>
	<div class="admin-nav">
		<AdminTitle>Навигация</AdminTitle>
		<div class="admin-nav__table">
			<div class="admin-nav__row">
				<div class="admin-nav__field-input">Название</div>
				<div class="admin-nav__field-input">Ссылка</div>
				<div class="admin-nav__field-actions"></div>
			</div>
			<div
				class="admin-nav__row"
				v-for="(item, idx) in adminStore.nav"
				:key="item.id"
			>
				<UiInput
					v-model="item.label"
					class="admin-nav__field-input"
					:name="item.label"
				/>

				<UiInput
					v-model="item.link"
					class="admin-nav__field-input"
					:name="item.link"
				/>
				<div class="admin-nav__actions">
					<UiCheckbox
						v-model="item.external"
						class="admin-nav__field-checkbox"
						title="Открыть в новой вкладке"
						:name="`${item.label}-external`"
					/>
					<UiButton
						class="admin-nav__field-delete"
						title="Удалить элемент навигации"
						@click="onDeleteNavLink(idx)"
					>
						<IconDelete />
					</UiButton>
				</div>
			</div>
		</div>
		<UiButton
			class="admin-nav__add-button"
			@click="onAddNavField"
			theme="transparent"
		>
			<IconPlus />
			Добавить ссылку
		</UiButton>
	</div>
</template>

<style lang="scss">
.admin-nav {
	padding: 4rem 0 4rem;
	border-bottom: 2px solid $white;

	&__description {
		max-width: 70rem;
	}

	&__table {
		width: 100%;
	}

	&__row {
		display: flex;
		align-items: flex-end;
		gap: 1rem;
		margin: 0 0 2rem;
	}

	&__field-delete {
		svg {
			height: 2rem;
			width: 2rem;
		}
	}

	&__field-input {
		width: 25rem;
	}

	&__actions {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
}
</style>
