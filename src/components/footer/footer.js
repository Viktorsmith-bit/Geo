export default function Footer(){
    return(
        <div className="flex justify-center bg-color py-10">
            <div className="flex-1 w-full lg:max-w-6xl px-4 lg:px-0">
                <div className="flex flex-wrap gap-10">
                    <div className="w-96">
                        <h1 className="text-xl font-bold pb-2 border-b border-gray-800">Contáctenos</h1>
                        <h1 className="text-gray-600 mt-5 font-bold">Lima</h1>
                        <h1 className="text-gray-600">Calle Alexander Fleming 187, Urb. Higuereta</h1>
                        <h1 className="text-gray-600">Santiago de Surco, Lima, Perú</h1>
                        <h1 className="text-gray-600">(51) 448-08-08 / (51) 448-0634</h1>
                        <a href="mailto:postmast@walshp.com.pe" className="text-gray-600 hover:text-green-600">postmast@walshp.com.pe</a>
                        <h1 className="text-gray-600 mt-5 font-bold">Arequipa</h1>
                        <h1 className="text-gray-600">Calle Mariscal Benavides 307-B, Urb. Selva Alegre</h1>
                        <h1 className="text-gray-600">SCercado, Arequipa, Perú</h1>
                        <h1 className="text-gray-600">(51) 54 477 889</h1>
                        <a href="mailto:postmast@walshp.com.pe" className="text-gray-600 hover:text-green-600">postmast@walshp.com.pe</a>
                    </div>
                    <div className="w-full lg:flex-1">
                        <iframe className="w-full h-64 lg:h-96 border border-gray-500" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.8712457825113!2d-76.99937672560883!3d-12.120960943285256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7f0ef1ae2d7%3A0xa2887d7c24690e4f!2sC.%20Alexander%20Fleming%20187%2C%20Santiago%20de%20Surco%2015038!5e0!3m2!1ses-419!2spe!4v1702501465557!5m2!1ses-419!2spe"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="flex flex-wrap items-center mt-10">
                    <div className="flex gap-5 w-full lg:flex-1">
                        <a href="https://www.linkedin.com/company/walsh-per%C3%BA/posts/?feedView=all" target="blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="rgb(47,47,47)" class="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4"/>
                            </svg>
                        </a>
                        <a href="https://www.facebook.com/people/Walsh-Per%C3%BA/100046776195838/" target="blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="rgb(47,47,47)" class="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                            </svg>
                        </a>
                        <a href="https://www.youtube.com/channel/UC4_Qgj9c_Zyc5kwUhwGN5oQ" target="blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="rgb(47,47,47)" class="bi bi-youtube" viewBox="0 0 16 16">
                                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z"/>
                            </svg>
                        </a>
                    </div>
                    <div className="w-full lg:flex-1 mt-5 lg:mt-0">
                        <h1 className="text-gray-600">© 2023 Walsh - Todos los derechos reservados</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}