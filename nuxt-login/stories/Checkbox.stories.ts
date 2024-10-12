import Checkbox from '~/components/atoms/Checkbox.vue';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: { control: 'boolean' },
  },
  parameters: {
    backgrounds: { default: 'red' },  // Set background to black for this story
  },
};

const Template = (args) => ({
  components: { Checkbox },
  setup() {
    return { args };
  },
  template: '<Checkbox v-bind="args" />',
});

export const Unchecked = Template.bind({});
Unchecked.args = {
  checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};
