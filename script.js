document.addEventListener('DOMContentLoaded', () => {
    const startDate = new Date('2023-09-08');
    const today = new Date();
    
    const calculateDays = (start, end) => {
        const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
        return Math.round((end - start) / oneDay);
    };

    const daysCount = calculateDays(startDate, today);
    document.getElementById('daysCount').textContent = `${daysCount} days since September 8, 2023.`;
});
