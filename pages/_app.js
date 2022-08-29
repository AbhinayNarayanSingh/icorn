import '../styles/globals.css'
import { Provider, useDispatch, useSelector } from "react-redux";
import { wrapper, store } from "../store/store"
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  return <Provider store={store}><Component {...pageProps} /></Provider>
}

export default wrapper.withRedux(MyApp)
