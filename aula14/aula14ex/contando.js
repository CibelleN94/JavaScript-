function contar() {    
    var n1 = document.querySelector('input#num1')
    var n2 = document.querySelector('input#num2')
    var pass = document.querySelector('input#pass')
    var res = document.querySelector('div#res')
    
if (n1.value.length == 0 || n2.value.length == 0 || pass.value.length == 0) {
    window.alert ('[ERRO] Faltam dados.')
} else {
    res.innerHTML = 'Contando:'
    var i = Number(n1.value)
    var f = Number (n2.value)
    var passo = Number (pass.value)

    for (var c = i; i <=f; c+=passo)
        res.innerHTML = `${c}`
}
}