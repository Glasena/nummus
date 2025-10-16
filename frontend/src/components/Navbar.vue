<script setup>
</script>

<template>
    <v-card>
        <v-layout>
            <v-navigation-drawer expand-on-hover permanent rail>
                <v-list>
                    <v-list-item prepend-avatar="https://preview.redd.it/bhfb0y0tp7o81.jpg?width=1080&crop=smart&auto=webp&s=709a7c75198980e952699518d042a7473d0ed647"
                        subtitle="glasena1@gmailcom" title="Glasena"></v-list-item>
                </v-list>

                <v-divider></v-divider>

                <v-list density="compact" nav>
                    <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
                    <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me"
                        value="shared"></v-list-item>
                    <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
                </v-list>
            </v-navigation-drawer>

            <v-main style="height: 250px"></v-main>
        </v-layout>
    </v-card>
</template>