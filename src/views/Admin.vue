<script setup lang="ts">
import AdminHeader from '@/components/admin/AdminHeader.vue';
import AdminHelmet from '@/components/admin/AdminHelmet.vue';
import AdminSections from '@/components/admin/AdminSections.vue';
import AdminNav from '@/components/admin/AdminNav.vue';
import useAdminStore from '@/stores/admin';

const adminStore = useAdminStore();

function created() {
	adminStore.initialFormFill();
}

created();
</script>

<template>
	<div class="admin-panel">
		<AdminHeader />

		<main class="admin-panel__main">
			<div class="container">
				<AdminHelmet />
				<AdminNav />
				<AdminSections />
			</div>
		</main>
		<footer class="admin-panel__footer">
			<div class="container">
				<a
					href="https://t.me/junepaik"
					target="_blank"
					>@junepaik</a
				>
				<a
					href="https://github.com/Dihlofos/vue-template"
					target="_blank"
					>https://github.com/Dihlofos/vue-template</a
				>
			</div>
		</footer>
	</div>
</template>

<style lang="scss">
.admin-panel {
	padding-top: 81px;
	height: 100%;
	display: flex;
	flex-direction: column;
	flex-grow: 1;

	&__title {
		margin: 0 0 2rem;
		text-transform: uppercase;
	}

	&__main {
		flex-grow: 1;
		padding: 2rem;
	}

	&__footer {
		background-color: $darkblue;
		padding: 2rem;

		.container {
			display: flex;
			justify-content: space-between;
		}

		a {
			color: $white;
			transition: color 0.2s ease-in-out;

			&:hover {
				color: $pink;
			}
		}
	}
}
</style>
