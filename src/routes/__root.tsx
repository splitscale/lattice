import ErrorComponent from "@/components/error-component";
import NotFoundComponent from "@/components/not-found-component";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";

import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

// If you are a NextJs developer, this is similar to the `app/layout.tsx` file.
export const Route = createRootRoute({
  component: () => (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex min-h-screen w-full flex-col bg-background text-foreground overflow-x-hidden">
        <div className="w-full max-w-screen-xl mx-auto">
          <SiteHeader />

          {/* The Outlet component is used to render the next potentially matching child route.
          <Outlet /> doesn't take any props and can be rendered anywhere within a route's component tree.
          If there is no matching child route, <Outlet /> will render null. */}

          <main className="flex-1 w-full">
            <Outlet />
          </main>

          <SiteFooter />
        </div>
        <TanStackRouterDevtools />
      </div>
    </ThemeProvider>
  ),
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});
