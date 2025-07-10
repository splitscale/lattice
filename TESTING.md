# Testing Setup

This project uses **Vitest** with **React Testing Library** for component testing.

## Setup

The testing environment is configured with:
- **Vitest**: Modern test runner built on Vite
- **React Testing Library**: For testing React components
- **JSDOM**: For DOM simulation in Node.js environment
- **@testing-library/jest-dom**: Additional matchers for better assertions

## Configuration

- `vitest.config.ts`: Main Vitest configuration
- `src/test/setup.ts`: Test setup file with global configurations
- Configuration in `vite.config.ts`: Integrated with Vite build system

## Running Tests

```bash
# Run tests in watch mode
bun run test

# Run tests once
bun run test:run

# Run tests with UI (if @vitest/ui is installed)
bun run test:ui

# Run tests with coverage (if @vitest/coverage-* is installed)
bun run test:coverage

# Run specific test file
bun run test:safe
```

## Test Files

### Safe Tests
- `throw-error.safe.test.tsx`: Tests the component structure and rendering without triggering errors

### Excluded Tests
The following test files are excluded from the main test suite as they intentionally trigger errors:
- `throw-error.test.tsx`: Complex router-based tests (has some setup issues)
- `throw-error.simple.test.tsx`: Tests that trigger actual errors (can cause test runner issues)

## Example Test Structure

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

function MyComponent() {
  return <h1>Hello World</h1>;
}

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Hello World');
  });
});
```

## Testing Error Components

When testing components that intentionally throw errors (like error boundaries), consider:

1. **Testing Structure Only**: Test that the component renders without triggering the error functions
2. **Mocking Error Functions**: Mock the error-throwing functions to avoid actual errors
3. **Error Boundary Testing**: Use proper error boundary testing patterns
4. **Isolated Error Tests**: Keep error-throwing tests in separate files that can be run independently

## Dependencies

```json
{
  "devDependencies": {
    "vitest": "^3.2.4",
    "@testing-library/react": "^16.3.0",
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/user-event": "^14.6.1",
    "jsdom": "^26.1.0"
  }
}
```

## Best Practices

1. **Focus on User Behavior**: Test what users see and interact with
2. **Avoid Implementation Details**: Don't test internal state or implementation
3. **Use Data-Testid Sparingly**: Prefer semantic queries like `getByRole`, `getByText`
4. **Test Component Contracts**: Test props, events, and rendered output
5. **Keep Tests Simple**: Each test should verify one specific behavior
6. **Use Descriptive Test Names**: Make it clear what behavior is being tested

## Nushell Integration

Since you're using Nushell, you can create aliases for common test commands:

```nushell
# Add to your Nushell config
alias test-run = bun run test:run
alias test-watch = bun run test
alias test-safe = bun run test:safe
```

## Troubleshooting

### Test Files Not Found
- Ensure test files follow the naming convention: `*.test.tsx` or `*.spec.tsx`
- Check that test files are in the correct directories
- Verify `include` patterns in `vitest.config.ts`

### Mock Issues
- Ensure mocks are set up before importing the components
- Use `vi.mock()` for module mocking
- Place mocks at the top of test files

### Router Testing Issues
- Use memory history for router testing
- Create test routers with appropriate route configurations
- Mock router dependencies when needed
