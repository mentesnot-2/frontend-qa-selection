import Button from '../components/atoms/Button.vue';

const buttonStory = {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    color: { control: 'text' },
    disabled: { control: 'boolean' },
    icon: { control: 'text' }, // New argType for the icon (HTML as string)
  },
};

function Template(args) {
  return {
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <Button v-bind="args" class="inline-flex items-center justify-center w-auto px-4 py-2">
        <span v-if="args.icon" class="mr-2" v-html="args.icon"></span>
        {{ args.default }}
      </Button>
    `,
  };
}

// Default button (Continue with Google)
export const Default = Template.bind({});
Default.args = {
  color: 'bg-black text-white',
  disabled: false,
  default: 'Continue With Google',
  icon: '<i class="fa-brands fa-google text-base"></i>',  // Google icon
};

// Continue with Facebook button
export const Facebook = Template.bind({});
Facebook.args = {
  color: 'bg-black text-white',
  disabled: false,
  default: 'Continue With Facebook',
  icon: '<i class="fa-brands fa-facebook-f text-base"></i>',  // Facebook icon
};

// Continue with Apple button
export const Apple = Template.bind({});
Apple.args = {
  color: 'bg-black text-white',
  disabled: false,
  default: 'Continue With Apple',
  icon: '<i class="fa-brands fa-apple text-base"></i>',  // Apple icon
};

// Enter button
export const Enter = Template.bind({});
Enter.args = {
  color: 'bg-gray-900 text-white',
  disabled: false,
  default: 'Enter',
  icon: '<i class="fa-solid fa-key text-base text-black/70"></i>',  // Key icon
};

// Export the story object separately
export default buttonStory;
