import Image from 'next/image'
import InformationScroll from './components/informationScroll'
import CountdownDay from './components/counterDay'

export default function ComingSoon() {
  return (
    <main className="flex w-full h-screen flex-row items-center justify-between">
      <div className="z-10 max-w-5xl w-full items-start justify-between text-sm flex flex-col gap-5 p-24 px-28">
        <h1 className='text-8xl font-extrabold color-title pb-2'>SIGE.</h1>
        <p className='text-4xl font-bold text-[#607BD5]'>Optimiza tu espacio,<br /> eleva tu éxito</p>
        <p className='text-[16px] leading-7 font-medium text-[#595959]'>
          ¡Descubre la Solución Definitiva para la <br />
          Organización de Equipos! Registra tu espacio  <br /> de trabajo y maximiza la productividad. <br />
          Diseña, colabora y alcanza el éxito.</p>
        <a className='text-[12px] font-medium underline text-[#595959]'>¡Visita nuestro Whitepaper!</a>

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
      <div className="z-10 max-w-5xl w-full h-screen overflow-y-scroll scroll-smooth flex flex-col gap-10 back-blue-radial items-center justify-between text-sm p-14 lg:flex">
        <InformationScroll />
      </div>

    </main>
  )
}
