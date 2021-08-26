<script>
  import PriorityQueue from "js-priority-queue";
  import { lightning_settings } from "./store.js";
  let settings, grid, queue, interval;

  const reset = () => {
    if (interval) clearInterval(interval);
    grid = Array.from({ length: settings.height }, () =>
      Array.from({ length: settings.width }, () => ({
        cost: Math.floor(Math.random() * 19) + 1,
        visited: false,
        color: "#000",
        prev: null,
      }))
    );
    queue = new PriorityQueue({
      comparator: (a, b) => {
        if (a[0] != b[0]) return a[0] - b[0]; // Dequeue by lowest cost
        return b[1] - a[1]; // Otherwise by highest y-value
      },
    });
  };

  const finish = (y, x) => {
    clearInterval(interval);
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            grid[i][j].color = "#000";
        }
    }
    do {
      grid[y][x].color = settings.color;
      [y, x] = grid[y][x].prev;
    } while (grid[y][x].prev != null);
    grid[y][x].color = settings.color;
    setTimeout(() => {
      reset();
      run_lightning();
    }, 3000);
  };

  const lightning_step = () => {
    if (queue.length == 0) {
      reset();
      run_lightning();
      return;
    }

    let pop = queue.dequeue();
    grid[pop[1]][pop[2]].color = settings.color;

    if (pop[1] == grid.length - 1) {
      finish(pop[1], pop[2]);
      return;
    }

    let checks = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];
    if (settings.check_diagonals) {
      checks = checks.concat([
        [1, 1],
        [1, -1],
        [-1, -1],
        [-1, 1],
      ]);
    }

    for (let check of checks) {
      if (check[0] < 0 && pop[1] == 0) continue;
      if (check[0] > 0 && pop[1] == grid.length - 1) continue;
      if (check[1] < 0 && pop[2] == 0) continue;
      if (check[1] > 0 && pop[2] == grid[0].length - 1) continue;

      let g = grid[pop[1] + check[0]][pop[2] + check[1]];
      if (g.visited) continue;

      g.visited = true;
      queue.queue([g.cost, pop[1] + check[0], pop[2] + check[1]]);
      g.prev = g.prev != null ? g.prev : [pop[1], pop[2]];
    }
  };

  const run_lightning = () => {
    let start = [0, Math.floor(Math.random() * grid[0].length)];
    grid[start[0]][start[1]].visited = true;
    queue.queue([grid[start[0]][start[1]].cost, start[0], start[1]]);
    interval = setInterval(
      lightning_step,
      Math.round(settings.interval * 1000)
    );
  };

  lightning_settings.subscribe((value) => {
    settings = value;
    reset();
    run_lightning();
  });
</script>

<div class="flex-1 bg-gray-900 p-10">
  <div class="flex flex-col h-full overflow-hidden">
    {#each grid as cols, i}
      <div class="flex flex-1 justify-center">
        {#each cols as px, j}
          <div class="grid-square text-gray-500" style="--square-color:{grid[i][j].color}">
            {settings.show_numbers ? px.cost : ""}
          </div>
        {/each}
      </div>
    {/each}
  </div>
</div>

<style lang="postcss">
  .grid-square {
    aspect-ratio: 1;
    background-color: var(--square-color);
  }
</style>
