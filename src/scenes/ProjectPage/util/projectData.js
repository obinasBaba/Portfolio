import { useAnimation } from 'framer-motion';
import useProjectsAssets from '../../../hooks/queries/useProjectsAssets';

export const useProjectData = () => {
  const { auth, kklLuzern, udemy, ...listAssets } = useProjectsAssets();
  const othersAssets = { auth, kklLuzern, udemy };
  const {
    preview1,
    preview2,
    preview3,
    css3,
    postgres,
    typescript,
    javascript,
    mongo,
    vue,
    pwa,
    react,
    node,
  } = listAssets;

  const items = [
    {
      id: 1,
      link: '/projects/juvi',
      url: '/projects#one',
      liveUrl: 'https://juvi-haus.vercel.app',
      linkTitle: 'Case Study',
      preview: preview2,
      tags: 'E-commerce, UX, UI, Api, Front-end',
      title: 'Juvi Liquor St. House',
      alt: 'Liquor distribution e-commerce website',
      imgTitle: 'Liquor distribution e-commerce website',
      partners: [node, react, typescript, postgres],
      controller: useAnimation(),
      backUrl: '/projects#one',
      nextProject: {
        url: '/projects/project2',
        thumbnailUrl: preview1.publicURL,
      },
      intro: {
        desc: {
          title: 'background',
          text: `To win over country wide markets, Juvi-House needed to better
       communicate its brand story with a revamped website experience.
       Reinventing the brand’s website to support growth, and integrating digital 
              storytelling to help influence the perceptions of consumers was the main goal.
       The revamped digital experience, coupled with search engine optimizations, customizations, 
                and an eCommerce capability, helped the brand evolve in a larger market. 
              
       `,
        },
      },
      sections: {
        collections: {
          title: 'Collections',
          text: `the shop pages provide a clean overview
       of all available products. it also offers a faster purchase option for returning customers.
       thanks to an intuitive filter, a desired product can be quickly narrowed down with just a few clicks.
        for example, customers can search for a desired price range.
       
       `,
        },
        mobileView: {
          title: 'Products',
          text: `I gave each item enough space to tell its own story, each product
          page opens with and individual and inviting introduction.  various elements (images, illustrations, text, colours),
           created in collaboration with several other team members, were carefully combined to create unique compositions for each item.
      `,
        },
      },
    },
    {
      id: 0,
      link: '/projects/project2',
      url: '/projects#two',
      liveUrl: 'https://lssya.app',
      linkTitle: 'Case Study',
      preview: preview1,
      tags: 'Frontend, graphql, branding, responsive',
      title: 'Lssya',
      alt: 'Lssya therapist website',
      imgTitle: '',
      partners: [react, pwa, mongo, javascript],
      controller: useAnimation(),
      about: {
        role: 'Senior FrontEnd Developer',
        context: 'Development',
        period: 'End 2022',
      },
      intro: {},
      backUrl: '/projects#two',
      nextProject: {
        url: '/projects/project3',
        thumbnailUrl: preview3.publicURL,
      },
    },

    {
      id: 2,
      link: '/projects/project3',
      url: '/projects#three',
      liveUrl: 'https://rahove.com',
      linkTitle: 'coming soon',
      preview: preview3,
      alt: 'Rahove Technologies',
      imgTitle: 'Rahove Technologies',
      partners: [postgres, vue, javascript, css3],
      controller: useAnimation(),
      title: 'Rahove Technologies',
      tags: 'api, CMS, responsiveness, motion-design, frontend',
      about: {
        role: 'Fullstack Developer',
        context: 'Development',
        period: 'Start of 2023',
      },
      intro: {},
      backUrl: '/projects#three',
      nextProject: {
        url: '/projects/juvi',
        thumbnailUrl: preview2.publicURL,
      },
    },

    {
      controller: useAnimation(),
    },
  ];

  return {
    items,
    othersAssets,
  };
};
