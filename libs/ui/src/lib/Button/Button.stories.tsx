import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

const Story: ComponentMeta<typeof Button> = {
  component: Button,
  title: 'Button',
};
export default Story;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const WithCustomStyles = () => (<>
    <Button size="sm">Button (sm)</Button>
    <Button>Button (solid)</Button>
    <Button>button (md)</Button>
    <Button size="md">button (lg)</Button>
  </>
  );