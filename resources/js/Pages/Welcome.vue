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

//Click derecho inspeccionar, more tab (flechitas cerca de Elements) -> Application -> Local Storage -> Select IP
const data = ref(ls.get('recipesFree'));

async function fetchData() {
    if (data.value != null) return;

    const response = await spoonacularAPI.get('recipes/random', {
        params: {number: 9}
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

            <div class="grid grid-cols-1 gap-y-10 md:grid-cols-2 content-center px-5">
                <div class="text-5xl text-[#18ae5f] pl-1.5 font-gluten items-center">
                    <h1>Mission</h1>
                </div>

                <div class="text-justify">
                    <p>Promote good nutrition for the people of El Salvador through recipes and exercise routines to motivate them to change their habits through the Easy Meals platform.
                    </p>
                </div>
                <div class="text-5xl text-[#e8944e] pl-1.5 font-gluten items-center justify-end">
                    <h1>Vision</h1>
                </div>
                <div class="text-justify">
                    <p>To be a primary source for those seeking inspiration and guidance on the path to a healthier and more physically active life. We want to be known as a trusted platform that offers healthy and delicious recipes, effective exercise routines and above all give the best experience to our community.
                    </p>
                </div>



            </div>

            <h1 class="text-4xl my-20 text-center font-bold">Let's cook something
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
        <footer class="bg-white rounded-lg shadow m-4">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="https://flowbite.com" class="flex items-center mb-4 sm:mb-0">
                    <img src="../../img/Logos/Easy-Meals_actualizado.png" class="h-20 mr-3" alt="Flowbite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                </a>
                <ul class="flex flex-wrap items-center mb-6 text-sm font-medium">
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">E-mail</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Whatsapp</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">Facebook</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Instagram</a>
                    </li>
                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">2023<a href="https://flowbite.com/" class="hover:underline"></a></span>
        </div>
    </footer>
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
