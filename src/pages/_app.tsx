import '../../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Desktop HQ',
  description: 'Generated by create next app',
}

function MyApp({
  Component,
  pageProps,
}: {
  Component: React.ComponentType<any>
  pageProps: any
}) {
  return (
   <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Head>
      <title>
                            Desktop HQ
                        </title>
                        <meta
                            name="description"
                            content="Agentive allows you to create, deploy, and manage next-generation AI Agents in minutes."
                        />
                        <meta
                            property="og:title"
                            content="Agentive - Create, Deploy & Manage AI Agents"
                        />
                        <meta
                            property="og:description"
                            content="Agentive allows you to create, deploy, and manage next-generation AI Agents in minutes."
                        />
                        <meta property="og:image" content="/agentive_og.webp" />
                        <meta property="og:type" content="website" />
                        <meta
                            property="og:url"
                            content="https://agentivehub.com"
                        />
                        <meta
                            name="twitter:card"
                            content="summary_large_image"
                        />
                        <meta
                            name="twitter:title"
                            content="Agentive - Create, Deploy & Manage AI Agents"
                        />
                        <meta
                            name="twitter:description"
                            content="Agentive allows you to create, deploy, and manage next-generation AI Agents in minutes."
                        />
                        <meta
                            name="twitter:image"
                            content="/agentive_webclip_256x256.webp"
                        />

                        <link rel="icon" href="/favicon.ico" />
                        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Component {...pageProps} />
      </ThemeProvider>
  </>
  )
}

export default MyApp
