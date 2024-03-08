import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import githubMark from "../images/github-mark.svg";
import linkedin from "../images/linkedin.svg";
import email from "../images/email.svg";
import kofi from "../images/ko-fi.svg";

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  display: `inline-block`,
  marginBottom: 24,
  marginRight: 12,
}

const projectsList = [
  {
    title: "Jotty",
    description: "A note taking app in the form of a rich text editor built with React, & TypeScript.",
  },
  {
    title: "Vuu-do",
    desctription: "A to-do list app with a Vue.js & TypeScript frontend, a Node.js backend, and Vite for bundling",
  },
];

const skills: string[] = ["HTML","CSS","JavaScript","React","Vue","Ember","Node.js","Webpack","Gatsby"];
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

const mainWrapper: React.CSSProperties = {
  display: "grid",
  // width: "97%",
  // position: "absolute",
  // top: "50%",
  // left: "50%",
  // transform: "translate(-50%, -50%)",
  // =======================================
  gap: "1.25rem",
  // new grid style
  // marginLeft: "auto",
  // marginRight: "auto",
  height: "90vh",
}

const gridItem = {
  // border: "1px solid #333",
  padding: "1.5rem",
  // background: "rgba(246,245,244,1.0)",
  // background: "#dddcdb",
  // background: "rgba(221,220,219,.3)",
  // background: "#f2f2f1",
  borderRadius: "10px",

  // white/blue color
  // background: "rgb(250, 251, 252)",
  // background: "#fafbfc",
  background: "rgba(234,238,242, 0.5)",
  border: "1px solid rgba(211,213,215,0.9)",
  overflow: "scroll",
};

const gridItemContentHeading = {
  // margin: "0" ,
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
}

const RectActionComp = (props: RectButtonProps): JSX.Element => {
  return (
    <>
      {props.isLink ? 
        <li style={rectButton}><a style={{ color: "#fff", textDecoration: "none"}} href={props.href}>{props.text}</a></li> :
        <button style={rectButton}>{props.text}</button>
      }
    </>
  )
}

const StyledRectangle = (props: StyledRectangleProps): JSX.Element => {
  const background = props.background ? props.background : `rgba(${props.color}, 0.2)`;
  const color = props.color ? `rgba(${props.color}, 2)` : "unset";

  return (
    <button style={{...rectButton, background: background, 
      fontWeight: "bold",
      color: color,
      border: `1px solid rgba(${props.color}, 0.3)`,
      height: "40px",
      padding: "5px 16px",
      boxShadow: "1px 0 5px 0 rgba(0,0,0,0.2)",
    }}>{props.text}</button>
  )
}

