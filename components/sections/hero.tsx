import Link from "next/link";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/moving-border";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="relative mx-auto flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-md py-10 md:h-[40rem] md:py-4">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />
        <div className="relative z-10 w-full p-4 text-center">
          <h1 className="mt-20 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:mt-0 md:text-7xl">
            Master the art of music
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-base font-normal text-neutral-300 md:text-lg">
            Dive into our comprehensive music courses and transform your musical
            journey today. Whether you&apos;re a beginner or looking to refine
            your skills, join us to unlock your true potential.
          </p>
          <div className="mt-4 flex flex-col items-center justify-between">
            <Button
              borderRadius="1.75rem"
              className="border-neutral-200 bg-white text-black dark:border-slate-800 dark:bg-black dark:text-white"
            >
              <Link href={"/courses"}>Explore Courses</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
