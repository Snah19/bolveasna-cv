import { roboto } from "@/fonts";

const HomePage = () => {
  return (
    <main className="w-[1000px] mx-auto p-10">
      <h1 className="text-2xl font-bold text-center">BOL VEASNA</h1>
      <p className={`${roboto.className} text-sm text-center text-gray-700`}>Front-end Developer</p>
      <p className={`${roboto.className} text-sm text-center text-gray-700`}>+855 96 273 277 6 &nbsp; &bull; &nbsp; vibolveasna2004@gmail.com &nbsp; &bull; &nbsp; linkedin.com/in/veasna-bol-14538328b &nbsp; &bull; &nbsp; github.com/Snah19 </p>
      <div className="my-5 space-y-5">
        <div>
          <h2 className="text-xl text-center">Summary</h2>
          <hr />
          <p className={`${roboto.className} text-sm text-gray-700`}>After hundreds of hours of learning, practicing, and building various projects including small demos, Frontend Mentor challenges, and 2 personal full-stack web applications. I am confident in my ability to bring Figma designs to life and am ready to pursue a professional career in Front-end Development.</p>
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
          <p className={`${roboto.className} text-sm text-gray-700`}> <span className="text-black">Front-end : </span> HTML &nbsp; &bull; &nbsp; CSS &nbsp; &bull; &nbsp; JavaScript, &nbsp; &bull; &nbsp; TypeScript &nbsp; &bull; &nbsp; Tailwind CSS &nbsp; &bull; &nbsp; <span className="font-bold text-black">React.js</span> &nbsp; &bull; &nbsp; <span className="font-bold text-black">Next.js</span></p>
          <p className={`${roboto.className} text-sm text-gray-700`}><span className="text-black">Back-end : </span> Node.js &nbsp; &bull; &nbsp; Express.js &nbsp; &bull; &nbsp; MongoDB &nbsp; &bull; &nbsp; SQL &nbsp; &bull; &nbsp; RESTFul APIs</p>
          <p className={`${roboto.className} text-sm text-gray-700`}><span className="text-black">Libraries & Tools : </span>Cloudinary &nbsp; &bull; &nbsp; React Query &nbsp; &bull; &nbsp; NextAuth &nbsp; &bull; &nbsp; Socket.io &nbsp; &bull; &nbsp; Postman &nbsp; &bull; &nbsp; Figma &nbsp; &bull; &nbsp; ChatGPT</p>
          <p className={`${roboto.className} text-sm text-gray-700`}><span className="text-black">Source Control : </span> Git &nbsp; &bull; &nbsp; GitHub </p>
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
          <p className={`${roboto.className} text-sm text-gray-700`}> <span className="text-black">Eager to learn : </span> Constantly new tools and techniques</p>
          <p className={`${roboto.className} text-sm text-gray-700`}> <span className="text-black">Resilient : </span> View failure as part of growth</p>
          <p className={`${roboto.className} text-sm text-gray-700`}> <span className="text-black">Time Efficient : </span> Plan before execution, saving up to 25% of productive time</p>
          <p className={`${roboto.className} text-sm text-gray-700`}> <span className="text-black">Collaborative : </span> Able to communicate well with developers (both Back-end and Front-end), Designers, and even Clients</p>
        </div>

        <div>
          <h2 className="text-xl text-center">Personal Projects</h2>
          <hr />
          <h3 className="text-lg">Property KH - A Property Listing Site</h3>
          <div className="space-y-2">
            <p className={`${roboto.className} text-sm text-gray-700`}> <span className="text-black">Features : </span> Authentication (Google Accounts) &nbsp; &bull; &nbsp; Browse Properties &nbsp; &bull; &nbsp; Search for specific properties &nbsp; &bull; &nbsp;  Message property owners &nbsp; &bull; &nbsp; Post, Update, Delete, Bookmark Properties &nbsp; &bull; &nbsp; View User's Profile</p>
            <p className={`${roboto.className} text-sm text-gray-700`}> <span className="text-black">Technologies : </span> <span className="font-bold text-black">React.js</span> (JavaScript) &nbsp; &bull; &nbsp; <span className="font-bold text-black">Next.js</span> &nbsp; &bull; &nbsp; Tailwind CSS &nbsp; &bull; &nbsp; Express.js &nbsp; &bull; &nbsp; MongoDB &nbsp; &bull; &nbsp; NextAuth &nbsp; &bull; &nbsp; Cloudinary &nbsp; &bull; &nbsp; Other minor libraries...</p>
            <p className={`${roboto.className} text-sm text-gray-700`}> <span className="text-black">Source code : </span> (Front-end) <a className="text-blue-500" href="https://github.com/Snah19/property-kh">https://github.com/Snah19/property-kh</a> &nbsp; &bull; &nbsp; (Back-end) <a className="text-blue-500" href="https://github.com/Snah19/property-kh-api">https://github.com/Snah19/property-kh-api</a></p>
            <p className={`${roboto.className} text-sm text-gray-700`}> <span className="text-black">Live website : </span> <a className="text-blue-500" href="https://property-kh-75gh.vercel.app">https://property-kh-75gh.vercel.app</a></p>
          </div>
          <h3 className="mt-5 text-lg">X (Twitter) clone - Realtime Social Media Platform</h3>
          <div className="space-y-2">
            <p className={`${roboto.className} text-sm text-gray-700`}> <span className="text-black">Features : </span>Authentication (Username + Password) &nbsp; &bull; &nbsp; Realtime For You/Following feeds + Infinite Scroll &nbsp; &bull; &nbsp; Realtime Notifications &nbsp; &bull; &nbsp; Ability to update profile image, cover image, and information like username, fullname, email, link, bio, and password  &nbsp; &bull; &nbsp; Upload text and images as a post &nbsp; &bull; &nbsp; Delete existing posts &nbsp; &bull; &nbsp; Follow/Unfollow other users &nbsp; &bull; &nbsp; View User's Profile &nbsp; &bull; &nbsp; Like/Unlike, Repost/Unrepost, Favorite/Un-favorite, Comment on posts in realtime &nbsp; &bull; &nbsp; Reply and like Comments in realtime</p>
            <p className={`${roboto.className} text-sm text-gray-700`}> <span className="text-black">Technologies : </span> <span className="font-bold text-black">React.js</span> (TypeScript) &nbsp; &bull; &nbsp; <span className="font-bold text-black">Next.js</span> &nbsp; &bull; &nbsp; React Query &nbsp; &bull; &nbsp; Tailwind CSS &nbsp; &bull; &nbsp; Node.js &nbsp; &bull; &nbsp; Express.js &nbsp; &bull; &nbsp; MongoDB &nbsp; &bull; &nbsp; NextAuth &nbsp; &bull; &nbsp; Cloudinary &nbsp; &bull; &nbsp; Socket.io &nbsp; &bull; &nbsp; Other minor libraries...</p>
            <p className={`${roboto.className} text-sm text-gray-700`}> <span className="text-black">Source code : </span> (Front-end) <a className="text-blue-500" href="https://github.com/Snah19/x-frontend">https://github.com/Snah19/x-frontend</a> &nbsp; &bull; &nbsp; (Back-end) <a className="text-blue-500" href="https://github.com/Snah19/x-backend">https://github.com/Snah19/x-backend</a></p>
            <p className={`${roboto.className} text-sm text-gray-700`}> <span className="text-black">Live website : </span> <a className="text-blue-500" href="https://x-frontend-three.vercel.app">https://x-frontend-three.vercel.app</a></p>
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