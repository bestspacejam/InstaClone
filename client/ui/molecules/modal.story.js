import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'

import { Modal } from './modal'


storiesOf('ui/molecules', module)
  .addWithJSX('Modal', () => (
    <Modal onClose={action('Close')}>
      <div style={{ fontSize: '1.4rem', color: '#fff' }}>{text('Children', 'Example content')}</div>
    </Modal>
  ))
