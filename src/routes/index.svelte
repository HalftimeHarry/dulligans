<script lang="ts">
  import { theme } from './store'
  import ToggleTheme from '$lib/ToggleTheme.svelte'
  import Timer from '$lib/Timer.svelte'
  import {isOverlayOpenType} from"./store"
  import Overlay from "$lib/Overlay.svelte"
  import { Client } from "xrpl";

  // In browsers, use a <script> tag. In Node.js, uncomment the following line:
  // const xrpl = require('xrpl') NOTE The { Client } has replaced this comment

  // Wrap code in an async function so we can use await
  async function main() {

    // Define the network client
    const client = new Client("wss://s.altnet.rippletest.net:51233")
      await client.connect()
      console.log('conected index');

    // ... custom code goes here

    // Disconnect when done (If you omit this, Node.js won't end the process)
    client.disconnect()
  }

  main()


</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>Dulligans ❤️ </title>
  <meta name="title" content="Dulligans" />
  <meta name="description" content="Dulligans toggle dark/light theme demo" />
  <meta name="keywords" content="Svelte, SvelteKit, Svelte-kit, Tailwind, HTML, CSS, JavaScript" />
  <meta name="author" content="dustin@theblizzardofodds.com" />
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://metatags.io/" />
  <meta property="og:title" content="Dulligans On FaceBook" />
  <meta property="og:description" content="Dulligans toggle dark/light theme demo" />
  <meta
    property="og:image"
    content="https://sveltekit-tailwind2.netlify.app/screenshot.png"
  />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://metatags.io/" />
  <meta property="twitter:title" content="Dulligans On Twitter" />
  <meta
    property="twitter:description"
    content="SvelteKit toggle dark/light theme demo"
  />
  <meta
    property="twitter:image"
    content="https://sveltekit-tailwind2.netlify.app/screenshot.png"
  />
</svelte:head>

<h1 class="text-5xl font-extrabold mb-2">Dulligans {$theme} theme is active.</h1>

<ToggleTheme />


<p>
  A Dulligan is a digital Mulligan using the XRPL Ledger to administer a Dulligan or Multiple Dulligans
  features.
</p>

<Timer />

<button class="bg-purple-900 text-purple-100" on:click={() => {isOverlayOpenType.set(true)}}> Create Dulligan </button>

{#if $isOverlayOpenType}
<Overlay>
  <p class="text-red-700">Put form here</p>
</Overlay>
{/if}
