<script lang="ts">
	import { base } from '$app/paths';

	const urlToUse = base ? '/pacemaker' : '/';

	console.log('base:', base);
</script>

<div class="homelink">
	<a href={urlToUse}>Home urltouse</a>
	<a href={base}>Home urltouse</a>
	<p>Base er {base}</p>
</div>

<style>
	.homelink {
		list-style: none;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
