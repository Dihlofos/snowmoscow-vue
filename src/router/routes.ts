import Home from '../views/Home.vue';

export enum RouteNames {
	Home = 'HOME',
	Admin = 'ADMIN',
}

export default [
	{
		path: '/',
		name: RouteNames.Home,
		component: Home,
	},
	{
		path: '/admin',
		name: RouteNames.Admin,
		component: () => import('@/views/Admin.vue'),
	},
];
