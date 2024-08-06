document.addEventListener('DOMContentLoaded', () => {
    const result = document.getElementById('result');
    const expression = document.getElementById('expression');
    let currentExpression = '';
    let currentResult = '';

    document.querySelectorAll('.number').forEach(button => {
        button.addEventListener('click', () => {
            currentExpression += button.getAttribute('data-number');
            expression.innerText = currentExpression;
        });
    });

    document.querySelectorAll('.operator').forEach(button => {
        button.addEventListener('click', () => {
            const operator = button.getAttribute('data-operator');
            if (operator === 'CE') {
                currentExpression = '';
                currentResult = '';
                expression.innerText = '';
                result.innerText = '';
            } else if (operator === '+/-') {
                if (currentExpression) {
                    currentExpression = String(-parseFloat(currentExpression));
                    expression.innerText = currentExpression;
                }
            } else if (operator === '%') {
                if (currentExpression) {
                    currentExpression = String(parseFloat(currentExpression) / 100);
                    expression.innerText = currentExpression;
                }
            } else {
                currentExpression += ` ${operator} `;
                expression.innerText = currentExpression;
            }
        });
    });

    document.querySelector('.equal').addEventListener('click', () => {
        try {
            currentResult = eval(currentExpression.replace('×', '*').replace('÷', '/'));
            result.innerText = currentResult;
            currentExpression = String(currentResult);
        } catch {
            result.innerText = 'Error';
        }
    });
});
