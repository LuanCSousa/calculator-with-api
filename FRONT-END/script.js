const url = 'https://eb071c9b-40a7-4a57-96d2-8510719f8e38-00-rdxonxge1jmx.janeway.replit.dev/calculadora';

document.getElementById('btnEnviar').addEventListener('click', function(){
    resultText = document.getElementById('result')
    num1 = document.getElementById('num1').value
    num2 = document.getElementById('num2').value
    operador = document.getElementById('operator').value
    data = {
        'value1': num1,
        'value2': num2,
        'symbol': operador
    }
    const init = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        mode: 'cors'
    }
    if(!num1 & !num2){
        return resultText.innerHTML = "Os campos estão vazios!";
    }
    fetch(url, init)
        .then(response => {
            if(!response.ok){
                throw new Error('Erro na requisição');
            }
            return response.json();
        })
        .then(result => {
            resultText.innerHTML = "Resultado: " + result
        })
        .catch(error => {
            console.error('Erro:', error);
        })
    console.log(num1)
    console.log(num2)
    console.log(operador)
    console.log(data)
})