

import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    ListView,
    TouchableOpacity,
    View,
    InteractionManager,
} from 'react-native';

import {ClassAction} from '../actions/ClassificationAction.js';
import Common from '../common/common';
import Loading from '../common/Loading';
import Detial from '../containers/ClassDetialContainer';
import HeaderView from '../common/HeaderView';
import Icon from 'react-native-vector-icons/FontAwesome';


let isLoading = true;

class Class extends Component {
    constructor(props) {
        super(props);
        this._renderRow = this.renderRow.bind(this);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
        };
    }
    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            const {dispatch} = this.props;
            dispatch(ClassAction(isLoading));
        })
    }
    render() {
        const {Class} = this.props;
        // console.log(this.props);
        let classList = Class.ClassDate;

        return (
            <View>
                <HeaderView
                    titleView= '分类'
                    />
                {Class.isLoading ? <Loading /> :
                    <ListView
                        dataSource={this.state.dataSource.cloneWithRows(classList) }
                        renderRow={this._renderRow}
                        enableEmptySections={true}
                        initialListSize= {10}
                        style={{ height: Common.window.height - 54 - 64 }}
                        />
                }
            </View>
        );

    }

    renderRow(rowDate) {
        // console.log(rowDate);
        return (

            <TouchableOpacity
                activeOpacity={0.75}
                onPress={this._onPressFeedItem.bind(this, rowDate.tag_name) }
                style={styles.center}
                >
                <View style = {styles.container}>
                    <Text>{rowDate.tag_name + ' 共' + rowDate.pin_count + '张'}</Text>
                   <Icon color="gray" size={30} name='angle-right'/>
                </View>

            </TouchableOpacity>
        );
    }
    _onPressFeedItem(rowDate) {
        InteractionManager.runAfterInteractions(() => {
            this.props.navigator.push({
                name: 'Detial',
                component: Detial,
                passProps: {
                    rowDate: rowDate,
                }
            })
        });
    }

}

const styles = StyleSheet.create({
center:{
   flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
},
    container: {
        width: Common.window.width-20,
        height: 50,
        paddingLeft: 10,
        
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,

    },

});
module.exports = Class;