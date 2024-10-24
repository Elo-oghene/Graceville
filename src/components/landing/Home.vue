<script setup>
import Layout from './Layout.vue';

defineOptions({
    layout: Layout
});
</script>

<template>
    <Head>
        <title>Graceville International Schools</title>
    </Head>
    <main class="w-full">
        <div class="w-full h-[500px] lg:h-full relative z-10">
            <img src="../../assets/images/academic-block.jpg" class="w-full h-full bg-cover" alt="Building Image">
            <div class="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div class="absolute top-44 lg:top-52 left-4 lg:left-10 flex flex-col gap-2 z-10">
            <p class="text-lg text-white">welcome to our official website</p>
            <h1 class="text-[30px] lg:text-[100px] leading-[40px] lg:leading-[105px] text-white font-cormorant">Graceville <br> International School</h1>
            <p class="text-white text-sm md:text-lg">Thanks so much for visiting, we are delighted that you are interested in our schools and also at enrolling your child.</p>
            <button class="self-start px-3 py-3 bg-[#CEDD71]">APPLY FOR ADMISSION</button>
        </div>

        <section class="w-full flex flex-col lg:flex-row items-center justify-center bg-black pt-10">
            <div class="w-[90%] flex flex-col lg:flex-row justify-between gap-6">
                <div class="w-full lg:w-[30%]">
                    <div class="w-full bg-red-50">
                        <img src="../../assets/images/kiddies.jpg" class="" alt="">
                    </div>
                    <div class="w-full flex flex-col gap-6 pt-4">
                        <p class="text-white">Pre-school and Primary School</p>
                        <p class="w-full text-white">The Graceville International Schools (31 Jesus Saves Road) and Graceville International Schools (20B Summit Road) are arms of Graceville Schools that consists of the preschool and primary sections.</p>
                        <button class="self-start px-3 py-3 bg-[#CEDD71]">FIND OUT MORE</button>
                    </div>
                </div>
                <div class="w-full lg:w-[30%]">
                    <div class="w-full  bg-red-50">
                        <img src="../../assets/images/kiddies2.jpg" alt="">
                    </div>
                    <div class="w-full flex flex-col gap-6 pt-4">
                        <p class="text-white">Secondary School</p>
                        <p class="w-full text-white">Graceville College, Asaba and Graceville High School are two great schools for the Junior (key stage 3) and Senior Secondary (key stage 4) of education. Both schools are located in the Asaba Capital Territory of Delta State, Nigeria.</p>
                        <button class="self-start px-3 py-3 bg-[#CEDD71]">FIND OUT MORE</button>
                    </div>
                </div>
                <div class="w-full lg:w-[30%]">
                    <div class="w-full bg-red-50">
                        <img src="../../assets/images/school-building.jpg" alt="">
                    </div>
                    <div class="w-full flex flex-col gap-6 pt-4">
                        <p class="text-white">PreUUniversity</p>
                        <p class="w-full text-white">Graceville High School comprises of the Preuniversity and is situated at our newly built exquisite campus in Okpanam Asaba, Delta State.</p>
                        <button class="self-start px-3 py-3 bg-[#CEDD71]">FIND OUT MORE</button>
                    </div>
                </div>
            </div>
        </section>

    </main>
</template>
<style>

</style>