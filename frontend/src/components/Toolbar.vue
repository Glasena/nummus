<script setup>
import { shallowRef, toRef, watch, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useTheme } from 'vuetify'
import { useDashboardStore } from '../stores/useDashboardStore.js';

const collapse = shallowRef(false)
const dialLocation = toRef(() => collapse.value ? 'right center' : 'bottom center');
const tooltipLocation = toRef(() => collapse.value ? 'bottom' : 'left');
const referenceDate = ref(new Date());
const dashboardStore = useDashboardStore();

// Pega o estado reativo do idioma atual
const { locale } = useI18n();
const theme = useTheme();

// Função pra alternar idioma
const toggleLanguage = () => {
    locale.value = locale.value === 'pt' ? 'en' : 'pt'
}

const toggleTheme = () => {
    theme.toggle();
}

const dialActions = [
    { color: 'indigo', icon: 'mdi-translate', tooltip: 'tooltip.language', click: toggleLanguage },
    { color: 'grey-darken-4', icon: 'mdi-weather-night', tooltip: 'tooltip.darkMode', click: toggleTheme },
    { color: 'purple', icon: 'mdi-bank', tooltip: 'tooltip.selectBank' },
]

watch(referenceDate, (newDate, oldDate) => {
    dashboardStore.setLastDayReferenceDate(newDate);
})

</script>

<template>
    <v-app-bar>

        <!-- Título principal -->
        <v-toolbar-title>
            {{ $t('appTitle') }}
        </v-toolbar-title>

        <!-- @todo tradução / selecionar apenas mês e ano -->
        <v-date-input class="mr-4" max-width="250px" label="Date input" view-mode="months" variant="solo-filled"
            hide-details="auto" display-format="monthAndYear" density="compact" v-model="referenceDate">
        </v-date-input>

        <v-btn class="mr-4" icon="mdi-dots-vertical" size="small" variant="elevated">
            <v-icon></v-icon>
            <v-speed-dial :location="dialLocation" activator="parent" open-on-hover>
                <v-btn @click="item.click && item.click()" v-for="(item, i) in dialActions" :key="i" :color="item.color"
                    :icon="item.icon" v-tooltip="{ location: tooltipLocation, text: $t(item.tooltip) }"></v-btn>
            </v-speed-dial>
        </v-btn>

    </v-app-bar>
</template>