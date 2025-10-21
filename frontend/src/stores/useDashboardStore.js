import { defineStore } from 'pinia';

export const useDashboardStore = defineStore('dashboard', {

    //State - Propriedades reativas
    state() {
        return {
            referenceDate: new Date(),
            bankId: "1"
        }
    },
    //Actions - métodos
    actions: {
        setLastDayReferenceDate(newDate) {
            this.referenceDate = newDate;
        },
        setBankId(bankId) {
            this.bankId = bankId;
        }
    },
    //getters
    getters: {

    }
})