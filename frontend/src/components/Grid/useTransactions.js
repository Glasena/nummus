
import { onMounted, reactive, watch } from 'vue';
import dateUtils from '../../Utils/dateUtils.js';
import api from "../../services/axios.js"
import { useDashboardStore } from '../../stores/useDashboardStore.js';

const useTransactions = () => {

    const dashboardStore = useDashboardStore();

    const state = reactive({
        transactions: []
    });

    const getTransactions = async (referenceEndDate) => {
        try {

            //@todo - AJUSTAR REQ BACKEND

            // 1️⃣ Busca todos os registros
            const response = await api.get('/transactions');

            // 2️⃣ Calcula o intervalo de datas do mês
            const start = new Date(dateUtils.getFirstDayOfMonth(referenceEndDate));
            const end = new Date(dateUtils.getLastDayOfMonth(referenceEndDate));

            console.log(response, start, end);

            // 3️⃣ Filtra localmente (front-end)
            const filtered = response.data.filter((transaction) => {
                const transactionDate = new Date(transaction.date);
                return transactionDate >= start && transactionDate <= end;
            });

            // 4️⃣ Retorna apenas os filtrados
            return filtered;
        } catch (error) {
            console.error('Error fetching transactions:', error);
        }
    };

    onMounted(async () => {
        state.transactions = await getTransactions(new Date());
    });

    watch(
        () => dashboardStore.referenceDate,
        async () => {
            state.transactions = await getTransactions(dashboardStore.referenceDate);
        }
    );

    return { state };

};

export default useTransactions;