<script lang="ts">
  import '../global.postcss'
  import { theme } from './store'
  import { onMount } from 'svelte'


  onMount(() => {
    if ($theme === 'dark') {
      document.querySelector('html').classList.add('dark')
    }
  })

</script>


<main>
  <slot />
</main>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;


</style>