import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

// If you are a NextJs developer, this is similar to the `app/layout.tsx` file.
export const Route = createRootRoute({
  component: () => (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Header />

        {/* The Outlet component is used to render the next potentially matching child route.
        <Outlet /> doesn't take any props and can be rendered anywhere within a route's component tree.
        If there is no matching child route, <Outlet /> will render null. */}
        <main className="container mx-auto py-6">
          <Outlet />
        </main>
        <TanStackRouterDevtools />
      </div>
    </ThemeProvider>
  ),
});
