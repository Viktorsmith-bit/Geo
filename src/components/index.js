import Image from 'next/image'
import Footer from './footer/footer';
import Nav from './nav/nav';
import NavMobile from './nav/navMobile';
import { opciones } from './json';
export default function Index(){
    return(
        <div className='section'>
            <NavMobile />
            <div className="patron mt-14 lg:mt-0" style={{height:'800px'}}>
                <Nav />
                <div className='flex justify-center'>
                    <div className='flex-1 max-w-6xl px-4 lg:px-0'>
                        <div className='py-10 lg:py-20'>
                            <h1 className='mx-auto text-center text-2xl lg:text-5xl font-extrabold max-w-3xl'>Geovisor para la Gestión Ambiental</h1>
                            <h1 className='text-center mt-5'>Gestione todo en un solo lugar</h1>
                            <div className='flex flex-wrap gap-3 justify-center mt-10 lg:mt-16'>
                                <div className='flex items-center gap-1 px-3 py-2 bg-white rounded-sm'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="green" class="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                                    </svg>
                                    <h1 className='text-sm lg:text-base'>Autenticación</h1>
                                </div>
                                <div className='flex items-center gap-1 px-3 py-2 bg-white rounded-sm'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="green" class="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                                    </svg>
                                    <h1 className='text-sm lg:text-base'>Plugins</h1>
                                </div>
                                <div className='flex items-center gap-1 px-3 py-2 bg-white rounded-sm'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="green" class="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                                    </svg>
                                    <h1 className='text-sm lg:text-base'>Seguridad</h1>
                                </div>
                                <div className='flex items-center gap-1 px-3 py-2 bg-white rounded-sm'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="green" class="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                                    </svg>
                                    <h1 className='text-sm lg:text-base'>Almacenamiento</h1>
                                </div>
                            </div>
                            <div className='mx-auto mt-10 lg:mt-16'>
                                <Image src='/Imagen.PNG' width={1100} height={1100} alt='Walsh Perú' priority/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-20 lg:mt-80 px-4 lg:px-0'>
                <div className='flex-1 max-w-2xl pb-24'>
                    <h1 className='text-center text-gray-600'>{"Somos una plataforma web innovadora de Walsh Perú que permite la visualización, consulta y gestión de datos geoespaciales de manera intuitiva y efectiva"}</h1>
                </div>
            </div>
            <div className='flex justify-center bg-color py-10 lg:py-20'>
                <div className='flex flex-wrap flex-1 w-full lg:max-w-6xl lg:h-96 px-4 lg:px-0'>
                    <div className='flex items-center justify-center lg:flex-1'>
                        <div className='lg:pr-14'>
                            <h1 className='text-2xl lg:text-4xl font-bold'>Mejora tu análisis y toma de decisiones</h1>
                            <h1 className='mt-5 text-gray-600'>Utilizando el análisis espacial personalizado, nuestra solución permite ayudar a la compañía en el desafío de la prevención y gestión del impacto mediante un seguimiento eficiente.</h1>
                        </div>
                    </div>
                    <div className='relative w-full lg:flex-1 h-64 lg:h-full mt-5 lg:mt-0'>
                        <Image className='border border-gray-200' src='/Fondos/grafica.jpg' fill alt='Walsh Perú' style={{objectFit:'cover'}}/>
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-10 lg:py-20'>
                <div className='flex flex-wrap-reverse flex-1 w-full lg:max-w-6xl lg:h-96 px-4 lg:px-0'>
                    <div className='relative w-full lg:flex-1 h-64 lg:h-full mt-5 lg:mt-0'>
                        <Image className='border border-gray-200' src='/Fondos/datos.jpg' fill alt='Walsh Perú' style={{objectFit:'cover'}}/>
                    </div>
                    <div className='flex items-center justify-center lg:flex-1'>
                        <div className='lg:pl-14'>
                            <h1 className='text-2xl lg:text-4xl lg:text-end font-bold'>Aprovecha el poder de tus datos</h1>
                            <h1 className='mt-5 text-gray-600 lg:text-end'>Incorpora el poder de tus datos a tus deciciones empresariales.</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center bg-color py-10 lg:py-20'>
                <div className='flex flex-wrap flex-1 w-full lg:max-w-6xl lg:h-96 px-4 lg:px-0'>
                    <div className='flex items-center justify-center flex-1'>
                        <div className='lg:pr-14'>
                            <h1 className='text-2xl lg:text-4xl font-bold'>Accede desde cualquier dispositivo</h1>
                            <h1 className='mt-5 text-gray-600'>Al ser una plataforma web, es posible acceder desde cualquier dispositivo, como un celular, tableta, laptop o PC de escritorio.</h1>
                        </div>
                    </div>
                    <div className='relative w-full lg:flex-1 h-64 lg:h-full mt-5 lg:mt-0'>
                        <Image className='border border-gray-200' src='/Fondos/accede.jpg' fill alt='Walsh Perú' style={{objectFit:'cover'}}/>
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-10 lg:py-20'>
                <div className='flex flex-wrap-reverse flex-1 w-full lg:max-w-6xl lg:h-96 px-4 lg:px-0'>
                    <div className='relative w-full lg:flex-1 h-64 lg:h-full mt-5 lg:mt-0'>
                        <Image className='border border-gray-200' src='/Fondos/documentos.jpg' fill alt='Walsh Perú' style={{objectFit:'cover'}}/>
                    </div>
                    <div className='flex items-center justify-center flex-1'>
                        <div className='lg:pl-14'>
                            <h1 className='text-2xl lg:text-4xl lg:text-end font-bold'>Gestiona tus documentos</h1>
                            <h1 className='mt-5 text-gray-600 lg:text-end'>Lleva el control de tus documentos y gestiona una adecuada trazabilidad de tus informes de ensayo, entre otros.</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-20'>
                <div className='flex justify-center flex-1 max-w-6xl'>
                    <div className=''>
                        <h1 className='text-center text-2xl font-bold max-w-xl'>¿Qué más puedes hacer con nuestro Geovisor?</h1>
                        <h1 className='mt-5 text-gray-600 text-center'>Existen muchas otras funciones que puedes usar</h1>
                    </div>
                </div>
            </div>
            <div className='flex justify-center pb-20'>
                <div className='flex-1 max-w-6xl'>
                    <div className='flex justify-center gap-5 flex-wrap'>
                        {
                            opciones.map((items)=>{
                                return <div key={items.id} className='w-80 lg:h-64 border border-gray-200 rounded-sm p-4'>
                                    <h1 className='font-bold'>{items.title}</h1>
                                    <h1 className='text-gray-600 mt-3'>{items.description}</h1>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}