import { Story, Meta } from '@storybook/react/types-6-0'
import { Main } from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Título default',
    description: 'Descrição default'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
export const OutroComponent: Story = (args) => <Main {...args} />

Basic.args = {
  title: 'Novo título do componente Basic',
  description: 'Nova descrição do componente Basic'
}
