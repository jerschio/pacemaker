<script lang="ts">
	import { base } from '$app/paths';
	const urlToUse = base ? '/pacemaker' : '/';
</script>

<div class="homelink">
	<!--Dette virker av en eller annen grunn IKKE på google pages, det har noe med at de publiseres under /reponavn-->
	<!-- <a href={base || '/'}>Home</a> -->

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
