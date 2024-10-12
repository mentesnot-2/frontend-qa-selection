import Login from '~/components/organisms/LoginForm.vue';
import Button from '~/components/atoms/Button.vue';

export default {
  title: 'Organisms/Login',
  component: Login,
  argTypes: {
    email: { control: 'text', description: 'Email entered in the form' },
    emailError: { control: 'text', description: 'Error message for invalid or empty email' },
    handleSubmit: { action: 'submit', description: 'Triggered when the form is submitted' },
    googleLogin: { action: 'login with Google', description: 'Triggered when Google login is clicked' },
    facebookLogin: { action: 'login with Facebook', description: 'Triggered when Facebook login is clicked' },
    appleLogin: { action: 'login with Apple', description: 'Triggered when Apple login is clicked' },
  },
};

const Template = (args, { argTypes }) => ({
  components: { Login, Button },
  props: Object.keys(argTypes),
  template: `
    <Login
      v-bind="$props"
      @submit="handleSubmit"
      @googleLogin="googleLogin"
      @facebookLogin="facebookLogin"
      @appleLogin="appleLogin"
    />
  `,
});

export const Default = Template.bind({});
Default.args = {
  email: '',
  emailError: '',
};

export const InvalidEmail = Template.bind({});
InvalidEmail.args = {
  email: 'invalid-email',
  emailError: 'Please enter a valid email',
};

export const EmptyEmail = Template.bind({});
EmptyEmail.args = {
  email: '',
  emailError: 'Email cannot be empty',
};
