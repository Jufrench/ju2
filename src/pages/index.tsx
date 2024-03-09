import { useState, useEffect } from "react"
import type { HeadFC, PageProps } from "gatsby"
import githubMark from "../images/github-mark.svg";
import linkedin from "../images/linkedin.svg";
import email from "../images/email.svg";
import kofi from "../images/ko-fi.svg";
import React from "react";

const projectList = [
  {
    id: 0,
    title: "Jotty",
    description: "A note taking app in the form of a rich text editor built with React, TypeScript, & Next.js.",
    link: "https://jotty-pink.vercel.app/"
  },
  {
    id: 1,
    title: "Vuu-do",
    description: "A to-do list app with a Vue.js & TypeScript frontend, a Node.js backend, Vite for bundling, and Next.js.",
    link: null
  },
];

const skills: string[] = ["HTML","CSS","JavaScript","React","Vue","Ember","Node.js","Gatsby", "Next.js"];

const contactIcons = [
  {
    name: "Github",
    link: "https://www.github.com/Jufrench",
    icon: githubMark
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/julesfrench/",
    icon: linkedin
  },
  {
    name: "Email",
    link: "mailto:ju.french@gmail.com",
    icon: email
  },
  {
    name: "Ko-Fi",
    link: "https://ko-fi.com/moijules",
    icon: kofi
  }
]

const mainWrappeDesktopr: React.CSSProperties = {
  display: "grid",
  gap: "1.25rem",
  // height: "90vh",
}

const gridItem = {
  padding: "1.5rem",
  // padding: "22px",
  borderRadius: "10px",
  background: "rgba(234,238,242, 0.5)",
  border: "1px solid rgba(211,213,215,0.9)",
};

const gridItemContentBody = {
  padding: "1rem",
};

const pillStyles: React.CSSProperties = {
  fontSize: "0.9rem",
  padding: "6px 8px",
  textAlign: "center",
  margin: "3px",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid rgba(51,51,51,0.8)",
  color: "rgba(51,51,51,0.8)"
}

const rectButton: React.CSSProperties = {
  fontSize: "0.9rem",
  padding: "20px 16px",
  textAlign: "center",
  margin: "3px",
  borderRadius: "6px",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  border: "none"
}

interface RectButtonProps {
  text: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isLink?: boolean;
  href?: string;
}

interface StyledRectangleProps {
  text: string;
  padding?: string;
  color?: string;
  background?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  href?: string;
  onClick: (id: number) => void;
}

const StyledRectangle = (props: StyledRectangleProps): JSX.Element => {
  const background = props.background ? props.background : `rgba(${props.color}, 0.2)`;
  const color = props.color ? `rgba(${props.color}, 2)` : "unset";

  return (
    <button
      style={{...rectButton, background: background, 
        fontWeight: "bold",
        color: color,
        border: `1px solid rgba(${props.color}, 0.3)`,
        height: "40px",
        padding: "5px 16px",
        boxShadow: "0 0 1px 0 rgba(0,0,0,0.1)",
      }}
      onClick={() => {
        // const projectIndex = projectList.findIndex(project => project.title === props.text);
        props.onClick(projectList.findIndex(project => project.title === props.text));
        // props.onClick(projectIndex);
      }}>
        {props.text}
    </button>
  )
}

interface ProjectInfoProps {
  activeProjectId: number;
  style?: React.CSSProperties;
}

const ProjectInfo = (props: ProjectInfoProps): JSX.Element => {
  const activeProject = projectList[props.activeProjectId];
  
  return (
    <>
      {props.activeProjectId === undefined ? 
        <p>Click a project to get started...</p> :
        <>
          <h4 style={{marginBottom: ".75rem"}}>{activeProject.title}</h4>
          <p style={{marginBottom: ".75rem"}}>{activeProject.description}</p>
          {activeProject.link !== null
            ? <a style={{textDecoration: "none"}} href={activeProject.link} target="_blank">Go to Project ➡</a>
            : <p>Coming soon!</p>
          }
        </>
      }
    </>
  )
};

// const tabletStyles = {};
// const desktopStyles = {};
// const largeDesktopStyles = {};

// const useQuery = (query: string) => {
//   const [matches, setMatches] = useState(false)
//   const handleChange = (e: MediaQueryListEvent) => setMatches(e.matches)

