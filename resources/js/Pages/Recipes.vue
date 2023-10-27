<script setup>
import ls from 'localstorage-slim';
import spoonacularAPI from "@/Utils/spoonacularAPI.js";
import {ref} from "vue";

const data = ref(ls.get('recipes'));

async function fetchData() {
    if (data != null) return;

    const response = await spoonacularAPI.get('recipes/random', {
        params: { number: 5 }
    });
    if (response.status == 200) {
        data.value = await  response.data;
        console.log(data);
    }
}
</script>

<template>
    <p>hi</p>
</template>
