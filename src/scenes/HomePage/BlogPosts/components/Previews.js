import React, {useEffect} from 'react'
import p1 from './images/2.jpg'
import p2 from './images/4.jpg'
import p3 from './images/6.jpg'
import Item from './item'
import {useRecommendedBlogs} from '../../../../hooks/queries/useRecommendedAssets'
import useHomeWorksAssets from '../../../../hooks/queries/useHomeWorksAssets'


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRecommendedPosts(allPosts = []) {
  const RECOMMENDED_POSTS_LIMIT = 3;
  const recommendedPosts = [];

  for(let i = 0; i < 3; i++) {
    recommendedPosts.push(allPosts[i]);
  }

  return recommendedPosts;
}

const Previews = (  ) => {

  const { allPost: { edges }, totalCount } = useRecommendedBlogs();
  const {p1, p2, p3} = useHomeWorksAssets();

  console.log(p1, p2, p3);


  const items = getRecommendedPosts(edges);


  useEffect(() => {

    }, [])
  


  return (
    < >
      {items.map((item, index) => {
        return <Item key={item.node.id}
                     tag={item.node.frontmatter.tags.map(({tag}) => tag)  .join(', ')}
                     title={item.node.frontmatter.title}
                     link={item.node.fields.slug}
                     media={[p1, p2, p3][index]} />;
      })}
    </>
  )
}

export default Previews
