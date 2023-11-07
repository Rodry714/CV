<script setup>
import Layout from "@/Layouts/Layout.vue";
import {onMounted, ref} from "vue";
import ls from "localstorage-slim";
import spoonacularAPI from "@/Utils/spoonacularAPI.js";
import RecipeCard from "@/Components/RecipeCard.vue";
import {Head} from "@inertiajs/vue3";
import Footer from "@/Components/Footer.vue";

const data = ref(ls.get('planWeek'));

const fetchData = async () => {
    if (data.value != null) return;

    const response = await spoonacularAPI.get('mealplanner/generate', {
        params: {timeFrame: 'week'}
    });

    if (response.status == 200) {
        console.log(response.data);
        data.value = await response.data.week;
        ls.set('planWeek', data.value);
    }
}

onMounted(fetchData);
</script>

<template>
    <Head title="Meal Plan"/>
    <Layout>
        <div class="container max-w-5xl mx-auto">

            <h1 class="text-xl mt-20 text-center">
                Hey! Seems like your doctor has assigned you these perfectly balanced
                <span class="font-gluten px-1.5 font-medium text-2xl text-[#18ae5f]">
                meal plans
                </span>
                for the week
            </h1>

            <h1 class="text-4xl mt-4 mb-20 text-center font-bold">
                Let's
                <span class="font-gluten font-medium text-5xl text-[#e8944e]">
                try it!
                </span>
            </h1>

            <div class="grid grid-cols-1 gap-3 mx-3">
                <div v-for="(dayData, day) in data" class="px-1">
                    <div class="text-3xl pt-10 pb-2 pl-4 font-gluten text-[#18ae5f] font-medium">
                        {{ day }}
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3 mx-3">
                        <RecipeCard v-for="recipe in dayData.meals" :recipe="recipe" :daily="true"/>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<style scoped>

</style>
