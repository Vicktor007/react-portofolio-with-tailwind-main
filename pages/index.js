import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { useState } from "react";
import victor from "../public/portrait_edited.png";
import code from "../public/code.png";
import design from "../public/design.png";
import Image from "next/image";
import Modal from "../components/Modal";
import { projects } from "../constants";
import Contact from "./Contact";



export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [openModalIndex, setOpenModalIndex] = useState(null);

// const toggleEdit = (index) => {
//   setOpenModalIndex(prevIndex => prevIndex === index ? null : index);
// };

const toggleEdit = (index) => {
  if (openModalIndex === index) {
    document.body.style.overflow = 'auto';
    setOpenModalIndex(null);
  } else {
    document.body.style.overflow = 'hidden';
    setOpenModalIndex(index);
  }
};


  return (
    <div className={`${darkMode ? "dark" : ""} ${openModalIndex !== null ? "overflow-hidden" : ""}`}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-8 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Victor</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl mr-2"
                />
              </li>
              <li>
                <a
                 className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-2 py-2 border-none rounded-md md:ml-8 lg:ml-8"
                  href="/Victor-Olayiwola-Resume.pdf"
                  download
                  >
                 My Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Victor Olayiwola
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Full stack Web Developer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
             Hi, I'm Victor,
              I develop frontend, backend
                and fullstack web applications. Check out my works below.


            </p>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 relative overflow-hidden mt-10 md:h-96 md:w-96">
              <Image src={victor} alt="photo"  objectFit="contain" />
            </div>
            <div className="text-5xl flex justify-center gap-16 py-8 text-gray-600 dark:text-gray-400">
              <a href="https://github.com/Vicktor007"><FaGithub /></a>
              <a href="mailto:vicktord007@gmail.com"><MdOutlineMail /></a>
              <a href="www.linkedin.com/in/victor-olayiwola-140176259"><AiFillLinkedin /></a>
            </div>
            
          </div>
        </section>
        <section>
          <div className="dark:text-white">
            <h3 className="text-3xl py-1 ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            I am a front end web developer with 2 years experience working with javascript, node.js, express and mongodb to
            create backend web servers. I use react + redux to render the database information and manage state efficiently to
            the client . I also use JWT web tokens for authentication and authorization of the user information in node js servers
            i create. I specialize in node js for backend services development.

            </p>
            <ul>
              <li>● Frontend Web development</li>
              <li>● Backend Web Development</li>
              <li>● Nodejs</li>
              <li>● Reactjs</li>
              <li>● Software Engineering and Implementation</li>
              <li>● User Experience</li>
              <li>● Code Maintenance</li>
              <li>● Debugging & Research</li> 
            </ul>


          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} alt="design" className="m-auto" height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Frontend Web development
              </h3>
              <p className="py-2">
               Designing and creating websites well suited for your intended purposes.
              </p>
              <h4 className="py-4 text-teal-600">Development Tools I Use</h4>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Javascript</p>
              <p className="text-gray-800 py-1">CSS: Tailwindcss, Bootstrap</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} alt="code" className="m-auto" height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Backend Web development
              </h3>
              <p className="py-2">
                Developing secure servers for your website and managing your database.(Only if you want me to do that!) 
              </p>
              <h4 className="py-4 text-teal-600">Development Tools I Use</h4>
              <p className="text-gray-800 py-1">Nodejs: Expressjs, Nestjs</p>
              <p className="text-gray-800 py-1">Mongodb</p>
              <p className="text-gray-800 py-1">MySql</p>
              <p className="text-gray-800 py-1">Postgresql</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={design} width={50} alt="full-stack" className="m-auto" height={50} />
              <Image src={code} width={50} alt="code" className="m-auto" height={50} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Fullstack Web development</h3>
              <p className="py-2">
                I combine all m skills and create fully functional websites according to your preferences. 
              </p>
              <h4 className="py-4 text-teal-600">Development Tools  I Use</h4>
              <p className="text-gray-800 py-1">Reactjs</p>
              <p className="text-gray-800 py-1">Javascript</p>
              <p className="text-gray-800 py-1">CSS: Tailwindcss, Bootstrap</p>
              <p className="text-gray-800 py-1">Nodejs: Expressjs</p>
              <p className="text-gray-800 py-1">Mongodb</p>
              <p className="text-gray-800 py-1">Mysql</p>
              <p className="text-gray-800 py-1">Postgresql</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">My Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code 
            repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.


            </p>
          </div>

          
          <div className="flex flex-col gap-10 py-10  lg:flex-row  lg:flex-wrap">
            

          {projects.map((project, index) => (
  <div key={index} className="basis-1/3 flex-1  bg-slate-50 p-4 rounded-md shadow-lg">
    <span className=" p-4">{project.name}</span>
              <Image
                className="rounded-lg my-4 shadow-lg  object-cover"
                width={"100%"}
                height={"100%"}
                
                src={project.image}
                alt={project.name}
              />
              <p>{project?.detail}</p>
    <button onClick={() => toggleEdit(index)} className=" shadow-lg bg-gradient-to-r from-cyan-500 text- to-teal-500 my-6  text-white px-4 py-2 border-none rounded-md ml-8">See Details</button>
    
    <Modal 
      isOpen={openModalIndex === index}
      toggleEdit={() => toggleEdit(index)}
      index={project.index}
      name={project.name}
      image={project.image}
      description={project.description}
      tags={project.tags}
      live_site_link={project.live_site_link}
      source_code_link={project.source_code_link}
    />
    </div>
    
  
))}
    
            
          </div>
        </section>
        <section className="py-10">
          <Contact/>
        </section>
        <div className="text-5xl flex justify-center gap-16 pb-8 text-gray-600 dark:text-gray-400">
        <a href="https://github.com/Vicktor007"><FaGithub /></a>
              <a href="mailto:vicktord007@gmail.com"><MdOutlineMail /></a>
              <a href="www.linkedin.com/in/victor-olayiwola-140176259"><AiFillLinkedin /></a>
            </div>
      </main>

    </div>
  );
}
