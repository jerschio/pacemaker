<script lang="ts">
	import { base } from '$app/paths';

	const urlToUse = base ? '/pacemaker' : '/';

	console.log('base:', base);
</script>

<div class="homelink">
	<!-- <a href="/pacemaker">Home</a> -->
	<a href={urlToUse}>Home</a>
</div>

<style>
	.homelink {
		list-style: none;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
