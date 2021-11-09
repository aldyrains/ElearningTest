import React, {useState, useEffect} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import styles from './style';
import AppLovinMAX from '../../AppLovinMax/index.js';

const DetailCourse = ({navigation}: {navigation: any}) => {
  const SDK_KEY =
    'ZTFJNszTUMNJGk5zFf7H6zNtTy50XpvcfV69weROCRN5Bqh4-Mosr9lxCma5WcaZrXFBy370Po2JucB4hwfNoa';

  const INTERSTITIAL_AD_UNIT_ID = Platform.select({
    android: 'bba20b8b5d6e5044',
  });

  const BANNER_AD_UNIT_ID = Platform.select({
    android: 'bba20b8b5d6e5044',
  });

  const [content, setstate] = useState(
    "You can launch a new career in web development today by learning HTML & CSS. You don't need a computer science degree or expensive software. All you need is a computer, a bit of time, a lot of determination, and a teacher you trust. Once the form data has been validated on the client-side, it is okay to submit the form. And, since we covered validation in the previous article, we're ready to submit! This article looks at what happens when a user submits a form — where does the data go, and how do we handle it when it gets there? We also look at some of the security concerns.",
  );
  const [retryAttempt, setRetryAttempt] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);

  AppLovinMAX.setTestDeviceAdvertisingIds([]);
  AppLovinMAX.initialize(SDK_KEY, () => {
    setIsInitialized(true);
  });

  function initializeInterstitialAds() {
    AppLovinMAX.addEventListener('OnInterstitialLoadedEvent', () => {
      setRetryAttempt(0);
    });
    AppLovinMAX.addEventListener('OnInterstitialLoadFailedEvent', () => {
      setRetryAttempt(retryAttempt + 1);
      var retryDelay = Math.pow(2, Math.min(6, retryAttempt));

      console.log(
        'Interstitial ad failed to load - retrying in ' + retryDelay + 's',
      );

      setTimeout(function () {
        loadInterstitial();
      }, retryDelay * 1000);
    });
    AppLovinMAX.addEventListener('OnInterstitialClickedEvent', () => {});
    AppLovinMAX.addEventListener('OnInterstitialDisplayedEvent', () => {});
    AppLovinMAX.addEventListener('OnInterstitialAdFailedToDisplayEvent', () => {
      loadInterstitial();
    });
    AppLovinMAX.addEventListener('OnInterstitialHiddenEvent', () => {
      loadInterstitial();
    });
    loadInterstitial();
  }

  function loadInterstitial() {
    AppLovinMAX.loadInterstitial('Ibba20b8b5d6e5044');
  }

  function initializeBannerAds() {
    AppLovinMAX.createBanner(
      'bba20b8b5d6e5044',
      AppLovinMAX.AdViewPosition.BOTTOM_CENTER,
    );
    AppLovinMAX.setBannerBackgroundColor('bba20b8b5d6e5044', '#000000');
  }
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../../assets/images/previousButton.png')}
              style={styles.styleImage}
            />
          </TouchableOpacity>
          <View style={styles.viewText}>
            <Text style={styles.textHeaderStyle}>HTML</Text>
          </View>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.textTitleStyle}>Tags For Headers</Text>
          <Text style={styles.textPartLessonStyle}>3 of 11 lessons</Text>

          <View style={styles.btnActionStyle}>
            <TouchableOpacity style={styles.btnLessons}>
              <Text style={styles.textStyle}>Lessons</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnTests}>
              <Text style={styles.textStyle}>Tests</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnDiscuss}>
              <Text style={styles.textStyle}>Discuss</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.imgContentContainer}>
          <Image
            source={require('../../../assets/images/CourseVideo.png')}
            style={styles.styleImageContent}
          />
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.introText}>Introduction</Text>
          <Text style={styles.contentText}>{content}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default DetailCourse;
