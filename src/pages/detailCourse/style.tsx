import {StyleSheet} from 'react-native';

const styles =  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
   
    container: {
      paddingHorizontal: 15,
    },
   
    header: {
      flexDirection: 'row',
      width: '100%',
    },
   
    styleImage: {
      width: 40,
      height: 40
    },
   
    viewText: {
      alignSelf: 'center',
      width: '80%',
    },
   
    textHeaderStyle: {
      textAlign: 'center',
      fontSize: 25,
      fontWeight: 'bold',
      color: '#3C3A36'
    },
   
    titleContainer: {
      top: 30,
      alignItems: 'center',
    },
   
    textTitleStyle: {
      color: '#3C3A36',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
   
    textPartLessonStyle: {
      color: '#78746D',
      fontSize: 14,
      marginBottom: 10,
    },
   
    btnActionStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      marginBottom: 10,
    },
   
    btnLessons: {
      backgroundColor: '#F8F2EE',
      height: 42,
      width: 114,
      borderBottomLeftRadius: 16,
      borderTopLeftRadius: 16,
      justifyContent: 'center',
    },
   
    btnTests: {
      backgroundColor: '#F8F2EE',
      height: 42,
      width: 114,
      justifyContent: 'center',
    },
   
    btnDiscuss: {
      backgroundColor: '#F8F2EE',
      height: 42,
      width: 114,
      borderBottomRightRadius: 16,
      borderTopRightRadius: 16,
      justifyContent: 'center',
    },
   
    textStyle: {
      color: '#78746D',
      fontSize: 16,
      textAlign: 'center',
      justifyContent: 'center',
    },
   
    styleImageContent: {
      width: '100%',
      height: 194,
    },
   
    imgContentContainer: {
      top: 50,
    },
   
    contentContainer: {
      top: 80,
    },
   
    introText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#3C3A36',
    },
   
    contentText: {
      color: '#78746D',
      fontSize: 14,
      lineHeight: 21,
      top: 10,
    }
  })

  export default styles;