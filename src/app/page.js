"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';









const icons = {
    insights: "/bioinformatic.png",
    actionable: "/data-analytics.png",
    updates: "/updates.png",
    support: "/support.png",
};
const journeyIcons = {
    learn: "/desk.png", // Placeholder for learning and connecting
    enroll: "/enroll.png", // Placeholder for easy enrollment
    sample: "/sample.png", // Placeholder for convenient sample collection
    process: "/process.png",
    personalized: "/personalized.png"
};

export default function Home() {

    const handleScrollToForm = () => {
        const formElement = document.getElementById('form');
        formElement.scrollIntoView({ behavior: 'smooth' });
      };

  return (
    <div className="min-h-screen bg-white ">
      <header className="px-4 sm:px-8 py-8 flex justify-between items-center">
        <Image
          src="/logo.svg"
          alt="codexa logo"
          width={150}
          height={50}
          unoptimized
        />
        
        <button 
        onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfRgPSdpt_OjeiY6pYnaHDukEKOkg4GIDWhx0nEfFK0iF6tOA/viewform', '_blank')}
        className="bg-[#AC6BAB] text-white px-5 py-2 rounded-full font-semibold font-[600] hover:bg-[#986DAB]"
        
        >
         <p className="px-3 py-1">
           Register for Seminar
          </p>
          
          
        </button>

</header>

      {/* Main section */}
      <main className="container mx-auto px-4 pt-8 pb-0 flex flex-col-reverse md:flex-row items-center justify-center gap-8 bg-transparent md:bg-[#F9F4F9]">
  <div className="text-center md:text-left max-w-md md:w-1/2">
    <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#181818]">
      Your personalized roadmap to wellness starts here
    </h2>
    <p className="text-base sm:text-lg mb-6 text-gray-600">
      Unlock insights from your unique biology with the Codexa Test and gain clear, clinically actionable guidance to take charge of your health.
    </p>

    <button onClick={handleScrollToForm} className="bg-[#FCDC5D] text-black px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:bg-yellow-500">
      Get Me Started
    </button>

  </div>

  <div className="w-full md:w-1/2 bg-[#F9F4F9] md:bg-transparent flex items-end">
    <Image
      src="/family.png"
      alt="Family smiling"
      width={600}
      height={400}
      className="rounded-lg block mx-auto"
      unoptimized
    />
  </div>
</main>

<div className="bg-[#FFFCF2] p-8 md:p-12"> 
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">

        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <Image
            src="/footer_img.png"
            alt="Mother and daughter smiling invite to seminar"
            width={450} // Adjust width as needed
            height={300} // Adjust height as needed
            className="rounded-lg object-cover" // Added rounding like the original image
            unoptimized // Keep if your image is already optimized or external
          />
        </div>

        {/* Right Side - Seminar Info */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-4 md:gap-6"> {/* Control alignment and spacing */}

          <h3 className="text-2xl md:text-3xl font-bold text-gray-800"> {/* Updated text & styling */}
            Join Our Live Seminar<br />
            to Know More
          </h3>

          <p className="text-base text-gray-700 leading-relaxed"> {/* Combined content */}
  17<sup>th</sup> April, 11:30 am – 12:30 pm IST<br />
  at Jio Talks Auditorium.<br />
  <strong className="font-bold">Seats are limited—reserve yours today!</strong>
</p>
          <button 
          onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfRgPSdpt_OjeiY6pYnaHDukEKOkg4GIDWhx0nEfFK0iF6tOA/viewform', '_blank')}
          className="bg-[#AC6BAB] text-white px-5 py-2 rounded-full font-semibold font-[600] hover:bg-[#986DAB]"
          >
         <p className="px-3 py-1">
           Register for Seminar
          </p>
          
          
        </button>

        </div>

      </div>
    </div>


{/* section 1 */}
<section className="container mx-auto px-2 sm:px-4 md:px-8 py-16">
  <div className="flex justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Card 1 */}
      <div className="border border-[#FBE4D8] bg-[#FFFBF5] px-4 sm:px-6 py-10 rounded-2xl flex flex-col items-center w-[250px]">
        <div className="mb-4">
          <Image
            src={icons.insights}
            alt="Comprehensive Insights Icon"
            width={80}
            height={80}
            className="mx-auto"
            unoptimized
          />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-center text-[#181818]">
          Comprehensive<br />Insights
        </h3>
        <p className="text-gray-600 text-center text-sm">
          Identify potential health risks, medication compatibility,
          carrier status, and more—all in one intuitive report.
        </p>
      </div>

      {/* Card 2 */}
      <div className="border border-[#FBE4D8] bg-[#FFFBF5] px-4 sm:px-6 py-10 rounded-2xl flex flex-col items-center w-[250px]">
        <div className="mb-4">
          <Image
            src={icons.actionable}
            alt="Clinically Actionable Icon"
            width={80}
            height={80}
            className="mx-auto"
            unoptimized
          />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-center text-[#181818]">
          Clinically<br />Actionable
        </h3>
        <p className="text-gray-600 text-center text-sm">
          Receive evidence-based recommendations you can immediately
          discuss with your physician for proactive, personalized care.
        </p>
      </div>

      {/* Card 3 */}
      <div className="border border-[#FBE4D8] bg-[#FFFBF5] px-4 sm:px-6 py-10 rounded-2xl flex flex-col items-center w-[250px]">
        <div className="mb-4">
          <Image
            src={icons.updates}
            alt="Dynamic Updates Icon"
            width={80}
            height={80}
            className="mx-auto"
            unoptimized
          />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-center text-[#181818]">
          Dynamic<br />Updates
        </h3>
        <p className="text-gray-600 text-center text-sm">
          Your report evolves as new research emerges, keeping your
          health roadmap relevant for life.
        </p>
      </div>

      {/* Card 4 */}
      <div className="border border-[#FBE4D8] bg-[#FFFBF5] px-4 sm:px-6 py-10 rounded-2xl flex flex-col items-center w-[250px]">
        <div className="mb-4">
          <Image
            src={icons.support}
            alt="Concierge Support Icon"
            width={80}
            height={80}
            className="mx-auto"
            unoptimized
          />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-center text-[#181818]">
          Concierge<br />Support
        </h3>
        <p className="text-gray-600 text-center text-sm">
          Access on-demand consultations with our experts whenever you
          need help interpreting your results.
        </p>
      </div>
    </div>
  </div>
</section>


<section className="bg-[#AC6BAB] text-white py-16 px-4 text-center">
  <div className="container mx-auto ">
    <h2 className="text-2xl md:text-3xl font-bold mb-4">
      Meet the Team Behind Codexa
    </h2>
    <p className="font-normal text-white text-center tracking-[0px] opacity-80 md:px-16 px-4">
      India&apos;s leading genomics scientists, researchers, and counsellors power Codexa.
      Backed by technology-led highly advanced private genome sequencing facilities operating
      at a substantial scale within the country, our multidisciplinary team 
      ensures every insight
      is accurate, up-to-date, and clinically meaningful.
    </p>
  </div>
</section>

          
<section className="container mx-auto px-8 pt-16 pb-4">
  <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-[#181818]">
    Your Codexa Journey
  </h2>
{/* section 2 */}
  {/* First Row - 3 columns */}
  <div className="flex flex-wrap justify-center gap-4 mb-8">
    {/* Card 1 */}
    <div className="bg-[#F9F4F9] p-6 rounded-2xl flex flex-col items-center text-center w-[260px]">
      <div className="mb-4">
        <Image
          src={journeyIcons.learn}
          alt="Learn & Connect Icon"
          width={80}
          height={80}
          className="mx-auto"
          unoptimized
        />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-[#181818]">
        Learn &<br />
        Connect
      </h3>
      <p className="text-gray-600 text-sm">
        Attend an info session (on campus where applicable) or book a private
        consultation to discuss your needs and questions.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-[#F9F4F9] p-6 rounded-2xl flex flex-col items-center text-center w-[260px]">
      <div className="mb-4">
        <Image
          src={journeyIcons.enroll}
          alt="Easy Enrollment Icon"
          width={80}
          height={80}
          className="mx-auto"
          unoptimized
        />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-[#181818]">
        Easy<br />
        Enrollment
      </h3>
      <p className="text-gray-600 text-sm">
        Our executives guide you through sign-up and consent, including a brief
        health & wellness questionnaire.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-[#F9F4F9] p-6 rounded-2xl flex flex-col items-center text-center w-[260px]">
      <div className="mb-4">
        <Image
          src={journeyIcons.sample}
          alt="Convenient Sample Collection Icon"
          width={80}
          height={80}
          className="mx-auto"
          unoptimized
        />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-[#181818]">
        Convenient Sample<br />
        Collection
      </h3>
      <p className="text-gray-600 text-sm">
        Choose collection at home or a nearby centre, and we'll schedule a
        smooth, hassle-free experience.
      </p>
    </div>
  </div>

  {/* Second Row - 2 columns */}
  <div className="flex flex-wrap justify-center gap-4">
    {/* Card 4 */}
    <div className="bg-[#F9F4F9] p-6 rounded-2xl flex flex-col items-center text-center w-[260px]">
      <div className="mb-4">
        <Image
          src={journeyIcons.process}
          alt="Receive Your Insights Icon"
          width={80}
          height={80}
          className="mx-auto"
          unoptimized
        />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-[#181818]">
        Receive Your<br />
        Insights
      </h3>
      <p className="text-gray-600 text-sm">
        Access your accurate, easy-to-understand Codexa report and gain a clear
        picture of your unique health landscape.
      </p>
    </div>

    {/* Card 5 */}
    <div className="bg-[#F9F4F9] p-6 rounded-2xl flex flex-col items-center text-center w-[260px]">
      <div className="mb-4">
        <Image
          src={journeyIcons.personalized}
          alt="Expert Guidance Session Icon"
          width={80}
          height={80}
          className="mx-auto"
          unoptimized
        />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-[#181818]">
        Expert Guidance<br />
        Session
      </h3>
      <p className="text-gray-600 text-sm">
        Discuss your results one-on-one with a healthcare expert and plan your
        personalised health journey with your clinician.
      </p>
    </div>
  </div>
</section>

      {/* Registration Form Section */}
      
      <section id="form" className="container mx-auto px-4 sm:px-8 pt-4 pb-16">
  {/* Wrapper Div for Border and Padding */}
  <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 border border-[#707070] rounded-2xl">
  <h2 className="text-2xl font-bold text-center mb-8 text-[#181818]">
  Register for Your
  <br className="block lg:hidden" />
  <span className="hidden lg:inline"> </span>
  Codexa Test
</h2>


<form
  action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScGhcVe-L-hRAhKEeKiTroRpi02lPaU7or9Y4sDaedOaIEUbQ/formResponse"
  method="POST"
  target="_self"
  className="space-y-5"
>
  {/* Full Name */}
  <div>
    <label htmlFor="entry.5833058" className="block text-gray-500 text-sm mb-1">Full Name *</label>
    <input
      type="text"
      id="entry.5833058"
      name="entry.5833058"
      required
      className="border border-[#707070] rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400"
    />
  </div>

  {/* Email Address */}
  <div>
    <label htmlFor="entry.769673029" className="block text-gray-500 text-sm mb-1">Email Address *</label>
    <input
      type="email"
      id="entry.769673029"
      name="entry.769673029"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
      required
      className="border border-[#707070] rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400"
    />
  </div>

  {/* Phone Number */}
  <div>
    <label htmlFor="entry.661233869" className="block text-gray-500 text-sm mb-1">Phone Number *</label>
    <input
      type="tel"
      pattern="\d{10}"
       inputMode="numeric"
maxLength="10"
minLength="10"
      id="entry.661233869"
      name="entry.661233869"
      required
      className="border border-[#707070] rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400"
    />
  </div>

  {/* City */}
  <div>
    <label htmlFor="entry.703026479" className="block text-gray-500 text-sm mb-1">City</label>
    <input
      type="text"
      id="entry.703026479"
      name="entry.703026479"
      className="border border-[#707070] rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400"
    />
  </div>

  {/* Preferred Sample Collection */}
  <div>
    <label htmlFor="entry.1319647915" className="block text-gray-500 text-sm mb-1">Preferred Sample Collection</label>
    <select
      id="entry.1319647915"
      name="entry.1319647915"
      className="border border-[#707070] rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 bg-white"
    >
      <option value="At Home">At Home</option>
      <option value="At Collection Centre (RCP)">At Collection Centre (RCP)</option>
      <option value="Need Guidance">Need Guidance</option>
    </select>
  </div>

  {/* Terms */}
  <div className="flex items-center mt-4">
    <input
      type="checkbox"
      id="terms"
      name="terms"
      className="mr-2 h-4 w-4 text-yellow-500 border-[#707070] rounded focus:ring-yellow-400"
      required
    />
    <label htmlFor="terms" className="text-sm text-gray-600">
      I agree to the terms & privacy policy.
    </label>
  </div>

  {/* Submit */}
  <div className="text-center pt-4">
    <button
      type="submit"
      className="bg-[#FCDC5D] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#f0c04a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
    >
      Submit Registration
    </button>
  </div>
</form>

  </div>
</section>



        </div>
    );
}

