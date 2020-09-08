//document.querySelector("#add-time")
//.addEventListener('click', cloneField);


function cloneField(){
    //pegando a classe schedule-item  --->   duplicando o elemento 
    const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true)

    //pegando os inputs para limpa=los
    const fields = newFieldsContainer.querySelectorAll('input')
    
    //limpando os inputs
    fields.forEach(function(field){
        field.value="0"
    })

    //mostrando o elemento 
    const nw = document.querySelector('#schedule-items').appendChild(newFieldsContainer)

    

    
}

