<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let color: string;
  export let name;
  export let description;
  export let icon;
  export let iconColor;

  const dispatch = createEventDispatcher();
</script>

<div class="w-full md:w-1/2 lg:w-1/3 p-2">
  <div
    on:click={() => dispatch("next")}
    on:keypress
    class="rounded-lg shadow-md overflow-hidden {color} p-4 min-h-full cursor-pointer !items-center flex flex-col justify-center">
    <div class="flex flex-col">
      <div class="text-white font-bold text-xl mb-2">{name}</div>
      <p class="text-neutral-300 text-base">{description}</p>
    </div>
    {#if icon}
      <div class="flex justify-center">
        <ion-icon name={icon} class="m-4 text-7xl {iconColor}" />
      </div>
    {/if}
  </div>
</div>
