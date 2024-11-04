<script setup>
import { ref } from 'vue';
const attendanceOpen = ref(false); // State variable to manage the nested list visibility
const backgroundColor = ref('bg-white'); // Initial background color

const toggleAttendance = () => {
    attendanceOpen.value = !attendanceOpen.value; // Toggle the visibility
};

const changeColor = () => {
    // Toggle between two colors on click
    backgroundColor.value = backgroundColor.value === 'bg-white' ? 'bg-green-500' : 'bg-white'; // Change this to your desired colors
    console.log("cghangecolor")
};
</script>
<template>
    <section>
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
        <section class="flex justify-between items-center pt-4 px-4 lg:px-16">
            <div class="lg:hidden flex">
                <i class='bx bx-menu text-[24px]'></i>
            </div>
            <div>
                <div class="w-40 sm:w-52">
                <img class="w-full object-contain" src="../../assets/images/logo.png" alt="logo"/>
            </div>
            </div>
            <div class="w-14 lg:w-20 h-14 lg:h-20 rounded-full bg-[#CEDD71]">
            </div>
        </section>  

        <div class="w-full bg-[#CEDD71] h-[2px]"></div>
        <section class="w-full h-full px-4 lg:px-16 flex flex-col py-4 gap-3 ">
            <div class="w-full flex  justify-between">
                <div class="w-full lg:w-[80%] flex flex-col gap-4 h-full">
                    <div class="w-full  flex flex-col lg:flex-row">
                        <label class="w-full lg:w-1/5 flex items-center text-sm lg:text-[16px]">STUDENTS ID</label>
                        <div  class="w-full lg:w-4/5 h-[50px] border-2 border-[#224E05] px-4 flex items-center">fghvbjnkml,;.</div>
                    </div>
                    <div class="w-full flex flex-col lg:flex-row">
                        <label class="w-full lg:w-1/5 flex items-center text-sm lg:text-[16px]">FIRSTNAME</label>
                        <div  class="w-full lg:w-4/5 h-[50px] border-2 border-[#224E05] px-4 flex items-center">fghvbjnkml,;.</div>
                    </div>
                    <div class="w-full  flex flex-col lg:flex-row">
                        <label class="w-full lg:w-1/5 flex items-center text-sm lg:text-[16px] ">SURNAME</label>
                        <div  class="w-full lg:w-4/5 h-[50px] border-2 border-[#224E05] px-4 flex items-center">fghvbjnkml,;.</div>
                    </div>
                </div>
                <div class="hidden lg:flex w-[20%] border-2 border-[#CEDD71]">bxbnxn</div>
            </div>
            <div class="w-full flex flex-col gap-3">
                <div class="w-full flex flex-col lg:flex-row">
                    <label class="w-full lg:w-[16%] flex items-center text-sm lg:text-[16px]">OTHER NAMES</label>
                    <div  class="w-full lg:w-[84%] h-[50px] border-2 border-[#224E05] px-4 flex items-center">fghvbjnkml,;.</div>
                </div>
                <div class="w-full flex flex-col lg:flex-row">
                    <label class="w-full lg:w-[16%] flex items-center text-sm lg:text-[16px]">DATE OF BIRTH</label>
                    <div  class="w-full lg:w-[84%] h-[50px] border-2 border-[#224E05] px-4 flex items-center">fghvbjnkml,;.</div>
                </div>
                <div class="w-full flex flex-col lg:flex-row">
                    <label class="w-full lg:w-[16%] flex items-center text-sm lg:text-[16px]">AGE</label>
                    <div  class="w-full lg:w-[84%] h-[50px] border-2 border-[#224E05] px-4 flex items-center">fghvbjnkml,;.</div>
                </div>
                <div class="w-full  flex flex-col lg:flex-row">
                    <label class="w-full lg:w-[16%] flex items-center text-sm lg:text-[16px]">GENDER</label>
                    <div  class="w-full lg:w-[84%] h-[50px] border-2 px-4 border-[#224E05]">fghvbjnkml,;.</div>
                </div>
                <div class="w-full  flex flex-col lg:flex-row">
                    <label class="w-full lg:w-[16%] flex items-center text-sm lg:text-[16px]">PARENTS PHONE NO</label>
                    <div  class="w-full lg:w-[84%] h-[50px] border-2 border-[#224E05] px-4 flex items-center">fghvbjnkml,;.</div>
                </div>
            </div>
        </section>
        <section class="w-full px-4 lg:px-16 mt-10">
            <div>STUDENTS PROGRESS REPORT</div>
            <ul class="w-full flex flex-col mt-4 gap-4">
                <li class="w-full h-14 bg-[#224E05] flex items-center justify-between cursor-pointer" @click="toggleAttendance">
                    <span class="px-4 lg:px-8 text-sm lg:text-[16px]">ATTENDANCE</span>
                    <i :class="attendanceOpen ? 'bx bx-chevron-up' : 'bx bx-chevron-down'"></i> <!-- Icon for toggling -->
                </li>
                <div v-if="attendanceOpen" class="w-full flex gap-4 flex-col"> <!-- Nested list -->
                    <div class="flex gap-4 lg:gap-10 items-center justify-center">
                        <div class="flex flex-col gap-2">
                            <div @click="changeColor" class="text-center text-sm">TOTAL</div>
                            <div class="w-14 h-14  shadow-lg  rounded-lg flex items-center justify-center">189</div>
                        </div>
                        <div class="flex flex-col gap-2">
                            <div class="text-center text-sm">PRESENT</div>
                            <div class="w-14 h-14 bg-white shadow-lg  rounded-lg flex items-center justify-center">189</div>
                        </div>
                        <div class="flex flex-col gap-2">
                            <div class="text-center text-sm">ABSENT</div>
                            <div class="w-14 h-14 bg-white shadow-lg rounded-lg flex items-center justify-center">189</div>
                        </div>
                    </div>
                    <div class="w-full h-[30px] px-4 lg:px-8 flex items-center text-sm lg:text-lg bg-[#CEDD71]">Last present:12th May 2024</div>
                </div>
                <li class="w-full h-14 bg-[#224E05] flex items-center px-4 lg:px-8 text-sm lg:text-[16px]">TIME TABLE</li>
                <li class="w-full h-14 bg-[#224E05] flex items-center px-4 lg:px-8 text-sm lg:text-[16px]">SCHOOL FEES</li>
                <li class="w-full h-14 bg-[#224E05] flex items-center px-4 lg:px-8 text-sm lg:text-[16px]">HEALTH UPDATE</li>
                <li class="w-full h-14 bg-[#224E05] flex items-center px-4 lg:px-8 text-sm lg:text-[16px]">TERM SCHEDULE</li>
                <li class="w-full h-14 bg-[#224E05] flex items-center px-4 lg:px-8 text-sm lg:text-[16px]">TEST AND EXAM</li>
                <li class="w-full h-14 bg-[#224E05] flex items-center px-4 lg:px-8 text-sm lg:text-[16px]">CHECK FINAL RESULT</li>
            </ul>
        </section>
    </section>
</template>