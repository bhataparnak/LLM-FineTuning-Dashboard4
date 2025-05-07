import Head from 'next/head'
import FineTuningApp from '../components/FineTuningApp'

export default function Home() {
  return (
    <div>
      <Head>
        <title>LLM Fine-tuning Dashboard</title>
        <meta name="description" content="A dashboard for fine-tuning language models" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FineTuningApp />
    </div>
  )
}