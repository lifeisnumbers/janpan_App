import React, { useRef,useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native'; 
import { DrawerLayoutAndroid, View, Text, Image, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import HiraganaScreen from '../Screen/Hiragana';
import KatakanaScreen from '../Screen/Katakana';
import Bai1 from '../Screen/minanihongo/bai1';
import Kanji from '../Screen/Kanji';
import GhiNhoScreen from '../Screen/GhiNho';
import Flashcard from '../Screen/Flashcard';
const Bottom = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
const TabIcon = ({ name, focused, imageSource }) => {
  if (imageSource) {
    return <Image source={imageSource} style={styles.icon} />;
  } else {
    return <IonIcon name={name} size={25} color={focused ? '#4390f7' : '#000'} />;
  }
};
const BottomTabIconOptions = (drawerRef, title, name) => {
  return {
    title: title,
    tabBarIcon: ({ focused }) => 
      <TabIcon name={name} focused={focused} />,
    headerLeft: () => (
      <IonIcon
        name="menu"
        size={30}
        onPress={() => drawerRef.current?.openDrawer()}
      />
    ),
  };
};

const TopTabIconOptions = (name, title, imageSource) => {
  return {
    title: title,
    tabBarIcon: ({ focused }) => 
      <TabIcon name={name} focused={focused} imageSource={imageSource} />,
  };
};

const DrawerContentBangChuCai = () => {
  const navigation = useNavigation(); // Using the hook
  return (
    <View style={styles.ghinhocontainer}>
      <TouchableOpacity style={styles.button}   
      onPress={() => navigation.navigate('Flashcard')} >
        <Text style={styles.fontlabel1}>
        Flashcard
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}   
      onPress={() => navigation.navigate('TracNghiem')} >
        <Text style={styles.fontlabel1}>
          Trắc nghiệm
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const DrawerContentBai1 = () => {
  const navigation = useNavigation(); // Using the hook
  return (
    <ScrollView>
    <View style={styles.ghinhocontainer}>
      <TouchableOpacity style={styles.button}   
      onPress={() => navigation.navigate('Bai1', { lessonNumber: 1 })} >
        <Text style={styles.fontlabel1}>
        Bài 1
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}   
      onPress={() => navigation.navigate('Bai1', { lessonNumber: 2 })} >
       <Text style={styles.fontlabel1}>
        Bài 2
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}   
       onPress={() => navigation.navigate('Bai1', { lessonNumber: 3 })}  >
        <Text style={styles.fontlabel1}>
        Bài 3
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}   
      onPress={() => navigation.navigate('Bai1', { lessonNumber: 4 })}>
        <Text style={styles.fontlabel1}>
          Bài 4
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}   
      onPress={() => navigation.navigate('Bai1', { lessonNumber: 5 })} >
        <Text style={styles.fontlabel1}>
          Bài 5
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}   
      onPress={() => navigation.navigate('Bai1', { lessonNumber: 6 })}>
        <Text style={styles.fontlabel1}>
          Bài 6
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}   
      onPress={() => navigation.navigate('Bai1', { lessonNumber: 7 })}>
        <Text style={styles.fontlabel1}>
          Bài 7
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}   
      onPress={() => navigation.navigate('Bai1', { lessonNumber: 8 })} >
        <Text style={styles.fontlabel1}>
          Bài 8
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}   
     onPress={() => navigation.navigate('Bai1', { lessonNumber: 9 })} >
        <Text style={styles.fontlabel1}>
          Bài 9
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}   
      onPress={() => navigation.navigate('Bai1', { lessonNumber: 10 })} >
        <Text style={styles.fontlabel1}>
          Bài 10 
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}   
      onPress={() => navigation.navigate('Bai1', { lessonNumber: 11 })} >
        <Text style={styles.fontlabel1}>
          Bài 11
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}   
      onPress={() => navigation.navigate('Bai1', { lessonNumber: 12 })} >
        <Text style={styles.fontlabel1}>
          Bài 12
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}   
      onPress={() => navigation.navigate('Bai1', { lessonNumber: 13 })}>
        <Text style={styles.fontlabel1}>
          Bài 13
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}   
      onPress={() => navigation.navigate('Bai1', { lessonNumber: 14 })} >
        <Text style={styles.fontlabel1}>
          Bài 14
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}   
      onPress={() => navigation.navigate('Bai1', { lessonNumber: 15 })}>
        <Text style={styles.fontlabel1}>
          Bài 15
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}   
      onPress={() => navigation.navigate('Bai1', { lessonNumber: 16})}>
        <Text style={styles.fontlabel1}>
          Bài 16
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}   
      onPress={() => navigation.navigate('Bai1', { lessonNumber: 17 })} >
        <Text style={styles.fontlabel1}>
          Bài 17
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}   
      onPress={() => navigation.navigate('Bai1', { lessonNumber: 18 })} >
        <Text style={styles.fontlabel1}>
          Bài 18
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}   
      onPress={() => navigation.navigate('Bai1', { lessonNumber: 19 })} >
        <Text style={styles.fontlabel1}>
          Bài 19
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}   
      onPress={() => navigation.navigate('Bai1', { lessonNumber: 20})} >
        <Text style={styles.fontlabel1}>
          Bài 20
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}   
      onPress={() => navigation.navigate('Bai1', { lessonNumber: 21 })} >
        <Text style={styles.fontlabel1}>
          Bài 21
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}   
      onPress={() => navigation.navigate('Bai1', { lessonNumber: 22 })} >
        <Text style={styles.fontlabel1}>
          Bài 22
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}   
      onPress={() => navigation.navigate('Bai1', { lessonNumber: 23 })} >
        <Text style={styles.fontlabel1}>
          Bài 23
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}   
      onPress={() => navigation.navigate('Bai1', { lessonNumber: 24 })} >
        <Text style={styles.fontlabel1}>
          Bài 24
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}   
      onPress={() => navigation.navigate('Bai1', { lessonNumber: 25 })} >
        <Text style={styles.fontlabel1}>
          Bài 25
        </Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
  };
