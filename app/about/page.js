"use client";

import Link from "next/link";
import MainLayout from "../layouts/MainLayout";

// About component definition
export default function About({ params }) {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center space-y-8">
        {/* Rounded author's picture */}
        <img
          className="rounded-full w-32 h-32"
          src="https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
          alt="Author's Picture"
        />

        <h2 className="text-2xl font-bold">Altug Can Altun</h2>

        <p className="text-lg text-gray-600">Student ID: 39253</p>
        <div className="max-w-prose text-start">
          <p className="mb-4">
            &nbsp; Welcome to the Flowers eCommerce platform, a project born
            from a passion for technology and a commitment to learning. This
            website isn't just about buying and selling flowers; it's a journey
            into the world of web development and e-commerce solutions.
          </p>
          <p className="mb-4">
            &nbsp; The primary aim of this project is educational. As a student
            pursuing studies in computer science at the University of Economics
            and Humanistic Sciences in Warsaw, I embarked on this endeavor to
            deepen my understanding of web application development and to hone
            my skills in creating functional and user-friendly online platforms.
          </p>
          <p className="mb-4">
            &nbsp;Through the Flowers eCommerce project, I aim to address
            several key objectives. Firstly, it serves as a practical
            application of theoretical knowledge acquired throughout my academic
            journey, encompassing frontend and backend development, database
            management, and user interface design.
          </p>
          <p className="mb-4">
            &nbsp; Secondly, building an e-commerce platform presents a
            multitude of challenges, from ensuring secure transactions to
            optimizing user experience. By tackling these challenges head-on, I
            strive to enhance my problem-solving abilities and develop effective
            strategies for overcoming obstacles in real-world scenarios.
          </p>
          <p className="mb-4">
            &nbsp; While Flowers eCommerce may be a fictional platform, its
            impact on my academic and professional growth is very real. It
            represents countless hours of dedication, experimentation, and
            refinement, all aimed at pushing the boundaries of what I thought
            possible.
          </p>
          <p>
            &nbsp; I invite you to explore Flowers eCommerce, not just as a
            virtual marketplace, but as a testament to the power of curiosity,
            perseverance, and lifelong learning. Thank you for joining me on
            this journey.
          </p>
        </div>
        <div className="max-w-prose flex   justify-start text-start">
          <div className="flex justify-start text-start mb-4">
            Reference to images I used in my project: &nbsp;
            <Link className="font-bold" href="https://bunchovflowers.pl/en/">
              here
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
