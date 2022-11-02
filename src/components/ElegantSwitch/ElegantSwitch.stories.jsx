import React from 'react'

import ElegantSwitch from './index.ts'

export default {
  title: 'ElegantSwitch',
  component: ElegantSwitch,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <ElegantSwitch {...args} />

export const Primary = Template.bind({})
