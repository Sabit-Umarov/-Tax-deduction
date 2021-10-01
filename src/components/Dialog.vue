<template>
  <v-dialog
    v-model="dialog"
    :fullscreen="isMobile"
  >
    <template v-slot:activator="{on, attrs}">
      <v-btn
        v-wave
        plain
        class="wrapper-button button"
        elevation="0"
        x-large
        v-bind="attrs"
        v-on="on"
      >
        Налоговый вычет
      </v-btn>
    </template>
    <v-card
      :tile="isMobile"
    >
      <v-card-title>
        <div class="card__title-container">
          <span class="card__title-container__text">Налоговый вычет</span>
          <v-btn
            v-wave
            icon
            color="#f04b46"
            @click="dialog = false"
          >
            <img src="/icons/close-icon.svg" alt="">
          </v-btn>
        </div>
      </v-card-title>
      <v-card-text class="card__main-container">
        <span>
          Используйте налоговый вычет чтобы погасить ипотеку досрочно. <br>
          Размер налогового вычета составляет не более 13% от своего финального годового дохода.
        </span>
        <DialogInputs />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import DialogInputs from "./DialogInputs.vue"
export default {
  name: 'Dialog',
  data: () => ({
    dialog: false,
    isMobile: false
  }),
  components: {
    DialogInputs
  },
  created() {
    window.addEventListener("resize", this.screenSize)
    this.screenSize()
  },
  destroyed() {
    window.removeEventListener("resize", this.screenSize)
  },
  methods: {
    screenSize() {
      window.innerWidth > 600 ? this.isMobile = false : this.isMobile = true
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  &__title-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    &__text {
      font-size: 28px;
      margin-top: 18px;
    }
  }
  &__main-container {
    line-height: 24px;
  }
}
</style>