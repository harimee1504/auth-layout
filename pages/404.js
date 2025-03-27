import dynamic from 'next/dynamic'

const Error404 = () => {
  return <h1>404 - Page Not Found</h1>
}

export default dynamic(() => Promise.resolve(Error404), { ssr: false })