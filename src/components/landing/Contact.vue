<script setup>
import Layout from './Layout.vue';
import Footer from '../footer/Footer.vue'
import Adress from '../landing/Adress.vue'

defineOptions({
    layout: Layout
});
</script>
<template>
    <section class="w-full h-[100vh - 64px]">
        <section>
            <div class="w-full h-[500px] lg:h-full relative z-10">
                <img src="../../assets/images/academic-block.jpg" class="w-full h-full bg-cover" alt="Building Image">
                <div class="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div class="absolute top-44 lg:top-52 left-4 lg:left-10 flex flex-col leading-none pt-10 gap-2 z-10">
                <p class="text-xs lg:text-lg text-white tracking-widest">WELCOME TO OUR OFFICIAL WEBSITE</p>
                <div class="text-[30px] lg:text-[80px] text-white font-cormorant"> 
                    <h1>REACH OUT TO US</h1>
                </div>
                <p class="text-white text-xs lg:text-sm md:text-sm font-serif tracking-wider">Thanks so much for visiting, we are delighted that you are interested in our schools and also at enrolling your child.</p>
                <div class="flex flex-col lg:flex-row gap-4 pt-4 lg:gap-16">
                    <button class="self-start px-4 py-3 bg-[#CEDD71] text-sm rounded-sm shadow-md hover:bg-[#b0cc63] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">APPLY FOR ADMISSION</button>
                    <button class="self-start px-4 py-3 bg-[#CEDD71] text-sm rounded-sm shadow-md hover:bg-[#b0cc63] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">PARENT LOGIN</button>
                </div>
            </div>
        </section>
    
        <section class="w-full bg-black">
            <div>
                <div class="flex flex-col leading-none pt-10 gap-2 pl-8 z-10">
                    <p class="text-xs lg:text-lg text-white tracking-widest">HAVE MORE QUESTIONS</p>
                    <div class="text-[30px] lg:text-[80px] text-white font-cormorant"> 
                        <h1>Contact Us</h1>
                    </div>
                    <p class="text-white text-xs lg:text-sm md:text-sm font-serif tracking-wider">You can call us on phone, send us and email or visit any of our schools, 
                        we are looking forward to hearing from you</p>
                    <div class="flex flex-col lg:flex-row gap-4 pt-4 lg:gap-16">
                        <button class="self-start px-4 py-3 bg-[#CEDD71] text-sm rounded-sm shadow-md hover:bg-[#b0cc63] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">APPLY FOR ADMISSION</button>
                        <button class="self-start px-4 py-3 bg-[#CEDD71] text-sm rounded-sm shadow-md hover:bg-[#b0cc63] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">PARENT LOGIN</button>
                    </div>
                </div>
            </div>
            <Adress/>
        </section>

        <form action="" class="w-full bg-[#CEDD71] p-6 lg:p-10 rounded-md shadow-md">
            <h2 class="text-xl lg:text-2xl font-cormorant font-bold mb-6 text-center lg:text-left">Send Us a Message</h2>

            <!-- Name Field -->
            <div class="mb-4">
                <label for="name" class="block  mb-1 lg:text-lg">Your Name</label>
                <input type="text" id="name" name="name" required
                    class="w-full px-3 py-2 border-2 bg-[#CEDD71] border-black rounded-md"/>
            </div>

            <!-- Email Field -->
            <div class="mb-4">
                <label for="email" class="block mb-1 lg:text-lg">Your Email</label>
                <input type="email" id="email" name="email" required
                    class="w-full px-3 py-2 border-2 bg-[#CEDD71] border-black rounded-md"/>
            </div>

            <!-- Subject Field -->
            <div class="mb-4">
                <label for="subject" class="block mb-1 lg:text-lg">Subject</label>
                <input type="text" id="subject" name="subject" required
                    class="w-full px-3 py-2 border-2 bg-[#CEDD71] border-black rounded-md"/>
            </div>

            <!-- Message Field -->
            <div class="mb-6">
                <label for="message" class="block mb-1 lg:text-lg">Your Message (Optional)</label>
                <textarea id="message" name="message" rows="4" required
                        class="w-full px-3 py-2 border-2 bg-[#CEDD71] border-black rounded-md"></textarea>
            </div>

            <!-- Submit Button -->
            <div class="text-center lg:text-left">
                <button type="submit"
                        class="px-6 py-4 bg-black text-white font-semibold rounded-md shadow hover:bg-green-600 transition duration-300 lg:px-8 lg:py-4">
                Submit
                </button>
            </div>
        </form>
    </section>
    <section>
        <Footer/>
    </section>
</template>

<style>

</style>