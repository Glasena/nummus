<script setup>
import { onMounted, reactive, computed } from 'vue';
import api from "../services/axios";
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

const state = reactive({
    transactions: []
});

// Pega o estado reativo do idioma atual
const { t } = useI18n();

const headers = computed(() => [
    { title: t('gridTransactions.id'), align: 'start', key: 'id' },
    { title: t('gridTransactions.description'), align: 'start', key: 'description' },
    { title: t('gridTransactions.value'), align: 'start', key: 'value' },
    { title: t('gridTransactions.date'), align: 'start', key: 'date' }
]);

onMounted(async () => {
    try {
        const response = await api.get('/transactions');
        state.transactions = response.data
        console.log("Fetched transactions:", state.transactions);
    } catch (error) {
        console.error("Error fetching transactions:", error);
    }
});

</script>
<template>
    <v-data-table-virtual :headers="headers" :items="state.transactions" height="400" item-value="transaction"
        fixed-header></v-data-table-virtual>
</template>
