// import Hero from "@/components/hero";
import Home from "@/components/pages/home";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return <Home />;
}
