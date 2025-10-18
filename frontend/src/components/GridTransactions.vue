<script setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import api from "../services/axios";
import { useRouter } from 'vue-router';

const state = reactive({
    transactions: []
});

const headers = [
    { title: 'ID', align: 'start', key: 'id' },
    { title: 'Descrição', align: 'start', key: 'description' },
    { title: 'Valor', align: 'start', key: 'value' },
    { title: 'Data', align: 'start', key: 'date' }
]

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
