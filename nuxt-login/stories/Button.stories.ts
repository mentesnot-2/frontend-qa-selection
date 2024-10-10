import Button from '../components/atoms/Button.vue';

const buttonStory = {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    color: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

function Template(args) {
  return {
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">{{ args.default }}</Button>',
  };
}

export const Default = Template.bind({});
Default.args = {
  color: 'bg-black text-white',
  disabled: false,
  default: 'Click Me',
};

// Export the story object separately
export default buttonStory;
