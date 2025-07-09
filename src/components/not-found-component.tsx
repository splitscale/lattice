import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

function NotFoundComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 px-4">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-primary">404</h1>
          <h2 className="text-2xl font-semibold text-foreground">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have
            been moved, deleted, or doesn't exist.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link to="/">Go Home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/about">Contact Support</Link>
          </Button>
        </div>

        <div className="pt-8">
          <p className="text-sm text-muted-foreground">
            Error Code: 404 | Page Not Found
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFoundComponent;