//   useEffect(() => {
//     const m = window.matchMedia(query);
//     setMatches(m.matches)
//     m.addEventListener('change', handleChange);

//     return () => {
//       m.removeEventListener('change', handleChange);
//     }
//   }, []);

//   return matches;
// }

const IndexPage: React.FC<PageProps> = () => {
  const [activeProjectId, setActiveProjectId] = useState<number>(0);
  // const isMobile = useQuery("(max-width: 767px)"); // mobile - do nothing
  // const isTablet = useQuery("(min-width: 768px)"); // tablet - min width 768
  // const isDesktop = useQuery("(min-width: 1024px)"); // desktop - min width 1024
  // const isLargeDesktop = useQuery("(min-width: 1440px)"); // large desktop - min width 1440

  const handleSetActiveProject = (id: number) => {
    console.log('%cid', 'text-decoration: underline', id)
    setActiveProjectId(id);
  }

  console.log('%cactiveProjectId', 'color:dodgerblue', activeProjectId)

  return (
    <div className="content-wrapper">
      <main className="main-wrapper"
        style={mainWrappeDesktopr}
      >
        {/* INTRODUCTION 
        ==================== */}
        <section className="intro" style={{...gridItem}}>
          <h1 style={{ marginTop: "10%", display: "flex", flexDirection: "column"}}>
            <span>Hello!</span>
            <span>My name is <span style={{color:"chocolate"}}>Julian French</span>.</span>
            <span>I'm a Web Developer based in Kansas City!</span>
          </h1>
          <h3 style={{ marginTop: "20px", fontWeight: "normal", lineHeight: "1.3"}}>
            I'm a collaborative Front-End Developer with a background in music
            and foreign languages. One of my goals is to always strive to have a positive outlook on life,
            and I hope to share that positivity with any and everyone!</h3>
        </section>

        <section className="theme" style={{...gridItem}}>
            <h3>VSCode Theme</h3>
            <div style={gridItemContentBody}>Coming soon...</div>
        </section>

        <section
          className="settings"
          style={{...gridItem,
            border: "1px solid rgba(211,213,215,0.2)",
            background: "rgba(234, 238, 242, 0.2)"}}>
        </section>

        <aside className="projects" style={{...gridItem, position: "relative"}}>
            <h3>Projects</h3>
            <div style={{marginTop: "12px", borderRadius: "10px", padding: ".75rem", border: "1px solid rgba(211,213,215,1)"}}>
              <ProjectInfo activeProjectId={activeProjectId} />
            </div>
            <ul style={{ 
                  borderRadius: "10px",
                  width: "calc(100% - 44px)",
                  display: "flex",
                  alignItems: "center",
                  padding: "2px"
                }}>
              {projectList.map((project, index) => {
                return (
                  <StyledRectangle key={index} text={project.title} onClick={handleSetActiveProject} />
                )
              })}
            </ul>
        </aside>

        <section className="tech" style={{...gridItem, display: "flex"}}>
            <ul style={{...gridItemContentBody, listStyleType: "none", paddingTop: "0"}}>
              {skills.map((skill, index) => {
                return (
                  <li key={index} style={{...pillStyles, borderRadius: "20px"}}>{skill}</li>
                )
              })}
            </ul>
        </section>

        <section className="block-6" style={{...gridItem, background: "rgba(234, 238, 242, 0.2)", border: "1px solid rgba(211,213,215,0.2)"}}>
            <h3></h3>
            <div style={gridItemContentBody}></div>
        </section>

        <section
          className="contact"
          style={{...gridItem, display: "flex", alignItems: "center", 
                  background: "rgba(234, 238, 242, 0.5)", border: "1px solid rgba(211,213,215,0.2)"
                }}
        >
          <ul 
            style={{...gridItemContentBody, listStyleType: "none"}}>
            {contactIcons.map((contact, index) => {
              return (
                <li key={index}>
                  <a href={contact.link} target="_blank" style={{textDecoration: "none"}}>
                    <img src={contact.icon} alt={contact.name} style={{width: "22px", height: "22px"}} />
                  </a>
                </li>
              )
            })}
          </ul>
        </section>
      </main>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
