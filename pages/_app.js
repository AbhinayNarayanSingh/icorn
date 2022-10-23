import '../styles/globals.css'
import '../styles/bootstrap-grid.css'

// redux store 
import { Provider } from "react-redux";
import { wrapper, store } from "../store/store"

// component
import Footer from "../components/Footer/Footer";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import Dialog from '../hoc/Popup/Dialog';




function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
    <Dialog />
    <NavigationBar></NavigationBar>
    <Component {...pageProps} />
    <Footer></Footer>

  </Provider>
}

export default wrapper.withRedux(MyApp)
