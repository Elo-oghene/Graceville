<script setup>
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router'; // Import RouterLink
    const isSchoolsOpen = ref(false);
    const toggleSchools = () => {
    isSchoolsOpen.value = !isSchoolsOpen.value; // Toggle the visibility
}
</script>
<template>
    <section class="w-full"> 
        <div class="w-full pt-16 flex mt-6 px-4 justify-center items-center">
            <div class="w-full lg:w-1/2 h-14 bg-[#D9D9D9] flex items-center px-4 lg:px-8 justify-between  cursor-pointer" @click="toggleSchools">
                    <span class="text-sm lg:text-lg">Schools</span>
                    <i :class="isSchoolsOpen ? 'bx bx-chevron-up' : 'bx bx-chevron-down'" class="text-[30px]"></i> <!-- Icon for toggling -->
            </div>
        </div>
        <ul v-if="isSchoolsOpen" class="flex flex-col pt-10 gap-4 lg:gap-8 justify-center cursor-pointer px-4 lg:items-center text-sm lg:text-lg"> <!-- Nested list -->
            <li>
                <RouterLink to="/sectionterm" class="">Graceville Highschool</RouterLink>
            </li>
            <li>Graceville College</li>
            <li>Graceville International Schools</li>
            <li>Graceville GRA</li>
            <li>Graceville Pre-university</li>
            <li>Graceville Bonsaic</li>
        </ul>
    </section>
    <section>
        <div class="w-full px-4 md:px-8 bottom-0 absolute lg:px-16 py-4 border-t-2 border-t-[#CEDD71] flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div class="flex items-center gap-2">
                <img class="w-12 lg:w-16 object-contain" src="../../assets/images/GR GENERAL LOGO 1.png" alt="logo" />
                <p class="text-[#CEDD71] font-bold text-xs md:text-sm lg:font-semibold">Graceville International<br/> Schools</p>
            </div>
            <div class="text-xs md:text-sm lg:text-base">
                Copyright © 2022 Graceville International School, Asaba. All rights reserved.
            </div>
        </div>
    </section>
</template>