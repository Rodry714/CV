<script setup>
import {computed, ref} from "vue";
import ls from "localstorage-slim";
import Layout from "@/Layouts/Layout.vue";

const props = defineProps({"recipeId": String})

const recipes = ref(ls.get('recipes') ?? {});

const currentRecipe = computed(() => recipes.value.find(r => r.id == props.recipeId));
</script>

<template>
    <Layout>
        <div class="w-full flex justify-center min-h-screen">
            <div
                class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
                <img :src="currentRecipe.image"
                     alt=""
                     class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg">
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        {{ currentRecipe.title }}
                    </h5>
                    <p class="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of
                        2021 so far, in reverse chronological order.</p>
                </div>
            </div>
        </div>
    </Layout>
</template>

<style scoped>

</style>