const IndexPage: React.FC<PageProps> = () => {

  return (
    <div className="content-wrapper" style={{height: "100vh", border: "2px solid red"}}>
      <main className="main-wrapper"
        style={{...mainWrapper,  width: "70%", height: "85%", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
        {/* Best so far - 4 columns, 4 rows */}
        {/* <header className="intro" style={{...gridItem, gridColumn: "1 / 3", gridRow: "1 / 4"}}> */}
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
        {/* <section className="theme" style={{...gridItem, gridColumn: "3 / 4", gridRow: "1 / 2"}}> */}
        <section className="theme" style={{...gridItem, gridColumn: "3/4", gridRow: "1/2"}}>
          {/* <section style={gridItemContent}> */}
            <h3 style={gridItemContentHeading}>VSCode Theme</h3>
            <div style={gridItemContentBody}>Coming soon...</div>
          {/* </section> */}
        </section>
        <section
          className="settings"
          style={{...gridItem,
            border: "1px solid rgba(211,213,215,0.2)",
            gridColumn: "4 / 5", gridRow: "1 / 2", background: "rgba(234, 238, 242, 0.2)"}}>
        {/* <section className="settings" style={{...gridItem}}> */}
          {/* <section style={gridItemContent}> */}
            {/* <h3 style={gridItemContentHeading}>...</h3> */}
            {/* <ul style={{...gridItemContentBody, columnCount: 2}}> */}
              {/* <button style={{ padding: "10px"}}>I don't do anything yet</button> */}
              {/* <button style={{ padding: "10px"}}>Me neither</button> */}
            {/* </ul> */}
          {/* </section> */}
        </section>
        {/* <aside className="projects" style={{...gridItem, gridColumn: "3 / 5", gridRow: "2 / 4"}}> */}
        <aside className="projects" style={{...gridItem, position: "relative"}}>
          {/* <section style={gridItemContent}> */}
            <h3 style={gridItemContentHeading}>Projects</h3>
            <div style={{marginTop: "12px", borderRadius: "10px",
              border: "1px solid rgba(211,213,215,1)", height: "64%"}}></div>
            <ul style={{ 
                  borderRadius: "10px",
                  position: "absolute",
                  left: "22px",
                  bottom: "22px",
                  // height: "17%",
                  height: "60px",
                  width: "calc(100% - 44px)",
                  // background: "rgba(246,245,244,)",
                  // background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  padding: "2px",
                  // border: "1px solid rgba(211,213,215,1)"
                  // boxShadow: "0 0 5px 0 rgba(0,0,0,0.2)",
                }}>
              {projectsList.map((project, index) => {
                return (
                  <StyledRectangle
                    key={index}
                    // style={{ color: "white", border: "1px solid #333", cursor: "pointer", 
                    //     background: "chocolate", padding: "6px", borderRadius: "5px", marginLeft: "10px", display: "flex", justifyContent: "center", alignItems: "flex-end"
                    // }}
                    text={project.title}
                    // background="rgba(242, 176, 61, .7)"
                    color="51, 51, 51"
                  ></StyledRectangle>
                )
              })}
            </ul>
          {/* </section> */}
        </aside>
        {/* <section className="tech" style={{...gridItem, gridColumn: "1 / 3", gridRow: "4 / 5"}}> */}
        <section className="tech" style={{...gridItem, display: "flex"}}>
          {/* <section style={gridItemContent}> */}
            {/* <h3 style={{...gridItemContentHeading, marginTop: "8px"}}>Tech</h3> */}
            <ul style={{...gridItemContentBody, listStyleType: "none", paddingTop: "0"}}>
              {skills.map((skill, index) => {
                return (
                  <li key={index} style={{...pillStyles, borderRadius: "20px"}}>{skill}</li>
                )
              })}
            </ul>
          {/* </section> */}
        </section >
        {/* <section className="block-6" style={{...gridItem, gridColumn: "3 / 4", gridRow: "4 / 5"}}> */}
        <section className="block-6" style={{...gridItem, background: "rgba(234, 238, 242, 0.2)", border: "1px solid rgba(211,213,215,0.2)"}}>
          {/* <section style={gridItemContent}> */}
            <h3 style={gridItemContentHeading}></h3>
            <div style={gridItemContentBody}></div>
          {/* </section> */}
        </section>
        {/* <footer className="contact" style={{...gridItem, gridColumn: "4 / 5", gridRow: "4 / 5"}}> */}
        <section
          className="contact"
          style={{...gridItem, display: "flex", alignItems: "center", 
                  background: "rgba(234, 238, 242, 0.5)", border: "1px solid rgba(211,213,215,0.2)"
                }}
        >
          {/* <h3 style={gridItemContentHeading}>Find Me</h3> */}
          {/* <div style={{  background: "rgba(234,238,242, 0.5)", border: "1px solid rgba(211,213,215,0.9)", padding: "1.5rem", borderRadius: "10px"}}> */}
          <ul 
            style={{
              ...gridItemContentBody,
              listStyleType: "none",
              // columnCount: 2
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}>
            {contactIcons.map((contact, index) => {
              return (
                <li key={index}>
                  <a href={contact.link} target="_blank" style={{textDecoration: "none"}}>
                    <img src={contact.icon} alt={contact.name} style={{width: "22px", height: "22px"}} />
                  </a>
                </li>
                // ==============
                // <object key={index} type="image/svg+xml" data={contact.icon} style={{width: "20", height: "20"}}>
                //   <style>{`
                //     object svg path {
                //       fill: tomato;
                //       display: none;
                //     }
                //   `}</style>
                // </object>
                // <li style={{width: "50px", height: "50px"}}>
                //   <a key={index} href={contact.link} target="_blank" 
                //     style={{
                //       textDecoration: "none",
                //       color: "rgba(51,51,51,0.8)",
                //       display: "inline-block",
                //       width: "24px",
                //       height: "24px",
                //     }}
                //   >
                //     <svg preserveAspectRatio="none" style={{border: "1px solid tomato"}} viewBox="0 0 100% 100%" xmlns="http://www.w3.org/2000/svg">
                //       <path fill-rule="evenodd" clip-rule="evenodd"
                //         d={contact.svgDAttribute}
                //         fill="#24292f" />
                //     </svg>
                //   </a>
                // </li>
              )
            })}
          </ul>
          {/* </div> */}
        </section>
      </main>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
