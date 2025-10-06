import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

type TypeFuncionarioNovo = {
    nome:string,
    cargo:string,
    setor:string,
    turno:string,
    salario:number
} 

export default function Formulario (){

    const {id} = useParams() 

    const navegacao = useNavigate() 

    const [novo,setNovo] = useState<TypeFuncionarioNovo>(
        {nome:"",cargo:"",setor:"",turno:"",salario: 0}
    )

    // Oque isso faz?
    let metodo:string = "POST" //CRIANDO FUNCIONARIO
    if (id) metodo ="PUT" // Editando FUNCIONARIO


    const handleChange =(e:React.ChangeEvent<HTMLInputElement>) => {
        const {name,value}= e.target
        setNovo({...novo,[name]: value})
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const funcionario = {...novo,nome:Number(novo.salario) }

        fetch(`http://localhost:5000/funcionarios/${id ?id: ""}`,{
            method:metodo,
            headers:{"Content-Type":"Application/json"},
            body:JSON.stringify(funcionario)
        })
        .then(()=>navegacao("/"))
        .catch(error => console.log(error))
    }

    useEffect (()=>{
        if (id) {
            fetch(`http://localhost:5000/funcionarios/${id}`)
            .then(resp =>resp.json())
            .then(data  => setNovo(data))
            .catch(error => console.log(error))
            
        }
    },[id])

    return(
        <main className="h-screen flex flex-col items-center p-5 mx-60 ">
            <h1 className="text-4xl p-7">Novo Funcionario</h1>

            <form onSubmit={handleSubmit} className="border-2 border-gray-300 rounded-md p-4">
                <input type="text" className="border-2 border-gray-300 rounded-md p-2 w-full mb-1" placeholder="Nome" onChange={handleChange}/><br />
                <input type="text" className="border-2 border-gray-300 rounded-md p-2 w-full mb-1" placeholder="Cargo" onChange={handleChange}/><br />
                <input type="text" className="border-2 border-gray-300 rounded-md p-2 w-full mb-1" placeholder="Setor" onChange={handleChange}/><br />
                <input type="text" className="border-2 border-gray-300 rounded-md p-2 w-full mb-1" placeholder="Turno" onChange={handleChange}/><br />
                <input type="number" className="border-2 border-gray-300 rounded-md p-2 w-full mb-1" placeholder="Salário" onChange={handleChange}/><br />
                <button type="submit" className="bg-green-500 border-2 border-gray-300 rounded-md py-2 w-full my-2.5 text-white">Enviar</button><br />
                <Link to={"/"} className="bg-red-500 py-2 px-4 border-2 border-gray-300 rounded-md text-white ">Cancelar</Link>
            </form>
            
        </main>
    )
}