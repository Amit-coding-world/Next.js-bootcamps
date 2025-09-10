import React from 'react'

const page = () => {
  return (
    <div>Facebook is the social media app using to connect our friend in the social media platform</div>
  )
}

export default page

//Dynamic metadata

export async function generateMetadata({params}) {
    return{
        title: 'About page',
    }
}