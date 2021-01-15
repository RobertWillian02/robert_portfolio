import React from 'react';;
import Image from 'next/image';
import GameItem from './GameItem';
import Header from './Header';
import Carousel from './carousel/ImageCarousel'
const Layout: React.FC = ({children}) => {


  return (
    <div className= "w-6/7  mx-auto px-4 sm:px-6 sm:w-6/7 lg:w-2/3">
      <Header/>
      <div className="sm:flex justify-evenly flex-wrap">
        <GameItem
          href="/"
          img="/img/ShGame.png"
          title="A busca do Carlos Felino"
          genre="Emo"
          />

        <GameItem
          href="/"
          img="/img/luffy.jpg"
          title="O samba do pagodeiro"
          genre="Aventura"
          />

        <GameItem
          href="/"
          img="/img/rogerXonado.jpg"
          title="Roger adventuries"
          genre="Aventura"
          />

        </div>
      
      <div className="flex justify-center">

      <div className="pb-20 w-full flex flex-col justify-center md:flex-row justify-evenly">

        <div className="pt-10 pb-10">
          <div className="flex justify-center"> 

          <Image className="rounded-full  flex justi" src="/img/gifHome.gif" width={360} height={204}/>

          </div>

          <h2 className="font-bold flex justify-center italic">"Toda arte tem um propósito" </h2>
          <h2 className=" flex justify-center italic">-Robert brant</h2>
        </div>
        
        <div className=" flex justify-center ">
        <Carousel />
        </div>
      </div>

      </div>
      {children}
    </div>  
  )
  ;
}

export default Layout;