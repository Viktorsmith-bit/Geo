import Nav from "@/components/nav/nav";
import Footer from "@/components/footer/footer";
export default function Planes(){
    return(
        <div className="section">
            <Nav />
            <div className="flex justify-center py-10">
                <div className="flex-1 max-w-6xl">
                    <h1 className="text-center text-green-600">Planes</h1>
                    <h1 className="text-4xl text-center mt-3">Precios predecibles, sin sorpresas</h1>
                    <div className="flex justify-center gap-3 mt-10">
                        <div className=" w-96 bg-color px-4 py-5">
                            <h1 className="font-bold text-xl text-center">Implementación</h1>
                            <h1 className="text-green-600 mt-1 text-center text-sm">s/15,000.00</h1>
                            <h1 className="text-center mt-3">único pago</h1>
                            <div className="h-0.5 w-full border border-gray-800 mt-5"></div>
                            <h1 className="text-center mt-5 mb-10 font-bold">Incluye</h1>
                            <Check name={'Autenticación y gestión de usuarios'} />
                            <Check name={'Gestión de monitoreos'} />
                            <Check name={'Almacenamiento escalable'} />
                            <Check name={'Generación de reportes en Excel'} />
                            <Check name={'Tratamiento de datos de plan de vigilancia (hasta 2 años previos)'} />
                            <Check name={'Roles y Permisos avanzados'} />
                            <Check name={'Gestión de documentos'} />
                            <Check name={'Análisis de tendencias'} />
                            <Check name={'1GB almacenamiento gratuito'} />
                            <Check name={'10 GB ancho de banda gratuito'} />
                        </div>
                        <div className=" w-96 bg-color px-4 py-5">
                            <h1 className="font-bold text-xl text-center">Mantenimiento</h1>
                            <h1 className="text-green-600 mt-1 text-center text-sm">$3,000.00</h1>
                            <h1 className="text-center mt-3">Anual</h1>
                            <div className="h-0.5 w-full border border-gray-800 mt-5"></div>
                            <h1 className="text-center mt-5 mb-10 font-bold">Incluye</h1>
                            <Check name={'Parches de seguridad'} />
                        </div>
                    </div>
                    <h1 className="text-center mt-20">¿Necesita un plan a su medida?</h1>
                </div>
            </div>
            <Footer />
        </div>
    );
}

function Check({name}){
return (
    <div className="flex items-center mt-1">
        <div className="">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="green" class="bi bi-check" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
            </svg>
        </div>
        <h1 className="text-sm">{name}</h1>
    </div>
);
}