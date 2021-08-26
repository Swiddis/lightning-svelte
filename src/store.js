import { writable } from "svelte/store";

export let lightning_settings = writable({
    width: 20,
    height: 40,
    color: "#fce083",
    interval: 0.01,
    check_diagonals: false,
    show_numbers: false,
})
