import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import RootLayout from './layout'

function MyApp({
  Component,
  pageProps,
}: {
  Component: React.ComponentType<any>
  pageProps: any
}) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}

export default MyApp
