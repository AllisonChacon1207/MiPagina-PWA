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
                    Se mostrará el QR
                  </q-card-section>

                  <q-card-section>
                    <q-table
                      title="Mi Tabla"
                      :rows="rows"
                      :columns="columns"
                      row-key="name"
                      @row-click="onRowClick"
                    />
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
import { ref } from 'vue';
import QrcodeVue from 'qrcode.vue'; // Importar la librería para generar QR
import html2canvas from 'html2canvas'; // Importar html2canvas para capturar el QR

export default {
  components: {
    QrcodeVue, // Registrar el QR
  },
  setup() {
    // Estado de los diálogos
    const dialogVisibleQR = ref(false);
    const dialogVisibleNFC = ref(false);
    const dialogVisible = ref(false);
    const cellInfo = ref('');
    const qrCodeVisible = ref(false);
    const qrValue = ref('');
    const qrCodeElement = ref(null);

    // Datos para la tabla
    const columns = [
      { name: 'name', label: 'Nombre', field: 'name', align: 'left' },
      { name: 'age', label: 'Edad', field: 'age', align: 'left' },
      { name: 'address', label: 'Dirección', field: 'address', align: 'left' },
    ];

    const rows = [
      { name: 'Juan', age: 19, address: 'La Joya 123' },
      { name: 'Ana', age: 29, address: 'Residencial 456' },
      { name: 'Luis', age: 55, address: 'Barrio 789' },
      { name: 'Mario', age: 35, address: 'Las Uvas 123' },
      { name: 'Allison', age: 32, address: 'Arboleda 456' },
      { name: 'Carlos', age: 27, address: 'Kennedy 789' },
      { name: 'Eduardo', age: 25, address: 'Cañada 123' },
      { name: 'Anahi', age: 30, address: 'Pedregal 456' },
      { name: 'Lazaro', age: 35, address: 'Peña 789' },
      { name: 'Noe', age: 19, address: 'Hoya 0101' },
    ];

    // Función para abrir diálogos según tipo
    const openDialog = (type) => {
      if (type === 'QR') {
        dialogVisibleQR.value = true;
        console.log('Diálogo abierto para: Generador de QR');
      } else if (type === 'NFC') {
        dialogVisibleNFC.value = true;
        console.log('Diálogo abierto para: Lector de NFC');
      }
    };

    // Importar QR Code
    const QRCode = require('qrcode');

    // Importar html2canvas
    const html2canvas = require('html2canvas');


    // Función cuando se hace clic en una fila de la tabla
    const onRowClick = (evt, row) => {
      cellInfo.value = `Nombre: ${row.name}, Edad: ${row.age}, Dirección: ${row.address}`;
      qrCodeVisible.value = false;
      dialogVisible.value = true;
    };

    // Función para generar el QR
    const generateQR = () => {
      qrValue.value = cellInfo.value;
      qrCodeVisible.value = true;
    };

    // Función para descargar el QR
    const downloadQR = () => {
      html2canvas(qrCodeElement.value).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'qr-code.png';
        link.click();
      });
    };

    return {
      dialogVisibleQR,
      dialogVisibleNFC,
      dialogVisible,
      cellInfo,
      qrCodeVisible,
      qrValue,
      qrCodeElement,
      columns,
      rows,
      openDialog,
      onRowClick,
      generateQR,
      downloadQR,
    };
  },
};
</script>

<style scoped>
/* Estilos específicos para este componente */
.small-card-section {
  padding: 10px;
  font-size: 10px;
}
</style>
