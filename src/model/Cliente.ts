export default class Cliente {
    #id: string
    #nome: string
    #apelido: string
    #idade: number
    #email: string
    #bi: string

    constructor(nome: string, apelido: string, idade: number, email: string, bi: string, id: string = null) {
        this.#nome = nome;
        this.#apelido = apelido;
        this.#idade = idade;
        this.#email = email;
        this.#bi = bi;
        this.#id = id;
    }

    static vazio() {
        return new Cliente('', '', 0, '', '', '');
    }

    get id() {
        return this.#id;
    }
    get nome() {
        return this.#nome;
    }
    get apelido() {
        return this.#apelido;
    }
    get idade() {
        return this.#idade;
    }
    get email() {
        return this.#email;
    }
    get bi() {
        return this.#bi;
    }


}