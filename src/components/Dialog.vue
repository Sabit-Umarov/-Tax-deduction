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
      class="card"
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
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjQyMjYgOS4wMDA4NkwxNy40NzcxIDIuOTQ0NjdDMTcuNjQwNyAyLjc4NjY3IDE3Ljc3MTIgMi41OTc2OCAxNy44NjA5IDIuMzg4NzJDMTcuOTUwNyAyLjE3OTc2IDE3Ljk5OCAxLjk1NTAyIDE3Ljk5OTkgMS43Mjc2MUMxOC4wMDE5IDEuNTAwMTkgMTcuOTU4NiAxLjI3NDY2IDE3Ljg3MjUgMS4wNjQxN0MxNy43ODYzIDAuODUzNjg2IDE3LjY1OTIgMC42NjI0NTcgMTcuNDk4NCAwLjUwMTY0NUMxNy4zMzc1IDAuMzQwODMzIDE3LjE0NjMgMC4yMTM2NTcgMTYuOTM1OCAwLjEyNzU0QzE2LjcyNTMgMC4wNDE0MjMgMTYuNDk5OCAtMC4wMDE5MTE1IDE2LjI3MjQgNi40NjY3NGUtMDVDMTYuMDQ1IDAuMDAyMDQwODQgMTUuODIwMiAwLjA0OTI4ODUgMTUuNjExMyAwLjEzOTA1MUMxNS40MDIzIDAuMjI4ODEzIDE1LjIxMzMgMC4zNTkyOTEgMTUuMDU1MyAwLjUyMjg3NEw4Ljk5OTE0IDYuNTc3MzVMMi45NDQ2NyAwLjUyMjg3NEMyLjc4NjY3IDAuMzU5MjkxIDIuNTk3NjggMC4yMjg4MTMgMi4zODg3MiAwLjEzOTA1MUMyLjE3OTc2IDAuMDQ5Mjg4NSAxLjk1NTAyIDAuMDAyMDQwODQgMS43Mjc2MSA2LjQ2Njc0ZS0wNUMxLjUwMDE5IC0wLjAwMTkxMTUgMS4yNzQ2NiAwLjA0MTQyMyAxLjA2NDE3IDAuMTI3NTRDMC44NTM2ODYgMC4yMTM2NTcgMC42NjI0NTcgMC4zNDA4MzMgMC41MDE2NDUgMC41MDE2NDVDMC4zNDA4MzMgMC42NjI0NTcgMC4yMTM2NTcgMC44NTM2ODYgMC4xMjc1NCAxLjA2NDE3QzAuMDQxNDIzIDEuMjc0NjYgLTAuMDAxOTExNSAxLjUwMDE5IDYuNDY2NzRlLTA1IDEuNzI3NjFDMC4wMDIwNDA4NCAxLjk1NTAyIDAuMDQ5Mjg4NSAyLjE3OTc2IDAuMTM5MDUxIDIuMzg4NzJDMC4yMjg4MTMgMi41OTc2OCAwLjM1OTI5MSAyLjc4NjY3IDAuNTIyODc0IDIuOTQ0NjdMNi41NzczNSA4Ljk5OTE0TDAuNTIyODc0IDE1LjA1NTNDMC4zNTkyOTEgMTUuMjEzMyAwLjIyODgxMyAxNS40MDIzIDAuMTM5MDUxIDE1LjYxMTNDMC4wNDkyODg1IDE1LjgyMDIgMC4wMDIwNDA4NCAxNi4wNDUgNi40NjY3NGUtMDUgMTYuMjcyNEMtMC4wMDE5MTE1IDE2LjQ5OTggMC4wNDE0MjMgMTYuNzI1MyAwLjEyNzU0IDE2LjkzNThDMC4yMTM2NTcgMTcuMTQ2MyAwLjM0MDgzMyAxNy4zMzc1IDAuNTAxNjQ1IDE3LjQ5ODRDMC42NjI0NTcgMTcuNjU5MiAwLjg1MzY4NiAxNy43ODYzIDEuMDY0MTcgMTcuODcyNUMxLjI3NDY2IDE3Ljk1ODYgMS41MDAxOSAxOC4wMDE5IDEuNzI3NjEgMTcuOTk5OUMxLjk1NTAyIDE3Ljk5OCAyLjE3OTc2IDE3Ljk1MDcgMi4zODg3MiAxNy44NjA5QzIuNTk3NjggMTcuNzcxMiAyLjc4NjY3IDE3LjY0MDcgMi45NDQ2NyAxNy40NzcxTDguOTk5MTQgMTEuNDIyNkwxNS4wNTUzIDE3LjQ3NzFDMTUuMjEzMyAxNy42NDA3IDE1LjQwMjMgMTcuNzcxMiAxNS42MTEzIDE3Ljg2MDlDMTUuODIwMiAxNy45NTA3IDE2LjA0NSAxNy45OTggMTYuMjcyNCAxNy45OTk5QzE2LjQ5OTggMTguMDAxOSAxNi43MjUzIDE3Ljk1ODYgMTYuOTM1OCAxNy44NzI1QzE3LjE0NjMgMTcuNzg2MyAxNy4zMzc1IDE3LjY1OTIgMTcuNDk4NCAxNy40OTg0QzE3LjY1OTIgMTcuMzM3NSAxNy43ODYzIDE3LjE0NjMgMTcuODcyNSAxNi45MzU4QzE3Ljk1ODYgMTYuNzI1MyAxOC4wMDE5IDE2LjQ5OTggMTcuOTk5OSAxNi4yNzI0QzE3Ljk5OCAxNi4wNDUgMTcuOTUwNyAxNS44MjAyIDE3Ljg2MDkgMTUuNjExM0MxNy43NzEyIDE1LjQwMjMgMTcuNjQwNyAxNS4yMTMzIDE3LjQ3NzEgMTUuMDU1M0wxMS40MjI2IDguOTk5MTRWOS4wMDA4NloiIGZpbGw9IiNFQTAwMjkiLz4KPC9zdmc+Cg==" alt="">
          </v-btn>
        </div>
      </v-card-title>
      <v-card-text class="card__main-container">
        <span>
          Используйте налоговый вычет чтобы погасить ипотеку досрочно. <br>
          Размер налогового вычета составляет не более 13% от своего финального годового дохода.
        </span>
        <DialogInputs />
        <v-btn
          class="inputs-container__footer-button button"
          block
          plain
          height="50px"
        >
          Добавить
        </v-btn>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import DialogInputs from "@components/DialogInputs.vue"
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
    display: flex;
    flex-direction: column;
    flex: 1;
  }
}
</style>