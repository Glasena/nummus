<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import useTransactions from './useTransactions';

// Pega o estado reativo do idioma atual
const { t } = useI18n();
const { state } = useTransactions();

const headers = computed(() => [
    { title: t('gridTransactions.id'), align: 'start', key: 'id' },
    { title: t('gridTransactions.bankDescription'), align: 'start', key: 'bank_description' },
    { title: t('gridTransactions.description'), align: 'start', key: 'description' },
    { title: t('gridTransactions.value'), align: 'start', key: 'value' },
    { title: t('gridTransactions.date'), align: 'start', key: 'date' }
]);

</script>
<template>
    <v-data-table-virtual :headers="headers" :items="state.transactions" height="400" item-value="transaction"
        fixed-header></v-data-table-virtual>
</template>
