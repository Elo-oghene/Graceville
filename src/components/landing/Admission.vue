<script setup>
import Layout from './Layout.vue';
import Adress from '../landing/Adress.vue'
import Footer from '../footer/Footer.vue'

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
                    <h1>ADMISSION PAGE</h1>
                </div>
                <p class="text-white text-xs lg:text-sm md:text-sm font-serif tracking-wider">Thanks so much for visiting, we are delighted that you are interested in our schools and also at enrolling your child.</p>
                <div class="flex flex-col lg:flex-row gap-4 pt-4 lg:gap-16">
                    <button class="self-start px-4 py-3 bg-[#CEDD71] text-sm rounded-sm shadow-md hover:bg-[#b0cc63] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">APPLY FOR ADMISSION</button>
                    <button class="self-start px-4 py-3 bg-[#CEDD71] text-sm rounded-sm shadow-md hover:bg-[#b0cc63] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">PARENT LOGIN</button>
                </div>
            </div>
        </section>

        <section class="w-full flex flex-col md:flex-row items-center bg-black">
            <div class="w-full md:w-1/2 h-64 md:h-full">
                <div class="w-full h-full">
                    <img src="../../assets/images/kiddies7.jpg" class="w-full h-full object-cover" alt="">
                </div>
            </div>
            <div class="w-full md:w-1/2 flex flex-col px-4 py-4 gap-4">
                <div class="text-white font-cormorant text-2xl md:text-[30px] text-center md:text-left">
                    Admission into Graceville Pre-school and Primary School
                </div>
                <p class="text-white text-center text-sm md:text-left">
                    Admission into Graceville International Schools (Jesus Saves) and Graceville International Schools (Summit Road) is open all year round. However, children will be tested and age considered in determining the appropriate class for admission.
                </p>
                <div class="flex flex-col gap-2">
                    <div class="text-[#CEDD71] text-center md:text-left">HOW TO REGISTER</div>
                    <ul class="text-white text-sm px-4 flex flex-col gap-2 list-disc list-inside">
                        <li>Collect a registration form</li>
                        <li>Return completed form with two passport photographs</li>
                        <li>Photocopy of immunization card</li>
                        <li>Photocopy of birth certificate</li>
                        <li>Photocopy of parents/guardians ID card</li>
                    </ul>
                    <button class="self-start px-4 py-3 bg-[#CEDD71] text-sm rounded-sm shadow-md hover:bg-[#b0cc63] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
                        CONTACT US
                    </button>
                </div>
            </div>
        </section>

        <section class="w-full hidden lg:flex flex-col md:flex-row items-center bg-black">
            <div class="w-full md:w-1/2 flex flex-col px-4 py-4 gap-4">
                <div class="text-white font-cormorant text-2xl md:text-[30px] text-center md:text-left">
                    Admission into Graceville College (Day Secondary School)
                </div>
                <p class="text-white text-center text-sm md:text-left">
                    Graceville College Enrollment into Graceville College for the academic session commences with theentrance examination that usually holds early in May of the proceeding session.Separate examination dates are arranged for students wishing to transfer into JS2 andSS2 (please contact the school)Admission into Graceville International Schools (Jesus Saves) and Graceville International Schools (Summit Road) is open all year round. However, children will be tested and age considered in determining the appropriate class for admission.
                </p>
                <div class="flex flex-col gap-2">
                    <div class="text-[#CEDD71] text-center md:text-left">HOW TO REGISTER</div>
                    <ul class="text-white text-sm px-4 flex flex-col gap-2 list-disc list-inside">
                        <li>Obtain the admission pack from the admin</li>
                        <li>Complete the admission form and return by the date stated with the requirements</li>
                        <li>Prepare and attend the written entrance and oral interviews on the date started</li>
                        <li>Successful candidates will be notified thereafter</li>
                        <li>Pay the acceptable fee (non-refundable)</li>
                    </ul>
                    <button class="self-start px-4 py-3 bg-[#CEDD71] text-sm rounded-sm shadow-md hover:bg-[#b0cc63] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
                            DOWNLOAD THE REGISTRATION FORM
                    </button>
                </div>
            </div>
            <div class="w-full md:w-1/2 h-64 md:h-full">
                <div class="w-full h-full">
                    <img src="../../assets/images/kiddies8.png" class="w-full h-full object-cover" alt="">
                </div>
            </div>
        </section>

        <section class="w-full lg:hidden flex flex-col md:flex-row items-center bg-black">
            <div class="w-full md:w-1/2 h-64 md:h-full">
                <div class="w-full h-full">
                    <img src="../../assets/images/kiddies8.png" class="w-full h-full object-cover" alt="">
                </div>
            </div>
            <div class="w-full md:w-1/2 flex flex-col px-4 py-4 gap-4">
                <div class="text-white font-cormorant text-2xl md:text-[30px] text-center md:text-left">
                    Admission into Graceville College (Day Secondary School)
                </div>
                <p class="text-white text-center text-sm md:text-left">
                    Graceville CollegeEnrollment into Graceville College for the academic session commences with theentrance examination that usually holds early in May of the proceeding session.Separate examination dates are arranged for students wishing to transfer into JS2 andSS2 (please contact the school)Admission into Graceville International Schools (Jesus Saves) and Graceville International Schools (Summit Road) is open all year round. However, children will be tested and age considered in determining the appropriate class for admission.
                </p>
                <div class="flex flex-col gap-2">
                    <div class="text-[#CEDD71] text-center md:text-left">HOW TO REGISTER</div>
                    <ul class="text-white text-sm px-4 flex flex-col gap-2 list-disc list-inside">
                        <li>Obtain the admission pack from the admin</li>
                        <li>Complete the admission form and return by the date stated with the requirements</li>
                        <li>Prepare and attend the written entrance and oral interviews on the date started</li>
                        <li>Successful candidates will be notified thereafter</li>
                        <li>Pay the acceptable fee (non-refundable)</li>
                    </ul>
                    <button class="self-start px-4 py-3 bg-[#CEDD71] text-sm rounded-sm shadow-md hover:bg-[#b0cc63] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
                            DOWNLOAD THE REGISTRATION FORM
                    </button>
                </div>
            </div>
        </section>

        <section class="w-full bg-black flex flex-col md:flex-row">
            <div class="w-full md:w-1/2 h-64 md:h-full">
                <div class="w-full h-full">
                    <img src="../../assets/images/Entrance.png" class="w-full h-full object-cover" alt="">
                </div>
            </div>
            <div class="w-full md:w-1/2 flex flex-col px-4 py-4 gap-4">
                <div class="text-white font-cormorant text-2xl md:text-[30px] text-center md:text-left">
                    Admission into Graceville Pre-University
                </div>
                <p class="text-white text-sm text-center md:text-left">
                    Graceville High School comprises of the Pre-university and is situated at our newly built exquisite campus in Okpanam Asaba, Delta State. You can register for JUPEB, CAMBRIDGE A LEVELS, SAT, IELTS, TOEFLGraceville CollegeEnrollment into Graceville College for the academic session commences with the entrance examination that usually holds early in May of the proceeding session.Separate examination dates are arranged for students wishing to transfer into JS2 andSS2 (please contact the school)Admission into Graceville International Schools (Jesus Saves) and Graceville International Schools (Summit Road) is open all year round. However, children will be tested and age considered in determining the appropriate class for admission.
                </p>
                <div class="flex flex-col gap-2">
                    <div class="text-white text-sm text-center md:text-left">Entry Requirement: Five (5) Credits at WAEC/NECO 0-Level.</div>
                    <div class="text-[#CEDD71] text-center md:text-left">HOW TO REGISTER</div>
                    <div class="text-white text-sm">Visit our centre at Graceville College, 22 Summit Road, Asaba, Delta State, Nigeria.</div>
                    <button class="self-start px-4 py-3 bg-[#CEDD71] text-sm rounded-sm shadow-md hover:bg-[#b0cc63] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
                            CONTACT US NOW
                    </button>
                </div>
            </div>
        </section>
        <section class="w-full bg-[#224E05]">
            <Adress/>
        </section>
        <section>
            <Footer/>
        </section>
    </section>
</template>
<style>

</style>