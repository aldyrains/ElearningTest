import ListLearning from './pages/course';
import * as React from 'react';
import { Text, View , Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Setting from './pages/setting';
import Profile from './pages/profile';
import DetailCourse from './pages/detailCourse';

function course({navigation}:{navigation:any}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , backgroundColor:'white'}}>
      <ListLearning  navigation={navigation}/>
  </View>
  );
}


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="course"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name='Course'
        component={course}
        options={{
          tabBarLabel: 'Course',
          tabBarIcon: ({ color, size }) => (
          <Image source={require('../assets/images/courses.png')}/>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color, size }) => (
            <Image source={require('../assets/images/Vector.png')}/>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
          <Image source={require('../assets/images/profile.png')}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="course" component={course} />
        <Stack.Screen name="DetailCourse" component={DetailCourse} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
      <MyTabs />
    </NavigationContainer>
  );
}