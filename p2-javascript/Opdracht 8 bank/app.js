let balance = 100; // initiële saldo

function updateBalance() {
    document.getElementById('balance').innerText = `Saldo: $${balance}`;
}

function deposit() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (!isNaN(amount) && amount > 0) {
        balance += amount;
        updateBalance();
        document.getElementById('result').innerText = `Storting van $${amount} voltooid.`;
    } else {
        document.getElementById('result').innerText = 'Voer een geldig bedrag in.';
    }
}

function withdraw() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (!isNaN(amount) && amount > 0 && amount <= balance) {
        balance -= amount;
        updateBalance();
        document.getElementById('result').innerText = `Opname van $${amount} voltooid.`;
    } else if (amount > balance) {
        document.getElementById('result').innerText = 'Onvoldoende saldo voor opname.';
    } else {
        document.getElementById('result').innerText = 'Voer een geldig bedrag in.';
    }
}

updateBalance(); // initieel saldo weergeven
