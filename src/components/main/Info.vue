<script setup lang="ts">
import type { ISection } from '@/services/api';
import type { IAdContent } from '@/shared/types';
import useMainStore from '@/stores/main';
import { computed } from 'vue';

const mainStore = useMainStore();

const section = computed((): ISection<IAdContent> => mainStore.getSectionByName('ad') as ISection<IAdContent>);
</script>

<template>
	<section
		class="info"
		id="info"
	>
		<div class="container">
			<img
				src="/img/info-blue-right-top.svg"
				class="info__ornament info__ornament--blue-right-top js-blue-right-top"
				width="224"
				height="221"
				alt="орнамент"
			/>
			<img
				src="/img/info-blue-right-bottom.svg"
				class="info__ornament info__ornament--blue-right-bottom js-blue-right-bottom"
				width="575"
				height="507"
				alt="орнамент"
			/>
			<img
				src="/img/info-blue-left-bottom.svg"
				class="info__ornament info__ornament--blue-left-bottom js-blue-left-bottom"
				width="418"
				height="463"
				alt="орнамент"
			/>

			<img
				src="/img/info-color-bottom.svg"
				class="info__ornament info__ornament--color-bottom js-color-bottom"
				width="69"
				height="68"
				alt="орнамент"
			/>
			<img
				src="/img/info-color-left.svg"
				class="info__ornament info__ornament--color-left js-color-left"
				width="85"
				height="55"
				alt="орнамент"
			/>
			<img
				src="/img/info-color-top.svg"
				class="info__ornament info__ornament--color-top js-color-top"
				width="96"
				height="90"
				alt="орнамент"
			/>

			<img
				src="/img/info-whites.svg"
				class="info__ornament info__ornament--whites js-whites"
				width="208"
				height="158"
				alt="орнамент"
			/>
			<div
				class="info__content"
				style="animation-delay: 0.2s"
			>
				<img
					class="info__snowflake"
					src="/img/info-snowflake.svg"
					width="51"
					height="55"
					alt="снежинка"
				/>
				<p
					class="info__text"
					v-html="section?.title"
				></p>
				<a
					class="button"
					:href="section?.content.button.link"
					target="_blank"
					>{{ section?.content.button.text }}</a
				>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
.info {
	padding: 23rem 0 39.4rem;
	position: relative;
	overflow: hidden;

	@media (max-width: $tablet) {
		padding: 13rem 0 15rem;
	}

	@media (max-width: $mobile) {
		padding: 75px 0px 80px;
	}

	.container {
		position: relative;
	}

	@media (min-width: $tablet) {
		.js-anim {
			opacity: 0;
		}
	}

	&__ornament {
		position: absolute;

		&--whites {
			top: 1.4rem;
			left: -12.5rem;
			width: 20.8rem;
			height: 15.8rem;

			@media (max-width: $mobile) {
				top: -27px;
				left: -19px;
				width: 83px;
				height: 63px;
			}
		}

		&--blue-right-top {
			top: -12.6rem;
			right: 10.1rem;
			width: 22.4rem;
			height: 22.1rem;

			@media (max-width: $mobile) {
				top: -26px;
				right: 29px;
				width: 60px;
				height: 61px;
			}
		}

		&--blue-right-bottom {
			bottom: -9.5rem;
			right: -33rem;
			width: 57.5rem;
			height: 50.7rem;

			@media (max-width: $mobile) {
				bottom: 19px;
				right: -30px;
				width: 161px;
				height: auto;
			}
		}

		&--blue-left-bottom {
			bottom: 0;
			left: -11rem;
			width: 41.8rem;
			height: 46.3rem;

			@media (max-width: $mobile) {
				bottom: 53px;
				left: -39px;
				width: 113px;
				height: 125px;
			}
		}

		&--color-top {
			top: -23.3rem;
			left: 51rem;
			width: 9.6rem;
			height: 9rem;

			@media (max-width: $mobile) {
				top: -18px;
				left: 92px;
				width: 28px;
				height: auto;
			}
		}

		&--color-left {
			bottom: -2rem;
			left: 13rem;
			width: 8.5rem;
			height: 5.5rem;

			@media (max-width: $mobile) {
				bottom: 69px;
				left: 30px;
				width: 34px;
				height: 22px;
			}
		}

		&--color-bottom {
			bottom: -17.8rem;
			right: 36.3rem;
			width: 6.9rem;
			height: 6.8rem;

			@media (max-width: $mobile) {
				bottom: -45px;
				right: 68px;
				width: 27px;
				height: 27px;
			}
		}
	}

	&__snowflake {
		margin: 0 0 10rem;

		@media (max-width: $mobile) {
			width: 20px;
			height: 20px;
			margin: 0 0 15px;
		}
	}

	&__content {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		z-index: 2;
	}

	&__text {
		font-size: 5rem;
		line-height: 6rem;
		text-transform: uppercase;
		text-align: center;
		margin: 0 0 6rem;
		max-width: 88%;

		@media (max-width: $mobile) {
			font-size: 20px;
			line-height: 1.2;
			margin: 0 0 26px;
		}
	}
}
</style>
