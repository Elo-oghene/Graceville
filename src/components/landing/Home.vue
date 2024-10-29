<script setup>
import Layout from './Layout.vue';
import Footer from '../footer/Footer.vue'

defineOptions({
    layout: Layout
    
});
</script>

<template>
    <Head>
        <title>Graceville International Schools</title>
    </Head>
    <main class="w-full mt-[100px]">
        <div class="w-full h-[500px] lg:h-full relative z-10">
            <img src="../../assets/images/academic-block.jpg" class="w-full h-full bg-cover" alt="Building Image">
            <div class="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div class="absolute top-44 lg:top-52 left-4 lg:left-10 flex flex-col pt-10 gap-2 lg:gap-4 z-10">
            <p class="text-xs lg:text-lg text-white tracking-widest">WELCOME TO OUR OFFICIAL WEBSITE</p>
            <div class="text-[30px] leading-none lg:text-[80px] text-white font-cormorant"> 
                <h1>Graceville</h1>
                <h1>Group Of School</h1>
            </div>
            <p class="text-white text-xs lg:text-sm md:text-sm font-serif tracking-wider">Thanks so much for visiting, we are delighted that you are interested in our schools and also at enrolling your child.</p>
            <div class="flex flex-col lg:flex-row gap-4 pt-4 lg:gap-16">
                <button class="self-start px-4 py-3 bg-[#CEDD71] text-sm rounded-sm shadow-md hover:bg-[#b0cc63] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">APPLY FOR ADMISSION</button>
                <button class="self-start px-4 py-3 bg-[#CEDD71] text-sm rounded-sm shadow-md hover:bg-[#b0cc63] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">PARENT LOGIN</button>
            </div>
        </div>

        <section class="w-full flex flex-col lg:flex-row items-center justify-center bg-black pt-10 pb-4">
            <div class="w-[90%] flex flex-col lg:flex-row justify-between gap-6">
                <div class="w-full lg:w-[30%]">
                    <div class="w-full">
                        <img src="../../assets/images/kiddies.jpg" class="" alt="">
                    </div>
                    <div class="w-full flex flex-col gap-6 pt-4">
                        <p class="text-white">Pre-school and Primary School</p>
                        <p class="w-full text-white font-serif">The Graceville International Schools (31 Jesus Saves Road) and Graceville International Schools (20B Summit Road) are arms of Graceville Schools that consists of the preschool and primary sections.</p>
                        <button class="self-start px-4 py-3 bg-[#CEDD71] text-sm rounded-sm shadow-md hover:bg-[#b0cc63] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">FIND OUT MORE</button>
                    </div>
                </div>
                <div class="w-full lg:w-[30%]">
                    <div class="w-full">
                        <img src="../../assets/images/kiddies2.jpg" alt="">
                    </div>
                    <div class="w-full flex flex-col gap-6 pt-4">
                        <p class="text-white">Secondary School</p>
                        <p class="w-full text-white font-serif">Graceville College, Asaba and Graceville High School are two great schools for the Junior (key stage 3) and Senior Secondary (key stage 4) of education. Both schools are located in the Asaba Capital Territory of Delta State, Nigeria.</p>
                        <button class="self-start px-4 py-3 bg-[#CEDD71] text-sm rounded-sm shadow-md hover:bg-[#b0cc63] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">FIND OUT MORE</button>
                    </div>
                </div>
                <div class="w-full lg:w-[30%]">
                    <div class="w-full">
                        <img src="../../assets/images/school-building.jpg" alt="">
                    </div>
                    <div class="w-full flex flex-col gap-6 pt-4">
                        <p class="text-white">PreUUniversity</p>
                        <p class="w-full text-white">Graceville High School comprises of the Preuniversity and is situated at our newly built exquisite campus in Okpanam Asaba, Delta State.</p>
                        <button class="self-start px-4 py-3 bg-[#CEDD71] text-sm rounded-sm shadow-md hover:bg-[#b0cc63] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">FIND OUT MORE</button>
                    </div>
                </div>
            </div>
        </section>

        <section class="w-full h-auto flex flex-col lg:flex-row bg-gray-500 relative ">
            <div class="w-full lg:w-1/2 h-full relative">
                <img src="../../assets/images/Rectangle 43.png" class="w-full h-full object-cover" alt="School Vision">
                <!-- Desktop Vision Section -->
                <div class="hidden lg:flex flex-col gap-2 absolute bottom-4 left-4 w-80 h-52 bg-[#CEDD71] p-4">
                    <p class="text-lg font-semibold">OUR VISION</p>
                    <h3 class="text-sm">
                        Our vision is to become a center of excellence that delivers world-class education to young minds and to raise generations of leaders.
                    </h3>
                    <div class="text-blue-700 cursor-pointer">MORE ABOUT US</div>
                </div>
                <!-- Mobile Vision Section -->
                <div class="w-full bg-[#CEDD71] flex lg:hidden flex-col gap-2 p-4">
                    <p class="text-lg font-semibold">OUR VISION</p>
                    <h3 class="text-sm">
                        Our vision is to become a center of excellence that delivers world-class education to young minds and to raise generations of leaders.
                    </h3>
                    <div class="text-blue-700 cursor-pointer">MORE ABOUT US</div>
                </div>
            </div>
            <div class="w-full lg:w-1/2 bg-[#224E05] flex flex-col justify-center px-4 lg:px-14 gap-4 py-10 lg:py-20">
                <p class="text-white tracking-wide text-sm">GRACEVILLE INTERNATIONAL SCHOOL</p>
                <h1 class="text-[40px] text-white font-cormorant">Study to Excel</h1>
                <div class="flex flex-col gap-6">
                    <h4 class="text-white text-sm lg:text-[16px]">
                        Graceville Schools caters to children from ages 2 to 18, with Preschool, Primary, Junior Secondary, Senior Secondary, and Preuniversity sections.
                    </h4>
                    <h4 class="text-white text-sm lg:text-[16px]">
                        Since our inception in 2002, Graceville Schools has grown significantly, with four campuses in Delta State, Nigeria.
                    </h4>
                    <h4 class="text-white text-sm lg:text-[16px]">
                        At Graceville Schools, we offer a broad-based curriculum that combines Nigerian and British standards, with state-of-the-art facilities. This provides our students with a global edge, making it a wonderful choice for your child’s education.
                    </h4>
                    <button class="self-start px-4 py-3 bg-[#CEDD71] text-sm rounded-sm shadow-md hover:bg-[#b0cc63] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
                        FIND OUT MORE
                    </button>
                </div>
            </div>
        </section>


        <section class="w-full flex flex-col lg:flex-row bg-black px-4">
            <div class="hidden w-full lg:w-1/2 lg:flex flex-col justify-center gap-3">
                <p class="text-[#CEDD71] tracking-wider">GET STARTED TODAY</p>
                <div class="text-[20px] leading-none lg:text-[60px] text-white flex flex-col font-cormorant leading-24">
                    <div>Kickstart Your Child's</div>
                    <div class="text-white">Future with us.</div>
                </div>
            </div>
            <!-- small screen -->
            <div class="w-full lg:w-1/2 h-[200px] flex lg:hidden flex-col justify-center gap-3">
                <p class="text-[#CEDD71] tracking-wider">GET STARTED TODAY</p>
                <div class="text-[30px] leading-none lg:text-[60px] text-white fle flex-col font-cormorant leading-24">
                    <div>Kickstart Your Child's</div>
                    <div class="text-white">Future with us.</div>
                </div>
            </div>
            <div class="w-full lg:w-1/2 flex flex-wrap">
                <div class="w-full lg:w-1/2 h-[250px] bg-[#224E05] flex flex-col px-8 gap-3 justify-center lg:mt-6">
                    <h4 class="text-[24px] text-white font-cormorant">Apply Now</h4>
                    <p class="text-white font-serif">Admission into all our currently ongoing, please click here to apply now.</p>
                    <button class="self-start px-4 py-3 bg-black text-sm text-white rounded-sm shadow-md tracking-wider hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">CLICK HERE</button>
                </div>
                <div class="w-full lg:w-1/2 bg-red-500">
                    <div class="w-full">
                        <img src="../../assets/images/kiddies4.png" class="w-full" alt="">
                    </div>
                </div>
                <div class="w-full lg:w-1/2 bg-yellow-500">
                    <div class="w-full h-full">
                        <img src="../../assets/images/kiddies3.png" class="w-full h-full" alt="">
                    </div>
                </div>
                <div class="w-full lg:w-1/2 h-[250px] bg-red-500 lg:mb-2 flex flex-col px-8 gap-3 justify-center">
                    <h4 class="text-[24px] text-white font-cormorant">Contact Us</h4>
                    <p class="text-white font-serif">Admission into all our currently ongoing, please click here to apply now.</p>
                    <button class="self-start px-4 py-3 bg-black text-sm text-white rounded-sm shadow-md tracking-wider hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">CLICK HERE</button>
                </div>
            </div>
        </section>

        <section class="w-full bg-black flex flex-col items-center pt-10 px-4">
            <div class="text-white text-[24px] lg:text-[50px] font-cormorant">Extracurricular Activities</div>
            <div class="lg:text-sm tracking-widest text-[#CEDD71] text-xs">WE ARE FOCUSED ON <br class="lg:hidden flex"> HOLISTIC FORMATION</div>
        </section>

        <section class="w-full flex flex-col lg:flex-row bg-black pt-10 px-4">
            <div class="w-full lg:w-1/3 flex flex-col items-center pt-6 gap-2">
                <div class="w-full">
                        <img src="../../assets/images/sport1.png" class="w-full" alt="">
                    </div>
                <div class="text-[#CEDD71] text-[20px] lg:text-[20px]">Sport Competions</div>
            </div>
            <div class="w-full lg:w-1/3 flex flex-col items-center lg:mt-10 pt-6 gap-2">
                <div class="w-full">
                        <img src="../../assets/images/sport1.png" class="w-full" alt="">
                    </div>
                <div class="text-[#CEDD71] text-[20px] lg:text-[20px]">School Club Activities</div>
            </div>
            <div class="w-full lg:w-1/3 flex flex-col items-center pt-6 gap-2">
                <div class="w-full">
                        <img src="../../assets/images/kiddies5.png" class="w-full" alt="">
                    </div>
                <div class="text-[#CEDD71] text-[20px] lg:text-[20px]">National/ International Trips</div>
            </div>
        </section>
        
        <section class="w-full flex flex-col lg:flex-row bg-black gap-2 px-4">
            <div class="w-full lg:w-1/2 flex flex-col items-center pt-6 gap-2">
                <div class="w-full">
                        <img src="../../assets/images/cultural.png" class="w-full" alt="">
                    </div>
                <div class="text-[#CEDD71] text-[20px] lg:text-[20px]">Cultural Activities</div>
            </div>
            <div class="w-full lg:w-1/2 flex flex-col items-center pt-6 pb-4 gap-2">
                <div class="w-full">
                        <img src="../../assets/images/sport2.png" class="w-full" alt="">
                    </div>
                <div class="text-[#CEDD71] text-[20px] lg:text-[20px]">Routine Sporting Activities</div>
            </div>
        </section>

        <section class="w-full flex flex-col items-center h-full bg-[#224E05] pt-10 px-4 justify-center">
            <div class="w-full lg:w-[80%] flex flex-col lg:flex-row">
                <div class="w-full lg:w-1/4 bg-[#224E05]  flex flex-col justify-center items-center">
                    <div class="text-[#CEDD71] tracking-widest">VIEW SOME OF</div>
                    <div class="text-white font-cormorant text-[50px]">Our Facilities</div>
                </div>
                <div class="w-full lg:w-1/2 h-full flex flex-col items-center gap-2">
                    <div class="w-full h-full">
                        <img src="../../assets/images/cot.jpg" class="w-full h-full object-cover" alt="">
                    </div>
                    <div class="text-[#CEDD71] text-[16px] lg:text-[20px] tracking-widest">SPORTS CENTRE</div>
                </div>
                <div class="w-full lg:w-1/4  flex flex-col items-center lg:h-[350px] gap-2">
                    <div class="w-full h-full">
                        <img src="../../assets/images/lab.jpg" class="w-full h-full object-cover" alt="">
                    </div>
                    <div class="text-[#CEDD71] text-[16px] lg:text-[20px] tracking-widest">PHYSICS LAB</div>
                </div>
            </div>
            <div class="w-full lg:w-[80%] flex flex-col lg:flex-row gap-4 lg:mt-10">
                <div class="w-full lg:w-1/2 h-full flex flex-col items-center gap-2">
                    <div class="w-full h-full">
                        <img src="../../assets/images/pool.png" class="w-full h-full object-cover" alt="">
                    </div>
                    <div class="text-[#CEDD71] text-[16px] lg:text-[20px] tracking-widest">A SWIMMING POOL</div>
                </div>
                <div class="w-full lg:w-1/2 h-full flex flex-col items-center gap-2">
                    <div class="w-full h-full">
                        <img src="../../assets/images/lab1.png" class="w-full h-full object-cover" alt="">
                    </div>
                    <div class="text-[#CEDD71] text-[16px] lg:text-[20px] tracking-widest">BIOLOGY LAB</div>
                </div>
                <div class="w-full lg:w-1/2 h-full flex flex-col items-center gap-2">
                    <div class="w-full h-full">
                        <img src="../../assets/images/ict-lab.jpg" class="w-full h-full object-cover" alt="">
                    </div>
                    <div class="text-[#CEDD71] text-[16px] lg:text-[20px] text-center tracking-widest">ICT LAB</div>
                </div>
                <div class="w-full lg:w-1/2 h-full flex flex-col items-center gap-2 pb-4">
                    <div class="w-full h-full">
                        <img src="../../assets/images/chem-lab.jpg" class="w-full h-full object-cover" alt="">
                    </div>
                    <div class="text-[#CEDD71] text-[16px] lg:text-[20px] text-center tracking-widest">CHEMISTRY LAB</div>
                </div>
            </div>
        </section>

        <section class="w-full h-[700px] bg-cover bg-fixed relative bg-[url('/src/assets/images/library.jpg')]">
            <div class="absolute inset-0 bg-[rgba(0,0,0,0.7)] flex flex-col gap-4 items-center justify-center">
                <p class="text-white text-xs lg:text-lg tracking-widest">INTERESTED IN JOINING US?</p>
                <div class="text-center leading-none">
                    <h1 class="text-white text-[30px] lg:text-[60px] font-cormorant">Join Us For Information About New</h1>
                    <h1 class="text-white text-[30px] lg:text-[60px] font-cormorant">Student Admissions</h1>
                </div>
                <p class="text-white tracking-wider text-xs text-center">We are currently admitting new students into all our schools, click the button below to apply now.</p>
                <button class="px-4 py-3 bg-black text-sm text-white rounded-sm shadow-md tracking-wider hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">CLICK HERE</button>
            </div>
        </section>

        <section class="w-full bg-[#224E05] flex flex-col gap-4 pt-10 pb-10 px-6">
            <div class="text-[24px] lg:text-[40px] text-white font-cormorant text-center">Visit Our Schools</div>
            <div class="w-full flex flex-wrap gap-6 justify-center">
                <div class="w-[250px] h-[250px] rounded-lg py-4 border-2 border-white flex justify-between items-center flex-col text-white transition-transform transition-shadow duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-[#CEDD71]">
                    <div class="text-center">
                        <p>Graceville International</p>
                        <p>Schools</p>
                    </div>
                    <p>Off Ken Mozia Road,</p>
                    <p>Asaba, Delta State</p>
                    <p>0915 879 0633</p>
                </div>
                <div class="w-[250px] h-[250px] rounded-lg py-4 border-2 border-white flex justify-between items-center flex-col text-white transition-transform transition-shadow duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-[#CEDD71]">
                    <div class="text-center">
                        <p>Graceville International</p>
                        <p>Schools</p>
                    </div>
                    <p>31 Jesus Saves Road,</p>
                    <p>Asaba, Delta State</p>
                    <p>0916 706 0239</p>
                </div>
                <div class="w-[250px] h-[250px] rounded-lg py-4 border-2 border-white flex justify-between items-center flex-col text-white transition-transform transition-shadow duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-[#CEDD71]">
                    <div class="text-center">
                        <p>Graceville International</p>
                        <p>Schools</p>
                    </div>
                    <p>22B Summit Road,</p>
                    <p>Asaba, Delta State</p>
                    <p>0916 694 2397</p>
                </div>
                <div class="w-[250px] h-[250px] rounded-lg py-4 border-2 border-white flex justify-between items-center flex-col text-white transition-transform transition-shadow duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-[#CEDD71]">
                    <div class="text-center">
                        <p>Graceville International</p>
                        <p>Schools</p>
                    </div>
                    <p>22A Summit Road,</p>
                    <p>Asaba, Delta State</p>
                    <p>0916 677 9461</p>
                </div>
                <div class="w-[250px] h-[250px] rounded-lg py-4 border-2 border-white flex justify-between items-center flex-col text-white transition-transform transition-shadow duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-[#CEDD71]">
                    <div class="text-center">
                        <p>Graceville International</p>
                        <p>Schools</p>
                    </div>
                    <p class="text-center">1 Graceville Boulevard,
                        Zoma Hills, Okpanam,</p>
                    <p>Asaba, Delta State</p>
                    <p>0916 702 3489</p>
                </div>

            </div>
        </section>
        <section>
            <Footer />
        </section>
    </main>
</template>
<style>

</style>