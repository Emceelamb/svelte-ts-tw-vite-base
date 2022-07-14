<script lang="ts">
  let count: number = 0
  const increment = () => {
    count += 1
  }
</script>

<button on:click={increment} class="px-4 border border-white">
  count is <code>{count}</code>
</button>
