<template>
  <div class="results-block">
    <div class="checkbox"
      :class="{ checked : isChecked }"
      @click="isChecked = !isChecked"
    >
    </div>
    <span class="results-block__price">{{ price.toFixed(2) }} рублей<span class="results-block__date"> {{ starting }} {{ day }}-{{ completion }} год</span></span>
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
    background: url("/icons/checkbox.svg");
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