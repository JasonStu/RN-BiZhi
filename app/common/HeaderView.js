/**
 * Created by ljunb on 16/5/8.
 * 导航栏标题
 */
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Header extends React.Component {

    render() {

        let NavigationBar = [];

        // 左边图片按钮
        if (this.props.leftIcon != undefined) {
            NavigationBar.push(
                <TouchableOpacity
                    key={'leftIcon'}
                    activeOpacity={0.75}
                    style={styles.leftIcon}
                    onPress={this.props.leftIconAction}
                    >
                    <Icon color="black" size={30} name={this.props.leftIcon}/>
                </TouchableOpacity>
            )
        }

        // 标题
        if (this.props.title != undefined) {
            NavigationBar.push(
                <Text key={'title'} style={styles.title}>{this.props.title}</Text>
            )
        }
        return (
            <View style={styles.navigationBarContainer}>
                {NavigationBar}
            </View>
        )
    }
}

const styles = StyleSheet.create({

    navigationBarContainer: {
        marginTop: 20,
        flexDirection: 'row',
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
        backgroundColor: 'white'
    },

    title: {
        fontSize: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },

    leftIcon: {
        marginLeft: 15,
    },

    rightIcon: {
        position: 'absolute',
        right: 10,
        top: 7
    },

    rightButton: {
        position: 'absolute',
        right: 10,
        height: 44,
        justifyContent: 'center',
        flexDirection: 'row',
    },

    buttonTitleFont: {
        color: 'white',
        fontSize: 15,
    },

    rightMenu: {
        position: 'absolute',
        right: 10,
        height: 44,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
})