const DrawerContentKanji = () => {
  const navigation = useNavigation(); // Using the hook
  return (
    <View style={styles.ghinhocontainer}>
      <TouchableOpacity style={styles.button}   
      onPress={() => navigation.navigate('Flashcard')} >
        <Text style={styles.fontlabel1}>
        Flashcard
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}   
      onPress={() => navigation.navigate('TracNghiem')} >
        <Text style={styles.fontlabel1}>
          Trắc nghiệm
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const BangChuCaiTab = ( ) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Hiragana" component={HiraganaScreen} 
        options={TopTabIconOptions('home', 'Hiragana', require('../assets/a-hiragana.png'))} />
      <Tab.Screen name="Katakana" component={KatakanaScreen}
        options={TopTabIconOptions('home', 'Katakana', require('../assets/a-katakana.png'))} />
    </Tab.Navigator>
  );
};
const GhinhoStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BangChuCaiTab" component={BangChuCaiTab} options={{headerShown:false}}/>
      <Stack.Screen name="TracNghiem" component={GhiNhoScreen} options={{headerShown:true, title:'Trắc nghiệm'}}/>
      <Stack.Screen name="Flashcard" component={Flashcard} options={{headerShown:true, title:'Flashcard'}}/>
    </Stack.Navigator>
  );
};
const tuvungStack = () =>{
  return (
    <Stack.Navigator>
      <Stack.Screen name="Bai1" component={Bai1} options={{headerShown:false}}/>
      <Stack.Screen name="TracNghiem" component={GhiNhoScreen} options={{headerShown:true, title:'Trắc nghiệm'}}/>
      <Stack.Screen name="Flashcard" component={Flashcard} options={{headerShown:true, title:'Flashcard'}}/>
    </Stack.Navigator>
  );
}

const MainScreen = () => {
  const drawer = useRef(null);
  const [currentScreen, setCurrentScreen] = useState('BangChuCai');
  const renderDrawerContent = () => {
    switch (currentScreen) {
      case 'BangChuCai':
        return <DrawerContentBangChuCai />;
      case 'Bai1':
        return <DrawerContentBai1 />;
      case 'Kanji':
        return <DrawerContentKanji />;
      default:
        return <DefaultDrawerContent />;
    }
  };
  return (
    <DrawerLayoutAndroid
      drawerWidth={250}
      drawerPosition={'left'}
      renderNavigationView={renderDrawerContent}
      ref={drawer}
    >
      <Bottom.Navigator>
        <Bottom.Screen
          name="BangChuCai"
          component={GhinhoStack}
          options={BottomTabIconOptions(drawer, 'Bảng chữ cái', 'text-outline')}
          listeners={{ focus: () => setCurrentScreen('BangChuCai') }}
        />
        <Bottom.Screen
          name="Bai1"
          component={Bai1}
          options={BottomTabIconOptions(drawer, 'Minna', 'book')}
          listeners={{ focus: () => setCurrentScreen('Bai1') }}
        />
        <Bottom.Screen
          name="Kanji"
          component={Kanji}
          options={BottomTabIconOptions(drawer, 'Kanji', 'logo-yen')}
          listeners={{ focus: () => setCurrentScreen('Kanji') }}
        />
      </Bottom.Navigator>
    </DrawerLayoutAndroid>
  );
};


const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
  ghinhocontainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  button:{
    backgroundColor:'#4390f7',
    marginBottom:10,
  },
  fontlabel1:{
    fontSize:20,
    fontWeight:'bold',
    padding:10,
    color:'white',
  },
});

export default MainScreen;
