<template>
    <q-layout view="lHh Lpr lff">
      <q-header elevated class="bg-cyan-8">
        <q-toolbar>
          <q-toolbar-title>Mi Proyecto</q-toolbar-title>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        </q-toolbar>
      </q-header>
<!------------------------------------------------------------------------------------------------------------->
      <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="400"
      >
<!------------------------------------------------------------------------------------------------------------->
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
<!------------------------------------------------------------------------------------------------------------->
            <q-item clickable v-ripple to="/"><!--------------------------------------------------------------->
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>
              <q-item-section>
                Inicio
              </q-item-section>
            </q-item>
<!------------------------------------------------------------------------------------------------------------->
            <q-item active clickable v-ripple to="/MiPWA/src/pages/MiPrimero.vue">
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>
              <q-item-section>
                Mi Datos en QR
              </q-item-section>
            </q-item>
<!------------------------------------------------------------------------------------------------------------->
            <q-item clickable v-ripple to="/MiPWA/src/pages/MiSegundo.vue">
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>
              <q-item-section>
                Mi NFC
              </q-item-section>
            </q-item>
<!------------------------------------------------------------------------------------------------------------->
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>
              <q-item-section>
                OTROS.....
              </q-item-section>
            </q-item>
          </q-list><!------------------------------------------------------------------------------------------>
        </q-scroll-area><!------------------------------------------------------------------------------------->
<!------------------------------------------------------------------------------------------------------------->
        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">USUARIO</div>
            <div>Registro Vehicular</div>
          </div>
        </q-img>
      </q-drawer>
<!------------------------------------------------------------------------------------------------------------->
      <q-page-container>
        <router-view>

        </router-view>
      </q-page-container>
    </q-layout>
</template>
<!------------------------------------------------------------------------------------------------------------->
<!------------------------------------------------------------------------------------------------------------->
<script>
import { ref } from 'vue'

export default {
  setup () {
    const drawer = ref(false)

    return {
        drawer   
      }
    }
  }
</script>