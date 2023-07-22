export interface RegisterResponse {
  data: Data;
  status: string;
  message?: string;
}

export interface Data {
  user_id: number;
}

export interface LoginResponse {
  data: string;
  status: string;
}

export interface LoginResponseNeedVerifyOtp {
  status: string;
  message: string;
  data: {
    is_verify: boolean;
  };
}

export interface VerifyOtpResponse {
  data: Data;
  status: string;
}

export interface Data {
  access_token: string;
}

export interface GeneralErrorResponse {
  message?: string;
  data: string;
  status: string;
}

// Nearby
export interface NearbyStoreResponse {
  current_page: number;
  data: NearbyStore[];
  from: number;
  last_page: number;
  per_page: number;
  to: number;
  total: number;
}

export interface NearbyStore {
  address: string;
  address_detail: string;
  distance: Distance;
  id: number;
  is_delivery: number;
  is_open: number;
  is_pickup: number;
  latitude: string;
  longitude: string;
  name: string;
}

export interface Distance {
  formated: string;
  raw: number;
}

// Nearby Detail
export interface NearbyStoreDetailResponse {
  data: NearbyStoreDetail;
  status: string;
}

export interface NearbyStoreDetail {
  address: string;
  address_detail: string;
  contact_name: null;
  contact_phone: null;
  description: string;
  distance: Distance;
  email_notification: null;
  id: number;
  is_delivery: number;
  is_open: number;
  is_pickup: number;
  latitude: string;
  longitude: string;
  name: string;
  user_id: number;
}

export interface Distance {
  formated: string;
  raw: number;
}

export interface WasteCategoriesResponse {
  data: WasteCategory[];
  status: string;
}

export interface WasteCategory {
  category_name: string;
  children: WasteCategory[];
  id: number;
  parent_id: number | null;
}
