
import { onMounted, ref } from 'vue';
import api from "../../services/axios.js"

const useBanks = () => {

    const banks = ref([]);

    const getBanks = async () => {
        try {
            //@todo - AJUSTAR REQ BACKEND
            const response = await api.get('/banks');
            banks.value = response.data;
        } catch (error) {
            console.error('Error fetching transactions:', error);
        }
    };

    onMounted(() => {
        getBanks();
    });

    return { banks }

};

export default useBanks;