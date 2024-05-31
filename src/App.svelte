<script lang="ts">
  import { categories } from "@/data/categories";
  import Choice from "@/lib/components/Choice.svelte";
  import Resolution from "@/lib/components/Resolution.svelte";

  interface HistoryEntry {
    name: string;
    path: any[];
    showResolution?: boolean; // Make showResolution property optional
  }

  let cats = categories;
  let showResolution = false;
  let resolutionInfo;
  let history: HistoryEntry[] = [{ name: "Home", path: [] }];
  let info;

  const goToCategory = (newCats, pressedCat) => {
    const path = [...history[history.length - 1].path, pressedCat];
    const isInfoPage = !newCats || newCats.length === 0;
    const isInHistory = history.some(
      (entry) => entry.name === pressedCat && entry.path.join("/") === path.join("/")
    );

    if (!isInHistory) {
      const newHistoryEntry: HistoryEntry = { name: pressedCat, path };

      if (isInfoPage) {
        showResolution = true;
        resolutionInfo = findCategoryByName(cats, pressedCat);
        newHistoryEntry.showResolution = true;
      } else {
        cats = newCats;
      }

      history = [...history, newHistoryEntry];
    }
  };

  const resetToBreadcrumb = (index: number) => {
    if (index === history.length - 1) return;

    const { path } = history[index];
    cats = findCategoryByPath(categories, path);
    history = history.slice(0, index + 1);
    showResolution = false;
  };

  const goBack = () => {
    console.log("goBack called");
    if (history.length > 1) {
      const poppedEntry = history.pop();
      console.log("Popped Entry:", poppedEntry);
      if (poppedEntry && poppedEntry.showResolution) {
        const parentIndex = history.length - 1;
        if (parentIndex >= 0) {
          const { path } = history[parentIndex];
          cats = findCategoryByPath(categories, path);
          history = history.slice(0, parentIndex + 1);
        }
      }
      showResolution = false;
    }
  };

  function findCategoryByName(categories, name) {
    return categories.find((cat) => cat.name === name);
  }

  function findCategoryByPath(categories, path) {
    let currentCategories = categories;
    for (const step of path) {
      const foundCategory = currentCategories.find((cat) => cat.name === step);
      if (foundCategory && foundCategory.children) {
        currentCategories = foundCategory.children;
      }
    }
    return currentCategories;
  }
</script>

<div class="min-h-screen" style="background-color: #1E1E1E;">
  <div class="bg-[#536ADE] text-white p-4">
    <div class="flex items-center justify-between">
      <div class="flex space-x-2">
        {#each history as breadcrumb, index}
          <button class="text-white" on:click={() => resetToBreadcrumb(index)}>
            {breadcrumb.name ? breadcrumb.name : "Home"}
          </button>
          {#if index < history.length - 1}
            <span class="text-white">&gt;</span>
          {/if}
        {/each}
      </div>
      <div class="flex font-bold">HHS ID Keuzetool</div>
    </div>
  </div>
  <main class="min-h-screen" style="padding: 20px;">
    {#if !showResolution}
      <div class="flex justify-center h-screen">
        <div class="flex flex-wrap min-w-full">
          {#each cats as cat}
            <Choice
              name={cat.name}
              description={cat.description}
              color={cat.color}
              icon={cat.icon}
              iconColor={cat.iconColor}
              on:next={() => {
                info = {
                  name: cat.name,
                  image: cat.image,
                  description: cat.description,
                  color: cat.color,
                  sources: cat.sources,
                  info: cat.info,
                };
                goToCategory(cat.children, cat.name);
              }} />
          {/each}
        </div>
      </div>
    {:else}
      <Resolution {info} on:goBack={goBack} />
    {/if}
  </main>
</div>
