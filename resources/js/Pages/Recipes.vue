<script setup>
import ls from 'localstorage-slim';
import spoonacularAPI from "@/Utils/spoonacularAPI.js";
import {onMounted, ref} from "vue";
import RecipeCard from "@/Components/RecipeCard.vue";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import {Head} from "@inertiajs/vue3";

const data = ref(ls.get('recipes'));

async function fetchData() {
    if (data.value != null) return;

    const response = await spoonacularAPI.get('recipes/random', {
        params: {number: 5}
    });

    if (response.status == 200) {
        data.value = await response.data;
        ls.set('recipes', data.value);
    }
}

onMounted(fetchData)

</script>

<template>
    <Head title="Recipes"/>
    <AuthenticatedLayout>
        <div class="container max-w-5xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5 mx-5">
                <RecipeCard v-for="recipe in data.recipes"
                            :recipe="recipe">
                </RecipeCard>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
