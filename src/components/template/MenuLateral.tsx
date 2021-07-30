import MenuItem from './MenuItem';
import { IconeCasa, IconeAjuste, IconeBell, IconeSair } from '../icons'
import Logo from './Logo'
import useAuthData from '../../data/hook/useAuth';

export default function MenuLateral() {

    const { logout } = useAuthData();
    return (
        <aside className={`
            flex flex-col bg-gray-200 text-gray-700
            dark:bg-gray-900 
        `}>
            <div className={`flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-800 h-20 w-20 `}>
                <Logo />
            </div>
            <ul className={`flex-grow`}>
                <MenuItem url="/" texto="Home" icone={IconeCasa} />
                <MenuItem url="/ajutes" texto="Ajustes" icone={IconeAjuste} />
                <MenuItem url="/notificacoes" texto="Novidades" icone={IconeBell} />
            </ul>
            <ul>
                <MenuItem texto="Sair" icone={IconeSair}
                    onClick={logout}
                    className={`
                    text-red-600 dark:text-red-400 hover:bg-red-400
                    hover:text-black dark:hover:text-black`} />
            </ul>

        </aside>
    )
}