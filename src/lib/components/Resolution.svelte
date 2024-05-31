<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let info;

  const dispatch = createEventDispatcher();
</script>

{#if info.description}
  <div class="flex container mx-auto my-8 p-8 bg-[#E6E8F4] shadow-md">
    <div class="w-2/3 pr-8">
      <h1 class="text-3xl font-bold text-[#3C457D] mb-6">{info.name}</h1>
      <p class="text-xl leading-8 text-[#323545] mb-6">{@html info.info}</p>
      <button
        class="bg-[#536ADE] text-white rounded px-6 py-3 hover:bg-[#3C457D] transition duration-300"
        on:click={() => dispatch("goBack")}>
        Terug
      </button>
    </div>
    <div class="w-1/3">
      <div class="overflow-hidden rounded-lg shadow-lg mb-4 w-fit">
        <img src={info.image} alt="" class="w-auto max-h-32" />
      </div>
      <div class="p-6 bg-[#B1BBEC] rounded-lg shadow-lg">
        <p class="text-base font-semibold leading-7 text-[#536ADE] mb-4">Hoe leer ik dit?</p>
        <h2 class="text-2xl font-bold text-[#323545] mb-2">Sources</h2>
        <ul class="text-lg leading-8 text-[#323545] list-disc pl-6">
          {#each info.sources as source}
            <li class="mb-2">
              <a class="text-[#3C457D] hover:underline" target="_blank" href={source.url}
                >{source.name}</a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
{:else}
  <div class="container mx-auto my-8 p-8 bg-[#E6E8F4] shadow-md">
    <p class="text-xl leading-8 text-[#323545] mb-6">
      Er kon geen content worden gevonden voor <i>{info.name}</i>. Probeer het later nog eens.
    </p>
    <button
      class="bg-[#536ADE] text-white rounded px-6 py-3 hover:bg-[#3C457D] transition duration-300"
      on:click={() => dispatch("goBack")}>
      Terug
    </button>
  </div>
{/if}
