interface BotaoProps {
    className?: string
    children?: any
    cor?: 'gren' | 'blue' | 'gray'
}
export default function Botao(props: BotaoProps) {
    return (
        <button className={`rounded-full hover:bg-purple-50 p-1 m-1`}>{props.children}</button>
    )
}