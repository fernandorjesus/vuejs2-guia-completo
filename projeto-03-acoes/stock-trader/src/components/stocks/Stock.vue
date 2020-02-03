<template>
  <v-col lg="4" md="6" xs="12">
    <v-card>
      <v-card-title class="green darken-3 white--text">
        <strong>
          {{ stock.name }}
          <small>(Preço: {{ stock.price | currency }})</small>
        </strong>
      </v-card-title>

      <v-container fill-height>
        <v-text-field
          label="Quantidade"
          :error="insufficienteFunds || !Number.isInteger(quantity)"
          type="number"
          v-model.number="quantity"
        />
        <v-btn
          class="green darken-3 white--text ml-3"
          @click="buyStock"
          :disabled="insufficienteFunds || quantity <= 0 || !Number.isInteger(quantity)"
        >{{ insufficienteFunds ? 'INsuficiente' : 'Comprar' }}</v-btn>
      </v-container>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ["stock"],

  data() {
    return {
      quantity: 0
    };
  },

  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficienteFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },

  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };

      this.quantity = 0;

      this.$store.dispatch("buyStock", order);
    }
  }
};
</script>

<style>
</style>