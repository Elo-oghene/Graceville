<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router'; // Import RouterLink

const open = ref(false);
const subMenuOpen = ref(false);
</script>

<style scoped>
.wrapping {
    @apply px-4 md:px-8 lg:px-16
}
.link-container {
    @apply text-sm text-accent
}
</style>

<template>
    <nav class="w-full bg-black fixed top-0 left-0 z-50">
        <div class="w-full h-16 wrapping flex items-center justify-between">
            <div class="flex items-center gap-2">
                <i class="bx bx-envelope text-xl text-accent"></i>
                <span class="hidden lg:flex text-sm text-accent">mail@gracevilleschools.org</span>
            </div>

            <div class="flex items-center gap-2">
                
                <a href="#" class="btn w-9 h-9 rounded-full flex items-center justify-center bg-accent">
                    <i class="bx bxl-facebook-circle text-xl"></i>
                </a>
                <a href="#" class="btn w-9 h-9 rounded-full flex items-center justify-center bg-accent">
                    <i class='bx bxl-youtube text-xl'></i>
                </a>
                <RouterLink to="/login">
                    <button class="self-start px-4 py-3 bg-accent text-sm rounded-sm shadow-md hover:bg-[#b0cc63] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
                            LOGIN
                    </button>
                </RouterLink>
            </div>
        </div>

        <div class="w-full bg-accent h-[2px]"></div>

        <div class="hidden w-full h-20 wrapping lg:flex items-center justify-between relative">
            <div class="flex items-center gap-2">
                <img class="w-8 lg:w-16 object-contain" src="../../assets/images/GR GENERAL LOGO 1.png" alt="logo"/>
                <p class="text-accent font-bold text-xs lg:font-semibold">Graceville International<br/> Schools</p>
            </div>

            <button @click="open = !open" class="btn p-2 rounded-lg lg:hidden">
                <i :class="open ? 'bx-x' : 'bx-menu'" class="bx text-accent text-2xl"></i>
            </button>

            <ul :class="open ? 'py-4 border-accent' : 'h-0 border-transparent'" class="w-full overflow-hidden bg-black text-white px-4 flex flex-col gap-4 lg:flex-row lg:h-fit lg:w-fit lg:gap-8 absolute top-20 left-0 z-30 lg:static border-t-2 lg:border-none trans">
                <li>
                <RouterLink to="/" class="link-container">Home</RouterLink>
                </li>
                <li @click="subMenuOpen = !subMenuOpen" class="relative lg:static">
                    <div class="mt-1 link-container cursor-pointer">
                        Our School
                        <i :class="subMenuOpen ? 'bx-chevron-up' : 'bx-chevron-down'" class="bx text-accent text-xs"></i>
                    </div>

                    <!-- Nested Submenu -->
                    <ul v-if="subMenuOpen" 
                        class="submenu flex flex-col gap-1 bg-black text-white lg:absolute lg:top-full lg:w-48  lg:shadow-lg transition-all duration-300 ease-in-out">
                        
                        <li>
                            <RouterLink to="/our/history" class="link-container block py-2 px-4 rounded">GracevilleGRA</RouterLink>
                        </li>
                        
                        <li>
                            <RouterLink to="/our/mission" class="link-container block py-2 px-4 rounded">Preschool and Primary School</RouterLink>
                        </li>
                        
                        <li>
                            <RouterLink to="/our/team" class="link-container block py-2 px-4 rounded">Secondary School</RouterLink>
                        </li>
                        
                        <li>
                            <RouterLink to="/our/team" class="link-container block py-2 px-4 rounded">Pre-University</RouterLink>
                        </li>
                    </ul>
                </li>

                <li>
                <RouterLink to="/about"  class="link-container">About Us</RouterLink>
                </li>
                <li>
                <RouterLink to="/admission"  class="link-container">Admission</RouterLink>
                </li>
                <li>
                <RouterLink to="/"  class="link-container">Entrance Exam Results</RouterLink>
                </li>
                <li>
                <RouterLink to="/contact"  class="link-container">Contact us</RouterLink>
                </li>
            </ul>
        </div>

        <div class="w-full h-20 wrapping flex lg:hidden items-center justify-between relative">
            <div class="flex items-center gap-2">
                <img class="w-8 lg:w-16 object-contain" src="../../assets/images/GR GENERAL LOGO 1.png" alt="logo"/>
                <p class="text-accent font-bold text-xs lg:font-semibold">Graceville International<br/> Schools</p>
            </div>

            <button @click="open = !open" class="btn p-2 rounded-lg lg:hidden">
                <i :class="open ? 'bx-x' : 'bx-menu'" class="bx text-accent text-2xl"></i>
            </button>

            <!-- Main navigation with dropdown for "Our School" -->
            <ul :class="open ? 'py-4 border-accent' : 'h-0 border-transparent'" class="w-full overflow-hidden bg-black text-white px-4 flex flex-col gap-4 lg:flex-row lg:h-fit lg:w-fit lg:gap-8 absolute top-20 left-0 z-30 lg:static border-t-2 lg:border-none transition-all duration-300 ease-in-out">
                
                <!-- Main Links -->
                <li>
                    <RouterLink to="/" class="link-container">Home</RouterLink>
                </li>

                <!-- Our School with Nested Menu -->
                <li @click="subMenuOpen = !subMenuOpen" class="relative">
                    <div class="flex items-center justify-between link-container cursor-pointer">
                        Our School
                        <i :class="subMenuOpen ? 'bx-chevron-up' : 'bx-chevron-down'" class="bx ml-2 text-accent text-xs"></i>
                    </div>

                    <ul v-if="subMenuOpen" class="submenu flex flex-col gap-2 bg-black text-white mt-2">
                        <li><RouterLink to="/our/history" class="link-container">GracevilleGRA</RouterLink>
                            <div class="w-full bg-accent h-[2px]"></div>
                        </li>
                        <li><RouterLink to="/our/mission" class="link-container">Prechool and Primary School</RouterLink>
                            <div class="w-full bg-accent h-[2px]"></div>
                        </li>
                        <li><RouterLink to="/our/team" class="link-container">Secondary School</RouterLink>
                            <div class="w-full bg-accent h-[2px]"></div>
                        </li>
                        <li><RouterLink to="/our/team" class="link-container">Pre-University</RouterLink>
                            <div class="w-full bg-accent h-[2px]"></div>
                        </li>
                    </ul>
                </li>

                <!-- Other Links go beneath the nested list -->
                <li v-if="!subMenuOpen || open">
                    <RouterLink to="/about" class="link-container">About Us</RouterLink>
                </li>
                <li v-if="!subMenuOpen || open">
                    <RouterLink to="/admission" class="link-container">Admission</RouterLink>
                </li>
                <li v-if="!subMenuOpen || open">
                    <RouterLink to="" class="link-container">Entrance Exam Results</RouterLink>
                </li>
                <li v-if="!subMenuOpen || open">
                    <RouterLink to="/contact" class="link-container">Contact Us</RouterLink>
                </li>
            </ul>
        </div>
    </nav>
</template>