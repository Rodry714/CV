<script setup>
import {computed, onMounted, ref} from "vue";
import ls from "localstorage-slim";
import Layout from "@/Layouts/Layout.vue";
import spoonacularAPI from "@/Utils/spoonacularAPI.js";

const props = defineProps({
    recipeId: String,
    daily: Boolean
});

const recipes = ref(ls.get('recipes2' + (props.daily ? 'Daily' : '')) ?? []);
const currentRecipe = computed(() => recipes.value.find(r => r.id == props.recipeId));

onMounted(async () => {
    if (currentRecipe.value == null) {
        const response = await spoonacularAPI.get(`recipes/${props.recipeId}/information`);

        if (response.status == 200) {
            recipes.value[Object.keys(recipes.value).length] = {daily: true, ...await response.data};
            ls.set('recipes2' + (props.daily ? 'Daily' : ''), recipes.value);
        }
    }
});
</script>

<template>
    <Layout>
        <div class="mx-10 py-20" v-if="currentRecipe">

            <div class="flex justify-center">
                <div
                    class="flex flex-col px-6 py-6 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row">
                    <img :src="currentRecipe.image"
                         alt=""
                         class="object-cover w-full rounded-t-lg mr-6 h-96 md:h-auto md:w-1/3 md:rounded-none md:rounded-l-lg">
                    <div class="flex flex-col justify-between leading-normal">
                        <h5 class="mb-2 text-5xl font-bold tracking-tight text-gray-900">
                            {{ currentRecipe.title }}
                        </h5>
                        <p class="uppercase text-xl"> Preparation time: {{ currentRecipe.readyInMinutes }}</p>
                        <p class="uppercase text-xl"> Servings: {{ currentRecipe.servings }}</p>
                        <p class="mt-3 font-normal text-gray-700" v-html="currentRecipe.summary"></p>
                    </div>
                </div>
            </div>

            <h1 class="text-4xl mt-16 mb-8 font-medium font-gluten text-[#e8944e]">
                Ingredients
            </h1>

            <ul v-for="ingredient in currentRecipe.extendedIngredients">
                <li>
                    <span class="font-gluten text-[#18ae5f] text-xl">
                      ○
                        {{ ingredient.amount }}
                    </span>
                        {{ ingredient.measures.us.unitLong }}
                    {{ ingredient.name }}
                </li>
            </ul>

            <div v-if="currentRecipe.analyzedInstructions?.length > 0">
                <h1 class="text-4xl mt-16 mb-8 font-medium font-gluten text-[#18ae5f]">
                    Preparation
                </h1>

                <ol v-for="instructions in currentRecipe.analyzedInstructions">
                    <li v-for="step in instructions.steps">
                        <span class="font-gluten text-[#e8944e] text-xl">
                            {{ step.number }}.
                        </span>
                        {{ step.step }}
                    </li>
                </ol>
            </div>
        </div>
    </Layout>
</template>

<style scoped>

</style>
