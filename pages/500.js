import dynamic from 'next/dynamic'

const Error500 = () => {
  return <h1>500 - Server-side error occurred</h1>
}

export default dynamic(() => Promise.resolve(Error500), { ssr: false })