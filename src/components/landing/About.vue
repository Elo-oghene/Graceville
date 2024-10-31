<script setup>
import Layout from "./Layout.vue";
import Reusable from "./Reusable.vue";
import kiddies7 from "../../assets/images/kiddies7.jpg";
import Adress from '../landing/Adress.vue'
import Footer from "../footer/Footer.vue"

defineOptions({
  layout: Layout,
});
</script>

<template>
  <section class="w-full h-[100vh - 64px]">
    <section class="">
      <Reusable
        :imageSrc="kiddies7"
        imageAlt="Academic Building"
        overlayOpacity="0.6"
        welcomeText="WELCOME TO OUR OFFICIAL WEBSITE"
        title="ABOUT US"
        title2=""
        description="Thanks so much for visiting, we are delighted that you are interested in our schools and also at enrolling your child."
        :buttons="[
          { label: 'APPLY FOR ADMISSION', onClick: handleApply },
          { label: 'PARENT LOGIN', onClick: handleLogin },
        ]"
      />
    </section>
    <section
      class="w-full flex flex-col lg:flex-row bg-black px-8"
    >
      <div class="w-full lg:w-1/2 flex flex-col py-10 justify-center gap-4">
        <div class="flex flex-col gap-2">
          <p class="text-[#CEDD71] text-sm">WHY CHOOSE US</p>
          <h4 class="text-white text-[20px] lg:text-[40px] font-cormorant">Study to Excel</h4>
          <p class="text-white text-sm lg:text-lg">
            At Graceville Schools, we employ broad based, Nigerian and British
            Curriculum and use state of the art facilitates. This gives our
            students the global edge, and of course has become our
            tradition.Indeed, you will be glad to choose one of our schools for
            your child.
          </p>
        </div>
        <div class="flex flex-col gap-3">
          <p class="text-[#CEDD71] text-sm">OUR CORE VALUES</p>
          <div class="flex  text-sm lg:text-lg flex-col text-white gap-1">
            <p>Discipline</p>
            <p>Determination</p>
            <p>Dedication</p>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/2 h-full flex flex-col pb-4 items-center gap-2">
        <div class="w-full h-full">
          <img
            src="../../assets/images/school-building.png"
            class="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div class="text-[#CEDD71] text-[16px] lg:text-[20px] tracking-widest">
          Graceville High school
        </div>
      </div>
    </section>
    <section class="w-full px-4 lg:px-8 flex flex-col gap-2 bg-black">
        <div class="w-full h-full">
          <img
            src="../../assets/images/tennis-court.png"
            class="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div class="text-[#CEDD71] text-[16px] text-center pb-4 lg:text-[20px] tracking-widest">
          Tennis Court
        </div>
    </section>
    <section class="w-full flex flex-col lg:flex-row bg-[#224E05] px-4 gap-4 lg:px-8">
        <div class="w-full flex flex-col justify-center gap-4 lg:w-1/2">
            <p class="text-sm text-white">WE ARE DEDICATED TO GREATNESS</p>
            <h2 class="font-cormorant text-[30px] text-white">Mission Statement</h2>
            <ol class="text-sm lg:text-sm text-white flex flex-col gap-1">
                <li>Providing each child with the best ability to discover his/her ability,talent and perosnality to the fullest.
                    Developing each child's spiritual,physical,emotional,socialand mental potentials
                </li>
                <li>Including godly attributes,good leadership qualities and discipline</li>
                <li>Preparing each child to be the best leader in his her chosen ambition</li>
                <li></li>
            </ol>
            <div class="w-full lg:w-[80%] bg-[#CEDD71] h-[2px]"></div>
            <div>
                <h2 class="font-cormorant text-[30px] text-white">Vision Statement</h2>
                <p class="text-sm lg:text-sm text-white">Our vision is to become a center of excellence that delivers world class standard educatuon to youing minds, and to raise
                    a generation of leaders
                </p>
            </div>
        </div>
        <div class="w-full flex flex-col gap-2 pb-4 lg:w-1/2">
            <div class="w-full h-full">
                <img
                    src="../../assets/images/building2.png"
                    class="w-full h-full object-cover"
                    alt=""
                />
            </div>
            <div class="text-[#CEDD71] text-sm text-center lg:text-lg tracking-widest">
                Graceville Preschool/ Primary School, Summit Road., Asaba.
            </div>
        </div>
    </section>

    <section class="w-full flex flex-col lg:flex-row gap-4  px-4 lg:px-8 bg-[#224E05]">
        <div class="w-full lg:w-1/2 flex flex-col">
            <div class="w-full h-full">
                <img
                    src="../../assets/images/building3.png"
                    class="w-full h-full object-cover"
                    alt=""
                />
            </div>
            <div class="text-[#CEDD71] text-sm text-center lg:text-lg tracking-widest">
                Graceville Preschool/Primary School, Jesus Saves, Asaba.
            </div>
        </div>
        <div class="w-full lg:w-1/2 flex flex-col">
            <div class="w-full h-full">
                <img
                    src="../../assets/images/building4.png"
                    class="w-full h-full object-cover"
                    alt=""
                />
            </div>
            <div class="text-[#CEDD71] text-sm text-center lg:text-lg tracking-widest">
                Graceville Preschool/ Primary School, Summit Road., Asaba.
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
        <section class="w-full bg-[#224E05] pt-10">
            <div class="text-[24px] lg:text-[40px] text-white font-cormorant text-center">Visit Our Schools</div>
            <Adress/>
        </section>
        <section>
            <Footer/>
        </section>
  </section>
</template>
