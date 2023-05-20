import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div className='Ap'>
       <h1>
       Explore SelfCoder <br/>
       </h1>
       <h1 className='App'>for learning new technology</h1>
     <h3>
     "Welcome to SelfCoder, your ultimate destination for all things coding! Whether you're a beginner eager to learn the basics or an experienced programmer looking to enhance your skills, our website is designed to be your go-to resource.

At SelfCoder, we believe that coding should be accessible and enjoyable for everyone. 
     </h3>
     <Image src={"/selfCoder.png"} alt='my logo'   width={1400} height={900}/>
    </div>
  )
}

export default page