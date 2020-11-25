/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  Animated
} from 'react-native';


const Pictures = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'green' }}>
      <Text>{'Pictures'}</Text>
      {/* <Image
        style={{ resizeMode: 'cover', width: '100%', }}
        source={require('./assets/cover1.jpg')}
      /> */}
      <View style={{backgroundColor:'grey',height:100}}/>
      <View style={{backgroundColor:'grey',height:100}}/>

      <View style={{backgroundColor:'grey',height:100}}/>
      <View style={{backgroundColor:'grey',height:100}}/>
      <View style={{backgroundColor:'grey',height:100}}/>
      <View style={{backgroundColor:'grey',height:100}}/>
      <View style={{backgroundColor:'grey',height:100}}/>
      <View style={{backgroundColor:'grey',height:100}}/>

    </View>
  )
}
const Movies = () => {
  return (
    <View>
      <Image
        style={{ resizeMode: 'cover', width: '100%', height: '30%' }}
        source={require('./assets/cover1.jpg')}
      />
      <Text>{'Movies'}</Text>
    </View>
  )
}
const Games = () => {
  return (
    <View>
      <Image
        style={{ resizeMode: 'cover', width: '100%', height: '30%' }}
        source={require('./assets/cover1.jpg')}
      />
      <Text>{'Games'}</Text>
    </View>
  )
}


const App = () => {
  const [tabValue, setTabValue] = useState('movies');
  const [scrollYValue, setScrollYValue] = useState(0);

  const onClick = (value) => {
    setTabValue(value);
  }
  const onScrollHandle = e => {
    const scrollPosition = e.nativeEvent.contentOffset.y;
    console.log(scrollPosition)
    setScrollYValue(scrollPosition)
  }
  return (
    <View style={{ flex: 1, }}>
      <StatusBar barStyle='light-content' />
      <Image
        style={{ resizeMode: 'cover', width: '100%', height: '30%' }}
        source={require('./assets/cover.jpg')}
      />
      <ScrollView
        onScroll={onScrollHandle}
      >
        <View style={{ marginTop: '5%' }}>
          <Text>{'CONTENTS'}</Text>
        </View>
        <Animated.View style={{
          flex:1,
          transform: [{ translateY: scrollYValue*12 }],
          position: 'absolute',
          // bottom:'60%',
          // height:scrollYValue*100,
          backgroundColor: '#222831', flexDirection: 'row', justifyContent: 'space-between'
        }}>
          <View style={{ width: '33%', paddingVertical: '3%', backgroundColor: 'red', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => onClick('pictures')}
            >
              <Text>{'Pictures'}</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: '33%', paddingVertical: '3%', backgroundColor: 'red', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => onClick('movies')}
            >
              <Text>{'Movies'}</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: '33%', paddingVertical: '3%', backgroundColor: 'red', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => onClick('games')}
            >
              <Text>{'Games'}</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
        <View style={{ flex: 1 }}>
          {
            tabValue === 'pictures' ?
              <Pictures /> :
              tabValue === 'movies' ?
                <Movies /> :
                tabValue === 'games' ?
                  <Games /> : null



          }
        </View>
      </ScrollView>


    </View>
  )
}

const styles = StyleSheet.create({

});

export default App;
