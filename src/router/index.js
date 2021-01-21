import Vue from "vue";
import Router from "vue-router";

import DashBoard from "@/components/DashBoard.vue";
import NewEmployee from "@/components/NewEmployee";
import ViewEmployee from "@/components/ViewEmployee";
import EditEmployee from "@/components/EditEmployee";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: DashBoard,
    },
    {
      path: "/new",
      name: "new-employee",
      component: NewEmployee,
    },
    {
      path: "/edit/:employee_id",
      name: "edit-employee",
      component: EditEmployee,
    },
    {
      path: "/:employee_id",
      name: "view-employee",
      component: ViewEmployee,
    },
  ],
});
