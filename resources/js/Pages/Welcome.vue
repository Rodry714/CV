<script setup>
import {Head} from '@inertiajs/vue3';
import {register} from 'swiper/element/bundle';
import {onMounted, ref} from 'vue';
import Layout from "../Layouts/Layout.vue";
import RecipeCard from "@/Components/RecipeCard.vue";
import ls from "localstorage-slim";
import spoonacularAPI from "@/Utils/spoonacularAPI.js";

register();

defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
});

onMounted(() => {
    const swiper = document.querySelector('swiper-container');
})


const data = ref(ls.get('recipesFree'));

async function fetchData() {
    if (data.value != null) return;

    const response = await spoonacularAPI.get('recipes/random', {
        params: {number: 6}
    });

    if (response.status == 200) {
        data.value = await response.data;
        ls.set('recipesFree', data.value);
    }
}

onMounted(fetchData)

</script>

<template>
    <Head title="Welcome"/>
    <Layout>
        <div class="block max-h-screen h-[calc(100vh-65px)]">
            <swiper-container autoplay-delay="3000" loop="true" navigation="true" speed="1000">
                <swiper-slide>
                    <img src="../../img/Carrousel/slide1.png"/>
                </swiper-slide>
                <swiper-slide>
                    <img src="../../img/Carrousel/slide2.png"/>
                </swiper-slide>
                <swiper-slide>
                    <img src="../../img/Carrousel/slide3.png"/>
                </swiper-slide>
            </swiper-container>
        </div>

        <div class="container max-w-5xl mx-auto pb-16">
            <h1 class="text-4xl my-20 text-center font-bold">
                <span class="font-gluten font-medium text-5xl text-[#e8944e]">About</span>
                us
            </h1>

            <div class="grid grid-cols-1 gap-y-10 md:grid-cols-2 content-center">
                <div class="text-5xl text-[#18ae5f] pl-1.5 font-gluten flex items-center">
                    <h1>Mission</h1>
                </div>

                <div class="text-justify">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar vehicula neque, sed
                        lacinia nisl rhoncus sit amet. Pellentesque at facilisis metus. Quisque ut purus tortor. Sed
                        orci ex, tempor in dui ut, laoreet molestie ex. Donec placerat, augue quis porttitor iaculis,
                        arcu neque imperdiet diam, accumsan rhoncus neque augue at felis.
                    </p>
                </div>
                <div class="text-justify">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar vehicula neque, sed
                        lacinia nisl rhoncus sit amet. Pellentesque at facilisis metus. Quisque ut purus tortor. Sed
                        orci ex, tempor in dui ut, laoreet molestie ex. Donec placerat, augue quis porttitor iaculis,
                        arcu neque imperdiet diam, accumsan rhoncus neque augue at felis.
                    </p>
                </div>

                <div class="text-5xl text-[#e8944e] pl-1.5 font-gluten flex items-center justify-end">
                    <h1>Vision</h1>
                </div>

            </div>

            <h1 class="text-4xl my-20 text-center font-bold">Let´s cook something
                <span class="font-gluten font-medium text-5xl text-[#18ae5f]">
                tasty!
                </span>
            </h1>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5 mx-5">
                <RecipeCard v-for="recipe in data?.recipes"
                            :recipe="recipe">
                </RecipeCard>
            </div>
            <h1 class="text-2xl mt-16 text-center font-extrabold mb-2">Do you want to see more delicious recipes?</h1>
            <h1 class="text-4xl text-center font-extrabold">
                <a :href="route('login')" class="text-[#e8944e] font-gluten">Join us
                    <span class="text-[#18ae5f] pl-1.5">NOW!</span>
                </a>
            </h1>
        </div>
    </Layout>
</template>

<style scoped>
swiper-container {
    width: 100%;
    height: 100%;
}

swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}

swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

swiper-container::part(button-prev) {
    color: #18ae5f;
}

swiper-container::part(button-next) {
    color: #18ae5f;
}
</style>
