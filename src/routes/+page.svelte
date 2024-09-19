<script lang="ts">
	import { count } from '$lib/stores';

	let intervalID: any;

	function starter() {
		intervalID = setInterval(function () {
			count.update((value) => value - 1);
		}, 1000);
	}

	function stopper() {
		const clearID = clearInterval(intervalID);
	}

	function resetter() {
		count.set(60);
	}
</script>

<span>{$count}</span>

<button on:click={starter}>Start</button>
<button on:click={stopper}>Stop</button>
<button on:click={resetter}>Reset</button>
