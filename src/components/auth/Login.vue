<script>
export default {
    methods: {
        handleSubmit() {
            // Add the form submission logic here
            console.log("Form submitted");
            // Example: validate input, make API request, etc.
        }
    }
}
</script>

<template>
    <div class="w-full h-[100vh] items-center flex justify-center px-4">
        <form @submit.prevent="handleSubmit" class="w-full max-w-md h-[400px] flex flex-col justify-center gap-4 items-center">
            <div class="w-40 sm:w-52">
                <img class="w-full object-contain" src="../../assets/images/logo.png" alt="logo"/>
            </div>
            <div class="text-center text-sm sm:text-base">ENTER LOGIN DETAILS TO CHECK ON STUDENT</div>
            <div class="w-full flex flex-col gap-4">
                <input type="text" placeholder="STUDENT'S ID:" class="w-full outline-none border-2 px-2 text-sm border-secondary py-3 sm:py-4">
                <input type="text" placeholder="PASSWORD:" class="w-full border-2 px-2 text-sm border-secondary py-3 sm:py-4">
            </div>
            <button type="submit" class="w-full px-4 py-3 sm:py-4 bg-secondary text-sm text-white rounded-sm shadow-md hover:bg-[#1b3a04] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
                LOGIN
            </button>
        </form>
    </div>
</template>
