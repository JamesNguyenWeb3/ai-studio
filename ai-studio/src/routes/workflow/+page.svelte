<script lang="ts">
	import { Node, ThemeToggle, Svelvet, Anchor, Resizer, Minimap, Controls } from 'svelvet';
	function handleClick1(e: CustomEvent) {
		const { detail } = e;
        console.log(detail.node.selected)
		detail.node.bgColor.set('red');
	}
	function handleClick2(e: CustomEvent) {
		const { detail } = e;
        console.log(detail.node.selected)
		detail.node.bgColor.set('red');
	}
</script>

<Svelvet id="my-canvas" width={1100} height={800} TD minimap controls locked>
	<Node id="node1" let:selected on:nodeClicked={handleClick1}>
		<div class:selected class=" h-[200px] w-[200px]">node1</div>
	</Node>
	<Node id="node2" let:selected on:nodeClicked={handleClick2}>
		<div class:selected class=" h-[200px] w-[200px]">node2</div>
	</Node>
	<ThemeToggle main="dark" alt="light" slot="toggle" />
</Svelvet>
