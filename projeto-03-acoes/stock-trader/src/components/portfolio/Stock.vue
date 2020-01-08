<template>
  <v-col lg="4" md="6" xs="12">
    <v-card>
      <v-card-title class="blue darken-3 white--text">
        <strong>
          {{ stock.name }}
          <small>(Preço: {{ stock.price }} | Qtde: {{ stock.quantity }})</small>
        </strong>
      </v-card-title>

      <v-container fill-height>
        <v-text-field label="Quantidade" type="number" v-model.number="quantity" />
        <v-btn
          class="blue darken-3 white--text ml-3"
          @click="sellStock"
          :disabled="quantity <= 0 || !Number.isInteger(quantity)"
        >Vender</v-btn>
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