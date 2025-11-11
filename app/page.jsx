import { roboto } from "@/fonts";

const HomePage = () => {
  return (
    <main className="w-[1000px] mx-auto p-10">
      <h1 className="text-2xl font-bold text-center">BOL VEASNA</h1>
      <p className={`${roboto.className} text-sm text-center text-gray-700`}>Web Developer</p>
      <p className={`${roboto.className} text-sm text-center text-gray-700`}>+855 96 273 277 6 &nbsp; &bull; &nbsp; vibolveasna2004@gmail.com &nbsp; &bull; &nbsp; linkedin.com/in/veasna-bol-14538328b &nbsp; &bull; &nbsp; github.com/Snah19 </p>
      <div className="my-5 space-y-5">
        <div>
          <h2 className="text-xl text-center">Summary</h2>
          <hr />
          <p className={`${roboto.className} text-sm text-gray-700`}>After hundreds of hours of learning, practicing, and building various projects including small demos, Frontend Mentor challenges, and 3 personal full-stack web applications. I am confident in my ability to bring Figma designs to life and am ready to pursue a professional career in Web Development.</p>
        </div>

        <div>
          <h2 className="text-xl text-center">Education</h2>
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
          <h2 className="text-xl text-center">Industry Skills</h2>
          <hr />
          <p className={`${roboto.className} text-sm text-gray-700`}> <span className="text-black">Front-end : </span> HTML, CSS, JavaScript, TypeScript, Tailwind CSS, <span className="font-bold text-black">React.js</span>, <span className="font-bold text-black">Next.js</span></p>
          <p className={`${roboto.className} text-sm text-gray-700`}><span className="text-black">Back-end : </span> Node.js, Express.js, MongoDB, SQL, RESTFul APIs</p>
          <p className={`${roboto.className} text-sm text-gray-700`}><span className="text-black">Libraries & Tools : </span>Cloudinary, npm, React Query, NextAuth, Socket.io, Postman, Figma, ChatGPT</p>
          <p className={`${roboto.className} text-sm text-gray-700`}><span className="text-black">Source Control : </span> Git, GitHub </p>
        </div>

        <div>
          <h2 className="text-xl text-center">Certifications</h2>
          <hr />
          <p className={`${roboto.className} text-sm text-gray-700`}> <span className="text-black">SETEC Institute : </span>Certificate of foundation year course</p>
          <p className={`${roboto.className} text-sm text-gray-700`}> <span className="text-black">Udemy : </span> Next.js From Scratch by Brad Traversy</p>
        </div>

        <div>
          <h2 className="text-xl text-center">Strengths</h2>
          <hr />
          <p className={`${roboto.className} text-sm text-gray-700`}>Good understanding of Object-Oriented Programming</p>
          <p className={`${roboto.className} text-sm text-gray-700`}>Good understanding of SQL Query</p>
          <p className={`${roboto.className} text-sm text-gray-700`}>Proficient working with RESTFul APIs</p>
          <p className={`${roboto.className} text-sm text-gray-700`}>Proficient working with <span className="text-black">Responsive Design</span></p>
        </div>

        <div>
          <h2 className="text-xl text-center">Personal Projects</h2>
          <hr />
          <h3 className="text-lg">Property KH - A Property Listing Site</h3>
          <div className="space-y-2">
            <p className={`${roboto.className} text-sm text-gray-700`}> <span className="text-black">Technologies : </span> <span className="font-bold text-black">React.js</span> (JavaScript), <span className="font-bold text-black">Next.js</span>, Tailwind CSS, Express.js, MongoDB, NextAuth, Cloudinary, Other minor libraries...</p>
            <p className={`${roboto.className} text-sm text-gray-700`}> <span className="text-black">Source code : </span> (Front-end) <a className="text-blue-500" href="https://github.com/Snah19/property-kh">https://github.com/Snah19/property-kh</a> &nbsp; &bull; &nbsp; (Back-end) <a className="text-blue-500" href="https://github.com/Snah19/property-kh-api">https://github.com/Snah19/property-kh-api</a></p>
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
          <h2 className="text-xl text-center">Languages</h2>
          <hr />
          <p className={`${roboto.className} text-sm text-gray-700`}> <span className="text-black">Khmer : </span> Native</p>
          <p className={`${roboto.className} text-sm text-gray-700`}> <span className="text-black">English : </span> Proficient (Reading/Writing/Listening/Speaking)</p>
        </div>
      </div>
    </main>
  );
};

export default HomePage;