function Logo(){
    const navMenu = document.querySelector('.navMenu');
    const logo = document.createElement('div')
    logo.innerHTML = 'Insert Logo Here'
    navMenu.appendChild(logo)
}

function Header(){
    const nav = ['Home', 'About', 'Contact'];
    const header = document.querySelector('.header');
    const navMenu = document.createElement('div')
    navMenu.classList.add('navMenu')

    for(const[i , name] of nav.entries()){
        const element = document.createElement('div');
        element.classList.add(name.toLowerCase());
        element.innerHTML = name;
        nav[i] = element;
    }
    navMenu.append(...nav)
    header.appendChild(navMenu)

}
export default Header;
