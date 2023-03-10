<script setup lang="ts">
import useAdminStore from '@/stores/admin';
import AdminTitle from '@/components/admin/AdminTitle.vue';
import UiInput from '@/components/ui/ui-input.vue';

const adminStore = useAdminStore();
</script>

<template>
	<div class="admin-helmet">
		<AdminTitle> Meta данные </AdminTitle>
		<div class="admin-helmet__fields">
			<div class="admin-helmet__field">
				<UiInput
					v-model="adminStore.helmet.title"
					name="title"
					label="title"
					textarea
					:rows="1"
				/>
			</div>
			<div class="admin-helmet__field">
				<UiInput
					v-model="adminStore.helmet.url"
					name="url"
					label="url"
				/>
			</div>
			<div class="admin-helmet__field admin-helmet__field--full">
				<UiInput
					v-model="adminStore.helmet.description"
					name="description"
					label="description"
					textarea
					:rows="2"
				/>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.admin-helmet {
	padding: 0 0 4rem;
	border-bottom: 2px solid $white;

	&__description {
		max-width: 70rem;
	}

	&__fields {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
	}

	&__field {
		width: calc(50% - 1rem);

		&--full {
			width: 100%;
		}
	}
}
</style>
