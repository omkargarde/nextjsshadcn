"use client";
import Link from "next/link";
import courseData from "../data/music.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}
function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured,
  );
  return (
    <div className="bg-gray-900 py-12">
      <div className="text-center">
        <h2 className="text-base font-semibold uppercase tracking-wide text-teal-600">
          FEATURED COURSES
        </h2>
        <p className="mt-2 text-3xl font-semibold uppercase leading-8 tracking-wide sm:text-4xl ">
          Learn with the best
        </p>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient>test</BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="rounded border border-neutral-600 bg-white px-4 py-2 text-neutral-700 transition duration-200 hover:bg-gray-100"
        >
          View all courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
