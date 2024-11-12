<script setup>
import { ref } from 'vue';
const isSessionOpen = ref(false);
const isTermOpen = ref(false);
const toggleSession = () => {
    isSessionOpen.value = !isSessionOpen.value; // Toggle the visibility
};
const toggleTerm = () => {
    isTermOpen.value = !isTermOpen.value; // Toggle the visibility
};
</script>
<template>
    <div class="w-full h-16 wrapping flex items-center px-4 lg:px-16 justify-between">
            <div class="flex items-center gap-2">
                <i class="bx bx-envelope text-xl text-[#224E05]"></i>
                <span class="hidden lg:flex text-sm text-[#224E05]">mail@gracevilleschools.org</span>
            </div>

            <div class="flex items-center gap-2">
                <a href="#" class="btn w-9 h-9 rounded-full flex items-center justify-center bg-[#CEDD71]">
                    <i class="bx bxl-facebook-circle text-xl"></i>
                </a>
                <a href="#" class="btn w-9 h-9 rounded-full flex items-center justify-center bg-[#CEDD71]">
                    <i class='bx bxl-youtube text-xl'></i>
                </a>
            </div>
        </div>
        <div class="w-full bg-[#CEDD71] h-[2px]"></div>
        <section class="flex justify-between lg:px-16 pt-4 px-4">
            <div>
                <div class="w-40 sm:w-52">
                <img class="w-full object-contain" src="../../assets/images/logo.png" alt="logo"/>
            </div>
            </div>
            <div class="w-14 lg:w-20 h-14 lg:h-20 rounded-full bg-[#CEDD71]">
            </div>
        </section>  

    <div class="w-full bg-[#CEDD71] h-[2px]"></div>
    <section class="w-full"> 
        <div class="w-full pt-16 flex mt-6 px-4 justify-center items-center">
            <div class="w-full lg:w-1/2 h-14 bg-[#D9D9D9] flex items-center px-4 lg:px-8 justify-between cursor-pointer" @click="toggleSession">
                    <span @click="isSessionOpen">Session</span>
            </div>
        </div>
        <div v-if="isSessionOpen" class="flex pt-4 justify-center">
            <select class="outline-none">
                <!-- <option value="">Select Session</option> -->
                <option value="1">2022/2023</option>
                <option value="2">2023/2024</option>
                <option value="3">2024/2025</option>
            </select>
        </div>
    </section>
    <section class="w-full"> 
        <div class="w-full pt-16 flex mt-6 px-4 justify-center items-center">
            <div class="w-full lg:w-1/2 h-14 bg-[#D9D9D9] flex items-center px-4 lg:px-8 justify-between  cursor-pointer" @click="toggleTerm">
                    <span @click="isTermOpen">Term</span>
            </div>
        </div>
        <div v-if="isTermOpen" class="flex lg:pt-4 justify-center">
            <select class="outline-none">
                <option value="1">1st Term</option>
                <option value="2">2nd Term</option>
                <option value="3">3rd Term</option>
            </select>
        </div>
    </section>
    <!-- <button class="flex self-right py-3 bg-black text-sm text-white rounded-sm shadow-md tracking-wider hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">CLICK HERE</button> -->
</template>

<style>

</style>


