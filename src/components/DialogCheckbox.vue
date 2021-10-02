<template>
  <div class="results-block">
    <div class="checkbox"
      :class="{ checked : isChecked }"
      @click="isChecked = !isChecked"
    >
    </div>
    <span class="results-block__price">{{ format(Math.round(price)) }} рублей<span class="results-block__date"> {{ starting }} {{ day }}-{{ completion }} год</span></span>
  </div>
</template>

<script>
export default {
  name: 'DialogCheckbox',

  data: () => ({
    isChecked: false,
    completion: 'ый',
    starting: 'в'
  }),
  props: {
    price: Number,
    day: Number
  },
  created() {
    this.checkDay()
  },
  methods: {
    checkDay () {
      switch (this.day) {
        case 2:
          this.completion = 'ой';
          this.starting = 'во';
          break;
        case 6: 
          this.completion = 'ой';
          break;
        case 7: 
          this.completion = 'ой';
          break;
        case 8: 
          this.completion = 'ой';
          break;
        case 3: 
          this.completion = 'ий';
          break;
        default:
          this.completion = 'ый';
          this.starting = 'в';
      }
    },
    format(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
  }
};
</script>

<style lang="scss" scoped>
  .checkbox {
    width: 20px;
    height: 20px;
    border: 1px solid #DFE3E6;
    border-radius: 6px;
    &:hover {
      border-color: black;
      cursor: pointer;
    }
    transition: 0.5s;
  }
  .checked {
    border: none;
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuNSA2QzAuNSAyLjk2MjQzIDIuOTYyNDMgMC41IDYgMC41SDE0QzE3LjAzNzYgMC41IDE5LjUgMi45NjI0MyAxOS41IDZWMTRDMTkuNSAxNy4wMzc2IDE3LjAzNzYgMTkuNSAxNCAxOS41SDZDMi45NjI0MyAxOS41IDAuNSAxNy4wMzc2IDAuNSAxNFY2WiIgZmlsbD0iI0ZGNUU1NiIvPgo8cGF0aCBkPSJNMC41IDZDMC41IDIuOTYyNDMgMi45NjI0MyAwLjUgNiAwLjVIMTRDMTcuMDM3NiAwLjUgMTkuNSAyLjk2MjQzIDE5LjUgNlYxNEMxOS41IDE3LjAzNzYgMTcuMDM3NiAxOS41IDE0IDE5LjVINkMyLjk2MjQzIDE5LjUgMC41IDE3LjAzNzYgMC41IDE0VjZaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjxwYXRoIGQ9Ik0wLjUgNkMwLjUgMi45NjI0MyAyLjk2MjQzIDAuNSA2IDAuNUgxNEMxNy4wMzc2IDAuNSAxOS41IDIuOTYyNDMgMTkuNSA2VjE0QzE5LjUgMTcuMDM3NiAxNy4wMzc2IDE5LjUgMTQgMTkuNUg2QzIuOTYyNDMgMTkuNSAwLjUgMTcuMDM3NiAwLjUgMTRWNloiIHN0cm9rZT0iI0ZGNUU1NiIvPgo8cGF0aCBkPSJNMC41IDZDMC41IDIuOTYyNDMgMi45NjI0MyAwLjUgNiAwLjVIMTRDMTcuMDM3NiAwLjUgMTkuNSAyLjk2MjQzIDE5LjUgNlYxNEMxOS41IDE3LjAzNzYgMTcuMDM3NiAxOS41IDE0IDE5LjVINkMyLjk2MjQzIDE5LjUgMC41IDE3LjAzNzYgMC41IDE0VjZaIiBzdHJva2U9InVybCgjcGFpbnQxX2xpbmVhcikiLz4KPHBhdGggZD0iTTcuNDU0NTUgMTMuNzAxNUw0LjExMzY0IDEwLjI1MzdMMyAxMS40MDNMNy40NTQ1NSAxNkwxNyA2LjE0OTI1TDE1Ljg4NjQgNUw3LjQ1NDU1IDEzLjcwMTVaIiBmaWxsPSJ3aGl0ZSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iMjAiIHkxPSIwLjc5ODU2MyIgeDI9Ii03LjM4MTAyIiB5Mj0iNy45NTY3OCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjREMzMTMxIi8+CjxzdG9wIG9mZnNldD0iMC45MzIyOTIiIHN0b3AtY29sb3I9IiNGRjRGNEYiIHN0b3Atb3BhY2l0eT0iMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXIiIHgxPSIyMCIgeTE9IjAuNzk4NTYzIiB4Mj0iLTcuMzgxMDIiIHkyPSI3Ljk1Njc4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNEQzMxMzEiLz4KPHN0b3Agb2Zmc2V0PSIwLjkzMjI5MiIgc3RvcC1jb2xvcj0iI0ZGNEY0RiIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==");
    background-size: cover;
  }
  .results-block {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #DFE3E6;
    padding: 16px 0;
    font-weight: 500;
    &__price {
      margin-left: 10px;
    }
    &__date {
      color: rgba(0, 0, 0, 0.6);
    }
  }
</style>