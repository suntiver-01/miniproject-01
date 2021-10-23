import dynamic from 'next/dynamic'

const dynamicComponentWithOutSSR = dynamic(() => import('../components/Home'), {
    ssr: false
})

export default dynamicComponentWithOutSSR