document.getElementById('congruence-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const a = parseInt(document.getElementById('a').value);
    const b = parseInt(document.getElementById('b').value);
    const m = parseInt(document.getElementById('m').value);

    const resultDiv = document.getElementById('result');

    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const extendedGcd = (a, b) => {
        if (b === 0) return [1, 0, a];
        const [x1, y1, gcd] = extendedGcd(b, a % b);
        return [y1, x1 - Math.floor(a / b) * y1, gcd];
    };

    if (gcd(a, m) === 1) {
        const [x, y, gcd] = extendedGcd(a, m);
        const solution = ((x * b % m) + m) % m;
        resultDiv.innerHTML = `Solution: ${a}x ≡ ${b} (mod ${m}) is x ≡ ${solution} (mod ${m})`;
    } else {
        resultDiv.innerHTML = 'No solution exists';
    }
});
