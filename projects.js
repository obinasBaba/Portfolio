// import useProjectsAssets from './src/hooks/queries/useProjectsAssets'

// const { preview1, preview2, preview3 } = useProjectsAssets();

module.exports = [
  {
    id: 'ce0e89gf59-d30b-5d95-8167-8df1kfevcd',
    slug: 'project-1',
    title: 'Vigoza',
    subTitle: 'Creative Agency',
    about: {
      role: 'UI/UX Developer',
      context: 'Design',
      period: 'Early 2019',
    },
    featured_media: {
      source_url: '/projects/preview-11.jpg',
    },

    intro: {
      themeColor: '#973c22',
      logoUrl: '/projects/vigoza-logo.svg',
      // imageData: preview1,
      title: 'Intro',
      link: 'https://www.prosapient.com',
      desc:
        `
        Vigoza is a full-service digital agency that builds immersive user experience.
        The Team create an exceptional visualization and thought-out functionality.
        The studio develops the products people appreciate all around the world.
        This project is made to make it easy to witness and follow-up their work and to keep their clients
        more close
        `
    },

    companies: [
      {
        text: 'Total Funding Amount',
        sourceImage: '/companies/2M.svg',
      },
    ],

    excerpt:
      'Machine learning platform that helps users carry out primary research in the required field of activity.',
    technologies: ['Reactjs', 'GraphQl', 'CSS Modules'],
    content:
      'We started our work with the ProSapient product from design. Given that the product deals with a complicated process, our main task was to make it easy and clear to perceive through visual solutions. Later we gave it to our team for development. ',
  },
  {
    id: 'ce0e89gf59-d30b-5d95-8167-8df1kfevcd',
    slug: 'project-2',
    title: 'Honey',
    subTitle: 'Beauty & Hair Space',
    about: {
      role: 'FrontEnd Developer',
      context: 'Design',
      period: 'End 2018',
    },
    featured_media: {
      source_url: '/projects/preview-22.png',
    },

    intro: {
      themeColor: '#f1c9b3',
      color: '#02021e',
      logoUrl: '/projects/honey-logo.png',
      // imageData: preview2,
      link: 'https://www.prosapient.com',
      title: 'The Project',
      desc:
        `
        Honey is an outstanding Beauty and Hair space in Addis Abeba, Ethiopia.
        They include a variety of services including professional hair cutting and
        styling, manicures , pedicures, cosmetics, makeup and makeovers to say a few.
        This WebApp(PWA) makes their client to keep up and admire their daily post as
        well us to easily make an appointment despite the massive no of client.   
        `,
    },

    companies: [
      {
        text: 'Total Funding Amount',
        sourceImage: '/companies/2M.svg',
      },
    ],

    excerpt:
      'Machine learning platform that helps users carry out primary research in the required field of activity.',
    technologies: ['Reactjs', 'GraphQl', 'CSS Modules'],
    content:
      'We started our work with the ProSapient product from design. Given that the product deals with a complicated process, our main task was to make it easy and clear to perceive through visual solutions. Later we gave it to our team for development. ',
  },
]
