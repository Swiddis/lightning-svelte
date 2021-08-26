import { writable } from "svelte/store";

export let lightning_settings = writable({
    width: 20,
    height: 40,
    color: "#fffd82",
    fade: "#2b061e",
    strike: "#f25f5c",
    interval: 2,
    fade_time: 1000,
    check_diagonals: false,
    show_numbers: false,
})
