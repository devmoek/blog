import * as React from "react";
import { Link, graphql } from "gatsby";
import { StaticImage, GatsbyImage, getImage} from "gatsby-plugin-image";
import css from "../components/main.css"

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