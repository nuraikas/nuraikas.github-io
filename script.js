
document.onkeypress = function(event){
    if(event.key === 'Enter'){
        clickBtn();
    }
}
clickBtn = () => {

    const input = document.getElementById('input');

    const list = document.getElementById('todoList');
    const newLi = document.createElement('li');
    const changeBtn = document.createElement('i');
    const delBtn = document.createElement('i');
    const doneBtn = document.createElement('i');
    const readyBtn = document.createElement('i');

    
    readyBtn.innerHTML = '<button class="fas fa-check-circle"></button>';
    doneBtn.innerHTML = '<button class="fas fa-check-square"></button>';
    changeBtn.innerHTML = '<button class="fas fa-pen"></button>';
    delBtn.innerHTML = '<button class="fas fa-trash-alt"></button>';

    

//добавление пункта
    if (input.value !== '') {
        newLi.textContent = input.value;
        list.prepend(newLi);
        input.value = '';
        newLi.append(delBtn);
        newLi.append(changeBtn);
        newLi.append(readyBtn);
    }
//удаление пункта
    delBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
    });

    const changeText = document.createElement('input');
    changeText.setAttribute("id", "text");

//редактирование текста в списке
    changeBtn.addEventListener('click', function(){
        newLi.classList.add('margin');
        changeText.innerHTML = '<input type="text">';
        newLi.append(changeText, doneBtn);

    });

    doneBtn.addEventListener('click', function(){
        const text = document.getElementById('text');
        newLi.classList.remove('margin');
        if(text.value !== ''){
            newLi.textContent = text.value;
            newLi.append(delBtn);
            newLi.append(changeBtn);
            newLi.append(readyBtn);
        }
        else {
            const parent = this.parentNode;
            parent.remove();
        }
    });
    

//зачеркивание
let status = false;
    readyBtn.addEventListener('click', function(){
        if (status){
            newLi.classList.add('done');
        }
        else{
            newLi.classList.remove('done');
        }
        status = !status;
    });

}