import FeaturedCourses from "@/components/sections/featured-courses";
import Hero from "@/components/sections/hero";
import TestimonialCards from "@/components/sections/testimonial-cards";
import UpcomingWebinars from "@/components/sections/upcoming-webinars";
import WhyChooseUs from "@/components/sections/why-choose-us";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-grid-white/[0.02]  bg-black/[0.96] antialiased">
      <div className="min-h-screen">
        <Hero />
        <div className="flex items-center justify-center">
          <Image src={"/piano.jpg"} alt="Piano" height={700} width={700} />
        </div>
      </div>
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonialCards />
      <UpcomingWebinars />
    </main>
  );
}
