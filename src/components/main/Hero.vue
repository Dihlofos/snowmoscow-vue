<script setup lang="ts">
import type { ISection } from '@/services/api';
import type { IHeroContent } from '@/shared/types';

import useMainStore from '@/stores/main';
import { computed } from 'vue';

const mainStore = useMainStore();

const section = computed((): ISection<IHeroContent> => mainStore.getSectionByName('hero'));
</script>

<template>
	<div class="hero header__hero js-video">
		<div class="hero__video-wrapper">
			<div class="hero__bg js-video-bg">
				<div
					class="hero__bg-announce js-announce"
					style="animation-delay: 1s"
				>
					<p>{{ section?.description }}</p>
				</div>
			</div>
			<video
				class="hero__video js-video-video"
				poster="img/hero-video-image.jpg"
				muted
				inline
				autoplay
				loop
				playsinline
				defaultmuted
				preload="auto"
			>
				<source
					src="video/desktop.mp4"
					type="video/mp4"
				/>
			</video>
		</div>
		<ul class="hero__tops">
			<li class="hero__tops-item hero__tops-item_yellow">
				<div
					class="hero__tops-item-wrapper js-item"
					style="animation-delay: 0.5s"
				>
					<svg
						width="25"
						height="25"
						viewBox="0 0 25 25"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0 7.8125H25V22C25 23.6569 23.6569 25 22 25H3C1.34315 25 0 23.6569 0 22V7.8125Z"
							fill="#2558BF"
						/>
						<path
							d="M6.25 0.78125C6.25 0.57405 6.16769 0.375336 6.02118 0.228823C5.87466 0.08231 5.67595 0 5.46875 0C5.26155 0 5.06284 0.08231 4.91632 0.228823C4.76981 0.375336 4.6875 0.57405 4.6875 0.78125V1.5625H3.125C2.2962 1.5625 1.50134 1.89174 0.915291 2.47779C0.32924 3.06384 0 3.8587 0 4.6875L0 6.25H25V4.6875C25 3.8587 24.6708 3.06384 24.0847 2.47779C23.4987 1.89174 22.7038 1.5625 21.875 1.5625H20.3125V0.78125C20.3125 0.57405 20.2302 0.375336 20.0837 0.228823C19.9372 0.08231 19.7385 0 19.5312 0C19.324 0 19.1253 0.08231 18.9788 0.228823C18.8323 0.375336 18.75 0.57405 18.75 0.78125V1.5625H6.25V0.78125Z"
							fill="#2558BF"
						/>
					</svg>
					<p v-html="section?.content.bullits[0].text" />
				</div>
			</li>
			<li class="hero__tops-item hero__tops-item_pink">
				<div
					class="hero__tops-item-wrapper js-item"
					style="animation-delay: 0.7s"
				>
					<svg
						width="16"
						height="20"
						viewBox="0 0 16 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M8 10C8.55 10 9.021 9.804 9.413 9.412C9.80433 9.02067 10 8.55 10 8C10 7.45 9.80433 6.979 9.413 6.587C9.021 6.19567 8.55 6 8 6C7.45 6 6.97933 6.19567 6.588 6.587C6.196 6.979 6 7.45 6 8C6 8.55 6.196 9.02067 6.588 9.412C6.97933 9.804 7.45 10 8 10ZM8 20C5.31667 17.7167 3.31267 15.5957 1.988 13.637C0.662667 11.679 0 9.86667 0 8.2C0 5.7 0.804333 3.70833 2.413 2.225C4.021 0.741667 5.88333 0 8 0C10.1167 0 11.979 0.741667 13.587 2.225C15.1957 3.70833 16 5.7 16 8.2C16 9.86667 15.3377 11.679 14.013 13.637C12.6877 15.5957 10.6833 17.7167 8 20Z"
							fill="#2558BF"
						/>
					</svg>
					<p v-html="section?.content.bullits[1].text" />
				</div>
			</li>
			<li class="hero__tops-item hero__tops-item_blue">
				<div
					class="hero__tops-item-wrapper js-item"
					style="animation-delay: 0.9s"
				>
					<svg
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M9.99 0C4.47 0 0 4.369 0 9.75223C0 15.1355 4.47 19.5045 9.99 19.5045C15.52 19.5045 20 15.1355 20 9.75223C20 4.369 15.52 0 9.99 0ZM14 13.6531C13.9075 13.7435 13.7976 13.8153 13.6766 13.8642C13.5557 13.9131 13.426 13.9383 13.295 13.9383C13.164 13.9383 13.0343 13.9131 12.9134 13.8642C12.7924 13.8153 12.6825 13.7435 12.59 13.6531L9.3 10.4446C9.20551 10.3543 9.13034 10.2466 9.07885 10.1278C9.02735 10.0089 9.00055 9.88126 9 9.75223V5.85134C9 5.31497 9.45 4.87612 10 4.87612C10.55 4.87612 11 5.31497 11 5.85134V9.35239L14 12.2781C14.39 12.6584 14.39 13.2728 14 13.6531Z"
							fill="#2558BF"
						/>
					</svg>
					<p v-html="section?.content.bullits[2].text" />
				</div>
			</li>
		</ul>
	</div>
