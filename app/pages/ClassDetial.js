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
  TouchableOpacity,
  View,
  InteractionManager,
  RefreshControl,
  Navigator,
} from 'react-native';

import {
  classDital,
  resetState,
} from '../actions/classDetialAction';
import Common from '../common/common';
import Loading from '../common/Loading';
import LoadMoreFooter from '../common/LoadMoreFooter';
import HeaderView from '../common/HeaderView';
import HomeDetial from './HomeDetial';


let limit = 21;
let offest = '';
let tag = '';
let isLoadMore = false;
let isRefreshing = false;
let isLoading = true;
class ClassDetial extends Component {

  constructor(props) {
    super(props); //这一句不能省略，照抄即可
    // debugger
    this._renderRow = this._renderRow.bind(this);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
  }

  componentDidMount() {
      const {dispatch, rowDate} = this.props
      tag = rowDate;
      dispatch(classDital(tag, offest, limit, isLoadMore, isRefreshing, isLoading));
  }

  componentWillUnmount() {
      const {dispatch} = this.props;
      dispatch(resetState());
  }

  render() {
    const {ClassDetial} = this.props;
    debugger
    // console.log(this.props);
    // debugger
    let classDetialList = ClassDetial.ClassDetialList;
    let titleName = tag;
    return (
      <View>
        <HeaderView
          titleView= {titleName}
          leftIcon={tag ? 'angle-left' : null}
          leftIconAction={() => this.props.navigator.pop() }
ß
          />
        {ClassDetial.isLoading ? <Loading /> :
          <ListView
            dataSource={this.state.dataSource.cloneWithRows(classDetialList) }
            renderRow={this._renderRow}
            contentContainerStyle={styles.list}
            enableEmptySections={true}
            initialListSize= {12}
            onScroll={this._onScroll}
            onEndReached={this._onEndReach.bind(this) }
            onEndReachedThreshold={12}
            renderFooter={this._renderFooter.bind(this) }
            style={styles.listView}
            refreshControl={
              <RefreshControl
                refreshing={ClassDetial.isRefreshing}
                onRefresh={this._onRefresh.bind(this) }
                title="正在加载中……"
                color="#ccc"
                />
            }
            />
        }
      </View>

    );

  }



  _renderRow(rowDate) {
    // console.log('http://img.hb.aicdn.com/' + rowDate.file.key + '_fw236');

    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={this._onPressFeedItem.bind(this,rowDate) }
          >
          <Image
            source={{ uri: 'http://img.hb.aicdn.com/' + rowDate.file.key + '_fw236' }}
            style={styles.thumbnail}
            />
        </TouchableOpacity>
      </View>
    );
  }

  _onPressFeedItem(rowDate) {
    InteractionManager.runAfterInteractions(() => {
      this.props.navigator.push({
          name: 'HomeDetial',
          component: HomeDetial,
          sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
          passProps: {
              rowDate: rowDate,
          }
      })
    });
  }
  _renderFooter() {
    const {ClassDetial} = this.props;
    if (ClassDetial.isLoadMore) {
      return <LoadMoreFooter />
    }
  }

  _onScroll() {
    if (!isLoadMore) isLoadMore = true;
  }

  // 下拉刷新
  _onRefresh() {
    if (isLoadMore) {
      const {dispatch, ClassDetial} = this.props;
      isLoadMore = false;
      isRefreshing = true;
      dispatch(classDital('', '', limit, isLoadMore, isRefreshing, isLoading));


    }
  }

  // 上拉加载
  _onEndReach() {

    InteractionManager.runAfterInteractions(() => {
      const {dispatch, ClassDetial} = this.props;
      let ClassDetialList = ClassDetial.ClassDetialList;
      isLoadMore = true;
      isLoading = false;
      offest = ClassDetialList[ClassDetialList.length - 1].seq
      dispatch(classDital(tag, offest, limit, isLoadMore, isRefreshing, isLoading));
    })

  }

}


const styles = StyleSheet.create({
  container: {
    width: Common.window.width / 3,
    height: Common.window.width / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  listView: {
    backgroundColor: '#F5FCFF',
    height: Common.window.height - 44 - 20,
  },
  thumbnail: {
    width: Common.window.width / 3 - 10,
    height: Common.window.width / 2 - 10,

  },
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',

  },
  header: {
    marginTop: 20,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  title: {
    color: 'black',
  },
});

module.exports = ClassDetial;