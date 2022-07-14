<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
  import TailwindCss from './TailwindCSS.svelte';
</script>

<TailwindCss />

<main>
  <h1 class="text-4xl">Vite + Svelte + Tailwind CSS + TS</h1>
  <div class="card">
    <Counter />
  </div>
  <p id="test-paragraph">This is built with TypeScript.</p>
</main>

<style>
  #test-paragraph {
    color: yellow;
  }
</style>
