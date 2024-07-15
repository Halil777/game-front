import { lazy } from "react";

export const Home = lazy(() => import("../../pages/home/Home"));
export const About = lazy(() => import("../../pages/about/About"));
export const News = lazy(() => import("../../pages/news/News"));
export const Support = lazy(() => import("../../pages/support/Support"));
export const Products = lazy(() => import("../../pages/products/Products"));
export const LocalServers = lazy(
  () => import("../pages/products/LocalServers")
);
export const OnlineServers = lazy(
  () => import("../pages/products/OnlineServers")
);
export const LocalGames = lazy(() => import("../pages/games/LocalGames"));
export const OnlineGames = lazy(() => import("../pages/games/OnlineGames"));
