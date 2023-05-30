function enviar() {
    let res = document.getElementById('content')
    let restext = res.value
    let mtext = restext.toUpperCase()
    if (mtext == 'BRASIL') {
        document.getElementById('result').innerText = 'BRASIL'
        document.getElementById('result').style.color = 'green'
    } else{
        document.getElementById('result').innerText = 'NÃO É BRASIL'
        document.getElementById('result').style.color = 'red'
    }
}

function dark(){
    document.body.style.backgroundColor = '#4c4c4c'
    document.getElementById('box').style.backgroundColor = '#292929'
    document.getElementById('title').style.color = 'white'
    document.getElementById('iconstheme').style.color = 'white'
}

function light(){
    document.body.style.backgroundColor = '#f9f7f3'
    document.getElementById('box').style.backgroundColor = 'white'
    document.getElementById('title').style.color = 'black'
    document.getElementById('iconstheme').style.color = 'black'
}