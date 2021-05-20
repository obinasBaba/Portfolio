import React, { useEffect } from 'react'
import { Typography } from '@material-ui/core'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import { css } from 'styled-components'
import { Link, useScrollRestoration } from 'gatsby'

const Project = ({ pageContext }) => {
  // const scrollRes = useScrollRestoration('project-page')
  // console.log(scrollRes)

  useEffect(() => {
    // window.scrollTo(0, 0)
  }, [])

  return (
    // <AnimatePresence exitBeforeEnter={true} >

    <motion.div>
      <motion.div
        css={css`
          padding-top: 5rem;
        `}

        initial={{
          opacity: 0,
        }}

        animate={{
          opacity: 1,
          transition: {
            duration: 1,
          }
        }}

        exit={{
          opacity: 0,
          transition: {
            duration: 1,
          },
        }}
      >
        <Typography variant="h1">
          {' '}
          This is Project Page {pageContext.index}{' '}
        </Typography>
        <Link to='/' > HOME</Link>

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
        at aut corporis debitis dicta dolor ea eaque earum eius eligendi eos
        error est eveniet expedita, fuga in ipsam iste laboriosam laborum
        laudantium minima molestias non obcaecati odio possimus quisquam quo
        quod reiciendis repellendus reprehenderit rerum saepe sapiente sunt
        totam veniam vitae voluptate! Amet eius fuga modi, molestiae omnis
        quaerat suscipit. Cumque debitis deserunt ratione voluptatem. Aliquam
        beatae consequatur consequuntur culpa dignissimos distinctio dolor
        dolore eos fugit harum, ipsam iusto laboriosam minus obcaecati odio
        optio perspiciatis quae ratione recusandae repellendus saepe sequi sint
        soluta tempora totam unde voluptates. Accusamus at consequatur delectus
        dicta distinctio, doloribus enim eos esse explicabo impedit ipsa laborum
        magni maxime nam nostrum, quaerat quibusdam quos reprehenderit, sit
        suscipit tenetur velit voluptates. Ab amet animi architecto at aut,
        autem blanditiis corporis deserunt dolorem, dolores eaque eligendi esse
        eveniet hic ipsa iure iusto minus nihil numquam obcaecati placeat
        quaerat quo sequi temporibus tenetur voluptatem voluptatum? Blanditiis
        consectetur deserunt dolore et inventore libero maiores nesciunt nihil
        similique totam! A, aspernatur cum dolore doloremque eius eum harum
        impedit ipsum minus modi mollitia nam natus nihil nulla numquam pariatur
        repellendus! Atque enim iure maiores officia quia, quidem sapiente sequi
        sit. Ab accusamus aliquid aut consectetur, culpa cumque dolores error
        illum ipsa magnam neque nesciunt obcaecati optio pariatur praesentium
        quae, quas, tempore! Assumenda at enim exercitationem magnam natus nisi,
        officiis quae quam similique vel. Commodi, dolorem fuga illo in ipsam
        quae repellat repudiandae voluptatum! Aspernatur aut dicta dolores
        minima necessitatibus optio quaerat sit veritatis! Beatae dicta dolor
        ducimus, eius esse et excepturi hic in incidunt non pariatur qui, quod
        repellat sint sunt veritatis voluptates? Autem blanditiis est quos?
        Accusamus culpa excepturi labore nisi? Dolorem eius esse mollitia
        tenetur totam. Amet, atque, dolorum. A debitis dignissimos dolor iste
        laboriosam, laborum molestias, nobis perspiciatis, quasi quod
        reprehenderit sit totam veritatis? Ab aliquid corporis error ipsa odit?
        Autem, consectetur esse eum id in ipsam itaque laboriosam magnam minus
        necessitatibus nisi nobis perspiciatis qui reiciendis repellat,
        repellendus sapiente tenetur, veniam voluptatem voluptates. A, aliquid,
        architecto debitis deleniti dolorem doloribus earum eius est ex
        excepturi facere fugit labore laboriosam nobis porro possimus quam, quas
        qui quod rerum similique soluta totam veniam? Accusantium aliquid
        consectetur doloribus et magni molestiae repellat. Aperiam asperiores
        autem, beatae commodi dolorum ea eos error ex explicabo illo impedit
        incidunt ipsa labore nesciunt nihil obcaecati officia perspiciatis
        provident qui quidem ratione rem saepe vel voluptatum!
      </motion.div>

      <Typography
        variant="h1"
        style={{
          paddingBottom: '20rem',
        }}
      >
        {' '}
        Footer {pageContext.index}{' '}
      </Typography>
      <Link to='/' > HOME</Link>

    </motion.div>

    // </AnimatePresence>
  )
}

export default Project
