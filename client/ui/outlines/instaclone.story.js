import React from 'react'
import { storiesOf } from '@storybook/react'

import Instaclone from './instaclone.svg'


storiesOf('ui/outlines', module)
  .addWithJSX('instaclone', () => (
    <Instaclone />
  ))
