import '../styles/globals.css'
import '../styles/bootstrap-grid.css'
import '../styles/style.map.scss'

// redux store 
import { Provider } from "react-redux";
import { wrapper, store } from "../store/store"

// component
import Dialog from '../hoc/Popup/Dialog';
import NavigationBar from '../components/Layout/NavigationBar/NavigationBar';
import Footer from '../components/Layout/Footer/Footer';
import Loader from '../hoc/Loader/Loader';




function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
    <Loader />
    <Dialog />
    <NavigationBar></NavigationBar>
    <Component {...pageProps} />
    <Footer></Footer>

  </Provider>
}

export default wrapper.withRedux(MyApp)
