import { ToggleProvider } from '../context/ToggleContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <ToggleProvider>
      <Component {...pageProps} />
    </ToggleProvider>
  )
}

export default MyApp
