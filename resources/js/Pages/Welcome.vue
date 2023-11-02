<script setup>
import { Head, Link } from '@inertiajs/vue3';
import { register } from 'swiper/element/bundle';
import { onMounted } from 'vue';
import Layout from "../Layouts/Layout.vue";

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

</script>

<template>
    <Head title="Welcome" />
    <Layout>
        <div class="block">
            <swiper-container navigation="true" autoplay-delay="3000" loop="true" speed="1000">
                <swiper-slide>
                    <img src="../../img/Carrousel/slide1.png" />
                </swiper-slide>
                <swiper-slide>
                    <img src="../../img/Carrousel/slide2.png" />
                </swiper-slide>
                <swiper-slide>
                    <img src="../../img/Carrousel/slide3.png" />
                </swiper-slide>
            </swiper-container>
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
</style>
