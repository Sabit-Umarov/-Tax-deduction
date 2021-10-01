<template>
    <div class="inputs-container">
        <div class="inputs-container__header">Ваша зарплата в месяц</div>
        <v-text-field
            dense
            v-model="wage"
            class="inputs-container__input"
            placeholder="Введите данные"
            solo
            flat
            :rules="[rules.number]"
        ></v-text-field>
        <span
            class="inputs-container__under-text"
            v-wave
            @click="calculate()"
        >Рассчитать</span>
        <div class="results-container" v-if="isCalculated">
            <span>
                Итого можете внести в качестве досрочных:
            </span>
            <DialogCheckbox v-for="item, index in result" :key="index" :price="item" :day="index + 1"/>
        </div>
        <div class="inputs-container__chips-block">
            <span>Что уменьшаем?</span>
            <span class="inputs-container__chips-block__first-chip" @click="isActive = !isActive">
               <Chip 
                    :text="'Платеж'"
                    :active="isActive"
                /> 
            </span>
            <span @click="isActive = !isActive">
               <Chip 
                    :text="'Срок'"
                    :active="!isActive"
                /> 
            </span>
        </div>
        <v-btn
            class="inputs-container__footer-button button"
            block
            plain
            height="50px"
        >
            Добавить
        </v-btn>
    </div>
</template>

<script>
import DialogCheckbox from "./DialogCheckbox.vue"
import Chip from "../UI/Chip.vue"

export default {
  name: 'DialogInputs',
  data: () => ({
    rules: {
        number: (value) => {
            return (
                (!Number.isNaN(value) && value > -1) ||
                'Значение должно быть положительным целым числом и больше.'
            );
        },
    },
    wage: null,
    result: [],
    isCalculated: false,
    isActive: false
  }),
  components: {
    DialogCheckbox, Chip
  },
  methods: {
    calculate () {
        this.result = [];
        this.calc();
        this.isCalculated = true;
    },
    calc(max = 260000, tax = this.wage * 12 * 0.13) { 
        if(max > tax) {
            this.result.push(tax)
            let newMax = max - tax
            this.calc(newMax)
        } else {
            this.result.push(max)
        }
    }
  }
};
</script>

<style lang="scss" scoped>
    .inputs-container {
        margin-top: 24px;
        color: black;
        font-weight: 500;
        &__header {
            margin-bottom: 12px;
        }
        &__under-text {
            color: #EA0029;
            cursor: pointer;
        }
        &__chips-block {
            margin-top: 18px;
            display: flex;
            align-items: center;
            &__first-chip {
                margin: 0 16px 0 24px;
            }
        }
    }
    .results-container {
        margin: 20px 0;
    }
</style>