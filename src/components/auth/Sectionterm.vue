<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router'; // Import RouterLink
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
                <i class="bx bx-envelope text-xl text-secondary"></i>
                <span class="hidden lg:flex text-sm text-secondary">mail@gracevilleschools.org</span>
            </div>

            <div class="flex items-center gap-2">
                <a href="#" class="btn w-9 h-9 rounded-full flex items-center justify-center bg-accent">
                    <i class="bx bxl-facebook-circle text-xl"></i>
                </a>
                <a href="#" class="btn w-9 h-9 rounded-full flex items-center justify-center bg-accent">
                    <i class='bx bxl-youtube text-xl'></i>
                </a>
            </div>
        </div>
        <div class="w-full bg-accent h-[2px]"></div>
        <section class="flex justify-between lg:px-16 pt-4 px-4">
            <div>
                <div class="w-40 sm:w-52">
                <img class="w-full object-contain" src="../../assets/images/logo.png" alt="logo"/>
            </div>
            </div>
            <div class="w-14 lg:w-20 h-14 lg:h-20 rounded-full bg-accent">
            </div>
        </section>  

    <div class="w-full bg-accent h-[2px]"></div>
    <section class="w-full"> 
    <div class="w-full pt-16 flex mt-6 px-4 justify-center items-center">
        <div class="w-full lg:w-1/2 h-14 bg-primary flex items-center px-4 lg:px-8 justify-between cursor-pointer" @click="toggleSession">
            <span>Session</span>
        </div>
    </div>
    <div v-if="isSessionOpen" class="w-full lg:w-1/2 pl-4 lg:pl-32 flex flex-col lg:justify-center lg:items-center pt-4">
        <div class="flex items-center">
            <input type="radio" id="session1" name="session" value="1" class="custom-radio">
            <label for="session1" class="pl-2">2022/2023</label>
        </div>
        <div class="flex items-center">
            <input type="radio" id="session2" name="session" value="2" class="custom-radio">
            <label for="session2" class="pl-2">2023/2024</label>
        </div>
        <div class="flex items-center">
            <input type="radio" id="session3" name="session" value="3" class="custom-radio">
            <label for="session3" class="pl-2">2024/2025</label>
        </div>
    </div>
    </section>


    <section class="w-full"> 
    <div class="w-full pt-16 flex mt-6 px-4 justify-center items-center">
        <div class="w-full lg:w-1/2 h-14 bg-primary flex items-center px-4 lg:px-8 justify-between cursor-pointer" @click="toggleTerm">
            <span>Term</span>
        </div>
    </div>
    <div v-if="isTermOpen" class="w-full lg:w-1/2 pl-4 lg:pl-32 flex flex-col lg:justify-center lg:items-center pt-4">
        <div class="flex items-center">
            <input type="radio" id="term1" name="term" value="1" class="custom-radio">
            <label for="term1" class="pl-2">1st Term</label>
        </div>
        <div class="flex items-center">
            <input type="radio" id="term2" name="term" value="2" class="custom-radio">
            <label for="term2" class="pl-2">2nd Term</label>
        </div>
        <div class="flex items-center">
            <input type="radio" id="term3" name="term" value="3" class="custom-radio">
            <label for="term3" class="pl-2">3rd Term</label>
        </div>
    </div>
    </section>

    <RouterLink to="/studentsystem" class="w-1/2 flex justify-center lg:pl-32 pt-4">
        <button class="py-3 px-4 rounded-sm bg-secondary text-sm text-white shadow-md tracking-wider hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">CHECK</button>
    </RouterLink>
</template>
<style>
/* Hide the default radio button */
.custom-radio {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

/* Create a custom radio button */
.custom-radio + label:before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 10px;
    border-radius: 50%;
    border: 2px solid #224E05; /* Green border */
    background-color: transparent;
    vertical-align: middle;
    transition: background 0.2s ease;
}

/* When the radio button is checked, change the background color */
.custom-radio:checked + label:before {
    background-color: #224E05; /* Green fill */
}
</style>


