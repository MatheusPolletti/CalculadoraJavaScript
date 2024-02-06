n1 = document.getElementById('num1')
n2 = document.getElementById('num2')
resp = document.getElementById('resultado')

function mais()
{
    nu1 = Number(n1.value)
    nu2 = Number(n2.value)
    if (nu1 == 0 || nu2 == 0)
    {
        alert('Valores não digitadores serão considerados 0')
    }
    soma = nu1 + nu2
    resp.innerHTML = soma.toFixed(2)
    n1.value = ''
    n1.focus()
    n2.value = ''
    n2.focus()
}

function menos()
{
    nu1 = Number(n1.value)
    nu2 = Number(n2.value)
    if (nu1 == 0 || nu2 == 0)
    {
        alert('Valores não digitadores serão considerados 0')
    }
    soma = nu1 - nu2
    resp.innerHTML = soma.toFixed(2)
    n1.value = ''
    n1.focus()
    n2.value = ''
    n2.focus()
}

function multi()
{
    nu1 = Number(n1.value)
    nu2 = Number(n2.value)
    if (nu1 == 0 || nu2 == 0)
    {
        alert('Valores não digitadores serão considerados 0')
    }
    soma = nu1 * nu2
    resp.innerHTML = soma.toFixed(2)
    n1.value = ''
    n1.focus()
    n2.value = ''
    n2.focus()
}

function div()
{
    nu1 = Number(n1.value)
    nu2 = Number(n2.value)
    if (nu1 == 0)
    {
        alert('Valores não digitadores serão considerados 0')
        resp.innerHTML = 0
        n1.value = ''
        n1.focus()
        n2.value = ''
        n2.focus()
    }
    else if (nu2 == 0)
    {
        alert('Valores não digitadores serão considerados 0')
        alert('Impossível dividir algo por 0')
        n1.value = ''
        n1.focus()
        n2.value = ''
        n2.focus()
    }
    else
    {
    soma = nu1 / nu2
    resp.innerHTML = soma.toFixed(2)
    n1.value = ''
    n1.focus()
    n2.value = ''
    n2.focus()
    }
}
