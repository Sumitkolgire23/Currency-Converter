// API Configuration
const API_KEY = 'YOUR_API_KEY_HERE'; // Get free key from exchangerate-api.com
const API_URL = 'https://v6.exchangerate-api.com/v6/';

// DOM Elements
const amountInput = document.getElementById('amount');
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const convertBtn = document.getElementById('convertBtn');
const swapBtn = document.getElementById('swapBtn');
const result = document.getElementById('result');
const resultText = document.getElementById('resultText');
const exchangeRate = document.getElementById('exchangeRate');
const loading = document.getElementById('loading');
const error = document.getElementById('error');
const errorText = document.getElementById('errorText');

// Event Listeners
convertBtn.addEventListener('click', convertCurrency);
swapBtn.addEventListener('click', swapCurrencies);
amountInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') convertCurrency();
});

// Swap currencies
function swapCurrencies() {
    const temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;
    
    if (result.classList.contains('show')) {
        convertCurrency();
    }
}

// Convert currency
async function convertCurrency() {
    const amount = parseFloat(amountInput.value);
    const from = fromCurrency.value;
    const to = toCurrency.value;

    // Validation
    if (isNaN(amount) || amount <= 0) {
        showError('Please enter a valid amount');
        return;
    }

    // Hide previous results and errors
    hideAll();
    loading.classList.add('show');

    try {
        // Fetch exchange rate
        const response = await fetch(`${API_URL}${API_KEY}/pair/${from}/${to}`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch exchange rates');
        }

        const data = await response.json();

        if (data.result === 'success') {
            const rate = data.conversion_rate;
            const convertedAmount = (amount * rate).toFixed(2);

            // Display result
            resultText.textContent = `${amount} ${from} = ${convertedAmount} ${to}`;
            exchangeRate.textContent = `1 ${from} = ${rate.toFixed(4)} ${to}`;
            
            loading.classList.remove('show');
            result.classList.add('show');
        } else {
            throw new Error('Invalid response from API');
        }
    } catch (err) {
        loading.classList.remove('show');
        showError('Unable to fetch exchange rates. Please try again later.');
        console.error('Error:', err);
    }
}

// Show error message
function showError(message) {
    errorText.textContent = message;
    error.classList.add('show');
}

// Hide all result/loading/error elements
function hideAll() {
    result.classList.remove('show');
    loading.classList.remove('show');
    error.classList.remove('show');
}

// Initial load - you can optionally convert on page load
window.addEventListener('load', () => {
    console.log('Currency Converter loaded successfully!');
    console.log('Note: Replace API_KEY in script.js with your key from exchangerate-api.com');
});
