// Import the Button component
import Button from '../components/atoms/Button.vue';

// Define the default export object separately from the function
const buttonStory = {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    color: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

// Define the template function separately
function Template(args) {
  return {
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">{{ args.default }}</Button>',
  };
}

// Define individual stories using the Template function
export const Default = Template.bind({});
Default.args = {
  color: 'bg-black text-white',
  disabled: false,
  default: 'Click Me',
};

// Export the story object separately
export default buttonStory;
