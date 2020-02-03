<template>
  <v-col lg="4" md="6" xs="12">
    <v-card>
      <v-card-title class="blue darken-3 white--text">
        <strong>
          {{ stock.name }}
          <small>(Preço: {{ stock.price | currency }} | Qtde: {{ stock.quantity }})</small>
        </strong>
      </v-card-title>

      <v-container fill-height>
        <v-text-field
          label="Quantidade"
          :error="insufficientQuantity || !Number.isInteger(quantity)"
          type="number"
          v-model.number="quantity"
        />
        <v-btn
          class="blue darken-3 white--text ml-3"
          @click="sellStock"
          :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)"
        >{{ insufficientQuantity ? 'Insuficiente' : 'Vender' }}</v-btn>
      </v-container>
    </v-card>
  </v-col>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["stock"],

  data() {
    return {
      quantity: 0
    };
  },

  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },

  methods: {
    ...mapActions({
      sellStockAction: "sellStock"
    }),

    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };

      this.quantity = 0;

      this.sellStockAction(order);
      // this.$store.dispatch("sellStock", order);
    }
  }
};
</script>

<style>
</style>