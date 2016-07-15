/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  Component
} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  ListView,
  TouchableHighlight,
  View,
  InteractionManager,
} from 'react-native';

import {
  home
} from '../actions/homeAction';
let limit = 21;
let offest = '';
let tag = '';
let isLoadMore = false;
let isRefreshing = false;
let isLoading = true;
class Home extends Component {

  constructor(props) {
    super(props); //这一句不能省略，照抄即可
    this._renderRow = this._renderRow.bind(this);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      const {
        dispatch
      } = this.props;
      dispatch(home(tag, offest, limit, isLoadMore, isRefreshing, isLoading));
    })
  }

  render() {
    const {
      Home
    } = this.props;
    let homeList = Home.HomeList;
    console.log(homeList);
    // if (!this.state.loaded) {
    //   return this.renderLoadingView();
    // }


    return (
      <ListView
        dataSource={this.state.dataSource.cloneWithRows(homeList) }
        renderRow={this._renderRow}
        contentContainerStyle={styles.list}
        enableEmptySections={true}
        style={styles.listView}
        />
    );

  }


  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          正在网络上获取电影数据……
        </Text>
      </View>
    );
  }



  //这是渲染一个电影信息
  _renderRow(rowDate) {
    console.log('http://img.hb.aicdn.com/'+rowDate.file.key+'_fw236');
  
    return (
      <View style={styles.container}>
        <Image
          source={{uri:'http://img.hb.aicdn.com/'+rowDate.file.key+'_fw236'}}
          style={styles.thumbnail}
          />
      </View>
    );
  }



}


const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 110,
    height: 110,

  },
  //让rightContainer在父容器中占据Image之外剩下的全部空间。

  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

});

module.exports = Home;