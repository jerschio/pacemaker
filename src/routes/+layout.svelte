<script>
	import './styles.css';
	import Homelink from './Homelink.svelte';
</script>

<div class="app">
	<main>
		<Homelink />
		<slot />
	</main>

	<!-- <footer>
		<p>Les heller <a href="https://vg.no">vg.no</a> (eksempel på footer)</p>
	</footer> -->
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
