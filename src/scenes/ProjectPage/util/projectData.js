import useProjectsAssets from '../../../hooks/queries/useProjectsAssets'
import {useAnimation} from 'framer-motion'

export const useProjectData = () => {
  const { auth, kklLuzern, udemy, ...listAssets } = useProjectsAssets()
  const othersAssets = { auth, kklLuzern, udemy }
  const {
    preview1,
    preview2,
    preview3,
    css3,
    postgres,
    sql,
    typescript,
    javascript,
    mongo,
    vue,
    pwa,
    react,
    angular,
    node,
  } = listAssets

  const items = [

    {
      id: 0,
      link: '/projects/project2',
      url: '/projects#one',
      linkTitle: 'Case Study',
      preview: preview1,
      tags: 'UX, UI, Illustrations, Icons',
      title: 'Gebeya',
      alt: 'Gebeya auction websit',
      imgTitle: '',
      partners: [react, pwa, mongo, javascript],
      controller: useAnimation(),
    },
    {
      id: 1,
      link: '/projects/vigoza',
      url: '/projects#two',
      linkTitle: 'Case Study',
      preview: preview2,
      tags: 'Analytics, UX, UI, Icons, Front-end',
      title: 'Vigoza Digital Agency',
      alt: 'Mobalytics. Game Analytics Platform Website',
      imgTitle: 'Mobalytics. Game Analytics Platform Website',
      partners: [node, angular, typescript, sql],
      controller: useAnimation(),
    },
    {
      id: 2,
      link: '/projects/project3',
      url: '/projects#three',
      linkTitle: 'coming soon',
      preview: preview3,
      tags: 'Analytics, UX, UI, Front-end',
      title: 'Atgbe Food Delivery',
      alt: 'The best food delivery system',
      imgTitle: 'Glance Clock — First Smart Clock',
      partners: [postgres, vue, javascript, css3],
      controller: useAnimation(),
    },

    {
      controller: useAnimation(),
    }
  ]

  return {
    items,
    othersAssets
  };
}