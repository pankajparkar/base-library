import { Button } from '@storybook/angular/demo';
import { AppComponent } from './app/app.component';
import { action } from '@storybook/addon-actions';

export default { title: 'My Button' }

export const withText = () => ({
  component: Button,
  props: {
    text: 'Hello Button',
  },
});

export const withEmoji = () => ({
  component: Button,
  props: {
    text: '😀 😎 👍 💯',
  },
});

export const appComponent = () => ({
  component: AppComponent,
  props: {
    test: '😀 😎 👍 💯',
    onTest: action('On Test')
  },
});
