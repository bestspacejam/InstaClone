import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Modal } from './modal'


storiesOf('ui/molecules', module)
  .addWithJSX('Modal', () => (
    <Modal
      onClose={action('Close')}
    />
  ))
