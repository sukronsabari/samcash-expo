import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  Platform,
  Linking,
} from 'react-native';
import * as Location from 'expo-location';

import InputAutoComplete from '../components/InputAutoComplete';
import Constants from 'expo-constants';

import MapView, { LatLng, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetScrollView,
  useBottomSheet,
} from '@gorhom/bottom-sheet';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { SearchIcon } from '../assets';
import { GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import MitraItem from '../components/MitraItem';
import api from '../api';
import { NearbyStore } from '../api/apiResponseType';
import Loading from '../components/Loading';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
  latitude: -0.5337414,
  longitude: 117.1235598,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

type LocationProps = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};

const openAppSettings = () => {
  if (Platform.OS === 'android') {
    Linking.openSettings();
  }
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentLocation, setCurrentLocation] = useState<LocationProps>({
    latitude: 0,
    longitude: 0,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  const [locationResult, setLocationResult] = useState<LatLng>();

  const [errorMsg, setErrorMsg] = useState('');
  const mapRef = useRef<MapView>(null);

  const [nearbyStore, setNearbyStore] = useState<NearbyStore[]>(
    [] as NearbyStore[]
  );

  useEffect(() => {
    async function getLocationPermission() {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }

        const location = await Location.getCurrentPositionAsync({});
        if (location) {
          setCurrentLocation((prev) => ({
            ...prev,
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }));
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getLocationPermission();
  }, []);

  useEffect(() => {
    async function fetchData() {
      if (currentLocation) {
        await getNearbyStore();
      }
    }

    fetchData();
  }, [currentLocation]);

  const moveCameraToPlace = (details: GooglePlaceDetail | null) => {
    const position = {
      latitude: details?.geometry.location.lat || 0,
      longitude: details?.geometry.location.lng || 0,
    };

    if (position.latitude !== 0 && position.longitude !== 0) {
      setLocationResult(position);
      moveTo(position);
    }
  };

  const moveTo = async (position: LatLng) => {
    const camera = await mapRef.current?.getCamera();

    if (camera) {
      camera.center = position;
      mapRef.current?.animateCamera(camera, { duration: 1000 });
    }
  };

  const getNearbyStore = async () => {
    const result = await api.getNearbyStore({
      latitude: currentLocation.latitude,
      longitude: currentLocation.longitude,
    });

    if (result?.data) {
      setNearbyStore(result.data);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <GestureHandlerRootView className="flex-1">
      <MapView
        ref={mapRef}
        className="flex-1 h-full w-full"
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_POSITION}
        rotateEnabled={false}
      >
        {currentLocation.longitude && currentLocation.longitude && (
          <Marker
            coordinate={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
            }}
          />
        )}
        {locationResult && <Marker coordinate={locationResult} />}
      </MapView>

      {/* headers */}
      <View
        className="absolute w-full px-4 pt-4"
        style={{ top: Constants.statusBarHeight }}
      >
        <InputAutoComplete onPlaceSelected={moveCameraToPlace} />
      </View>

      <BottomSheet
        index={0}
        snapPoints={['20%', '80%']}
        style={{ backgroundColor: 'white' }}
        enableContentPanningGesture={false}
        // enableHandlePanningGesture={false} // control button ke atas
        enablePanDownToClose
      >
        <Text
          className="text-dark text-sm pl-4 mt-3"
          style={{ fontFamily: 'Poppins-Medium' }}
        >
          Terdekat
        </Text>
        <BottomSheetFlatList
          contentContainerStyle={{ paddingTop: 15, paddingHorizontal: 16 }}
          data={nearbyStore}
          renderItem={({ item }) => (
            <MitraItem
              key={item.id}
              {...item}
              isOpen={item.is_open}
              distance={item.distance.formated}
            />
          )}
        />
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default App;
