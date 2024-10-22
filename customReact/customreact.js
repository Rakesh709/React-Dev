
function customRender(reactElement,container){
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML= reactElement.children;
    // domElement.setAttribute("href",reactElement.props.href);
    // domElement.setAttribute("target",reactElement.props.target);

    // container.appendChild(domElement)

    const domElement =document.createElement(reactElement.type);

    domElement.innerHTML= reactElement.children

    for(const prop in reactElement.props){
        if(prop==="children") continue;

        domElement.setAttribute(prop,reactElement.props[prop])
    }

    container.appendChild(domElement)

}


function customRender2(reactElement2,container2){
    const domElement2 = document.createElement(reactElement2.type);
    domElement2.setAttribute("contenteditable",reactElement2.props.contenteditable)
    if (reactElement2.children) {
        domElement2.innerHTML = reactElement2.children;
    }

    container2.appendChild(domElement2)
}

//how react kaise complile krta hai 
const reactElement={
    type:'a',
    props:{
        href:"https://www.google.com",
        target:'_blank'
    },
    children:'click me to visit google'
}

const reactElement2={
    type:'p',
    props:{
        contenteditable:true
    },
    children:'This is an editable paragraph.'
}



const mainContainer=document.getElementById("root")

// customRender(kya render karu, kha render karu)

customRender(reactElement,mainContainer)
customRender2(reactElement2,mainContainer)
