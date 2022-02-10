exports.createPages = async ({ graphql, actions }) => {
    const { data } = await graphql (`
        allMarkdownRemark {
            nodes {
            frontmatter {
                url
            }
            }
        }
    `)

    console.log(data);
}