import React from 'react';
import Artwork from '../components/Artwork';

export default {
    component: Artwork,
    title: 'Artwork',
    args: {name: 'Plowzer'}
}

const Template = (args) => <Artwork {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Secondary.args = {
    name: 'Phil'
}
