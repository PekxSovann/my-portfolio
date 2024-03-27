import React from "react"
import Image from "next/image"
import Chip from "@mui/material/Chip"

import "./project.css";

import { ProjectDataInterface } from "./projectData";

interface Props {
  projectData: ProjectDataInterface;
};

const ProjectTemplate = (props: Props) => {
  const { projectData } = props

  return (
    <div className="project-description">
      <div className="project-header">
        <Image
          src={projectData.pictureUrl}
          alt={projectData.title + ' Logo'}
          width={100}
          height={100}
        />
        <div className="project-info">
          <h2>{projectData.title}</h2>
          <p>{projectData.subtitle}</p>
          <p dangerouslySetInnerHTML={{ __html: projectData.date }}></p>
        </div>
      </div>
      <hr />
      <section className="mb-5 mt-5">
        <h3 className="underline decoration-green-500 mb-2">Technologies</h3>
        <div className="project-tags">
          {projectData.tags.map((tag: string, index: number) => (
            <Chip key={index} label={tag} className="project-tag" />
          ))}
        </div>
      </section>
      <hr />
      <section className="mb-5 mt-5">
        <h3 className="underline decoration-green-500 mb-2">Context</h3>
        <p
          dangerouslySetInnerHTML={{ __html: projectData.contextDescription }}
        />
      </section>
      <hr />
      <section className="mb-5 mt-5">
        <h3 className="underline decoration-green-500 mb-2">Key Responsibilities</h3>
        <ul className="project-responsibilities">
          {projectData.responsibilities.map((r: string, index: number) => (
            <li key={index} className="project-responsibility">
              {r}
            </li>
          ))}
        </ul>
      </section>
      <hr />
      <section className="mb-5 mt-5">
        <h3 className="underline decoration-green-500 mb-2">Description</h3>
        <p dangerouslySetInnerHTML={{ __html: projectData.bodyDescription }} />
      </section>
    </div>
  )
}

export default ProjectTemplate