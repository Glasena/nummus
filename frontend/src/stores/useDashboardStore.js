import { defineStore } from 'pinia';
import dateUtils from '../Utils/dateUtils';

export const useDashboardStore = defineStore('dashboard', {

    //State - Propriedades reativas
    state() {
        return {
            referenceDate: new Date(),
        }
    },
    //Actions - métodos
    actions: {
        setLastDayReferenceDate(newDate) {
            this.referenceDate = newDate;
        }
    },
    //getters
    getters: {

    }
})