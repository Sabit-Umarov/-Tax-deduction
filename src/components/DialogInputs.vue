<template>
    <div class="inputs-container">
        <div class="inputs-container__header">Ваша зарплата в месяц</div>
        <v-text-field
            dense
            v-model.lazy="wage"
            v-money="money"
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
        <div class="inputs-container__decreasing">
            <span>Что уменьшаем?</span>
            <div class="inputs-container__chips-block">
                <span @click="isActive = false">
                    <Chip 
                        :text="'Платеж'"
                        :active="isActive"
                    /> 
                </span>
                <span @click="isActive = true">
                    <Chip 
                        :text="'Срок'"
                        :active="!isActive"
                    /> 
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import DialogCheckbox from "@components/DialogCheckbox.vue"
import Chip from "@UI/Chip.vue"
import {VMoney} from 'v-money'

export default {
  name: 'DialogInputs',
  data: () => ({
    rules: {
        number: (value) => {
            return (
                +value.slice(0, -2).replaceAll(' ', '') >= 5000  || +value.slice(0, -2).replaceAll(' ', '') === 0 ||
                'Значение должно быть положительным целым числом и составлять не менее 5 000 рублей.'
            );
        },
    },
    wage: '',
    money: {
        thousands: ' ',
        suffix: ' ₽',
        precision: 0,
    },
    result: [],
    isCalculated: false,
    isActive: false
  }),
  directives: {money: VMoney},
  components: {
    DialogCheckbox, Chip
  },
  methods: {
    calculate () {
        this.result = [];
        if(this.formatWage(this.wage) >= 5000) {
            this.calc();
            this.isCalculated = true;
        } else {
            this.isCalculated = false;
        }
    },
    formatWage (value) {
        return +value.slice(0, -2).replaceAll(' ', '')
    },
    calc(max = 260000, tax = this.formatWage(this.wage) * 12 * 0.13) { 
        if(max > tax) {
            this.result.push(tax)
            let newMax = max - tax
            this.calc(newMax)
        } else {
            this.result.push(max)
        }
    },
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
        &__decreasing {
            margin-top: 18px;
            display: flex;
            align-items: center;
            gap: 32px;
            margin-bottom: 40px;
            @media screen and (max-width: 600px) {
                flex-direction: column;
                align-items: flex-start;
                gap: 24px;
            }
        }
        &__chips-block {
            display: flex;
            gap: 8px;
            @media screen and (max-width: 600px) {
                gap: 0;
            }
        }
    }
    .results-container {
        margin: 20px 0;
    }
</style>