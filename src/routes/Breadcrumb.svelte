<script lang="ts">
	// Pr nå benyttes ikke denne komponenten, dersom den skal benyttes må den få litt mer kjærlighet, ikke minst om man publiserer til github pages
	import { onMount } from 'svelte';
	import { base } from '$app/paths';

	let segments: string[] = [];

	onMount(() => {
		console.log('Onmount fra bread');
		segments = window.location.pathname.split('/').filter(Boolean);

		// Remove last segment of the path
		segments = segments.slice(0, -1);
	});
</script>

<nav>
	<ul class="breadcrumb">
		<!-- Always show home -->
		<li>
			<a href="{base}/">Home</a>
		</li>

		<!-- Show segments -->
		{#each segments as segment, index (segment)}
			<li>
				<a href={`/${segments.slice(0, index + 1).join('/')}`}>
					{segment}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	.breadcrumb {
		list-style: none;
		display: flex;
		align-items: center;
	}
	.breadcrumb li:not(:last-child)::after {
		content: '/';
		margin: 0 10px;
	}
</style>
