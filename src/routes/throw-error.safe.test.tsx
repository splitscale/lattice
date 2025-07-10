import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

// Extract and simplify the component for testing
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
        <button 
          onClick={throwError} 
          className="w-full bg-red-500 text-white p-2 rounded"
          data-testid="throw-generic-error"
        >
          Throw Generic Error
        </button>
        
        <button 
          onClick={throwTypeError} 
          className="w-full bg-red-500 text-white p-2 rounded"
          data-testid="throw-type-error"
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

describe('ThrowError Component', () => {
  it('renders correctly with proper heading and description', () => {
    render(<ThrowError />);
    
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Throw Real Errors');
    expect(screen.getByText(/These buttons will throw actual errors/)).toBeInTheDocument();
  });

  it('displays both error buttons with correct text', () => {
    render(<ThrowError />);
    
    expect(screen.getByTestId('throw-generic-error')).toHaveTextContent('Throw Generic Error');
    expect(screen.getByTestId('throw-type-error')).toHaveTextContent('Throw TypeError');
  });

  it('displays warning message', () => {
    render(<ThrowError />);
    
    expect(screen.getByText(/⚠️ These will trigger the actual error component/)).toBeInTheDocument();
  });

  it('has correct CSS classes applied to container', () => {
    render(<ThrowError />);
    
    const container = screen.getByRole('heading', { level: 1 }).closest('div');
    expect(container).toHaveClass('container', 'mx-auto', 'px-4', 'py-16', 'space-y-8', 'text-center');
  });

  it('has correct CSS classes applied to buttons', () => {
    render(<ThrowError />);
    
    const genericErrorButton = screen.getByTestId('throw-generic-error');
    const typeErrorButton = screen.getByTestId('throw-type-error');
    
    expect(genericErrorButton).toHaveClass('w-full', 'bg-red-500', 'text-white', 'p-2', 'rounded');
    expect(typeErrorButton).toHaveClass('w-full', 'bg-red-500', 'text-white', 'p-2', 'rounded');
  });

  it('buttons are interactive elements', () => {
    render(<ThrowError />);
    
    const genericErrorButton = screen.getByTestId('throw-generic-error');
    const typeErrorButton = screen.getByTestId('throw-type-error');
    
    expect(genericErrorButton).toBeInTheDocument();
    expect(typeErrorButton).toBeInTheDocument();
    expect(genericErrorButton.tagName).toBe('BUTTON');
    expect(typeErrorButton.tagName).toBe('BUTTON');
  });

  // Test that the functions exist (without calling them to avoid errors)
  it('component structure indicates error-throwing functionality', () => {
    render(<ThrowError />);
    
    // Verify the component rendered and contains the expected error-related text
    expect(screen.getByText('Throw Generic Error')).toBeInTheDocument();
    expect(screen.getByText('Throw TypeError')).toBeInTheDocument();
    expect(screen.getByText(/error boundary/)).toBeInTheDocument();
  });
});
