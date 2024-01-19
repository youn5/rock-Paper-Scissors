<script lang="ts">
	export let image: string;
</script>


<button on:click>
	<img src={image} alt="" />
</button>
<!--  
<div class="border">
	<button class="button" on:click={() => {}}>
		<img src={image} alt="" />
	</button>
</div> -->
