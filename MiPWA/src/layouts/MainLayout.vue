<template>
  <q-layout view="hHh lpR fFf">
    <!-- Encabezado -->
    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" alt="Logo">
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
          <q-card-section class="small-card-section">
            <h1>Generador de QR</h1>
            <div class="q-pa-md q-gutter-sm">
              <q-btn
                color="primary"
                label="Generar QR"
                no-caps
                @click="openDialog('QR')"
              />

              <!-- Diálogo para Generador de QR -->
              <q-dialog v-model="dialogVisibleQR">
                <q-card>
                  <q-card-section class="row items-center q-pb-none text-h4">
                    Se mostrara el QR
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
            <h1>Lector del NFC</h1>
            <div class="q-pa-md q-gutter-sm">
              <q-btn
                color="primary"
                label="Leer NFC"
                no-caps
                @click="openDialog('NFC')"
              />

              <!-- Diálogo para Lector de NFC -->
              <q-dialog v-model="dialogVisibleNFC">
                <q-card>
                  <q-card-section class="row items-center q-pb-none text-h4">
                    Los botones del NFC
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
    // Establecemos estados separados para los diálogos
    const dialogVisibleQR = ref(false)
    const dialogVisibleNFC = ref(false)

    // Función para abrir el diálogo según el tipo
    const openDialog = (type) => {
      if (type === 'QR') {
        dialogVisibleQR.value = true
        console.log('Diálogo abierto para: Generador de QR')
      } else if (type === 'NFC') {
        dialogVisibleNFC.value = true
        console.log('Diálogo abierto para: Lector de NFC')
      }
    }

    return {
      dialogVisibleQR,
      dialogVisibleNFC,
      openDialog
    }
  }
}
</script>

<style scoped>
/* Estilos específicos para este componente */

.small-card-section {
  padding: 10px; /* Puedes ajustar el valor según el tamaño que prefieras */
  font-size: 10px; /* Si también deseas reducir el tamaño del texto */
}

</style>