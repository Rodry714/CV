<script setup>

const props = defineProps({
    recipe: Object
})

</script>

<template>

    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto">
        <a href="#">
            <img class="p-8 rounded-t-lg" :src="recipe.image" alt="recipe image"/>
        </a>

        <div class="px-5 pb-5">
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

            <div class="flex items-center justify-between">
                <span class=" font-bold text-gray-600">Servings {{ recipe.servings }}</span>
                <a href="#"
                   class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Cook
                    it!</a>
            </div>
        </div>
    </div>
</template>
