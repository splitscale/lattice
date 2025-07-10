import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryHistory, createRootRoute, createRoute, createRouter, RouterProvider } from '@tanstack/react-router';

// Import the component directly from the file
import { Route } from '../routes/throw-error.lazy';

// Mock the UI components since we're testing the logic
vi.mock('@/components/ui/button', () => ({
  Button: ({ children, onClick, ...props }: any) => (
    <button onClick={onClick} data-testid={props['data-testid']} {...props}>
      {children}
    </button>
  ),
}));

// Create a test router setup
const rootRoute = createRootRoute();

const throwErrorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/throw-error',
  component: Route.options.component,
});

const routeTree = rootRoute.addChildren([throwErrorRoute]);

const createTestRouter = () => {
  const memoryHistory = createMemoryHistory({
    initialEntries: ['/throw-error'],
  });

  return createRouter({
    routeTree,
    history: memoryHistory,
  });
};

// Helper to render component within router context
const renderWithRouter = () => {
  const router = createTestRouter();
  return {
    ...render(<RouterProvider router={router} />),
    router,
  };
};

describe('ThrowError Component', () => {
  it('renders correctly with proper heading and description', () => {
    renderWithRouter();
    
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Throw Real Errors');
    expect(screen.getByText(/These buttons will throw actual errors/)).toBeInTheDocument();
  });

  it('displays both error buttons', () => {
    renderWithRouter();
    
    expect(screen.getByRole('button', { name: /Throw Generic Error/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Throw TypeError/i })).toBeInTheDocument();
  });

  it('displays warning message', () => {
    renderWithRouter();
    
    expect(screen.getByText(/⚠️ These will trigger the actual error component/)).toBeInTheDocument();
  });

  it('throws Generic Error when first button is clicked', async () => {
    renderWithRouter();
    
    const button = screen.getByRole('button', { name: /Throw Generic Error/i });
    
    // We expect this to throw, so we wrap it in expect().toThrow()
    expect(() => {
      fireEvent.click(button);
    }).toThrow('Intentional test error - this will trigger the error boundary!');
  });

  it('throws TypeError when second button is clicked', async () => {
    renderWithRouter();
    
    const button = screen.getByRole('button', { name: /Throw TypeError/i });
    
    // We expect this to throw a TypeError
    expect(() => {
      fireEvent.click(button);
    }).toThrow(TypeError);
  });

  it('has correct CSS classes applied', () => {
    renderWithRouter();
    
    const container = screen.getByRole('heading', { level: 1 }).closest('div');
    expect(container).toHaveClass('container', 'mx-auto', 'px-4', 'py-16', 'space-y-8', 'text-center');
  });

  it('buttons have destructive variant styling', () => {
    renderWithRouter();
    
    const genericErrorButton = screen.getByRole('button', { name: /Throw Generic Error/i });
    const typeErrorButton = screen.getByRole('button', { name: /Throw TypeError/i });
    
    expect(genericErrorButton).toHaveAttribute('variant', 'destructive');
    expect(typeErrorButton).toHaveAttribute('variant', 'destructive');
  });
});

describe('ThrowError Component Error Boundaries', () => {
  // This test demonstrates how you might test error boundaries
  it('can be used to test error boundary behavior', () => {
    // Create a test component that wraps ThrowError with an error boundary
    const TestErrorBoundary = ({ children }: { children: React.ReactNode }) => {
      try {
        return <>{children}</>;
      } catch (error) {
        return <div data-testid="error-boundary">Error caught: {(error as Error).message}</div>;
      }
    };

    const TestComponent = () => {
      const [shouldThrow, setShouldThrow] = React.useState(false);
      
      if (shouldThrow) {
        throw new Error('Test error');
      }
      
      return (
        <button onClick={() => setShouldThrow(true)} data-testid="trigger-error">
          Trigger Error
        </button>
      );
    };

    render(
      <TestErrorBoundary>
        <TestComponent />
      </TestErrorBoundary>
    );

    expect(screen.getByTestId('trigger-error')).toBeInTheDocument();
    
    // Note: In a real app, you'd use a proper Error Boundary component
    // This is just to demonstrate the testing pattern
  });
});
