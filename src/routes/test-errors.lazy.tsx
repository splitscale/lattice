import { createLazyFileRoute } from "@tanstack/react-router";
import ErrorComponent, { 
  NotFoundComponent, 
  ServerErrorComponent, 
  UnauthorizedComponent, 
  ForbiddenComponent 
} from "@/components/error-component";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Route = createLazyFileRoute("/test-errors")({
  component: TestErrors,
});

function TestErrors() {
  const [currentError, setCurrentError] = useState<string | null>(null);

  const testError = new Error("This is a test error message for demonstration purposes");
  testError.stack = `Error: This is a test error message
    at TestErrors (/src/routes/test-errors.lazy.tsx:15:21)
    at renderWithHooks (/node_modules/react-dom/cjs/react-dom.development.js:14803:18)
    at mountIndeterminateComponent (/node_modules/react-dom/cjs/react-dom.development.js:17482:13)`;

  const renderError = () => {
    switch (currentError) {
      case "404":
        return <NotFoundComponent />;
      case "500":
        return <ServerErrorComponent error={testError} />;
      case "401":
        return <UnauthorizedComponent />;
      case "403":
        return <ForbiddenComponent />;
      case "custom":
        return (
          <ErrorComponent
            errorCode="418"
            title="I'm a teapot"
            description="The server refuses the attempt to brew coffee with a teapot."
            error={testError}
          />
        );
      default:
        return null;
    }
  };

  if (currentError) {
    return renderError();
  }

  return (
    <div className="container mx-auto px-4 py-16 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Error Component Testing</h1>
        <p className="text-lg text-muted-foreground">
          Test different error scenarios and theme switching
        </p>
      </div>

      <div className="grid gap-4 max-w-2xl mx-auto">
        <Button onClick={() => setCurrentError("404")} variant="outline">
          Test 404 - Not Found
        </Button>
        
        <Button onClick={() => setCurrentError("500")} variant="outline">
          Test 500 - Server Error (with stack trace)
        </Button>
        
        <Button onClick={() => setCurrentError("401")} variant="outline">
          Test 401 - Unauthorized
        </Button>
        
        <Button onClick={() => setCurrentError("403")} variant="outline">
          Test 403 - Forbidden
        </Button>
        
        <Button onClick={() => setCurrentError("custom")} variant="outline">
          Test Custom Error (418 - I'm a teapot)
        </Button>
      </div>

      <div className="text-center pt-8">
        <p className="text-sm text-muted-foreground">
          💡 <strong>Tip:</strong> Try switching between light and dark themes while viewing the errors!
        </p>
      </div>
    </div>
  );
}
