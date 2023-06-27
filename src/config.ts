import ProgressBar from "@badrap/bar-of-progress";
import {Router} from "next/router";

const progress = new ProgressBar({
    size: 2,
    color: "#FF002E",
    className: "bar-of-progress",
    delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);