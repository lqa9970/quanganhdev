import { useState } from "react";
import { Image } from "../types";

//images
import dof1 from "../images/createenv.png";
import dof2 from "../images/createpro.png";
import dof3 from "../images/createsand.png";
import dof4 from "../images/env.png";
import dof5 from "../images//home.png";
import dof6 from "../images/sandbox.png";
import img1 from "../images/next.png";
import img2 from "../images/vue.png";
import img3 from "../images/angular.png";
import ImgCar from "./ImgCar";

type Project = {
  id: number;
  title: string;
  description: string;
  date: string;
  techs: string[];
  images: Image[];
  latest: boolean;
};

const Timeline = () => {
  const [showModal, setShowModal] = useState(false);
  const [chosenProject, setChosenProject] = useState({
    id: 0,
    title: "Default",
    description: "React is a JavaScript library for building user interfaces.",
    date: "0-0-0000",
    techs: ["Python", "Django REST Framework", "API"],
    images: [{ img: img1, title: "Default", id: 0 }],
    latest: false,
  });

  const Projects = [
    {
      id: 1,
      title: "Personal Site Remastered",
      date: "November 2023",
      description:
        "This very own website. It has been recently updated and redesigned, developed with only React, TypeScript, and Tailwind CSS",
      techs: ["TypeScript", "React", "Tailwind CSS"],
      images: [{ id: 1, img: img1, title: "Default" }],
      latest: true,
    },
    {
      id: 2,
      title: "Nordcloud's CVHub",
      date: "April 2023 - September 2023",
      description:
        "Participated in a team of 8 to build a centralized information hub application for Nordcloud, employing TypeScript, React, SCSS, Semantic UI for frontend, Firestore database, AWS Lambda for cloud functions, and Jira for task distribution and management, to deliver a robust application serving both internal and client needs.",
      techs: [
        "TypeScript",
        "React",
        "SCSS",
        "Semantic UI",
        "Firestore",
        "AWS Lambda",
        "Jira",
        "...",
      ],
      images: [{ id: 1, img: img1, title: "Default" }],
      latest: true,
    },
    {
      id: 3,

      title: "Orion's DevOps Foundation",
      date: "April 2023 - June 2023",

      description:
        "Collaborated in a 3-member team to develop and maintain the Orion DevOps Foundation, an application for managing and connecting Azure resources. Designed and maintained the application's portal (UI) using TypeScript, React and Material UI, ensuring a user-friendly experience while leveraging Azure DevOps for reporting, task organization, pipelines, builds, and testings",
      techs: ["TypeScript", "React", "Material UI", "API"],
      images: [
        {
          id: 1,
          img: dof1,
          title: "Create env",
        },
        {
          id: 2,
          img: dof2,
          title: "Create env",
        },
        {
          id: 3,
          img: dof3,
          title: "Create env",
        },
        {
          id: 4,
          img: dof4,
          title: "Create env",
        },
        {
          id: 5,
          img: dof5,
          title: "Create env",
        },
        {
          id: 6,
          img: dof6,
          title: "Create env",
        },
      ],
      latest: false,
    },
    {
      id: 4,
      title: "HY's GIDPROvis",
      date: "September 2022 - March 2023",
      description:
        "Improved and managed the University of Helsinki's GIDPROvis application by employing Python, Django REST Framework for data modeling and API system, Vue 3 for user interface, and PostgreSQL for database. Migrated the application to a container-based server deployment, ensuring scalability and improved efficiency.",
      techs: ["Python", "Django REST Framework", "API"],
      images: [{ id: 1, img: img1, title: "Default" }],
      latest: false,
    },
    {
      id: 5,
      title: "Integrify e-commerce site",
      date: "June 2022 - July 2022",
      description:
        "Crafted a user-friendly online shopping platform from scratch, utilizing MERN stack with MongoDB Atlas for database, React, Redux Toolkit, SCSS, MUI for user interface, with Node.js and Express.js for the API system.",
      techs: [
        "TypeScript",
        "React",
        "SCSS",
        "Redux Toolkit",
        "Material UI",
        "Node.js",
        "Express.js",
        "MongoDB Atlas",
        "...",
      ],
      images: [{ id: 1, img: img1, title: "Default" }],
      latest: false,
    },
    {
      id: 6,
      title: "Integrify Crypto Tracker",
      date: "April 2022 - May 2023",
      description:
        "Developed an application for tracking cryptocurrencies, utilizing React, Redux, REST API, and Material UI.",
      techs: [
        "TypeScript",
        "React",
        "Scss",
        "Redux Thunk",
        "API",
        "Material UI",
        "...",
      ],
      images: [{ id: 1, img: img1, title: "Default" }],
      latest: false,
    },
    {
      id: 7,
      title: "Attractive.ai",
      date: "April 2021 - July 2021",
      description:
        "Contributed to the development of the frontend UI system utilizing technologies such as React, Next.js, SCSS, and other relevant libraries. Played a key role in implementing the planning phase for the migration to Shopify, guaranteeing a smooth transition process for the entire team. This involved the implementation of a new user interface, collaborating closely with cross-functional teams to align the project with organizational goals and user experience standards.",
      techs: ["TypeScript", "React", "Scss", "Next.js", "..."],
      images: [{ id: 1, img: img1, title: "Default" }],
      latest: false,
    },
  ];

  const openModal = (project: Project) => {
    setChosenProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const renderChosenModal = (chosen: Project) => {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center h-screen">
        <div
          onClick={closeModal}
          className="fixed inset-0 flex items-center bg-opacity-50 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex w-2/3 h-[800px] p-8 m-auto bg-slate-900 dark:bg-slate-50"
          >
            <div className="w-full">
              <ImgCar images={chosen.images} />
            </div>
            <button className="absolute top-4 right-4" onClick={closeModal}>
              X
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex items-center w-full h-full transition-all duration-1000">
      <ol className="relative w-4/5 mx-auto my-12 border-l border-gray-200 lg:w-2/3 xl:w-2/5 dark:border-gray-700">
        {Projects.map((project) => (
          <div
            onClick={() => openModal(project)}
            className="transition duration-300 rounded-xl transform cursor-pointer hover:translate-y-[-20px] hover:shadow-lg hover:dark:shadow-slate-600"
          >
            <li className="pb-2 mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-slate-50 dark:ring-slate-900 dark:bg-blue-900">
                <svg
                  className=" duration-1000 w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="flex items-center mb-1 font-semibold text-gray-900 dark:text-white">
                {project.title}{" "}
                {project.latest && (
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                    Latest
                  </span>
                )}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {project.date}
              </time>
              <p className="mb-4 text-lg font-normal">{project.description}</p>
              <p className="text-lg italic">
                Tech-stack:{" "}
                <span className="opacity-60">{project.techs.join(", ")}</span>
              </p>
            </li>
          </div>
        ))}
        {showModal && <>{renderChosenModal(chosenProject)}</>}
      </ol>
    </div>
  );
};

export default Timeline;