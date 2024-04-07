"use client";

import courseData from "@/data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "@/components/ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured,
  );

  return (
    <div className="bg-gray-900 py-12">
      <div className="">
        <div className="text-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-teal-600">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course: Course) => (
            <div className="flex justify-center" key={course.id}>
              <BackgroundGradient className="flex h-full max-w-sm flex-col overflow-hidden rounded-[22px] bg-white dark:bg-zinc-900">
                <div className="flex flex-grow flex-col items-center p-4 text-center sm:p-6">
                  <p className="mb-2 mt-4 text-lg text-black sm:text-xl dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="felx-grow text-sm text-neutral-600 dark:text-neutral-400">
                    {course.description}
                  </p>
                  <Link href={`/courses/${course.slug}`}>Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="rounded-lg border border-neutral-600 bg-white px-4 py-2 text-neutral-700 transition duration-200 hover:bg-gray-100"
        >
          View All courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
