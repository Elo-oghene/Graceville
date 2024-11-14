<!-- ReusableSection.vue -->
<template>
    <section class="relative">
        <div class="w-full h-[500px] lg:h-full relative z-10">
            <img :src="imageSrc" class="w-full h-full bg-cover" :alt="imageAlt">
            <div class="absolute inset-0 bg-black" :style="{ opacity: overlayOpacity }"></div>
        </div>
        <div class="absolute top-44 lg:top-52 left-4 lg:left-10 flex flex-col leading-none pt-10 gap-2 z-10">
            <p class="text-xs lg:text-lg text-white tracking-widest">{{ welcomeText }}</p>
            <div :class="titleSizeClass + ' text-white font-cormorant'"> 
                <h1>{{ title }}</h1>
                <h1>{{ title2 }}</h1>
            </div>
            <p class="text-white text-xs lg:text-sm md:text-sm font-serif tracking-wider">{{ description }}</p>
            <div class="flex flex-col lg:flex-row gap-4 pt-4 lg:gap-16">
                <button
                    v-for="(button, index) in buttons"
                    :key="index"
                    @click="button.onClick"
                    class="self-start px-4 py-3 bg-accent text-sm rounded-sm shadow-md hover:bg-[#b0cc63] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
                >
                    {{ button.label }}
                </button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        imageSrc: { type: String, required: true },
        imageAlt: { type: String, default: 'Background image' },
        overlayOpacity: { type: Number, default: 0.5 },
        welcomeText: { type: String, default: 'WELCOME TO OUR OFFICIAL WEBSITE' },
        title: { type: String, required: true },
        title2: { type: String, required: true },
        titleSizeClass: { type: String, default: 'text-[30px] lg:text-[80px]' },
        description: { type: String, required: true },
        buttons: { 
            type: Array,
            default: () => [
                { label: 'APPLY FOR ADMISSION', onClick: () => {} },
                { label: 'PARENT LOGIN', onClick: () => {} }
            ]
        }
    }
};
</script>

<style scoped>
</style>
