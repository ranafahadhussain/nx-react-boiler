import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from './Text';

const Story: ComponentMeta<typeof Text> = {
  component: Text,
  title: 'Text',
};
export default Story;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const  TextVarients= () => (<>
    <Text  >default </Text>
        <br />
    <Text  size={'1'} color= {'purple'}>purple </Text>
    <br />
    <Text  size={'2'} color= {'contrast'}>contrast </Text>
    <br />
    <Text  size={'3'} color= {'blue'}>blue </Text>

  </>
  );