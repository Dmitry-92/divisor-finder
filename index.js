const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findDivisors(n) {
    const divisors = [];

    // Перебираем все числа от 1 до n
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            divisors.push(i);
        }
    }

    return divisors;
}

function main() {
    rl.question('Введите число N: ', (answer) => {
        const n = parseInt(answer);

        if (isNaN(n) || n <= 0) {
            console.log('Пожалуйста, введите положительное целое число.');
            rl.close();
            return;
        }

        const divisors = findDivisors(n);
        console.log(`Делители числа ${n}: ${divisors.join(', ')}`);
        rl.close();
    });
}

main();