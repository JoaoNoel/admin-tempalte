/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Head from 'next/head';
import router from 'next/router';
import loading from '../../../public/images/loading.gif';
import useAuthData from '../../data/hook/useAuth';

export default function ForcarAutenticacao(props) {

    const { usuario, carregando } = useAuthData();


    function renderizarConteudo() {
        return (
            <>
                <Head>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                            if(!document.cookie?.includes("admin-template-cod3r-auth")){
                                window.location.href= "/autenticacao"
                            }
                        `
                        }}
                    />
                </Head>
                {props.children}
            </>
        )
    }
    function renderizarCarregando() {
        return (
            <div className={`flex justify-center items-center h-screen`}>
                <Image src={loading} alt="carregando o conteudo" />
            </div>
        )
    }

    if (!carregando && usuario?.email) {
        return renderizarConteudo();
    } else if (carregando) {
        return renderizarCarregando();
    } else {
        router.push('/autenticacao');
        return null;
    }
}