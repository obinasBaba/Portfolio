import React from 'react'
import { Link } from 'gatsby'
import { LinkWrapper, List, ListItem, OthersContainer } from './components'
import Title from '../../../RecentDesigns/Title'

const Others = ({ auth, kklLuzern, udemy }) => {
  return (
    <OthersContainer>
      <Title variant={'h3'} align="center">
        And <br /> others
      </Title>

      <List>
        <ListItem>
          <img src={auth.publicURL} alt="partner logotype" />
        </ListItem>
        <ListItem>
          <img src={udemy.publicURL} alt="partner logotype" loading="lazy" />
        </ListItem>
        <ListItem>
          <img
            src={kklLuzern.publicURL}
            alt="partner logotype"
            loading="lazy"
          />
        </ListItem>

        <ListItem>
          <LinkWrapper>
            <Link to="/portfolio">
              <span>
                View
                <br />
                All
                <br />
                Cases
              </span>
            </Link>
          </LinkWrapper>
        </ListItem>
      </List>
    </OthersContainer>
  )
}

export default Others
