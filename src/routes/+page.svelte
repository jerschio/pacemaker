<script>
	import Breadcrumb from './Breadcrumb.svelte';
	import { base } from '$app/paths';
	export let data;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<!-- <Breadcrumb /> -->

	<h1>Velg produsent</h1>

	<div class="container">
		{#each data.producers as producer (producer.id)}
			<a href="{base}/producer/{producer.name}">
				<div>
					{producer.name}
				</div>
			</a>
		{/each}
	</div>
</section>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		height: 100vh;
	}

	.container div {
		background-color: #f0f0f0;
		border: 2px solid #333;
		padding: 20px;
		text-align: center;
		border-radius: 10px;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
		margin-bottom: 20px;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
