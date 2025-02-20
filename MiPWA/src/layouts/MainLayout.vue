<template>
  <q-layout view="hHh lpR fFf">
    <!-- Encabezado -->
    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Mi Pagina PWA
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- Contenido principal -->
    <q-page-container>
      <q-page class="q-pa-md">
        <!-- Primer q-card: Generador de QR -->
        <q-card class="q-mb-md">
          <q-card-section>
            <h1>Generador de QR</h1>
            <div class="q-pa-md q-gutter-sm">
              <q-btn
                color="primary"
                label="Generar QR"
                no-caps
                @click="openDialog('QR')"
              />

              <q-dialog v-model="dialogVisible">
                <q-card>
                  <q-card-section class="row items-center q-pb-none text-h6">
                    Generador de QR
                  </q-card-section>

                  <q-card-section>
                    Aquí puedes generar tu código QR.
                  </q-card-section>

                  <q-card-actions align="right">
                    <q-btn flat label="Cerrar" color="primary" v-close-popup />
                  </q-card-actions>
                </q-card>
              </q-dialog>
            </div>
          </q-card-section>
        </q-card>

        <!-- Segundo q-card: Lector de NFC -->
        <q-card>
          <q-card-section>
            <h1>Lector de NFC</h1>
            <div class="q-pa-md q-gutter-sm">
              <q-btn
                color="primary"
                label="Leer NFC"
                no-caps
                @click="openDialog('NFC')"
              />

              <q-dialog v-model="dialogVisible">
                <q-card>
                  <q-card-section class="row items-center q-pb-none text-h6">
                    Lector de NFC
                  </q-card-section>

                  <q-card-section>
                    Acerca tu dispositivo.
                  </q-card-section>

                  <q-card-actions align="right">
                    <q-btn flat label="Cerrar" color="primary" v-close-popup />
                  </q-card-actions>
                </q-card>
              </q-dialog>
            </div>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const dialogVisible = ref(false)

    // Función para abrir el diálogo
    const openDialog = (type) => {
      dialogVisible.value = true
      console.log(`Diálogo abierto para: ${type}`)
    }

    return {
      dialogVisible,
      openDialog
    }
  }
}
</script>

<style scoped>
/* Estilos específicos para este componente */
</style>