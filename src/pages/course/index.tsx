import React from 'react';
import {ScrollView, Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './style';



const ListLearning = ({navigation}: {navigation:any}) => {
  return (
    <ScrollView style={styles.canvas}>
      <View style={styles.Header}>
        <View>
          <Text style={styles.TextNormal}>Hello, </Text>
          <Text style={styles.TextBoldH3}>Aldi Riansyah</Text>
        </View>
        <View style={styles.NotifIcon}>
          <Image source={require('../../../assets/images/Notif.png')}></Image>
        </View>
      </View>
      <View style={styles.Search}>
        <Text style={styles.SearchText}> Search course </Text>
        <Image
          source={require('../../../assets/images/Search.png')}
          style={styles.SearchIcon}></Image>
      </View>

      <View style={styles.category}>
        <Text>Category : </Text>
        <Text style={styles.textCategory}> #CSS </Text>
        <Text style={styles.textCategory}> #UX </Text>
        <Text style={styles.textCategory}> #Swift </Text>
        <Text style={styles.textCategory}> #UI </Text>
      </View>

          <TouchableOpacity onPress={()=> navigation.navigate('DetailCourse')}>
      <View style={styles.card}>
        <View style={styles.cardImage} >
          <Image
            source={require('../../../assets/images/cddiskusi.png')}
            style={{height: 134, width: 323}}></Image>
          <Text style={styles.textCategory}> $50 </Text>
        </View>
        <View style={styles.deskripsi}>
          <Text style={{fontSize:12 , color:'#5BA092' , fontWeight:'600', margin:5}}>3 h 30 min</Text>
          <Text style={{fontSize: 22, lineHeight: 32, fontWeight: '700', margin:5}}>
            UI
          </Text>
          <Text style={{margin:5}}>Advance mobile interface design</Text>
        </View>
      </View>
          </TouchableOpacity>

      <View style={styles.card}>
        <View style={styles.cardImage2}>
          <Image
            source={require('../../../assets/images/ckLongDistance.png')}
            style={{height: 154, width: 333, alignItems: 'center'}}></Image>
        </View>
        <View style={styles.deskripsi}>
          <Text style={{fontSize:12 , color:'#5BA092' , fontWeight:'600', margin:5}}>3 h 30 min</Text>
          <Text style={{fontSize: 22, lineHeight: 32, fontWeight: '700', margin:5}}>
            UI
          </Text>
          <Text style={{margin:5}}>Advance mobile interface design</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ListLearning;
