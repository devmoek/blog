import * as React from "react"
import { Link } from "gatsby"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

// markup
const SinglePost = () => {
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <div>
        <h1 style={headingStyles}>Blog Post</h1>
      </div>
    </main>
  )
}

export default SinglePost