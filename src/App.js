import Content from "./components/Content.js";
import Header from "./components/Header.js"
// import Content from "./components/Content"
// import Footer from "./components/Footer"

function App(){
    const nav = ['Header', 'Content', 'Footer'];
    for(const[i , name] of nav.entries()){
        const element = document.createElement('div');
        element.classList.add(name.toLowerCase());

        nav[i] = element;
    }
    document.body.append(...nav)

    Header();
    Content();

}

App();