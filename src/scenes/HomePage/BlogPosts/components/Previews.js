import React from 'react'
import p1 from './images/2.jpg'
import p2 from './images/4.jpg'
import p3 from './images/6.jpg'
import Item from './item'




const Previews = ( {media} ) => {

  const items = [
    {

      media: p1,
      title: 'how to check the website before releasing it?',
      tag: ['PWA', 'React', "Js"],
    },{
      media: p2,
      title: 'Brand analysis: second step to the brand identity',
      tag: ['PWA', 'React'],
    },{
      media: p3,
      title: 'how to check the website before releasing it?',
      tag: ['PWA', "Js"],
    },
  ]


  return (
    <div  >
      {items.map(item => {
        return <Item key={item.title}
                     tag={item.tag.join(',  #')}
                     title={item.title} media={item.media} />;
      })}
    </div>
  )
}

export default Previews
