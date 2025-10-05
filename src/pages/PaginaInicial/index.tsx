import { Link } from "react-router-dom";


export default function PaginaInicial(){


    return(
        <main className="h-screen flex flex-col items-center p-5  ">
            <h2 className="text-4xl p-7">Página Inicial</h2>

            <section className="flex bg-gray-300 w-full p-10">

                <div className="w-6/12 text-center"> {/*Texto*/ }
                    <h3 className="text-3xl ">Plataforma de Funcionários HC</h3>
                    <p>Com A Plataforma de Funcionários HC você poderá ter uma visão geral dos funcionários do HC.</p>
                    <ul className="text-2xl p-5">
                        <li>Fácil</li>
                        <li>motivo 2</li>
                        <li>motivo 3</li>
                    </ul>

                    <Link to={'/listafuncionario'} className="bg-blue-900 p-5 py-3 text-white text-2xl rounded-md hover:underline">Visualizar Funcionários</Link>
                </div>
                
                {/*imagem*/ }
                <img src="public\vite.svg" alt="" className="items-center"/>

            </section>
        </main>
    )
}