import Tabela from "../components/tabela/Tabela";
import Layout from "../components/template/Layout";
import Cliente from "../model/Cliente";
import Botao from '../components/template/Botao';
import { IconeGetForm } from "../components/icons";


export default function Notificacoes() {

    const clientes = [
        new Cliente('João Noel', 'do Sacramento', 28, 'sacramento.joao15@gmail.com', '123055', '1'),
        new Cliente('Noel', 'do Sacramento', 29, 'sacramento.joao115@gmail.com', '123045', '2'),
        new Cliente('João Noel', 'do Sacramento', 27, 'sacramento.joao5@gmail.com', '123052', '3'),
        new Cliente('João Noel', 'Djogbenon', 25, 'sacramento.joao1@gmail.com', '123053', '4')
    ];
    function clienteSelecionado(cliente: Cliente) {
        console.log(cliente.nome)
    }
    function clienteExcluido(cliente: Cliente) {
        console.log(cliente.id)
    }

    return (
        <Layout titulo="Notificações" subtitulo="Notificações Page">
            <h3>Notificações</h3>

            <Botao className={``}>{IconeGetForm()}</Botao>
            <Tabela clientes={clientes}
                clienteSelecionado={clienteSelecionado}
                clienteExcluido={clienteExcluido}
            ></Tabela>
        </Layout>
    )
}
