<script lang="ts">
  import TailwindCss from "./TailwindCSS.svelte";
  import * as d3 from "d3";
  import { onMount } from "svelte";
  import { dataset_dev } from "svelte/internal";

  let width: number = 800;
  let height: number = 60;

  let margin: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  } = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 30,
  };

  let data = [];

  $: yScale = d3
    .scaleBand()
    .domain(data.map((d) => d["Location"]))
    .range([0, height])
    .paddingInner(0.14);

  $: xScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d["Population"])])
    .range([0, width]);

  const row = (data) => {
    data["Population"] = +data["2021"] * 1001;
    console.log(data);
    return data;
  };
  onMount(async () => {
    data = await d3
      .csv(
        "https://raw.githubusercontent.com/AnupJoseph/svelteLearn/main/charts/bar-chart-svelte/public/data/population_data.csv",
        row
      )
      .then((response) => {
        return response.slice(0, 10);
      });
    console.log(data);
  });
</script>

<TailwindCss />

<main>
  <!-- <h1 class="text-4xl">Vite + Svelte + Tailwind CSS + TS + d3.js</h1> -->
  <svg {width} {height}>
    {#each data as d, i}
      <rect
        x={0}
        y={yScale(d.Location)}
        width={xScale(d.Population)}
        height={yScale.bandwidth()}
      />
    {/each}
  </svg>
</main>

<style>
  main {
    height: 100%;
    display: flex;
  }
  #vis {
    width: 100%;
    height: 100%;
    background-color: whitesmoke;
  }

  circle {
    fill: white;
    fill-opacity: 0.5;
  }
</style>
