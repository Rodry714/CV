<script setup>
import ls from 'localstorage-slim';
import spoonacularAPI from "@/Utils/spoonacularAPI.js";
import {onMounted, ref} from "vue";
import RecipeCard from "@/Components/RecipeCard.vue";
import Layout from "@/Layouts/Layout.vue";
import {Head} from "@inertiajs/vue3";


const data = ref(ls.get('recipes'));

async function fetchData() {
    if (data.value != null) return;

    const response = await spoonacularAPI.get('recipes/random', {
        params: {number: 3}
    });

    if (response.status == 200) {
        data.value = await response.data.recipes;
        ls.set('recipes', data.value);
    }
}

onMounted(fetchData)

</script>

<template>
    <Head title="Recipes"/>
    <Layout>
        <div class="container max-w-5xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3 mx-3">
                <RecipeCard v-for="recipe in data?.recipes"
                            :recipe="recipe">
                </RecipeCard>
            </div>
        </div>
    </Layout>
</template>
