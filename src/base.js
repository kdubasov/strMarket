import Rebase from 're-base';
//не забывай про импорты входа и формы и тд!!!!!!!!!!!!!!!!
import firebase from 'firebase/app';
import 'firebase/database';//магазины и товары
import 'firebase/auth'//авторизация
import 'firebase/firestore'//для контактной ормы

//19
const firebaseStrMarket = firebase.initializeApp({
    apiKey: "AIzaSyBDXaj2gMP2jKzjoTnon_bk8JM-T64Tbvw",
    authDomain: "stroy-market-dde0c.firebaseapp.com",
    databaseURL: "https://stroy-market-dde0c-default-rtdb.firebaseio.com",
    projectId: "stroy-market-dde0c",
    storageBucket: "stroy-market-dde0c.appspot.com",
    messagingSenderId: "559732490840",
    appId: "1:559732490840:web:ff86ba1a9763362d03002d"
})

const baseStrMarket = Rebase.createClass(firebaseStrMarket.database());
const contactFormStrMarket = firebaseStrMarket.firestore();

export {contactFormStrMarket}
export {firebaseStrMarket}
export default baseStrMarket;