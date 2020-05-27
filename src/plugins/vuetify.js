import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
  theme: {
    themes: {
      light: {
        primary: "#FF9191",
        secondary: "#373737",
        verde: "#568564",
        violeta: "#7157AD",
        amarillo: "#FFAF4F",
        success: "#4CAF50",
        warning: "#FFC107"
      }
    }
  }
});
