import  Details from './pageLoad.js'



function Content(){
    const header = document.querySelectorAll('.navMenu > div');
    const content = document.querySelector('.content');
    const contentDiv = document.createElement('div')
    contentDiv.classList.add('contentBox')
    content.appendChild(contentDiv)
    contentDiv.textContent = ""
    Details ('home');
    header.forEach(element => {
        element.addEventListener("click" , (e) =>{
            const navClass = e.target.className;
            contentDiv.textContent = "";
            Details (navClass);
           
        })       
    });
}

export default Content;