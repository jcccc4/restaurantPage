function Home(){
    const contentBox =document.querySelector('.contentBox');
    contentBox.textContent = ''
    contentBox.innerHTML = '<div> HOME </div>'
}






function Content(){
    const header = document.querySelectorAll('.navMenu > div');
    const content =document.querySelector('.content');
    const contentDiv = document.createElement('div')
    contentDiv.classList.add('contentBox')
    content.appendChild(contentDiv)

    header.forEach(element => {
        element.addEventListener("click" , () =>{
            const navClass = element.classList.value;
            if(navClass === 'home'){
                Home();
            }



        })       
    });
}

export default Content;