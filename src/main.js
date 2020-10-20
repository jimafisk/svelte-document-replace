import App from './App.svelte';

const app = new App({
	target: document,
  hydrate: true,
	props: {
		name: 'world'
	}
});

export default app;
