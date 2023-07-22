type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  VerifyOtp: undefined;
  Search: undefined;
  MitraDetail: { mitraId: number; latitude: string; longitude: string };
  SelectOrder: { mitraId: string };
  SetAddress: undefined;
  SelectOrderMethod: undefined;
  Order: undefined;
  DetailOrder: undefined;
};

type HomeTabParamList = {
  HomeTab: undefined;
  StatisticTab: undefined;
  HistoryTab: undefined;
  ProfileTab: undefined;
};

export { RootStackParamList, HomeTabParamList };
