function getLastDayOfMonth(date) {

    const year = date.getFullYear();
    const month = date.getMonth();
    const lastDay = new Date(year, month + 1, 0);

    return lastDay.toISOString().slice(0, 10);

}

function getFirstDayOfMonth(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    return firstDay.toISOString().slice(0, 10);
}

function getCurrentMonthYear() {
    return new Date().toISOString().slice(0, 7); // Ex: '2025-10'
}

function getReferenceMonthFromMonthYear(monthYearString) {
    // Ex: '2025-10'
    const [year, month] = monthYearString.split('-').map(Number);

    // O dia 0 do mês seguinte é o último dia do mês atual.
    // Usamos 'month' puro porque Date() usa 0-indexed.
    const lastDay = new Date(year, month, 0);

    return lastDay.toISOString().slice(0, 10); // Ex: '2025-10-31'
}

/**
 * Entra Date e sai "2025-10"
 */
function convertDateToReference(date) {
    lastDayDate = this.getLastDayOfMonth(date);
    return this.getCurrentMonthYear(lastDayDate);
}

export default {
    getCurrentMonthYear,
    getLastDayOfMonth,
    getReferenceMonthFromMonthYear,
    convertDateToReference,
    getFirstDayOfMonth
}