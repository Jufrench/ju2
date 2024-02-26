import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

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
  border: "1px solid #333",
  padding: "1.5rem",
  background: "rgba(71,71,71,0.9)"
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
  marginTop: "6px",
};

const contactAnchorItemStyles = {
  textDecoration: "none",
  color: "#fff",
};

const IndexPage: React.FC<PageProps> = () => {
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
          <h1 style={{ marginTop: "50px", display: "flex", flexDirection: "column"}}>
            <span>Hello!</span>
            <span>My name is Julian French</span>
            <span>I'm a Web Developer based in Kansas City!</span>
          </h1>
        {/* </header> */}
      </header>
      {/* <section className="theme" style={{...gridItem, gridColumn: "3 / 4", gridRow: "1 / 2"}}> */}
      <section className="theme" style={{...gridItem}}>
        {/* <section style={gridItemContent}> */}
          <h2 style={gridItemContentHeading}>VSCode Custom Theme</h2>
          <div style={gridItemContentBody}>Coming soon...</div>
        {/* </section> */}
      </section>
      <section className="settings" style={{...gridItem, gridColumn: "4 / 5", gridRow: "1 / 2"}}>
      {/* <section className="settings" style={{...gridItem}}> */}
        {/* <section style={gridItemContent}> */}
          <h2 style={gridItemContentHeading}>Three</h2>
          <div style={gridItemContentBody}>Buttons will be here</div>
        {/* </section> */}
      </section>
      {/* <aside className="projects" style={{...gridItem, gridColumn: "3 / 5", gridRow: "2 / 4"}}> */}
      <aside className="projects" style={{...gridItem}}>
        {/* <section style={gridItemContent}> */}
          <h2 style={gridItemContentHeading}>Four</h2>
          <div style={gridItemContentBody}>Projects here</div>
        {/* </section> */}
      </aside>
      {/* <section className="tech" style={{...gridItem, gridColumn: "1 / 3", gridRow: "4 / 5"}}> */}
      <section className="tech" style={{...gridItem}}>
        {/* <section style={gridItemContent}> */}
          <h2 style={gridItemContentHeading}>Technologies I use/I've used</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
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
          <h2 style={gridItemContentHeading}>Six</h2>
          <div style={gridItemContentBody}>
            hello
          </div>
        {/* </section> */}
      </section>
      {/* <footer className="contact" style={{...gridItem, gridColumn: "4 / 5", gridRow: "4 / 5"}}> */}
      <footer className="contact" style={{...gridItem}}>
        {/* <footer style={gridItemContent}> */}
          <h2 style={gridItemContentHeading}>Find Me</h2>
          <ul style={contactStyles}>
            <li style={contactItemStyles}><a style={contactAnchorItemStyles} href="">Github</a></li>
            <li style={contactItemStyles}><a style={contactAnchorItemStyles} href="">LinkedIn</a></li>
            <li style={contactItemStyles}><a style={contactAnchorItemStyles} href="">Email</a></li>
            <li style={contactItemStyles}><a style={contactAnchorItemStyles} href="">Ko-Fi</a></li>
          </ul>
        {/* </footer> */}
      </footer>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
