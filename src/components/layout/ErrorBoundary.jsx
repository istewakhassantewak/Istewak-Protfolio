import { Component } from 'react';
import Button from '../ui/Button';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <main className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-lg">
            <h1 className="text-2xl font-bold mb-3">Something went wrong</h1>
            <p className="text-text/60 mb-6">
              The page failed to load. Please refresh or return to the home page.
            </p>
            <Button href="/" variant="primary">Back to Home</Button>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
