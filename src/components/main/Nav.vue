<script setup lang="ts">
import useMainStore from '@/stores/main';

const mainStore = useMainStore();
</script>

<template>
	<nav
		class="header__nav nav js-nav"
		style="animation-delay: 1.2s"
	>
		<ul class="nav__list js-nav">
			<li
				class="nav__item"
				v-for="nav in mainStore.nav"
				:key="nav.id"
			>
				<a
					class="nav__link js-scroll"
					data-scroll
					:href="nav.link"
					>{{ nav.label }}</a
				>
			</li>
		</ul>
	</nav>
</template>

<style lang="scss">
.nav {
	position: relative;
	z-index: 13;
	padding: 4rem 0 0;
	margin: 0 auto;

	@media (max-width: $tablet) {
		display: none;
	}

	&__list {
		display: flex;
		width: 100%;
		justify-content: center;
		list-style: none;
		margin: 0 -5px;
	}

	&__link {
		display: inline-flex;
		justify-content: center;
		margin: 0 5px;
		color: $white;
		border-radius: 10px;
		text-decoration: none;
		padding: 0.7rem 2rem;
		text-align: center;
		font-size: 1.4rem;
		line-height: 1.5rem;
		transition: font-weight 0.1s ease-in-out, background-color 0.1s ease-in-out, color 0.1s ease-in-out;
		border: 1px solid $white;

		&:hover,
		&:active {
			background-color: $white;
			color: $blue;
		}
	}
}
</style>
