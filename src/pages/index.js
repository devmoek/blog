import * as React from "react";
import { Link, graphql } from "gatsby";
import { StaticImage, GatsbyImage, getImage} from "gatsby-plugin-image";
import css from "../components/main.css"

// markup
const IndexPage = ({data}) => {
  const { nodes } = data.allMarkdownRemark;
  return (
    <main>
      <header>
        <StaticImage
            placeholder="blurred"
            src="../images/logo.png"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="moek's blog logo"
            style={{}}
          />
         <h1>moek's blog</h1>
      </header>

        <h3>My articles</h3>
      <div className="posts">
        {nodes.map(post => {
          const { category, title, url, image } = post.frontmatter;
          const img = getImage(image);
          return (
            <div className="post" key={post.id}>
              <GatsbyImage image={img} alt={title}/>
              <Link to={`/${category}/${url}`}>{title}</Link>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default IndexPage

export const query = graphql `
  query MainPage {
    allMarkdownRemark {
      nodes {
        frontmatter {
          category
          title
          url
          image {
            childImageSharp {
              gatsbyImageData(width: 200, formats: [AUTO, AVIF], placeholder: BLURRED)
            }
          }
        }
        id
      }
    }
  }
`