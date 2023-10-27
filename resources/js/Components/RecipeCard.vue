<script setup>

import {Link} from "@inertiajs/vue3";
import PrimaryButton from "@/Components/PrimaryButton.vue";

const props = defineProps({
    recipe: Object
})

</script>

<template>

    <div class="flex flex-col w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto">
        <a href="#">
            <img class="rounded-t-lg" :src="recipe.image" alt="recipe image"/>
        </a>

        <div class="flex flex-col h-full justify-between px-5 py-5">
            <a href="#">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900">{{ recipe.title }}</h5>
            </a>

            <div class="mt-2 mb-5">
                <p class="text-sm text-gray-600">{{ recipe.creditsText }}</p>

                <p>Ready in
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mx-1 px-2.5 py-0.5 rounded">{{
                            recipe.readyInMinutes
                        }}</span>
                    minutes
                </p>
            </div>

            <div class="flex items-center justify-between w-full">
                <span class=" font-bold text-gray-600">Servings {{ recipe.servings }}</span>

                <PrimaryButton>
                    <Link :href="'XD'">Cook
                        it!
                    </Link>
                </PrimaryButton>
            </div>
        </div>
    </div>
</template>
