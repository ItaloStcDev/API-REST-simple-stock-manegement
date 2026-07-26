interface Produto {
    nome: string;
    preco: number;
    disponivel: boolean;
}

function criarProduto(nome: string, preco: number, emEstoque: boolean): Produto {
    return {
        nome: nome,
        preco: preco,
        disponivel: emEstoque
    };
}

const item = criarProduto("Teclado", 150, true);
console.log(item.nome);