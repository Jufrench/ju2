import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const doclistStyles = {
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

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

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLinks = [
  {
    text: "TypeScript Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/",
    color: "#8954A8",
  },
  {
    text: "GraphQL Typegen Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/",
    color: "#8954A8",
  }
]

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/getting-started/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

// element {
// 	background: royalblue;
// 	position: absolute;
// 	height: 97%;
// 	width: 97%;
// 	top: 50%;
// 	left: 50%;
// 	transform: translate(-50%, -50%);
// 	z-index: 999999999;
// 	box-shadow: 0px 0px 5px 4px black;
// }

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

const mainStyles2 = {
  position: "absolute" as any,
  top: 40,
  bottom: 40,
  right: 40,
  left: 40,
  boxShadow: "0px 0px 10px 10px white",
  background: "#f0f0f0",
}

const contentWrapper = {
  border: "2px solid dodgerblue",
  height: "95vh",
  display: "grid",
  gridTemplateColumns: "repeat(6, 1fr)",
  gridTemplateRows: "repeat(5, 1fr)",
  gap: "16px",
}

const gridItem = {
  border: "1px solid tomato"
}

const gridItemInner = {
  border: "1px solid dodgerblue"
}

const aboutMe = {
  gridColumn: "1 / 2",
  gridRow: "1 / 4",
  display: "grid",
  gap: "16px",
  gridTemplateRows: "repeat(3, 1fr)",
}

const aboutMe2 = {
  gridColumn: "1 / 4",
  gridRow: "1 / 4",
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={mainStyles}>
      <div style={contentWrapper}>
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
        <div style={{...gridItem, ...aboutMe2}}>One</div>
        <div style={{...gridItem, gridColumn: "4 / 6", gridRow: "1 / 4"}}>Two</div>
        <div style={{...gridItem, gridColumn: "6 / 7", gridRow: "1 / 2"}}>Three</div>
        <div style={{...gridItem, gridColumn: "1 / 3", gridRow: "4 / 6"}}>four</div>
        {/* <div style={{...gridItem, gridColumn: "5 / 6", gridRow: "1 / 3"}}>Three</div> */}
        <div style={{...gridItem, gridColumn: "6 / 7", gridRow: "2 / 4"}}>six</div>
        <div style={{...gridItem, gridColumn: "5 / 7", gridRow: "4 / 6"}}>seven</div>
        <div style={{...gridItem, gridColumn: "3 / 5", gridRow: "5 / 6"}}>eight</div>
        <div style={{...gridItem, gridColumn: "3 / 5", gridRow: "4 / 5"}}>eight</div>
      </div>
    </main>
    
    // <main style={mainStyles2}>
    //   <div>
    //     <h1>Second Version</h1>
    //   </div>
    // </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
