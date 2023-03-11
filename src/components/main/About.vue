<script setup lang="ts">
import type { ISection } from '@/services/api';
import type { IAboutContent } from '@/shared/types';
import useMainStore from '@/stores/main';
import { computed } from 'vue';

const mainStore = useMainStore();

const section = computed((): ISection<IAboutContent> => mainStore.getSectionByName('about') as ISection<IAboutContent>);
</script>

<template>
	<section
		class="about"
		id="about"
	>
		<div class="container">
			<h2 class="about__title title">{{ section?.title }}</h2>
			<div class="about__content">
				<img
					class="about__image"
					src="/img/about-image.jpg"
					alt="ледяная скульптура саамов"
					width="680"
					height="512"
				/>
				<div
					class="about__text"
					style="animation-delay: 0.3s"
				>
					<h3 v-html="section?.description" />
					<p
						v-for="(paragraph, index) in section?.content.paragraphs"
						:key="index"
						v-html="paragraph"
					/>
				</div>
			</div>
			<div
				class="about__plank js-anim-plank"
				style="animation-delay: 0.3s"
			>
				Вход свободный
			</div>
		</div>
	</section>
</template>

<style lang="scss">
.about {
	padding: 9rem 0 10.2rem;
	background-color: $blue;
	border-radius: 20px;

	@media (min-width: $tablet) {
		.js-anim-title,
		.js-anim-content,
		.js-anim-plank {
			opacity: 0;
		}
	}

	@media (max-width: $mobile) {
		padding: 38px 0 40px;
	}

	.container {
		position: relative;
	}

	&__content {
		display: flex;
		gap: 40px;

		@media (max-width: $mobile) {
			flex-direction: column-reverse;
			gap: 0;
		}
	}

	&__image {
		border-radius: 25px;
		max-width: 68rem;

		@media (max-width: $mobile) {
			width: 100%;
			max-width: 100%;
		}
	}

	&__text {
		width: 36.1%;

		h3 {
			font-size: 3.1rem;
			line-height: 3.7rem;
			margin: 0 0 2rem;
			font-weight: 500;
			text-transform: uppercase;

			@media (max-width: $mobile) {
				text-transform: none;
				line-height: 20px;
				line-height: 24px;
				margin: 0 0 15px;
			}
		}

		p {
			font-size: 2rem;
			line-height: 2.4rem;
			margin: 0 0 2rem;

			&:last-child {
				margin: 0;
			}

			@media (max-width: $mobile) {
				line-height: 14px;
				line-height: 16px;

				&:last-child {
					margin: 0 0 2rem;
				}
			}
		}

		@media (max-width: $mobile) {
			width: 100%;
		}
	}

	&__plank {
		bottom: -17.4rem;
		right: 4rem;
		position: absolute;
		display: flex;
		justify-content: center;
		width: 24.9rem;
		height: 24.9rem;
		background-color: $pink;
		color: $white;
		font-size: 2.5rem;
		line-height: 3rem;
		font-weight: 900;
		text-transform: uppercase;
		transform: rotate(-11.47deg);
		text-align: center;
		border-radius: 50%;
		padding: 8rem 4rem 0;

		@media (max-width: $mobile) {
			width: 125px;
			height: 125px;
			font-size: 12px;
			line-height: 1.2;
			bottom: -78px;
			right: 126px;
			padding: 48px 20px 0;
		}
	}
}
</style>
