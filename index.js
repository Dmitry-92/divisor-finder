// index.js
function findDivisors(n) {
    const divisors = [];

    // Перебираем все числа от 1 до n
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            divisors.push(i);
        }
    }

    return divisors;
    return [];
}

function main() {
    const input = prompt("Введите число N:");
    const n = parseInt(input);

    if (isNaN(n) || n <= 0) {
        console.log("Пожалуйста, введите положительное целое число.");
        return;
    }

    const divisors = findDivisors(n);
    console.log(`Делители числа ${n}: ${divisors.join(', ')}`);
}

// Запускаем программу, если скрипт выполняется напрямую
if (typeof require !== 'undefined' && require.main === module) {
    main();
}