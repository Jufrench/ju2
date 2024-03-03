import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
// const kofi_button_stroke = require("../images/kofi_button_stroke.png")

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
  width: "80%",
  // marginLeft: "auto",
  // marginRight: "auto",
  height: "90vh",
}

const gridItem = {
  // border: "1px solid #333",
  padding: "1.5rem",
  // background: "rgba(246,245,244,1.0)",
  background: "#dddcdb",
  borderRadius: "10px",
};

const gridItemContentHeading = {
  // margin: "0" ,
};

const gridItemContentBody = {
  padding: "1rem",
};

const contactStyles = {
  padding: "0",
  margin: "0",
  listStyleType: "none",
};

const contactItemStyles = {
  // marginTop: "6px",
};

const contactAnchorItemStyles = {
  // textDecoration: "none",
  color: "unset"
};

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

const skills: string[] = ["HTML","CSS","JavaScript","React","Vue","Ember","Node.js","Webpack","Gatsby"]

const pillStyles: React.CSSProperties = {
  background: "rgba(246,245,244,0.7)",
  // border: "1px solid rgba(246,245,244,1)",
  fontSize: "0.9rem",
  borderRadius: "6px",
  padding: "6px 8px",
  textAlign: "center",
  margin: "3px",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
}

const IndexPage: React.FC<PageProps> = () => {
  // console.log('kofi_button_stroke:', kofi_button_stroke)
  return (
    <div className="content-wrapper" style={{height: "100vh", border: "2px solid red"}}>
      <main className="main-wrapper"
        style={{...mainWrapper,  width: "80%", height: "85%", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
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
            <h3 style={gridItemContentHeading}>VSCode Custom Theme</h3>
            <div style={gridItemContentBody}>Coming soon... 👀</div>
          {/* </section> */}
        </section>
        <section className="settings" style={{...gridItem, gridColumn: "4 / 5", gridRow: "1 / 2"}}>
        {/* <section className="settings" style={{...gridItem}}> */}
          {/* <section style={gridItemContent}> */}
            <h3 style={gridItemContentHeading}>...</h3>
            <ul style={{...gridItemContentBody, columnCount: 2}}>
              <button style={{ padding: "10px"}}>I don't do anything yet</button>
              <button style={{ padding: "10px"}}>Me neither</button>
            </ul>
          {/* </section> */}
        </section>
        {/* <aside className="projects" style={{...gridItem, gridColumn: "3 / 5", gridRow: "2 / 4"}}> */}
        <aside className="projects" style={{...gridItem, position: "relative"}}>
          {/* <section style={gridItemContent}> */}
            <h3 style={gridItemContentHeading}>Projects</h3>
            <div style={{marginTop: "12px", border: "1px solid tomato", height: "64%"}}></div>
            <ul style={{ 
                  borderRadius: "10px",
                  position: "absolute",
                  left: "22px",
                  bottom: "22px",
                  // height: "17%",
                  height: "55px",
                  width: "calc(100% - 44px)",
                  background: "rgba(246,245,244,0.7)",
                  display: "flex",
                  padding: "10px"
                }}
            >
              {projectsList.map((project, index) => {
                return (
                  <li
                    key={index}
                    className="project-item"
                    // style={{ color: "white", border: "1px solid #333", cursor: "pointer", 
                    //     background: "chocolate", padding: "6px", borderRadius: "5px", marginLeft: "10px", display: "flex", justifyContent: "center", alignItems: "flex-end"
                    // }}
                    style={{...pillStyles, background: "rgba(210,105,30, 0.5)", cursor: "pointer"}}
                  >{project.title}</li>
                )
              })}
            </ul>
          {/* </section> */}
        </aside>
        {/* <section className="tech" style={{...gridItem, gridColumn: "1 / 3", gridRow: "4 / 5"}}> */}
        <section className="tech" style={{...gridItem, display: "flex"}}>
          {/* <section style={gridItemContent}> */}
            <h3 style={{...gridItemContentHeading, marginTop: "8px"}}>Tech</h3>
            <ul style={{...gridItemContentBody, listStyleType: "none", paddingTop: "0"}}>
              {skills.map((skill, index) => {
                return (
                  <li key={index} style={{...pillStyles}}>{skill}</li>
                )
              })}
            </ul>
          {/* </section> */}
        </section >
        {/* <section className="block-6" style={{...gridItem, gridColumn: "3 / 4", gridRow: "4 / 5"}}> */}
        <section className="block-6" style={{...gridItem}}>
          {/* <section style={gridItemContent}> */}
            <h3 style={gridItemContentHeading}></h3>
            <div style={gridItemContentBody}>
              <a href=""></a>
            </div>
          {/* </section> */}
        </section>
        {/* <footer className="contact" style={{...gridItem, gridColumn: "4 / 5", gridRow: "4 / 5"}}> */}
        <section className="contact" style={{...gridItem}}>
          <h3 style={gridItemContentHeading}>Find Me</h3>
          <ul style={{...contactStyles, ...gridItemContentBody, columnCount: 2}}>
            <li style={contactItemStyles}><a style={contactAnchorItemStyles} href="https://www.github.com/Jufrench">Github</a></li>
            <li style={contactItemStyles}><a style={contactAnchorItemStyles} href="https://www.linkedin.com/in/julesfrench/">LinkedIn</a></li>
            <li style={contactItemStyles}><a style={contactAnchorItemStyles} href="mailto:ju.french@gmail.com">Email</a></li>
            <li style={contactItemStyles}><a style={contactAnchorItemStyles} href="https://ko-fi.com/moijules">Ko-Fi</a></li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
