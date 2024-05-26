import Image from 'next/image'
import InformationScroll from './components/informationScroll'
import CountdownDay from './components/counterDay'
import { useEffect, useRef } from 'react';

export default function ComingSoon() {

  return (
    <main className="flex w-full flex-col 2xl:flex-row items-center justify-between">
      <div className="z-10 w-full py-12 px-8 2xl:w-1/2 2xl:p-24 2xl:px-28 items-start justify-between text-sm flex flex-col gap-5">
        <h1 className='text-6xl 2xl:text-8xl font-extrabold color-title pb-2'>SIGE.</h1>
        <p className='text-2xl 2xl:text-4xl font-bold text-[#607BD5]'>Optimiza tu espacio,<br /> eleva tu éxito</p>
        <p className='text-[14px] 2xl:text-[16px] leading-7 font-medium text-[#595959]'>
          ¡Descubre la Solución Definitiva para la <br />
          Organización de Equipos! Registra tu espacio  <br /> de trabajo y maximiza la productividad. <br />
          Diseña, colabora y alcanza el éxito.</p>
        <a href='https://dreams-organization-2.gitbook.io/gobernanza/' target='_blank' className='text-[12px] font-medium underline text-[#595959]'>¡Visita nuestro Whitepaper!</a>

        <a className='font-semibold border-[1px] rounded-md border-[#1F69FF] text-[#1F69FF] p-4 px-14'>Comunidad</a>
        <CountdownDay />

        <div className='flex flex-row items-center justify-start gap-4 pt-10'>
          <Image
            src="/icon_disc.svg"
            alt="Picture of the author"
            width={20}
            height={20}
          />
          <Image
            src="/icon_insta.svg"
            alt="Picture of the author"
            width={18}
            height={18}
          />
          <Image
            src="/icon_tik.svg"
            alt="Picture of the author"
            width={18}
            height={18}
          />
          <Image
            src="/icon_youtube.svg"
            alt="Picture of the author"
            width={20}
            height={20}
          />

        </div>
      </div>
      <div className="z-10 w-full 2xl:w-1/2 h-screen overflow-y-scroll scroll-smooth flex flex-col gap-8 2xl:gap-10 back-blue-radial items-center justify-between text-sm px-6 2xl:px-14 lg:flex">
        <InformationScroll />
      </div>

    </main>
  )
}
