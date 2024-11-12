<script setup>
import { ref } from 'vue';
const menuOpen = ref(false); // State variable to manage the nested list visibility
const attendanceOpen = ref(false); // State variable to manage the nested list visibility
const timetableOpen = ref(false); // State variable to manage the nested list visibility
const schoolFeesOpen = ref(false); // State variable to manage the nested list visibility
const healthUpdateOpen = ref(false); // State variable to manage the nested list visibility
const termScheduleOpen = ref(false); // State variable to manage the nested list visibility
const testExamOpen = ref(false); // State variable to manage the nested list visibility
const backgroundColor = ref('bg-white'); // Initial background color
const selectedYear = '';

const togglemenuOpen = () => {
    menuOpen.value = !menuOpen.value; // Toggle the visibility
    console.log("open")
};
const toggleAttendance = () => {
    attendanceOpen.value = !attendanceOpen.value; // Toggle the visibility
};
const toggleTimetable = () => {
    timetableOpen.value = !timetableOpen.value; // Toggle the visibility
};
const toggleSchoolfees = () => {
    schoolFeesOpen.value = !schoolFeesOpen.value; // Toggle the visibility
};
const toggleHealthUpdate = () => {
    healthUpdateOpen.value = !healthUpdateOpen.value; // Toggle the visibility
};
const toggleTermSchedule = () => {
    termScheduleOpen.value = !termScheduleOpen.value; // Toggle the visibility
};
const toggleTestExam = () => {
    testExamOpen.value = !testExamOpen.value; // Toggle the visibility
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
        <section class="w-full h-full px-4 lg:px-16 flex flex-col py-4 gap-3 ">
            <div class="w-full flex gap-2  justify-between">
                <div class="w-full lg:w-[80%] flex flex-col gap-4 h-full">
                    <div class="w-full  flex flex-col lg:flex-row">
                        <label class="w-full lg:w-1/5 flex items-center text-sm lg:text-[16px]">STUDENTS ID</label>
                        <div  class="w-full lg:w-4/5 h-[50px] border-2 border-[#224E05] px-4 flex items-center bg-[#F5F9DA]">12345RTYZ</div>
                    </div>
                    <div class="w-full flex flex-col lg:flex-row">
                        <label class="w-full lg:w-1/5 flex items-center text-sm lg:text-[16px]">FIRSTNAME</label>
                        <div  class="w-full lg:w-4/5 h-[50px] border-2 border-[#224E05] px-4 flex items-center bg-[#F5F9DA]">Christopher</div>
                    </div>
                    <div class="w-full  flex flex-col lg:flex-row">
                        <label class="w-full lg:w-1/5 flex items-center text-sm lg:text-[16px] ">SURNAME</label>
                        <div  class="w-full lg:w-4/5 h-[50px] border-2 border-[#224E05] px-4 flex items-center bg-[#F5F9DA]">fghvbjnkml,;.</div>
                    </div>
                </div>
                <div class="hidden lg:flex w-[20%] h-52 border-2 border-[#224E05]">
                    <img src="../../assets/images/illustration.png" class="object cover w-full h-full" alt="image goes here">
                </div>
            </div>

            <div class="w-full h-[400px] flex flex-col gap-3">
                <div class="w-full flex flex-col lg:flex-row">
                    <label class="w-full lg:w-[16%] flex items-center text-sm lg:text-[16px]">OTHER NAMES</label>
                    <div  class="w-full lg:w-[84%] h-[50px] border-2 border-[#224E05] px-4 flex items-center bg-[#F5F9DA]">fghvbjnkml,;.</div>
                </div>
                <div class="w-full flex flex-col lg:flex-row">
                    <label class="w-full lg:w-[16%] flex items-center text-sm lg:text-[16px]">DATE OF BIRTH</label>
                    <div  class="w-full lg:w-[84%] h-[50px] border-2 border-[#224E05] px-4 flex items-center bg-[#F5F9DA]">fghvbjnkml,;.</div>
                </div>
                <div class="w-full flex flex-col lg:flex-row">
                    <label class="w-full lg:w-[16%] flex items-center text-sm lg:text-[16px]">AGE</label>
                    <div  class="w-full lg:w-[84%] h-[50px] border-2 border-[#224E05] px-4 flex items-center bg-[#F5F9DA]">fghvbjnkml,;.</div>
                </div>
                <div class="w-full  flex flex-col lg:flex-row">
                    <label class="w-full lg:w-[16%] flex items-center text-sm lg:text-[16px]">GENDER</label>
                    <div  class="w-full lg:w-[84%] h-[50px] border-2 px-4 border-[#224E05] bg-[#F5F9DA]">fghvbjnkml,;.</div>
                </div>
                <div class="w-full  flex flex-col lg:flex-row">
                    <label class="w-full lg:w-[16%] flex items-center text-sm lg:text-[16px]">PARENTS PHONE NO</label>
                    <div  class="w-full lg:w-[84%] h-[50px] border-2 border-[#224E05] px-4 flex items-center bg-[#F5F9DA]">fghvbjnkml,;.</div>
                </div>
            </div>
        </section>
        <!-- student report -->
        <section class="w-full px-4 lg:px-16 mt-10">
            <div>STUDENTS PROGRESS REPORT</div>
            <ul class="w-full flex flex-col mt-4 gap-4">
                <li class="w-full h-14 bg-[#224E05] flex items-center px-4 lg:px-8 justify-between cursor-pointer" @click="toggleAttendance">
                    <span class="px-4 lg:px-8 text-sm lg:text-[16px] text-white">ATTENDANCE</span>
                    <i :class="attendanceOpen ? 'bx bx-chevron-up' : 'bx bx-chevron-down'" class="text-white text-[30px]"></i> <!-- Icon for toggling -->
                </li>
                <div v-if="attendanceOpen" class="w-full flex gap-4 flex-col"> <!-- Nested  -->
                    <div class="flex gap-4 lg:gap-10 items-center justify-center">
                        <div class="flex flex-col gap-2">
                            <div @click="changeColor" class="text-center text-sm">TOTAL</div>
                            <div class="w-14 h-14 shadow-lg  rounded-lg flex items-center justify-center">189</div>
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
                <li class="w-full h-14 bg-[#224E05] flex items-center px-4 lg:px-8 justify-between cursor-pointer" @click="toggleTimetable">
                    <span class="px-4 lg:px-8 text-sm lg:text-[16px] text-white">TIMETABLE</span>
                    <i :class="timetableOpen ? 'bx bx-chevron-up' : 'bx bx-chevron-down'" class="text-white text-[30px]"></i> <!-- Icon for toggling -->
                </li>
                <div v-if="timetableOpen" class="w-full"> <!-- Nested list -->
                    <img src="../../assets/images/table.png" class="w-full" alt="images goes here">
                </div>
                <li class="w-full h-14 bg-[#224E05] flex items-center px-4 lg:px-8 justify-between cursor-pointer" @click="toggleSchoolfees">
                    <span class="px-4 lg:px-8 text-sm lg:text-[16px] text-white">SCHOOLFEES</span>
                    <i :class="schoolFeesOpen ? 'bx bx-chevron-up' : 'bx bx-chevron-down'" class="text-white text-[30px]"></i> <!-- Icon for toggling -->
                </li>
                <div v-if="schoolFeesOpen" class="w-full"> <!-- Nested list -->
                    <img src="../../assets/images/schoolfees.png" class="w-full" alt="">
                </div>
                <li class="w-full h-14 bg-[#224E05] flex items-center px-4 lg:px-8 justify-between cursor-pointer" @click="toggleHealthUpdate">
                    <span class="px-4 lg:px-8 text-sm lg:text-[16px] text-white">HEALTHUPDATE</span>
                    <i :class="healthUpdateOpen ? 'bx bx-chevron-up' : 'bx bx-chevron-down'" class="text-white text-[30px]"></i> <!-- Icon for toggling -->
                </li>
                <div v-if="healthUpdateOpen" class="w-full"> <!-- Nested list -->
                    <img src="../../assets/images/healthupdate.png" class="w-full" alt="">
                </div>
                <li class="w-full h-14 bg-[#224E05] flex items-center px-4 lg:px-8 justify-between cursor-pointer" @click="toggleTermSchedule">
                    <span class="px-4 lg:px-8 text-sm lg:text-[16px] text-white">TERM SCHEDULE</span>
                    <i :class="termScheduleOpen ? 'bx bx-chevron-up' : 'bx bx-chevron-down'" class="text-white text-[30px]"></i> <!-- Icon for toggling -->
                </li>
                <div v-if="termScheduleOpen" class="w-full flex gap-6 flex-col lg:px-52"> <!-- Nested list -->
                    <div class="w-full flex gap-4 lg:gap-16 lg:items-center justify-between">
                            <div class="w-6 h-6 bg-[#224E05] rounded-sm"></div>
                            <div>1st Test</div>
                        <div class="w-32 h-6 bg-[#224E05] rounded-lg"></div>
                    </div>
                    <div class="flw-full flex gap-4 lg:gap-16 lg:items-center justify-between">
                        <div class="w-6 h-6 bg-[#224E05] rounded-sm"></div>
                        <div>2nd Test</div>
                        <div class="w-32 h-6 bg-[#224E05] rounded-lg"></div>
                    </div>
                    <div class="w-full flex gap-4 lg:gap-16 lg:items-center justify-between">
                        <div class="w-6 h-6 bg-[#224E05] rounded-sm"></div>
                        <div>Parents Forum</div>
                        <div class="w-32 h-6 bg-[#224E05] rounded-lg"></div>
                    </div>
                    <div class="w-full flex gap-4 lg:gap-16 lg:items-center justify-between">
                        <div class="w-6 h-6 bg-[#224E05] rounded-sm"></div>
                        <div>Examination</div>
                        <div class="w-32 h-6 bg-[#224E05] rounded-lg"></div>
                    </div>
                </div>
                <li class="w-full h-14 bg-[#224E05] flex items-center px-4 lg:px-8 justify-between cursor-pointer" @click="toggleTestExam">
                    <span class="px-4 lg:px-8 text-sm lg:text-[16px] text-white">TEST AND EXAM</span>
                    <i :class="testExamOpen ? 'bx bx-chevron-up' : 'bx bx-chevron-down'" class="text-white text-[30px]"></i> <!-- Icon for toggling -->
                </li>
                <div v-if="testExamOpen" class="w-full flex flex-col lg:flex-row lg:justify-center gap-4 px-4 lg:gap-16"> 
                    <div class="px-4 py-1 rounded-sm bg-[#CEDD71]">Test Result</div>
                    <div class="px-4 py-1 rounded-sm bg-[#CEDD71]">Exam result</div>
                    <!-- <select name="year" class="px-4 py-2 bg-gray-200 rounded-lg shadow-md focus:outline-none transition duration-300 ease-in-out" id="">
                        <option value="">year</option>
                        <option value="">2013</option>
                        <option value="">2014</option>
                        <option value="">2015</option>
                    </select>
                    <select name="section" class="px-4 py-2 bg-gray-200 rounded-lg shadow-md focus:outline-none transition duration-300 ease-in-out" id="">
                        <option value="">session</option>
                        <option value="">2013</option>
                        <option value="">2014</option>
                        <option value="">2015</option>
                    </select>
                    <select name="Term" class="px-4 py-2 bg-gray-200 rounded-lg shadow-md focus:outline-none transition duration-300 ease-in-out" id="">
                        <option value="">1st Term</option>
                        <option value="">2nd Term</option>
                        <option value="">3rd Term</option>
                    </select> -->
                </div>

                <li class="w-full h-14 bg-[#224E05] flex items-center px-4 lg:px-8 text-sm lg:text-[16px] text-white">TEST AND EXAM</li>
                <li class="w-full h-14 bg-[#224E05] flex items-center px-4 lg:px-8 text-sm lg:text-[16px] text-white">CHECK FINAL RESULT</li>
            </ul>
        </section>
    </section>
</template>