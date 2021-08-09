import Cliente from "../../model/Cliente";
import { IconeEdit, IconeRemove } from "../icons";

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {
    const exibiropcoes = props.clienteExcluido || props.clienteSelecionado;
    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Apelido</th>
                <th className="text-left p-4">Idade</th>
                <th className="text-left p-4">BI</th>
                <th className="text-left p-4">Email</th>
                {exibiropcoes ? <th className="p-4">Opções</th> : false}
            </tr>
        )
    }
    function renderizarDados() {
        return props.clientes?.map((cliente, i) => {
            console.log(cliente)
            return (
                <tr key={cliente.id} className={`
                ${i % 2 === 0 ? 'dark:bg-gray-300 bg-gray-900' : 'dark:bg-gray-900 bg-gray-800'}`}>
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.apelido}</td>
                    <td className="text-left p-4">{cliente.idade}</td>
                    <td className="text-left p-4">{cliente.bi}</td>
                    <td className="text-left p-4">{cliente.email}</td>
                    {exibiropcoes ? renderizarOpcoes(cliente) : false}
                </tr>
            )
        })
    }
    function renderizarOpcoes(cliente: Cliente) {
        return (
            <td className={`flex justify-center`}>
                {props.clienteSelecionado ? (
                    <button
                        className={`flex justify-center items-center
                        text-green-600 rounded-full hover:bg-purple-50 p-1 m-1`}
                        title={`${title(1)} ${cliente.nome}`}
                        onClick={() => props.clienteSelecionado?.(cliente)}
                    >{IconeEdit()}</button>
                ) : false}
                {props.clienteExcluido ? (
                    <button
                        className={`flex justify-center items-center
                        text-red-500 rounded-full hover:bg-purple-50 p-1 m-1`}
                        title={`${title(2)} ${cliente.nome}`}
                        onClick={() => props.clienteExcluido?.(cliente)}
                    >{IconeRemove()}</button>
                ) : false}
            </td>
        )
    }

    function title(numero: number) {
        switch (numero) {
            case 1:
                return "Editar Cliente: ";
                break;
            case 2:
                return "Remover Cliente: "
                break;
            default:
                break;
        }
    }
    return (
        <table className={`w-full rounded-xl overflow-hidden`}>
            <thead className={`
            items-start
             dark:bg-purple-500 bg-blue-700
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody className={`
            rounded-xl overflow-hidden mt-5
            dark:bg-gray-400 bg-gray-900`}>
                {renderizarDados()}
            </tbody>
        </table>
    )
}