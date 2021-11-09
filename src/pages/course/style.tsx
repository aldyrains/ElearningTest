import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
  },
  //Header style
  Header: {
    width: 353,
    height: 72,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20,
  },
  TextNormal: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: '400',
    // fontFamily:'Rubik-Variable1'
  },
  TextBoldH3: {
    fontSize: 32,
    lineHeight: 42,
    fontWeight: '700',
    // fontFamily:'Rubik-Variable1'
  },
  NotifIcon: {
    alignItems: 'flex-end',
    marginLeft: 100,
    height: 48,
    width: 48,
  },
  //Search Style
  Search: {
    height: 56,
    width: 353,
    borderWidth: 1,
    borderColor: '#BEBAB3',
    borderRadius: 12,
    alignItems: 'center',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:10
  },

  SearchIcon: {
    marginTop: 7,
    marginRight: 10,
    marginBottom: 10,
    height: 25,
    width: 25,
  },
  SearchText: {
    marginLeft: 10,
    color: '#78746D'
  },

  //Category Style
category:{
  width:353,
  height:24,
  justifyContent:'space-around',
  flexDirection:'row',
},

textCategory:{
  color:'white',
  padding:4,
  fontSize:12,
  height:24,
  borderRadius:10,
  backgroundColor:'#65AAEA',
  overflow:'hidden'

},
  //Card Style
  card:{
    borderWidth:1,
    width:353,
    height: 297,
    borderRadius:12,
    borderColor:'#BEBAB3',
    marginTop:20,


  },
  cardImage:{
    width: 351,
    height:195,
    borderRadius:12,
    backgroundColor: '#F8F2EE',
    alignItems:'flex-end',
    justifyContent:'flex-end',
    padding:10
  },
  cardImage2:{
    width: 351,
    height:195,
    borderRadius:12,
    backgroundColor: '#E6EDF4',
    alignItems:'center',
    justifyContent:'center',
  },
  textPrice:{
    color:'white',
    padding:4,
    height:24,
    width:57,
    borderRadius:10,
    backgroundColor:'#65AAEA',
    overflow:'hidden',
  },
  deskripsi:{
    margin: 5
  }
});

export default styles;
