import React from "react";
import Item from "./item";
import { useRecommendedBlogs } from "../../../../hooks/queries/useRecommendedAssets";
import useHomeWorksAssets from "../../../../hooks/queries/useHomeWorksAssets";

function Previews(){

  const { allPost: { edges } } = useRecommendedBlogs();
  const { p1, p2, p3 } = useHomeWorksAssets();


  return (< >
    {edges.slice( 0, 3 ).map( ( item, index ) =>
      <Item key={item.node.id}
            tag={item.node.frontmatter.tags.map( ( { tag } ) => tag ).join( ", " )}
            title={item.node.frontmatter.title}
            link={item.node.frontmatter.link}
            media={[p1, p2, p3][index]} /> )}
  </>);
}

export default Previews;
