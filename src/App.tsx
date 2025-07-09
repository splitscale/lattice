import { ThemeProvider } from "@/components/theme-provider";
import type { PropsWithChildren } from "react";

function App({ children }: PropsWithChildren<{}>) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
    </ThemeProvider>
  );
}

export default App;
