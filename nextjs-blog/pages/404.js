import Error from 'next/error'
import Layout from '../components/layout';

export default function Custom404(params) {
  return (
    <Layout>
      <Error statusCode={404} />
    </Layout>
  )
}