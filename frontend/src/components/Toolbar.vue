<script setup>
import { shallowRef, toRef } from 'vue';
import { useI18n } from 'vue-i18n';
import { useTheme } from 'vuetify'

const collapse = shallowRef(false)
const dialLocation = toRef(() => collapse.value ? 'right center' : 'bottom center');
const tooltipLocation = toRef(() => collapse.value ? 'bottom' : 'left');

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

</script>

<template>
    <v-app-bar :title="$t('appTitle')">
        <v-btn class="mr-3" icon="mdi-dots-vertical" size="small" variant="elevated">
            <v-icon></v-icon>
            <v-speed-dial :location="dialLocation" activator="parent" open-on-hover>
                <v-btn @click="item.click && item.click()" v-for="(item, i) in dialActions" :key="i" :color="item.color"
                    :icon="item.icon" v-tooltip="{ location: tooltipLocation, text: $t(item.tooltip) }"></v-btn>
            </v-speed-dial>
        </v-btn>
    </v-app-bar>
</template>