import Document, { Head, Html, Main } from "next/document";

class MyDocument extends Document {
  render() {
  return (
    <Html lang="en">
      <Head>
        <body><Main /></body>
        </Head>
    </Html>
  )
}
}

export default MyDocument;