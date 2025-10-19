import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("admin/:id_propertie", "routes/admin.tsx"),
] satisfies RouteConfig;
