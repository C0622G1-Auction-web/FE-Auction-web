// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_url_list_price_step: 'http://localhost:8080/api/v1/pricestep',
  api_url_list_category: 'http://localhost:8080/api/v1/category',
  api_url_list_user: 'http://localhost:8080/api/v1/users',
  api_url_list_img_url: 'http://localhost:8080/api/v1/users/{id}',
  API_URL_GUIDE:'http://localhost:8080/api/v1/guide',
<<<<<<< HEAD
=======
  // API_URL_AUCTION: 'http://localhost:8080/auction/api',
  firebaseConfig: {
    apiKey: "AIzaSyBFqqq1BOcFnqRPAx_Vq8ewdQiAUPkJbrE",
    authDomain: "eng-cogency-370914.firebaseapp.com",
    databaseURL: "https://eng-cogency-370914-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "eng-cogency-370914",
    storageBucket: "eng-cogency-370914.appspot.com",
    messagingSenderId: "985488924079",
    appId: "1:985488924079:web:28e91f3779f4563b42235a",
    measurementId: "G-M2T7R4CP93"
  },
>>>>>>> 7231c158a9e231f26c0d00a489fc0e266ad52c53
  api_url_order_status: 'http://localhost:8080/api/v1/payments',
  categoryUrl: 'http://localhost:8080/api/v1/products/category',
  priceStepUrl: 'http://localhost:8080/api/v1/products/priceStep',
  transactionUrl: 'http://localhost:8080/auction/api/transaction',
  productSearchUrl: 'http://localhost:8080/api/v1/products/search',
  userUrl: 'http://localhost:8080/api/user/v1/',
  SIGN_IN_API: 'http://localhost:8080/api/v1/auth/signin',
  GOOGLE_SIGN_IN_API: 'http://localhost:8080/api/v1/auth/google',
  uri_api_create_user_v1_user:"http://localhost:8080/api/v1/users/create",
  api_url_create_img_url: 'http://localhost:8080/api/v1/products/img/create',
  API_URL_AUCTION: "http://localhost:8080/auction/api",
  uri_api_update_user_v1_user: "http://localhost:8080/api/v1/users/update",
  uri_api_find_by_id_user_v1_user: "http://localhost:8080/api/v1/users/find/",
  firebaseConfig: {
    apiKey: "AIzaSyDRWAv_6CkY0N5ocqceEDbh5gc2UankMXo",
    authDomain: "truonglh-68106.firebaseapp.com",
    projectId: "truonglh-68106",
    storageBucket: "truonglh-68106.appspot.com",
    messagingSenderId: "680493532790",
    appId: "1:680493532790:web:4d7b3923a9e9d4f00ac157",
    measurementId: "G-YRDCYMF4H9",
  },
  LOGIN_API: 'http://localhost:8080/api/auth/login',
  GOOGLE_LOGIN_API: 'http://localhost:8080/api/auth/google',
  DIA_GIOI_VIETNAM_API: 'https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json',
}


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