</template>

<style lang="scss">
.hero {
	&__video-wrapper {
		position: relative;
	}

	&__bg {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 3;
	}

	&__bg-announce {
		position: absolute;
		z-index: 3;
		top: 5.6rem;
		left: 4.3rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background: $pink;
		transform: rotate(-8.71deg);
		width: 24.5rem;
		height: 24.5rem;
		border-radius: 50%;
		font-size: 2.4rem;
		line-height: 3rem;
		font-weight: 700;
		text-transform: uppercase;
		text-align: center;
		box-shadow: 0px 4px 4px rgba(25, 53, 119, 0.67);

		p {
			margin: 1.4rem 0 0;
			letter-spacing: 0.07rem;
		}

		@media (max-width: $mobile) {
			width: 124px;
			height: 124px;
			top: 24px;
			left: -11px;
		}

		@media (max-width: $tablet) {
			width: 124px;
			height: 124px;
			font-size: 14px;
			line-height: 1.2;
			p {
				margin: 0;
			}
		}

		@media (max-width: $mobile) {
			width: 104px;
			height: 104px;
			font-size: 12px;
			line-height: 1.2;
			p {
				margin: 0;
			}
		}
	}

	&__bg-days {
		position: absolute;
		top: 17.3rem;
		left: 23.6rem;
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		border-radius: 50%;
		width: 19.4rem;
		height: 19.4rem;
		background-color: $blue;
		border: 1px solid $white;
		text-align: center;
		padding: 4.4rem 3.3rem 0;
		z-index: 3;

		h6 {
			font-weight: 700;
			margin: 0 0 0.5rem;
			font-size: 1.4rem;
			line-height: 1.7rem;
		}

		p {
			font-size: 1.4rem;
			line-height: 1.7rem;
			margin: 0;
		}

		@media (max-width: $tablet) {
			z-index: 2;
			top: 18.3rem;
			left: 12.6rem;
		}

		@media (max-width: $mobile) {
			top: 117px;
			left: 23px;
			width: 111px;
			height: 111px;
			padding: 20px 18px 0;
			padding: 20px 18px 0;
			h6,
			p {
				font-size: 9px;
				line-height: 10px;
			}
		}
	}

	&__video-wrapper {
		width: 100%;
		height: 43.5rem;

		@media (max-width: $tablet) {
			height: 70.5rem;
		}

		@media (max-width: $mobile) {
			height: 335px;
			border-radius: 15px 15px 0px 0px;
			overflow: hidden;
		}
	}

	&__video {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: 2;
		border-radius: 25px 25px 0 0;

		@media (max-width: $mobile) {
			border-radius: 15px 15px 0px 0px;
			overflow: hidden;
		}
	}

	&__tops {
		position: relative;
		display: flex;
		list-style: none;
		padding: 0;
		margin: -3rem 0 0;
		z-index: 5;

		@media (max-width: $mobile) {
			flex-direction: column;
			margin: -40px 0 0;
		}
	}

	&__tops-item-wrapper {
		display: flex;
		justify-content: center;
		align-items: flex-start;
	}

	&__tops-item {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 9.7rem;
		padding: 1rem 2rem;
		width: 33.3333%;
		color: $darkblue;
		border-radius: 25px;

		@media (max-width: $mobile) {
			border-radius: 15px;
			width: 100%;
			height: auto;
		}

		&_yellow {
			background-color: $yellow;

			@media (max-width: $mobile) {
				padding: 13px 0;
			}
		}

		&_pink {
			background-color: $lightpink;

			@media (max-width: $mobile) {
				padding: 18px 0;
			}
		}

		&_blue {
			background-color: $lightestBlue;
			width: 36%;

			@media (max-width: $mobile) {
				width: 100%;
				padding: 19px 0 17px;
			}
		}

		svg {
			flex-shrink: 0;
			margin: 0.4rem 1rem 0 0;

			@media (max-width: $mobile) {
				width: 12px;
				height: 12px;
			}
		}

		p {
			font-size: 2.5rem;
			line-height: 3rem;
			text-transform: uppercase;
			font-weight: 700;
			margin: 0;

			@media (max-width: $mobile) {
				font-size: 16px;
				line-height: 1.2;
			}
		}
	}
}
</style>
