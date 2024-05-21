import Image from 'next/image'

export default function InformationScroll() {
    return (
        <>
            {/* Colaboración y Comunicación */}
            <div className='w-full flex flex-col items-center justify-center border-[4px] rounded-[2.4em] bg-[#001B5050] text-center backdrop-blur-sm border-[#7CFFFF] text-white p-8'>
                <h4 className='text-xl font-medium text-white py-6'>Colaboración y Comunicación</h4>
                <div className='w-[75%]'>
                    <Image
                        src="/image_01.png"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                    <div className='w-full flex flex-row items-center justify-between pt-4'>
                        <Image
                            src="/image_02.png"
                            alt="Picture of the author"
                            width={105}
                            height={105}
                        />
                        <Image
                            src="/image_03.png"
                            alt="Picture of the author"
                            width={105}
                            height={105}
                        />
                        <Image
                            src="/image_04.png"
                            alt="Picture of the author"
                            width={105}
                            height={105}
                        />
                    </div>
                    <div className='w-full flex flex-row items-center justify-center gap-4 pt-4'>
                        <div className='bg-[#5C8BE780] rounded-md w-[36px] h-[36px]'></div>
                        <div className='bg-[#5C8BE780] rounded-md w-[36px] h-[36px]'></div>
                        <div className='bg-[#5C8BE780] rounded-md w-[36px] h-[36px]'></div>
                        <div className='flex flex-col items-center justify-center'>
                            <Image
                                src="/call_end.svg"
                                alt="Picture of the author"
                                width={22}
                                height={22}
                            />
                        </div>
                    </div>
                </div>

            </div>

            {/* Movilidad y Acceso Remoto */}
            <div className='w-full flex flex-col items-center justify-center border-[4px] rounded-[2.4em] bg-[#001B5050] text-center backdrop-blur-sm border-[#7CFFFF] text-white pt-8 pb-0'>
                <h4 className='text-xl font-medium text-white py-6'>Movilidad y Acceso Remoto</h4>
                <div className='w-[75%] back-photo'>
                    <div className='background'></div>
                    <Image
                        className='image-without-blur'
                        src="/iphone-pic.png"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                </div>
            </div>

            {/* Gestión de Recursos humanos */}
            <div className='w-full flex flex-col items-center justify-center border-[4px] rounded-[2.4em] bg-[#001B5050] text-center backdrop-blur-sm border-[#7CFFFF] text-white p-8 pb-0'>
                <h4 className='text-xl font-medium text-white'>Gestión de Recursos humanos</h4>
                <div className='flex flex-row item-center justify-center gap-4 py-6'>
                    <span className='py-3 px-4 bg-[#5C8BE780] rounded-xl'> Diseño </span>
                    <span className='py-3 px-4 bg-[#5C8BE780] rounded-xl opacity-45'> Marketing </span>
                    <span className='py-3 px-4 bg-[#5C8BE780] rounded-xl opacity-45'> Recursos Humanos </span>
                </div>
                <div className='w-[75%] flex flex-col gap-6'>
                    <div className='flex flex-row items-center justify-evenly'>
                        <div className='flex flex-col gap-1 items-start justify-start'>
                            <Image
                                src="/woman_01.png"
                                alt="Picture of the author"
                                width={140}
                                height={140}
                            />
                            <div className='flex flex-row items-center gap-1 py-2'>
                                <div className='bg-[#27754A] shadow-box w-[15px] h-[15px] rounded-full flex items-center justify-center'>
                                    <div className='bg-[#50D78E] w-[7px] h-[7px] rounded-full'></div>
                                </div>
                                <p className='text-[#50D78E]'>Disponible</p>
                            </div>
                            <h4 className='text-white font-semibold'>Carlas Gonzáles</h4>
                            <h5 className='text-[#ACACAC]'>UX Designer</h5>
                        </div>
                        <div className='flex flex-col gap-1 items-start justify-start'>
                            <Image
                                src="/woman_01.png"
                                alt="Picture of the author"
                                width={140}
                                height={140}
                            />
                            <div className='flex flex-row items-center gap-1 py-2'>
                                <div className='bg-[#27754A] shadow-box w-[15px] h-[15px] rounded-full flex items-center justify-center'>
                                    <div className='bg-[#50D78E] w-[7px] h-[7px] rounded-full'></div>
                                </div>
                                <p className='text-[#50D78E]'>Disponible</p>
                            </div>
                            <h4 className='text-white font-semibold'>Carlas Gonzáles</h4>
                            <h5 className='text-[#ACACAC]'>UX Designer</h5>
                        </div>
                    </div>
                    <div className='flex flex-row items-center justify-evenly'>
                        <div className='flex flex-col gap-1 items-start justify-start'>
                            <Image
                                src="/woman_02.png"
                                alt="Picture of the author"
                                width={140}
                                height={140}
                            />
                            <div className='flex flex-row items-center gap-1 py-2'>
                                <div className='bg-[#717171] shadow-box w-[15px] h-[15px] rounded-full flex items-center justify-center'>
                                    <div className='bg-[#C2C2C2] w-[7px] h-[7px] rounded-full'></div>
                                </div>
                                <p className='text-[#C2C2C2]'>Disponible</p>
                            </div>
                            <h4 className='text-white font-semibold'>Carlas Gonzáles</h4>
                            <h5 className='text-[#ACACAC]'>UI Designer</h5>
                        </div>
                        <div className='flex flex-col gap-1 items-start justify-start'>
                            <Image
                                src="/woman_02.png"
                                alt="Picture of the author"
                                width={140}
                                height={140}
                            />
                            <div className='flex flex-row items-center gap-1 py-2'>
                                <div className='bg-[#717171] shadow-box w-[15px] h-[15px] rounded-full flex items-center justify-center'>
                                    <div className='bg-[#C2C2C2] w-[7px] h-[7px] rounded-full'></div>
                                </div>
                                <p className='text-[#C2C2C2]'>Disponible</p>
                            </div>
                            <h4 className='text-white font-semibold'>Carlas Gonzáles</h4>
                            <h5 className='text-[#ACACAC]'>UI Designer</h5>
                        </div>
                    </div>
                    <div className='flex flex-row items-center justify-evenly'>
                        <div className='flex flex-col gap-1 items-start justify-start'>
                            <Image
                                src="/woman_03.png"
                                alt="Picture of the author"
                                width={140}
                                height={140}
                            />
                        </div>
                        <div className='flex flex-col gap-1 items-start justify-start'>
                            <Image
                                src="/woman_03.png"
                                alt="Picture of the author"
                                width={140}
                                height={140}
                            />
                        </div>
                    </div>
                </div>
            </div>


            {/* Gestión de Documentos */}
            <div className='w-full flex flex-col items-center justify-center border-[4px] rounded-[2.4em] bg-[#001B5050] text-center backdrop-blur-sm border-[#7CFFFF] text-white p-8'>
                <h4 className='text-xl font-medium text-white'>Gestión de Documentos</h4>
                <div className='flex flex-row item-center justify-center gap-4 py-6'>
                    <span className='py-3 px-3 bg-[#5C8BE780] rounded-xl'> Fecha </span>
                    <span className='py-3 px-3 bg-[#5C8BE780] rounded-xl opacity-45'> Filtrar </span>
                    <span className='py-3 px-3 bg-[#5C8BE780] rounded-xl opacity-45'> Analizar Riesgos </span>
                    <span className='py-3 px-3 bg-[#5C8BE780] rounded-xl opacity-45'> AI </span>
                    <span className='py-3 px-3 bg-[#5C8BE780] rounded-xl opacity-45'> Almacenamiento </span>
                </div>
                <div className='w-[75%] flex flex-col gap-6'>
                    <div className='flex flex-row items-center justify-between'>
                        <div className='flex flex-col w-[30%] gap-1 items-start justify-start'>
                            <Image
                                src="/article.svg"
                                alt="Picture of the author"
                                width={45}
                                height={45}
                            />
                            <div className='flex flex-col items-start gap-1 py-2'>
                                <h4 className='text-white font-semibold'>MVP V1.2</h4>
                                <p className='text-[#BCBCBC]'>Hace 3 dias</p>
                            </div>
                            <div className='flex flex-row items-center gap-1 py-1'>
                                <Image
                                    src="/icon_01.png"
                                    alt="Picture of the author"
                                    width={20}
                                    height={20}
                                />
                                <p className='text-[#BCBCBC]'>Agustín Pérez</p>
                            </div>
                            <p className='text-[#BCBCBC] pl-6'>Marketing</p>
                        </div>

                        <div className='flex flex-col w-[30%] gap-1 items-start justify-start'>
                            <Image
                                src="/article.svg"
                                alt="Picture of the author"
                                width={45}
                                height={45}
                            />
                            <div className='flex flex-col items-start gap-1 py-2'>
                                <h4 className='text-white font-semibold'>Nomina 2024</h4>
                                <p className='text-[#BCBCBC]'>Hace 1 dia</p>
                            </div>
                            <div className='flex flex-row items-center gap-1 py-1'>
                                <Image
                                    src="/icon_03.png"
                                    alt="Picture of the author"
                                    width={20}
                                    height={20}
                                />
                                <p className='text-[#BCBCBC]'>Dario Villa</p>
                            </div>
                            <p className='text-[#BCBCBC] pl-6'>RRHH</p>
                        </div>

                        <div className='flex flex-col w-[30%] gap-1 items-start justify-start'>
                            <Image
                                src="/article.svg"
                                alt="Picture of the author"
                                width={45}
                                height={45}
                            />
                            <div className='flex flex-col items-start gap-1 py-2'>
                                <h4 className='text-white font-semibold'>Features V3.2</h4>
                                <p className='text-[#BCBCBC]'>Hace 1 dia</p>
                            </div>
                            <div className='flex flex-row items-center gap-1 py-1'>
                                <Image
                                    src="/icon_02.png"
                                    alt="Picture of the author"
                                    width={20}
                                    height={20}
                                />
                                <p className='text-[#BCBCBC]'>Maria Gomez</p>
                            </div>
                            <p className='text-[#BCBCBC] pl-6'>AI</p>
                        </div>
                    </div>

                    <div className='flex flex-row items-center justify-between'>
                        <div className='flex flex-col w-[30%] gap-1 items-start justify-start'>
                            <Image
                                src="/article.svg"
                                alt="Picture of the author"
                                width={45}
                                height={45}
                            />
                            <div className='flex flex-col items-start gap-1 py-2'>
                                <h4 className='text-white font-semibold'>MVP V2.2</h4>
                                <p className='text-[#BCBCBC]'>Hace 3 dias</p>
                            </div>
                            <div className='flex flex-row items-center gap-1 py-1'>
                                <Image
                                    src="/icon_01.png"
                                    alt="Picture of the author"
                                    width={20}
                                    height={20}
                                />
                                <p className='text-[#BCBCBC]'>Agustín Pérez</p>
                            </div>
                            <p className='text-[#BCBCBC] pl-6'>Marketing</p>
                        </div>

                        <div className='flex flex-col w-[30%] gap-1 items-start justify-start'>
                            <Image
                                src="/article.svg"
                                alt="Picture of the author"
                                width={45}
                                height={45}
                            />
                            <div className='flex flex-col items-start gap-1 py-2'>
                                <h4 className='text-white font-semibold'>Growther</h4>
                                <p className='text-[#BCBCBC]'>Hace 1 dia</p>
                            </div>
                            <div className='flex flex-row items-center gap-1 py-1'>
                                <Image
                                    src="/icon_03.png"
                                    alt="Picture of the author"
                                    width={20}
                                    height={20}
                                />
                                <p className='text-[#BCBCBC]'>Dario Villa</p>
                            </div>
                            <p className='text-[#BCBCBC] pl-6'>RRHH</p>
                        </div>

                        <div className='flex flex-col w-[30%] gap-1 items-start justify-start'>
                            <Image
                                src="/article.svg"
                                alt="Picture of the author"
                                width={45}
                                height={45}
                            />
                            <div className='flex flex-col items-start gap-1 py-2'>
                                <h4 className='text-white font-semibold'>Inversionistas</h4>
                                <p className='text-[#BCBCBC]'>Hace 1 dia</p>
                            </div>
                            <div className='flex flex-row items-center gap-1 py-1'>
                                <Image
                                    src="/icon_02.png"
                                    alt="Picture of the author"
                                    width={20}
                                    height={20}
                                />
                                <p className='text-[#BCBCBC]'>Maria Gomez</p>
                            </div>
                            <p className='text-[#BCBCBC] pl-6'>AI</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Movilidad y Acceso Remoto */}
            <div className='w-full flex flex-col items-center justify-center border-[4px] rounded-[2.4em] bg-[#001B5050] text-center backdrop-blur-sm border-[#7CFFFF] text-white p-8'>
                <h4 className='text-xl font-medium text-white py-6'>Gestión Financiera</h4>
                <div className='w-[75%] flex flex-col gap-6'>

                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-md text-[#BCBCBC]'>Empresa</p>
                        <Image
                            src="/growther_icon.svg"
                            alt="Picture of the author"
                            width={120}
                            height={120}
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-lg text-[#BCBCBC]'>Presupuesto</p>
                        <p className='text-3xl font-semibold text-[#FFFFFF]'>$100.000</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-lg text-[#BCBCBC]'>Ganancias</p>
                        <p className='text-3xl font-semibold text-[#50D78E] flex flex-row gap-2'>$20.000
                            <Image src="/arrow_up.svg" alt="Picture of the author"
                                width={15}
                                height={15}
                            /></p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-lg text-[#BCBCBC]'>Pago de Nomina</p>
                        <p className='text-3xl font-semibold text-[#FFFFFF]'>$13.453</p>
                    </div>
                </div>
            </div>
        </>
    )
}
