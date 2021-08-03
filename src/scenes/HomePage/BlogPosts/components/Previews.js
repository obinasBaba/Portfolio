import React, {useEffect} from 'react'
import p1 from './images/2.jpg'
import p2 from './images/4.jpg'
import p3 from './images/6.jpg'
import Item from './item'
import {useRecommendedBlogs} from '../../../../hooks/queries/useRecommendedAssets'


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRecommendedPosts(allPosts = []) {
  const RECOMMENDED_POSTS_LIMIT = 3;
  const recommendedPosts = [];

  while (
    recommendedPosts.length < RECOMMENDED_POSTS_LIMIT &&
    allPosts.length > RECOMMENDED_POSTS_LIMIT
    ) {
    const random = Math.floor(Math.random() * allPosts.length);

    if ( !recommendedPosts.includes(allPosts[random]) ) {
      recommendedPosts.push(allPosts[random]);
    }
  }

  return recommendedPosts;
}

const Previews = (  ) => {

  const { allPost: { edges }, totalCount } = useRecommendedBlogs();

  console.log(edges)


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
                     media={item.node.frontmatter.thumbnail} />;
      })}
    </>
  )
}

export default Previews
