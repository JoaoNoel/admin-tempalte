import MenuItem from './MenuItem';
import { IconeCasa, IconeAjuste, IconeBell, IconeSair } from '../icons'
import Logo from './Logo'

export default function MenuLateral() {
    return (
        <aside className={`flex flex-col`}>
            <div className={`flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-800 h-20 w-20 `}>
                <Logo />
            </div>
            <ul className={`flex-grow`}>
                <MenuItem url="/" texto="Home" icone={IconeCasa} />
                <MenuItem url="/ajutes" texto="Ajustes" icone={IconeAjuste} />
                <MenuItem url="/notificacoes" texto="Novidades" icone={IconeBell} />
            </ul>
            <ul>
                <MenuItem url="/" texto="Sair" icone={IconeSair} />
            </ul>

        </aside>
    )
}