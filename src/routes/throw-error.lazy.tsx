import { createLazyFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createLazyFileRoute("/throw-error")({
  component: ThrowError,
});

function ThrowError() {
  const throwError = () => {
    throw new Error("Intentional test error - this will trigger the error boundary!");
  };

  const throwTypeError = () => {
    // @ts-ignore - intentionally calling undefined method
    const obj: any = null;
    obj.someMethod();
  };

  return (
    <div className="container mx-auto px-4 py-16 space-y-8 text-center">
      <h1 className="text-4xl font-bold text-foreground">Throw Real Errors</h1>
      <p className="text-lg text-muted-foreground">
        These buttons will throw actual errors that get caught by the error boundary
      </p>
      
      <div className="space-y-4 max-w-md mx-auto">
        <Button onClick={throwError} variant="destructive" className="w-full">
          Throw Generic Error
        </Button>
        
        <Button onClick={throwTypeError} variant="destructive" className="w-full">
          Throw TypeError
        </Button>
      </div>
      
      <p className="text-sm text-muted-foreground">
        ⚠️ These will trigger the actual error component with real stack traces
      </p>
    </div>
  );
}
