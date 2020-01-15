//Exercício 1

function checaIdade(idade) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(idade >= 18) {
                resolve();
            } else {
                reject();
            }
        }, 2000);

    })
}
checaIdade(20)
.then(function() {
console.log("Maior que 18");
})
.catch(function() {
console.log("Menor que 18");
});
   
//Exercício 2

let inputElement = document.querySelector('input[name="user"]');
let listContainer = document.querySelector('ul');

function buscar() {
    listContainer.innerHTML = '';

    //Parte do exercício 3 do Loading
    let listElementLoading = document.createElement('li');
    let listTextLoading = document.createTextNode('Carregando...');
    listElementLoading.appendChild(listTextLoading);
    listContainer.appendChild(listElementLoading);

    axios.get('http://api.github.com/users/' + inputElement.value + '/repos')
    .then(function(response) {

        for (repo of response.data) {
            let listElement = document.createElement('li');
            let listText = document.createTextNode(repo.name);

            listElement.appendChild(listText);

            listContainer.appendChild(listElement);
        }

        //Parte do exercício 3 do Loading
        if(response.data[0]) {
            listContainer.removeChild(listElementLoading);
        } else {
            listTextLoading.data = 'Este usuário não possui repositórios.';
        }
    })
    .catch(function(error) {

        //Parte do exercício 3 do Loading
        listTextLoading.data = 'Erro: Usuário não existe.';
    });
};

//Exercício 3
//Código dentro de Exercício 2
