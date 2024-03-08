import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
// const kofi_button_stroke = require("../images/kofi_button_stroke.png")
// import icon from "../images/icon.png"
import githubMark from "../images/github-mark.svg";
import linkedin from "../images/linkedin.svg";
import linkedinPng from "../images/linkedin.png";
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
    icon: githubMark,
    svgDAttribute: "M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/julesfrench/",
    icon: linkedin,
    svgDAttribute: "M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M8.1,18H5V9.4h3.1V18z M6.5,8.4 L6.5,8.4C5.6,8.4,5,7.8,5,7s0.6-1.4,1.6-1.4c0.9,0,1.5,0.6,1.5,1.4S7.5,8.4,6.5,8.4z M19,18h-3.1v-4.7c0-1.3-0.8-1.6-1.1-1.6s-1.3,0.2-1.3,1.6c0,0.2,0,4.7,0,4.7h-3.1V9.4h3.1v1.2c0.4-0.7,1.2-1.2,2.7-1.2s2.7,1.2,2.7,3.9L19,18L19,18z"
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
};

const gridItemContentHeading = {
  // margin: "0" ,
};

const gridItemContentBody = {
  padding: "1rem",
};

// const contactStyles = {
//   padding: "0",
//   margin: "0",
//   listStyleType: "none",
// };

const contacts = [
  { name: "Github", link: "https://www.github.com/Jufrench" },
  { name: "LinkedIn", link: "https://www.linkedin.com/in/julesfrench/" },
  { name: "Email", link: "mailto:ju.french@gmail.com" },
  { name: "Ko-Fi", link: "https://ko-fi.com/moijules" },
]

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
  // background: "rgba(51, 51, 51, 0.7)",
  // color: "#fff",
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

// TODO:
// figure out why contact buttons are smaller than project buttons
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

// const svgComponent = (props: {icon: string, link: string}): JSX.Element => {
//   return (
    
//   )
// }

const IndexPage: React.FC<PageProps> = () => {
  // console.log('%cgithubMark', 'color:tomato', githubMark)

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
