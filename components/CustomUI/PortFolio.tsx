// const PortFolio = () => {
//   return (
//     <div >
//         <img  src="/Skill.png" alt="Skills"/>
//     </div>
//   )
// }

// export default PortFolio

import React from 'react';

const PortFolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center">
      {/* Header Section */}
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold">Aalekh</h1>
        <p className="text-sm mt-2"><a href="mailto:fiaalekh@gmail.com" className="text-blue-300">fiaalekh@gmail.com</a></p>
        <div className="flex justify-center space-x-4 mt-2 text-emerald-200">
          <a href="https://www.linkedin.com/in/aalekh-coder/">LinkedIn</a>
          <a href="https://github.com/Aalekh-coder/">GitHub</a>
          <a href="https://x.com/AalekhCoder">Twitter</a>
          <a href="https://aalekh-portfolio.vercel.app/">Portfolio</a>
        </div>
      </header>

      {/* Skills Section */}
      <section className="w-full max-w-3xl px-6 mb-8">
        <h2 className="text-xl font-semibold border-b border-gray-100 pb-1">Skills</h2>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li><span className="font-bold">Languages:</span> JavaScript, MongoDB, SQL, PostgreSQL, TypeScript.</li>
          <li><span className="font-bold">Libraries and Frameworks:</span> React.js, Next.js, Node.js, Mongoose, Express.js, Prisma, Tailwind CSS, Acenternity UI, ShadCn.</li>
        </ul>
      </section>

      {/* Experience Section */}
      <section className="w-full max-w-3xl px-6 mb-8">
        <h2 className="text-xl font-semibold border-b border-gray-400 pb-1">Experience</h2>
        <div className="mt-2">
          <h3 className="font-bold text-lg">Aptech Computer</h3>
          <p className="italic text-white">Teacher Assistant | Delhi | April 2023 - Feb 2024</p>
          <ul className="list-disc list-inside mt-1 space-y-1">
            <li>Solved coding-related issues and assisted students in building real-world projects.</li>
            <li>Taught front-end and back-end technologies, improving student performance and engagement.</li>
            <li>Organized a hackathon for 100 students, fostering teamwork and innovation.</li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full max-w-3xl px-6 mb-8">
        <h2 className="text-xl font-semibold border-b border-gray-400 pb-1">Projects</h2>
        <div className="mt-2 space-y-4">
          {/* Project 1 */}
          <div>
            <h3 className="font-bold text-lg">E-commerce for My Local Electronic Shop</h3>
            <p className="text-gray-600 text-sm">Tools: MongoDB, Express.js, React.js, Node.js, Redux.js, React Query</p>
            <ul className="list-disc list-inside mt-1 space-y-1">
              <li>Built a user-friendly eCommerce platform with full CRUD operations and payment integration.</li>
              <li>Developed an admin dashboard with real-time data analytics, allowing for streamlined product management.</li>
            </ul>
          </div>

          {/* Project 2 */}
          <div>
            <h3 className="font-bold text-lg">Hotel Booking Platform - Wanderlust</h3>
            <p className="text-gray-600 text-sm">Tools: MongoDB, Express.js, EJS, Node.js, Axios, Passport.js</p>
            <ul className="list-disc list-inside mt-1 space-y-1">
              <li>Designed a responsive hotel booking system with Bootstrap and a RESTful Node.js backend.</li>
              <li>Implemented secure user authentication with Passport.js.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="w-full max-w-3xl px-6 mb-8">
        <h2 className="text-xl font-semibold border-b border-gray-400 pb-1">Education</h2>
        <div className="mt-2">
          <h3 className="font-bold">Delhi University School of Open Learning</h3>
          <p className="italic text-gray-600">B.Com | Dec 2022 - Jan 2025</p>
          <h3 className="font-bold mt-4">Govt. Sarvodaya Co-ed Paschim Vihar</h3>
          <p className="italic text-gray-600">12th CBSE | April 2022 | Grade: 75%</p>
        </div>
      </section>

      {/* Awards and Participation Section */}
      <section className="w-full max-w-3xl px-6 mb-8">
        <h2 className="text-xl font-semibold border-b border-gray-400 pb-1">Awards and Participation</h2>
        <div className="mt-2">
          <h3 className="font-bold">Google I/O Extended Gurugram</h3>
          <p className="italic text-gray-600">September 2024</p>
          <ul className="list-disc list-inside mt-1 space-y-1">
            <li>Participated in Google I/O Extended Gurugram and developed a strong network.</li>
            <li>Gained experience with Google Gemini API and Firebase integration.</li>
            <li>Explored various Google apps and their potential applications.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PortFolio;
