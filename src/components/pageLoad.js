function Details(title){
    const contentBox = document.querySelector('.contentBox');
    const contentTitle = document.createElement('div')
    const contentDescription = document.createElement('div')

    contentBox.textContent = ''

    contentTitle.classList.add('boxTitle')
    contentDescription.classList.add('boxDescription')

    if(title === 'home'){    
        contentTitle.innerHTML = 'Insert Restaurant Title Here'
        const about = document.createElement('div')
        const aboutdescription = document.createElement('div')

        about.classList.add('aboutRestaurant')
        aboutdescription.classList.add('aboutDescription')

        about.innerHTML = 'About restaurant'
        aboutdescription.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nunc augue, sed sodales lacus molestie vel. Pellentesque vestibulum commodo ligula. Nunc tincidunt consectetur velit.'
        
        contentDescription.append(about, aboutdescription)
    }else if(title === 'about'){    
        contentTitle.innerHTML = 'Insert Restaurant Title Here'
        contentDescription.innerHTML = 'Insert Description Here'
    }else if(title === 'contact'){    
        contentTitle.innerHTML = 'Insert Restaurant Title Here'
        contentDescription.innerHTML = 'Insert Description Here'
    }
    
    
    contentBox.append(contentTitle , contentDescription)
}

export default Details;
