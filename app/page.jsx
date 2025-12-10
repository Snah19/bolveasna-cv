import { roboto } from "@/fonts";
import Image from "next/image";

const HomePage = () => {
  return (
    <main className="w-[1000px] mx-auto p-10">
      <div className="flex justify-between items-center">
        <Image className="w-20 h-30" src="/me.jpg" width={853} height={1280} alt="" />
        <div>
          <h1 className="text-lg font-bold">Name: Bol Veasna</h1>
          <p className={`${roboto.className} text-sm text-gray-700`}>Position: Frontend Developer</p>
          <p className={`${roboto.className} text-sm text-gray-700`}>Tel: +855 96 273 277 6</p>
          <p className={`${roboto.className} text-sm text-gray-700`}>Email: vibolveasna2004@gmail.com</p>
          <p className={`${roboto.className} text-sm text-gray-700`}>LinkedIn: linkedin.com/in/veasna-bol-14538328b</p>
          <p className={`${roboto.className} text-sm text-gray-700`}>GitHub: github.com/Snah19 </p>
        </div>
      </div>
      
      <div className="my-5 space-y-5">
        <div>
          <h2 className="text-xl">Summary</h2>
          <hr />
          <p className={`${roboto.className} text-sm text-gray-700`}>After hundreds of hours of learning, practicing, and building various projects including small demos, Frontend Mentor challenges, and 3 personal full-stack web applications. I am confident in my ability to bring Figma designs to life and am ready to pursue a professional career in Web Development.</p>
        </div>

        <div>
          <h2 className="text-xl">Education</h2>
          <hr />
          <div className="flex justify-between">
            <h3>SETEC Institute</h3>
            <h3 className={`${roboto.className}`}>Phnom Penh, Cambodia</h3>
          </div>
          <div className="flex justify-between text-gray-700">
            <p className={`${roboto.className} text-sm`}>Management Information System | GPA: <span className="font-bold text-black">3.89</span>/4.0</p>
            <p className={`${roboto.className} text-sm`}>2023 - 2025</p>
          </div>
          <p className={`${roboto.className} text-sm text-gray-700`}>Relevant courses: HTML, CSS, C++, C#, Data Structures & Algorithms, Data Modeling, MySQL, Microsoft SQL Server</p>
        </div>

        <div>
          <h2 className="text-xl">Industry Skills</h2>
          <hr />
          <p className={`${roboto.className} text-sm text-gray-700`}> <span className="text-black">Front-end : </span> HTML, CSS, JavaScript, TypeScript, Tailwind CSS, ShadCN UI, <span className="font-bold text-black">React.js</span>, <span className="font-bold text-black">Next.js</span></p>
          <p className={`${roboto.className} text-sm text-gray-700`}><span className="text-black">Back-end : </span> Node.js, Express.js, MongoDB, PostgreSQL, tRPC, Drizzle ORM, RESTFul APIs</p>
          <p className={`${roboto.className} text-sm text-gray-700`}><span className="text-black">Libraries & Tools : </span>npm, bun, React Query, Zod, NextAuth, Clerk, Cloudinary, Mux, Socket.io, Postman, Ngrok, Figma, ChatGPT</p>
          <p className={`${roboto.className} text-sm text-gray-700`}><span className="text-black">Source Control : </span> Git, GitHub </p>
        </div>

        <div>
          <h2 className="text-xl">Certifications</h2>
          <hr />
          <p className={`${roboto.className} text-sm text-gray-700`}> <span className="text-black">SETEC Institute : </span>Certificate of foundation year course</p>
          <p className={`${roboto.className} text-sm text-gray-700`}> <span className="text-black">Udemy : </span> Next.js From Scratch by Brad Traversy</p>
        </div>

        <div>
          <h2 className="text-xl">Strengths</h2>
          <hr />
          <p className={`${roboto.className} text-sm text-gray-700`}>Good understanding of Object-Oriented Programming</p>
          <p className={`${roboto.className} text-sm text-gray-700`}>Proficient working with databases both relational and non-relational</p>
          <p className={`${roboto.className} text-sm text-gray-700`}>Proficient working with RESTFul APIs</p>
          <p className={`${roboto.className} text-sm text-gray-700`}>Proficient working with <span className="text-black">Responsive Design</span></p>
          <p className={`${roboto.className} text-sm text-gray-700`}>Proficient and effective working with both Server Components and Client Components</p>
          <p className={`${roboto.className} text-sm text-gray-700`}>Have a good mental model of how things are connected together</p>
          <p className={`${roboto.className} text-sm text-gray-700`}>Able to solve technical problems independently with creative and researched solutions</p>
          <p className={`${roboto.className} text-sm text-gray-700`}>Eager to learn new things everyday</p>
        </div>

        <div>
          <h2 className="text-xl">Personal Projects</h2>
          <hr />
          <h3 className="text-lg">Property KH - A Property Listing Site</h3>
          <div className="space-y-2">
            <p className={`${roboto.className} text-sm text-gray-700`}> <span className="text-black">Technologies : </span> <span className="font-bold text-black">React.js</span> (JavaScript), <span className="font-bold text-black">Next.js</span>, Tailwind CSS, Express.js, MongoDB, NextAuth, Cloudinary, Other minor libraries...</p>
            <p className={`${roboto.className} text-sm text-gray-700`}> <span className="text-black">Source code : </span> (Front-end) <a className="text-blue-500" href="https://github.com/Snah19/property-kh">https://github.com/Snah19/property-kh</a> | (Back-end) <a className="text-blue-500" href="https://github.com/Snah19/property-kh-api">https://github.com/Snah19/property-kh-api</a></p>
            <p className={`${roboto.className} text-sm text-gray-700`}> <span className="text-black">Live website : </span> <a className="text-blue-500" href="https://property-kh-75gh.vercel.app">https://property-kh-75gh.vercel.app</a></p>
          </div>
          <h3 className="mt-5 text-lg">X clone - Realtime Social Media Platform</h3>
          <div className="space-y-2">
            <p className={`${roboto.className} text-sm text-gray-700`}> <span className="text-black">Technologies : </span> <span className="font-bold text-black">React.js</span> (TypeScript), <span className="font-bold text-black">Next.js</span>, React Query, Tailwind CSS, Node.js, Express.js, MongoDB, NextAuth, Cloudinary, Socket.io, Other minor libraries...</p>
            <p className={`${roboto.className} text-sm text-gray-700`}> <span className="text-black">Source code : </span> (Front-end) <a className="text-blue-500" href="https://github.com/Snah19/x-frontend">https://github.com/Snah19/x-frontend</a> | (Back-end) <a className="text-blue-500" href="https://github.com/Snah19/x-backend">https://github.com/Snah19/x-backend</a></p>
            <p className={`${roboto.className} text-sm text-gray-700`}> <span className="text-black">Live website : </span> <a className="text-blue-500" href="https://x-frontend-three.vercel.app">https://x-frontend-three.vercel.app</a></p>
          </div>
          <h3 className="mt-5 text-lg">YouTube clone - Video media platform</h3>
          <div className="space-y-2">
            <p className={`${roboto.className} text-sm text-gray-700`}> <span className="text-black">Technologies : </span> <span className="font-bold text-black">React.js</span> (TypeScript), <span className="font-bold text-black">Next.js</span>, tRPC, Drizzle ORM, Neon (PostgreSQL), React Query, Zod, Clerk, Mux, UploadThing, Upstash (Redis + Rate Limit), Tailwind CSS, ShadCN UI, Ngrok</p>
            <p className={`${roboto.className} text-sm text-gray-700`}> <span className="text-black">Source code : <a className="text-blue-500" href="https://github.com/Snah19/youtubeclone" target="_blank">https://github.com/Snah19/youtubeclone</a> </span></p>
            <p className={`${roboto.className} text-sm text-gray-700`}> <span className="text-black">Live website : </span> <a className="text-blue-500" href="https://youtubeclonebysnah.vercel.app/">https://youtubeclonebysnah.vercel.app</a></p>
          </div>
        </div>

        <div>
          <h2 className="text-xl">Languages</h2>
          <hr />
          <p className={`${roboto.className} text-sm text-gray-700`}> <span className="text-black">Khmer : </span> Native</p>
          <p className={`${roboto.className} text-sm text-gray-700`}> <span className="text-black">English : </span> Proficient (Reading/Writing/Listening/Speaking)</p>
        </div>
      </div>
    </main>
  );
};

export default HomePage;