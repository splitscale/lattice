import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Home, RefreshCw, MessageCircle } from "lucide-react";

interface ErrorComponentProps {
  error?: Error;
  errorCode?: string | number;
  title?: string;
  description?: string;
  showRefresh?: boolean;
  showHome?: boolean;
  showSupport?: boolean;
}

function ErrorComponent({
  error,
  errorCode = "404",
  title,
  description,
  showRefresh = true,
  showHome = true,
  showSupport = true,
}: ErrorComponentProps) {
  const defaultTitles: Record<string, string> = {
    "404": "Page Not Found",
    "500": "Internal Server Error",
    "403": "Access Forbidden",
    "401": "Unauthorized",
  };

  const defaultDescriptions: Record<string, string> = {
    "404":
      "Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or doesn't exist.",
    "500":
      "Something went wrong on our end. Our team has been notified and is working to fix this issue.",
    "403":
      "You don't have permission to access this resource. Please contact support if you believe this is an error.",
    "401":
      "You need to be logged in to access this page. Please sign in and try again.",
  };

  const finalTitle =
    title || defaultTitles[String(errorCode)] || "Something went wrong";
  const finalDescription =
    description ||
    defaultDescriptions[String(errorCode)] ||
    "An unexpected error occurred.";

  const handleRefresh = () => {
    window.location.reload();
  };

  const getErrorCodeColor = (code: string | number) => {
    const codeStr = String(code);
    if (codeStr.startsWith("4")) return "text-yellow-600 dark:text-yellow-400";
    if (codeStr.startsWith("5")) return "text-red-600 dark:text-red-400";
    return "text-primary";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        {/* Error Icon and Code */}
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="p-4 rounded-full bg-muted">
              <AlertTriangle className="h-12 w-12 text-muted-foreground" />
            </div>
          </div>
          <h1 className={`text-7xl font-bold ${getErrorCodeColor(errorCode)}`}>
            {errorCode}
          </h1>
        </div>

        {/* Error Details */}
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold text-foreground">
            {finalTitle}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {finalDescription}
          </p>
        </div>

        {/* Error Technical Details (if available) */}
        {error && (
          <div className="bg-muted/50 rounded-lg p-4 text-left">
            <details className="cursor-pointer">
              <summary className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Technical Details
              </summary>
              <div className="mt-2 text-xs text-muted-foreground font-mono bg-background rounded p-2 overflow-auto">
                {error.message}
                {error.stack && (
                  <pre className="mt-2 whitespace-pre-wrap">{error.stack}</pre>
                )}
              </div>
            </details>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {showRefresh && (
            <Button onClick={handleRefresh} className="gap-2">
              <RefreshCw className="h-4 w-4" />
              Try Again
            </Button>
          )}

          {showHome && (
            <Button variant="outline" asChild className="gap-2">
              <Link to="/">
                <Home className="h-4 w-4" />
                Go Home
              </Link>
            </Button>
          )}

          {showSupport && (
            <Button variant="ghost" asChild className="gap-2">
              <Link to="/about">
                <MessageCircle className="h-4 w-4" />
                Contact Support
              </Link>
            </Button>
          )}
        </div>

        {/* Footer Info */}
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Error Code: {errorCode} | {new Date().toLocaleString()}
          </p>
          {error && (
            <p className="text-xs text-muted-foreground mt-1">
              Reference ID:{" "}
              {Math.random().toString(36).substr(2, 9).toUpperCase()}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// Specific error components for common use cases
export function NotFoundComponent() {
  return <ErrorComponent errorCode="404" />;
}

export function ServerErrorComponent({ error }: { error?: Error }) {
  return <ErrorComponent errorCode="500" error={error} />;
}

export function UnauthorizedComponent() {
  return (
    <ErrorComponent errorCode="401" showRefresh={false} showSupport={false} />
  );
}

export function ForbiddenComponent() {
  return <ErrorComponent errorCode="403" />;
}

export default ErrorComponent;
