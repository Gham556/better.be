/* Home page, will provide links to all necessary pages on site, and allow log in. Will also show a preview of the top winning post of the day.*/

import * as React from "react"

//CSS

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
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

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
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

//Function to dynamically choose newest top post//
/* const topPost = () => {
  //search data-base for the winning post 
    folder structure : posts -> winning-posts -> todays-date -> newest-time-stamp
  return Json data for newest post    
};*/

//Function for finding and generating a feeatured set of top winning players//
/* const topPlayers = () => {
  //search data-base for players with the most winning posts//
    folder structure: topic -> winning-users -> users-with-most-wins

  return data with user name, profile-picture, link-to-their-page, and a number marking their number of wins in that catagory   
};

*/

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
       Home
      </h1>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
