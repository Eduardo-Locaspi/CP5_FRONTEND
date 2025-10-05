
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

type TypeFuncionario = {
    id:number,
    nome:string,
    cargo:string,
    setor:string,
    turno:string,
    salario:number
} 

export default function ListaFuncionarios() {

    const [funcionarios,setFuncionarios] = useState<TypeFuncionario[]>([])
    
    useEffect(()=>{
        fetch("http://localhost:5000/funcionarios")
        .then(resp => resp.json())
        .then(resp => setFuncionarios(resp))
        .catch(error => console.log(error))
    },[])


    return (
        <main className="h-screen flex flex-col items-center p-5 mx-60">
            
            <h2 className="text-4xl p-7">Funcionários</h2>

            <table className="w-full border-2 border-gray-300 ">
                <thead >
                    <tr className="*:p-2.5 bg-blue-900 text-white">
                        <th>Nome</th>
                        <th>Cargo</th>
                        <th>Setor</th>
                        <th>Turno</th>
                        <th>Salário</th>
                    </tr>
                </thead>
                <tbody>
                    {funcionarios.map ( (f) => (
                        <tr key={f.id} className="*:p-2.5 even:bg-blue-200 text-center">
                            <td>{f.nome}</td>
                            <td>{f.cargo}</td>
                            <td>{f.setor}</td>
                            <td>{f.turno}</td>
                            <td>R$ {f.salario.toFixed(2)}</td>
                            <td>
                                
                            </td>
                        </tr>
                    ) )
                }
                </tbody>

            </table>

            <Link to={'/inserirfuncionario'} className="bg-blue-800 p-5 py-3 text-white text-2xl rounded-md hover:underline mt-10 hover:bg-blue-600">Adicionar Funcionário </Link>
        </main>
    )
}