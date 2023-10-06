// Definindo a classe Contatos
class Contatos {
    constructor(nome, email, telefone, area){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.area = area;
    }
}
// Definindo a classe GerenciadorContatos
class GerenciadorContatos {
    constructor(){
        // Inicializa a lista de contatos vazia
        this.contatos = []
    }

    adicionarContatos(contato) {
        // Adiciona um contato a lista de contatos
        this.contatos.push(contato);
    }

    exibirContatos(){
        // Obtém a lista de contatos
        const listaContatos = document.getElementById('contato-lista')

        // Limpa a lista de contatos
        listaContatos.innerHTML = ''

        // Para cada novo contato na lista de contatos, cria um novo elemento 'li' e adiciona na lista de contatos
        for(const contato of this.contatos){
            const li = document.createElement('li');
            li.innerHTML = `${contato.nome} - ${contato.email} - ${contato.telefone} - ${contato.area}`

            listaContatos.appendChild(li)
        }
    }
}

// Cria um objeto de classe GerenciadorContatos
const gerenciadorContatos = new GerenciadorContatos();

// Cria os elementos necessarios
const contatoForm = document.getElementById('contato-form');
const nomeForm = document.getElementById('nome');
const emailForm = document.getElementById('email');
const telefoneForm = document.getElementById('tel');
const areaForm = document.getElementById('area');
const mostrarContatos = document.getElementById('mostrar-contatos');
const ocultarContatos = document.getElementById('ocultar-contatos');
const listaContatos = document.getElementById('contato-lista');

contatoForm.addEventListener('submit', function(event){
    event.preventDefault();

    const nome = nomeForm.value;
    const email = emailForm.value;
    const telefone = telefoneForm.value;
    const area = areaForm.value;

    // Criando objeto da classe Contato
    const contato = new Contatos(nome, email, telefone, area);

    gerenciadorContatos.adicionarContatos(contato)

    nomeForm.value = ''
    emailForm.value = ''
    telefoneForm.value = ''
    areaForm.value = ''
});

// Estamos adicionando um manipulador de eventos para o botão mostrar contatos. ele exibe  lista de contatos
mostrarContatos.addEventListener('click', function(){
    gerenciadorContatos.exibirContatos();
    listaContatos.style.display = 'block'
})

ocultarContatos.addEventListener('click', function(){
    listaContatos.style.display = 'none'
})