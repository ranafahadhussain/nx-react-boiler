import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Spinner } from './Spinner';

const Story: ComponentMeta<typeof Spinner> = {
  component: Spinner,
  title: 'Spinner',
};
export default Story;

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const AllSpinners = () => (<>
    <Spinner  /> 
        <br />
    <Spinner  size={'xs'} color= {'green'}/>

  </>
  );