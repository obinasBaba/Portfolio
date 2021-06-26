import React from 'react'
import CardContents from './components/CardContents'
import BlogCard from './components/BlogCard'
import Thumbnail from './components/Thumbnail'

const ArticleCard = ({ date, title, body, slug, featuredMedia }) => {
  return (
    <BlogCard media={featuredMedia}>
      <Thumbnail media={featuredMedia} />

      <CardContents overline={date} title={title} body={body} slug={slug} />
    </BlogCard>
  )
}

export default ArticleCard
