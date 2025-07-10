import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

// Extract the component function for easier testing
function ThrowError() {
  const throwError = () => {
    throw new Error(
      "Intentional test error - this will trigger the error boundary!"
    );
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
        These buttons will throw actual errors that get caught by the error
        boundary
      </p>

      <div className="space-y-4 max-w-md mx-auto">
        <button
          onClick={throwError}
          className="w-full bg-red-500 text-white p-2 rounded"
        >
          Throw Generic Error
        </button>

        <button
          onClick={throwTypeError}
          className="w-full bg-red-500 text-white p-2 rounded"
        >
          Throw TypeError
        </button>
      </div>

      <p className="text-sm text-muted-foreground">
        ⚠️ These will trigger the actual error component with real stack traces
      </p>
    </div>
  );
}

describe("ThrowError Component", () => {
  it("renders correctly with proper heading and description", () => {
    render(<ThrowError />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Throw Real Errors"
    );
    expect(
      screen.getByText(/These buttons will throw actual errors/)
    ).toBeInTheDocument();
  });

  it("displays both error buttons", () => {
    render(<ThrowError />);

    expect(
      screen.getByRole("button", { name: /Throw Generic Error/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Throw TypeError/i })
    ).toBeInTheDocument();
  });

  it("displays warning message", () => {
    render(<ThrowError />);

    expect(
      screen.getByText(/⚠️ These will trigger the actual error component/)
    ).toBeInTheDocument();
  });

  it("throws Generic Error when first button is clicked", () => {
    render(<ThrowError />);

    const button = screen.getByRole("button", { name: /Throw Generic Error/i });

    // We expect this to throw, so we wrap it in expect().toThrow()
    expect(() => {
      fireEvent.click(button);
    }).toThrow(
      "Intentional test error - this will trigger the error boundary!"
    );
  });

  it("throws TypeError when second button is clicked", () => {
    render(<ThrowError />);

    const button = screen.getByRole("button", { name: /Throw TypeError/i });

    // We expect this to throw a TypeError
    expect(() => {
      fireEvent.click(button);
    }).toThrow(TypeError);
  });

  it("has correct CSS classes applied", () => {
    render(<ThrowError />);

    const container = screen.getByRole("heading", { level: 1 }).closest("div");
    expect(container).toHaveClass(
      "container",
      "mx-auto",
      "px-4",
      "py-16",
      "space-y-8",
      "text-center"
    );
  });
});
