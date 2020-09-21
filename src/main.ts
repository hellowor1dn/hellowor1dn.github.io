import App from './App.svelte';

// const host = 'timflichy.com'
// if ((host == window.location.host) && (window.location.protocol != "https:")) {
//     window.location.protocol = "https";
// }

const app = new App({
    target: document.body,
    props: {}
});

export default app;
