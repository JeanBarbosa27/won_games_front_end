import { Story, Meta } from '@storybook/react/types-6-0'

import Main from '.'

export default {
  title: 'Main',
  component: Main,
  argTypes: {
    background: {
      control: 'color'
    }
  },
  args: {
    title: 'Title Default',
    description: 'Description Default'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: "Basic's title",
  description: "Description's title",
  background: '#012787'
}

export const Default: Story = (args) => <Main {...args} />
