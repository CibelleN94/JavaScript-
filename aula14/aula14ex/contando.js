    function contar() {    
        let n1 = document.querySelector('input#num1')
        let n2 = document.querySelector('input#num2')
        let pass = document.querySelector('input#pass')
        let res = document.querySelector('div#res')

    if (n1.value.lenght == 0|| n2.value.lenght == 0 || pass.value.lenght == 0) 
    {
        window.alert ('[ERRO] Faltam dados')
    } else {
        res.innerHTML = 'Contando...'
        let i = Number(n1.value)
        let f = Number(n2.value)
        let p = Number(pass.value)

        for(let c = i; c <= f; c += p){
            res.innerHTML += ` ${c} `
        }
    }
}
       
    