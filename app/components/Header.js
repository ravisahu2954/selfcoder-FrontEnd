import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header>
       <Link href={"/"}>
          <Image src={"/selfCoder.png"} alt='my logo' style={{ verticalAlign: 'middle',marginLeft:130 }}  width={200} height={150}/>
       </Link>
       <Link href={'/'} style={{color:"black",marginRight:20,marginLeft:150,textDecoration:'none',fontSize:20,fontWeight:'bold'}}> home</Link>    
            
            
             <Link href={'/problem'}  style={{color:"black",marginRight:20,marginLeft:20,textDecoration:'none',fontSize:20,fontWeight:'bold'}}> Problem </Link>      
               
            
             <Link href={'/blog'}style={{color:"black",marginRight:20,marginLeft:20,textDecoration:'none',fontSize:20,fontWeight:'bold'}}> Blog </Link>     
             
            
             <Link href={'/contact'}style={{color:"black",marginRight:20,marginLeft:20,textDecoration:'none',fontSize:20,fontWeight:'bold'}}>Contact</Link> 
             <Link href={'/addProblem'}style={{color:"black",marginRight:20,marginLeft:20,textDecoration:'none',fontSize:20,fontWeight:'bold'}}> addProblem</Link> 
            
            
             <Link href={'/login'}style={{backgroundColor:"lightseagreen",color:"white",marginRight:5,marginLeft:80,textDecoration:'none',fontSize:17,fontWeight:'bold'}}> login </Link> 
             <span>or</span>
             <Link href={'/signup'}style={{backgroundColor:"lightseagreen",color:"white",textDecoration:'none',marginLeft:5,fontSize:17,fontWeight:'bold'}}> signUp </Link> 
            
    </header>
  )
}

export default Header