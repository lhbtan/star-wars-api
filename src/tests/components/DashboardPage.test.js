import React from 'react'
import { shallow } from 'enzyme';
import DashboardPage from '../../components/DashboardPage';

test('Should render dashboard component' , () => {
    const wrapper = shallow(<DashboardPage/>);
    expect(wrapper).toMatchSnapshot();
})