<script setup>
import { ref } from 'vue';
const menuOpen = ref(false); // State variable to manage the nested list visibility
const attendanceOpen = ref(false); // State variable to manage the nested list visibility
const timetableOpen = ref(false); // State variable to manage the nested list visibility
const schoolFeesOpen = ref(false); // State variable to manage the nested list visibility
const healthUpdateOpen = ref(false); // State variable to manage the nested list visibility
const termScheduleOpen = ref(false); // State variable to manage the nested list visibility
const testExamOpen = ref(false); // State variable to manage the nested list visibility
const testResultOpen = ref(false); // State variable to manage the nested list visibility
const backgroundColor = ref('bg-white'); // Initial background color
const examSelected = ref(false); // Initial background color
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
const toggleTestResult = () => {
    testResultOpen.value = !testResultOpen.value; // Toggle the visibility
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
        <section class="w-full h-full px-4 lg:px-16 flex flex-col py-4 gap-3 ">
            <div class="w-full flex gap-2  justify-between">
                <div class="w-full lg:w-[80%] flex flex-col gap-4 h-full">
                    <div class="w-full  flex flex-col lg:flex-row">
                        <label class="w-full lg:w-1/5 flex items-center text-sm lg:text-[16px]">STUDENTS ID</label>
                        <div  class="w-full lg:w-4/5 h-[50px] border-2 border-secondary px-4 flex items-center bg-[#F5F9DA]">12345RTYZ</div>
                    </div>
                    <div class="w-full flex flex-col lg:flex-row">
                        <label class="w-full lg:w-1/5 flex items-center text-sm lg:text-[16px]">FIRSTNAME</label>
                        <div  class="w-full lg:w-4/5 h-[50px] border-2 border-secondary px-4 flex items-center bg-[#F5F9DA]">Christopher</div>
                    </div>
                    <div class="w-full  flex flex-col lg:flex-row">
                        <label class="w-full lg:w-1/5 flex items-center text-sm lg:text-[16px] ">SURNAME</label>
                        <div  class="w-full lg:w-4/5 h-[50px] border-2 border-secondary px-4 flex items-center bg-[#F5F9DA]">fghvbjnkml,;.</div>
                    </div>
                </div>
                <div class="hidden lg:flex w-[20%] h-52 border-2 border-secondary">
                    <img src="../../assets/images/illustration.png" class="object cover w-full h-full" alt="image goes here">
                </div>
            </div>

            <div class="w-full h-[400px] flex flex-col gap-3">
                <div class="w-full flex flex-col lg:flex-row">
                    <label class="w-full lg:w-[16%] flex items-center text-sm lg:text-[16px]">OTHER NAMES</label>
                    <div  class="w-full lg:w-[84%] h-[50px] border-2 border-secondary px-4 flex items-center bg-[#F5F9DA]">fghvbjnkml,;.</div>
                </div>
                <div class="w-full flex flex-col lg:flex-row">
                    <label class="w-full lg:w-[16%] flex items-center text-sm lg:text-[16px]">DATE OF BIRTH</label>
                    <div  class="w-full lg:w-[84%] h-[50px] border-2 border-secondary px-4 flex items-center bg-[#F5F9DA]">fghvbjnkml,;.</div>
                </div>
                <div class="w-full flex flex-col lg:flex-row">
                    <label class="w-full lg:w-[16%] flex items-center text-sm lg:text-[16px]">AGE</label>
                    <div  class="w-full lg:w-[84%] h-[50px] border-2 border-secondary px-4 flex items-center bg-[#F5F9DA]">fghvbjnkml,;.</div>
                </div>
                <div class="w-full  flex flex-col lg:flex-row">
                    <label class="w-full lg:w-[16%] flex items-center text-sm lg:text-[16px]">GENDER</label>
                    <div  class="w-full lg:w-[84%] h-[50px] border-2 px-4 border-secondary bg-[#F5F9DA]">fghvbjnkml,;.</div>
                </div>
                <div class="w-full  flex flex-col lg:flex-row">
                    <label class="w-full lg:w-[16%] flex items-center text-sm lg:text-[16px]">PARENTS PHONE NO</label>
                    <div  class="w-full lg:w-[84%] h-[50px] border-2 border-secondary px-4 flex items-center bg-[#F5F9DA]">fghvbjnkml,;.</div>
                </div>
            </div>
        </section>
        <!-- student report -->
        <section class="w-full px-4 lg:px-16 mt-10">
            <div>STUDENTS PROGRESS REPORT</div>
            <ul class="w-full flex flex-col mt-4 gap-4">
                <li class="w-full h-14 bg-secondary flex items-center px-4 lg:px-8 justify-between cursor-pointer" @click="toggleAttendance">
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
                    <div class="w-full h-[30px] px-4 lg:px-8 flex items-center text-sm lg:text-lg bg-accent">Last present:12th May 2024</div>
                </div>
                <li class="w-full h-14 bg-secondary flex items-center px-4 lg:px-8 justify-between cursor-pointer" @click="toggleTimetable">
                    <span class="px-4 lg:px-8 text-sm lg:text-[16px] text-white">TIMETABLE</span>
                    <i :class="timetableOpen ? 'bx bx-chevron-up' : 'bx bx-chevron-down'" class="text-white text-[30px]"></i> <!-- Icon for toggling -->
                </li>
                <div v-if="timetableOpen" class="w-full"> <!-- Nested list -->
                    <img src="../../assets/images/table.png" class="w-full" alt="images goes here">
                </div>
                <li class="w-full h-14 bg-secondary flex items-center px-4 lg:px-8 justify-between cursor-pointer" @click="toggleSchoolfees">
                    <span class="px-4 lg:px-8 text-sm lg:text-[16px] text-white">SCHOOLFEES</span>
                    <i :class="schoolFeesOpen ? 'bx bx-chevron-up' : 'bx bx-chevron-down'" class="text-white text-[30px]"></i> <!-- Icon for toggling -->
                </li>
                <div v-if="schoolFeesOpen" class="w-full"> <!-- Nested list -->
                    <button class="self-start px-4 py-3 bg-accent text-sm rounded-sm shadow-md hover:bg-[#b0cc63] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
                        DOWNLOAD PREVIOUS RECEIPTS
                    </button>
                    <img src="../../assets/images/schoolfees.png" class="w-full" alt="">
                    <button class="self- start px-4 py-3 bg-accent text-sm rounded-sm shadow-md hover:bg-[#b0cc63] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
                        DOWNLOAD RECEIPT
                    </button>
                </div>
                <li class="w-full h-14 bg-secondary flex items-center px-4 lg:px-8 justify-between cursor-pointer" @click="toggleHealthUpdate">
                    <span class="px-4 lg:px-8 text-sm lg:text-[16px] text-white">HEALTHUPDATE</span>
                    <i :class="healthUpdateOpen ? 'bx bx-chevron-up' : 'bx bx-chevron-down'" class="text-white text-[30px]"></i> <!-- Icon for toggling -->
                </li>
                <div v-if="healthUpdateOpen" class="w-full"> <!-- Nested list -->
                    <img src="../../assets/images/healthupdate.png" class="w-full" alt="">
                </div>
                <li class="w-full h-14 bg-secondary flex items-center px-4 lg:px-8 justify-between cursor-pointer" @click="toggleTermSchedule">
                    <span class="px-4 lg:px-8 text-sm lg:text-[16px] text-white">TERM SCHEDULE</span>
                    <i :class="termScheduleOpen ? 'bx bx-chevron-up' : 'bx bx-chevron-down'" class="text-white text-[30px]"></i> <!-- Icon for toggling -->
                </li>
                <div v-if="termScheduleOpen" class="w-full flex gap-6 flex-col lg:px-52"> <!-- Nested list -->
                    <div class="w-full flex gap-4 lg:gap-16 lg:items-center justify-between">
                            <div class="w-6 h-6 bg-secondary rounded-sm"></div>
                            <div>1st Test</div>
                        <div class="w-32 h-6 bg-secondary rounded-lg"></div>
                    </div>
                    <div class="flw-full flex gap-4 lg:gap-16 lg:items-center justify-between">
                        <div class="w-6 h-6 bg-secondary rounded-sm"></div>
                        <div>2nd Test</div>
                        <div class="w-32 h-6 bg-secondary rounded-lg"></div>
                    </div>
                    <div class="w-full flex gap-4 lg:gap-16 lg:items-center justify-between">
                        <div class="w-6 h-6 bg-secondary rounded-sm"></div>
                        <div>Parents Forum</div>
                        <div class="w-32 h-6 bg-secondary rounded-lg"></div>
                    </div>
                    <div class="w-full flex gap-4 lg:gap-16 lg:items-center justify-between">
                        <div class="w-6 h-6 bg-secondary rounded-sm"></div>
                        <div>Examination</div>
                        <div class="w-32 h-6 bg-secondary rounded-lg"></div>
                    </div>
                </div>
                <li class="w-full h-14 bg-secondary flex items-center px-4 lg:px-8 justify-between cursor-pointer" @click="toggleTestExam">
                    <span class="px-4 lg:px-8 text-sm lg:text-[16px] text-white">TEST AND EXAM</span>
                    <i :class="testExamOpen ? 'bx bx-chevron-up' : 'bx bx-chevron-down'" class="text-white text-[30px]"></i> <!-- Icon for toggling -->
                </li>
                <div v-if="testExamOpen"> 
                    <div class="w-full flex flex-col lg:flex-row lg:justify-center gap-4 px-4 lg:gap-16">
                        <div class="px-4 py-1 rounded-sm bg-accent">Test Result</div>
                        <div class="px-4 py-1 rounded-sm bg-accent" @click="examSelected = !examSelected">Exam result</div>
                    </div>
                    <div v-if="examSelected" class="w-full flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-16 pt-6">
                        <select class="select-custom outline-none">
                            <option value="">Year</option>
                            <option value="">Year1</option>
                            <option value="">Year2</option>
                            <option value="">Year3</option>
                        </select>
                        <select class="select-custom">
                            <option value="">Section</option>
                            <option value="">gbnm</option>
                            <option value="">gbnm</option>
                            <option value="">gbnm</option>
                        </select>
                        <select class="select-custom">
                            <option value="">Term</option>
                            <option value="">gbnm</option>
                            <option value="">gbnm</option>
                            <option value="">gbnm</option>
                        </select>
                    </div>
                </div>
                <li class="w-full h-14 bg-secondary flex items-center px-4 lg:px-8 text-sm lg:text-[16px] text-white">CHECK FINAL RESULT</li>
            </ul>
        </section>
    </section>
</template>
<style>
.select-custom {
    padding: 10px 10px; /* Padding inside the select box */
    background-color: #D9D9D9; /* Tailwind Gray-500 */
    color: #121212; /* Text color */
    border-radius: 8px; /* Rounded corners */
    cursor: pointer; /* Change cursor to pointer */
    width: 200px; /* Width for consistent sizing */
    font-size: 16px;
    border: none; /* Remove default border */
    outline: none;
}

.select-custom option {
    background-color: #4B5563; /* Option background color */
    color: #FFF; /* Option text color */
    border:none;
}

</style>