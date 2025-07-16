// import Hero from "@/components/hero";
import Hero from "@/components/hero";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return Hero();
}
