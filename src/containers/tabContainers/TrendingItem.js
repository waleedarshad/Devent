import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
  Dimensions
} from 'react-native';

const deviceWidth = require('Dimensions').get('window').width;
const deviceHeight = require('Dimensions').get('window').height;

class TrendingItem extends Component {

  constructor (props) {
    super(props)
    const data = this.props.item[1]
    const width = this.getWidth(data)
    this.state = {
      pts: new Animated.Value(width)
    }
  }

  getWidth(data) {
    const maxWidth = deviceWidth*0.8;
    const widthFactor = maxWidth/100;
    const width = data*widthFactor;
    return width;
  }

  render() {
    const { pts } = this.state;
    const { title, value } = this.props.item;
    const { skeleton, item , label, data, bar, points} = styles;
    return(
      <View style={[item]}>
        <Text style={label}>{this.props.item[0]}</Text>
          <View style={data}>
            {pts &&
              <Animated.View style={[bar, points, {width: pts}]} />
            }
            <Text style={styles.dataNumber}>{this.props.item[1]}</Text>
          </View>
      </View>
    )
  }
}

const styles = {
  skeleton: {
    borderWidth: 1,
    borderColor: 'red'
  },
  item: {
    flexDirection: 'column',
    marginBottom: 10,
    paddingHorizontal: 10
  },
  data: {
    flex: 2,
    flexDirection: 'row'
  },
  bar: {
    alignSelf: 'center',
    borderRadius: 5,
    height: 8,
    marginRight: 5
  },
  points: {
    backgroundColor: '#F55443'
  },
}

export default TrendingItem;