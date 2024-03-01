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

const mainStyles = {
  // background: "royalblue",
  // position: "absolute" as Position,
  // position: "absolute" as any,
  // height: "97%",
  // width: "97%",
  // top: "50%",
  // left: "50%",
  // transform: "translate(-50%, -50%)",
}

const mainWrapper: React.CSSProperties = {
  display: "grid",
  width: "97%",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // =======================================
  height: "95vh",
  // gridTemplateColumns: "repeat(6, 1fr)",
  // gridTemplateRows: "repeat(5, 1fr)",
  // =======================================
  // gridTemplateColumns: "repeat(5, 1fr)",
  // gridTemplateRows: "repeat(4, 1fr)",
  // =======================================
  // gridTemplateColumns: "repeat(4, 1fr)",
  // gridTemplateRows: "repeat(4, 1fr)",
  // gridTemplateRows: "repeat(4, minmax(0, 1fr))",
  // =======================================
  gap: "1.25rem",
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

const IndexPage: React.FC<PageProps> = () => {
  // console.log('kofi_button_stroke:', kofi_button_stroke)
  return (
    <main className="main-wrapper" style={mainWrapper}>
      {/* <div style={{...gridItem, ...aboutMe2}}>One</div>
      <div style={{...gridItem, gridColumn: "4 / 5"}}>Two</div>
      <div style={{...gridItem, gridColumn: "5 / 7", gridRow: "1 / 3"}}>Three</div>
      <div style={{...gridItem, gridColumn: "1 / 3", gridRow: "4 / 6"}}>four</div>
      <div className="gradient" style={{...gridItem, gridColumn: "3 / 4", gridRow: "4 / 5"}}>Five</div>
      <div style={{...gridItem, gridColumn: "4 / 5", gridRow: "2 / 5"}}>six</div>
      <div style={{...gridItem, gridColumn: "5 / 7", gridRow: "3 / 6"}}>seven</div>
      <div style={{...gridItem, gridColumn: "3 / 5"}}>eight</div> */}
      {/* ======================================= */}
      {/* <div style={{...gridItem, ...aboutMe2}}>One</div>
      <div style={{...gridItem, gridColumn: "4 / 5"}}>Two</div>
      <div style={{...gridItem, gridColumn: "5 / 6", gridRow: "1 / 3"}}>Three</div>
      <div style={{...gridItem, gridColumn: "6 / 7", gridRow: "1 / 3"}}>Three.1</div>
      <div style={{...gridItem, gridColumn: "1 / 3", gridRow: "4 / 6"}}>four</div>
      <div style={{...gridItem, gridColumn: "4 / 5", gridRow: "2 / 4"}}>six</div>
      <div style={{...gridItem, gridColumn: "5 / 7", gridRow: "5 / 6"}}>seven</div>
      <div style={{...gridItem, gridColumn: "3 / 5", gridRow: "5 / 6"}}>eight</div> */}
      {/* ======================================= */}
      {/* I like this one - 6 columns, 5 rows */}
      {/* <div style={{...gridItem, ...aboutMe2}}>One</div>
      <div style={{...gridItem, gridColumn: "4 / 6", gridRow: "1 / 4"}}>Two</div>
      <div style={{...gridItem, gridColumn: "6 / 7", gridRow: "1 / 2"}}>Three</div>
      <div style={{...gridItem, gridColumn: "1 / 3", gridRow: "4 / 6"}}>four</div>
      <div style={{...gridItem, gridColumn: "6 / 7", gridRow: "2 / 4"}}>six</div>
      <div style={{...gridItem, gridColumn: "3 / 5", gridRow: "4 / 6"}}>seven</div>
      <div style={{...gridItem, gridColumn: "5 / 7", gridRow: "4 / 5"}}>eight top</div>
      <div style={{...gridItem, gridColumn: "5 / 7", gridRow: "5 / 6"}}>eight bottom</div> */}
      {/* ======================================= */}
      {/* I like this one - 5 columns, 4 rows */}
      {/* <div style={{...gridItem, gridColumn: "1 / 4", gridRow: "1 / 4"}}>One</div>
      <div style={{...gridItem, gridColumn: "4 / 5", gridRow: "1 / 2"}}>Two</div>
      <div style={{...gridItem, gridColumn: "5 / 6", gridRow: "1 / 2"}}>Three</div>
      <div style={{...gridItem, gridColumn: "4 / 6", gridRow: "2 / 4"}}>three</div>
      <div style={{...gridItem, gridColumn: "1 / 3", gridRow: "4 / 6"}}>four</div>
      <div style={{...gridItem, gridColumn: "3 / 5", gridRow: "4 / 6"}}>seven</div>
      <div style={{...gridItem, gridColumn: "5 / 6", gridRow: "4 / 6"}}>eight</div> */}
      {/* ======================================= */}
      {/* Best so far - 4 columns, 4 rows */}
      {/* <header className="intro" style={{...gridItem, gridColumn: "1 / 3", gridRow: "1 / 4"}}> */}
      <header className="intro" style={{...gridItem}}>
        {/* <header style={gridItemContent}> */}
          <h1 style={{ marginTop: "10%", display: "flex", flexDirection: "column"}}>
            <span>Hello!</span>
            <span>My name is <span style={{color:"chocolate"}}>Julian French</span>.</span>
            <span>I'm a Web Developer based in Kansas City!</span>
          </h1>
          <h3 style={{ marginTop: "20px", fontWeight: "normal", lineHeight: "1.3"}}>
            I'm a collaborative Front-End Developer with a background in music
            and foreign languages. One of my goals is to always strive to have a positive outlook on life,
            and I hope to share that positivity with any and everyone!</h3>
        {/* </header> */}
      </header>
      {/* <section className="theme" style={{...gridItem, gridColumn: "3 / 4", gridRow: "1 / 2"}}> */}
      <section className="theme" style={{...gridItem}}>
        {/* <section style={gridItemContent}> */}
          <h2 style={gridItemContentHeading}>VSCode Custom Theme</h2>
          <div style={gridItemContentBody}>Coming soon... 👀</div>
        {/* </section> */}
      </section>
      <section className="settings" style={{...gridItem, gridColumn: "4 / 5", gridRow: "1 / 2"}}>
      {/* <section className="settings" style={{...gridItem}}> */}
        {/* <section style={gridItemContent}> */}
          <h2 style={gridItemContentHeading}>...</h2>
          <ul style={{...gridItemContentBody, columnCount: 2}}>
            <button style={{ padding: "10px"}}>I don't do anything yet</button>
            <button style={{ padding: "10px"}}>Me neither</button>
          </ul>
        {/* </section> */}
      </section>
      {/* <aside className="projects" style={{...gridItem, gridColumn: "3 / 5", gridRow: "2 / 4"}}> */}
      <aside className="projects" style={{...gridItem, position: "relative"}}>
        {/* <section style={gridItemContent}> */}
          <h2 style={gridItemContentHeading}>Projects</h2>
          <div style={{marginTop: "12px", border: "1px solid tomato", height: "64%"}}></div>
          <div style={{ 
                borderRadius: "10px",
                position: "absolute",
                left: "22px",
                bottom: "22px",
                height: "15%",
                width: "calc(100% - 44px)",
                background: "rgba(246,245,244,0.7)",
                display: "flex",
                padding: "10px"
              }}
          >
            {projectsList.map((project, index) => {
              return (
                <div
                  className="project-item"
                  style={{ color: "white", border: "1px solid #333", cursor: "pointer", 
                      background: "chocolate", padding: "6px", borderRadius: "5px", marginLeft: "10px", display: "flex", justifyContent: "center", alignItems: "flex-end"
                  }}
                >{project.title}</div>
              )
            })}
          </div>
        {/* </section> */}
      </aside>
      {/* <section className="tech" style={{...gridItem, gridColumn: "1 / 3", gridRow: "4 / 5"}}> */}
      <section className="tech" style={{...gridItem}}>
        {/* <section style={gridItemContent}> */}
          <h2 style={gridItemContentHeading}>Technologies I use/I've used</h2>
          <ul style={{...gridItemContentBody, columnCount: 3, listStyleType: "none"}}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Vue</li>
            <li>Ember</li>
            <li>Node.js</li>
            <li>Webpack</li>
            <li>Gatsby</li>
          </ul>
        {/* </section> */}
      </section >
      {/* <section className="block-6" style={{...gridItem, gridColumn: "3 / 4", gridRow: "4 / 5"}}> */}
      <section className="block-6" style={{...gridItem}}>
        {/* <section style={gridItemContent}> */}
          <h2 style={gridItemContentHeading}>...</h2>
          <div style={gridItemContentBody}>
            <a href=""></a>
          </div>
        {/* </section> */}
      </section>
      {/* <footer className="contact" style={{...gridItem, gridColumn: "4 / 5", gridRow: "4 / 5"}}> */}
      <footer className="contact" style={{...gridItem}}>
        {/* <footer style={gridItemContent}> */}
          <h2 style={gridItemContentHeading}>Find Me</h2>
          <ul style={{...contactStyles, ...gridItemContentBody, columnCount: 2}}>
            <li style={contactItemStyles}><a style={contactAnchorItemStyles} href="https://www.github.com/Jufrench">Github</a></li>
            <li style={contactItemStyles}><a style={contactAnchorItemStyles} href="https://www.linkedin.com/in/julesfrench/">LinkedIn</a></li>
            <li style={contactItemStyles}><a style={contactAnchorItemStyles} href="mailto:ju.french@gmail.com">Email</a></li>
            <li style={contactItemStyles}><a style={contactAnchorItemStyles} href="https://ko-fi.com/moijules">Ko-Fi</a></li>
          </ul>
        {/* </footer> */}
      </footer>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
