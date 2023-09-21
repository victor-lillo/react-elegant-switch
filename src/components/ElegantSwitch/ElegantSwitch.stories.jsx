import React from 'react'

import ElegantSwitch from './index.ts'

export default {
  title: 'ElegantSwitch',
  component: ElegantSwitch,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => (
  <div>
    <ElegantSwitch {...args} />
  </div>
)

export const Primary = Template.bind({})
