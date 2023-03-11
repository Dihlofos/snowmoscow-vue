<script setup lang="ts">
import Nav from '@/components/main/Nav.vue';
import Hero from '@/components/main/Hero.vue';

import useMainStore from '@/stores/main';

const mainStore = useMainStore();
</script>

<template>
	<header
		class="header"
		id="header"
	>
		<h1 class="visually-hidden">{{ mainStore.siteName }}</h1>

		<Nav />
		<div class="header__container container">
			<div class="header__content">
				<div
					class="header__logo js-logo"
					style="animation-delay: 0.3s"
				>
					<img
						width="1414"
						height="306"
						src="/img/logo.svg"
						alt="Снег и лёд в Москве"
					/>
				</div>
				<Hero />
			</div>
		</div>
	</header>
</template>

<style lang="scss">
.header {
	position: relative;
	padding: 0 0 10rem;

	@media (max-width: $mobile) {
		padding: 30px 0 30px;
	}

	&__logo {
		position: relative;
		margin: 2.8rem 0 0;
		z-index: 5;

		@media (max-width: $mobile) {
			margin: 0;
		}
	}

	&__hero {
		margin-top: -4.5rem;

		@media (max-width: $mobile) {
			margin-top: -6px;
		}
	}
}
</style>
