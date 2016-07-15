


import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import HomeContainer from '../containers/HomeContainer';

const tabBarItems = [
    { title: '主页', icon: () => <Image style={{ width: 40, height: 40 }} source={require('./imgs/artisanal.png') }/>, component: HomeContainer },
    { title: '列表', icon: () => <Image style={{ width: 40, height: 40 }} source={require('./imgs/artisanal.png') }/>, component: HomeContainer },
    { title: '设置', icon: () => <Image style={{ width: 40, height: 40 }} source={require('./imgs/artisanal.png') }/>, component: HomeContainer },
]
export default class TarBarView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: tabBarItems[0].title,
        };
    }
    render() {
        return (
            <TabNavigator tabBarStyle={{ height: 60 }}>
                {
                    tabBarItems.map((controller, i) => {
                        let Component = controller.component;
                        return (
                            <TabNavigator.Item
                                key= {i}
                                selected={this.state.selectedTab === controller.title}
                                title={controller.title}
                                renderIcon={controller.icon}
                                onPress={() => this.setState({ selectedTab: controller.title }) }>
                                <Component navigator = {this.props.navigator} {...this.props}/>
                            </TabNavigator.Item>
                        )
                    })
                }
            </TabNavigator >

        );
    }


}