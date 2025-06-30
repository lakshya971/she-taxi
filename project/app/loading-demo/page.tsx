import Loading, { Spinner, LoadingButton } from '@/components/ui/loading';
import PageLoading from '@/components/ui/page-loading';

export default function LoadingDemo() {
  return (
    <div className="overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Loading Components Demo
          </h1>

          <div className="space-y-16">
            {/* Default Loading */}
            <section className="text-center">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Default Loading Component
              </h2>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
                <Loading message="Loading your ride..." />
              </div>
            </section>

            {/* Different Sizes */}
            <section className="text-center">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Different Sizes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-medium mb-4">Small</h3>
                  <Loading size="sm" message="Finding drivers..." />
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-medium mb-4">Medium</h3>
                  <Loading size="md" message="Booking your ride..." />
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-medium mb-4">Large</h3>
                  <Loading size="lg" message="Confirming safety..." />
                </div>
              </div>
            </section>

            {/* Minimal Variant */}
            <section className="text-center">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Minimal Loading
              </h2>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
                <Loading variant="minimal" size="lg" />
              </div>
            </section>

            {/* Spinners */}
            <section className="text-center">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Simple Spinners
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-medium mb-4">Small Spinner</h3>
                  <Spinner size="sm" />
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-medium mb-4">Medium Spinner</h3>
                  <Spinner size="md" />
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-medium mb-4">Large Spinner</h3>
                  <Spinner size="lg" />
                </div>
              </div>
            </section>

            {/* Loading Buttons */}
            <section className="text-center">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Loading Buttons
              </h2>
              <div className="space-y-4">
                <div>
                  <LoadingButton
                    isLoading={true}
                    className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium"
                  >
                    Book Ride
                  </LoadingButton>
                </div>
                <div>
                  <LoadingButton
                    isLoading={false}
                    className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium"
                  >
                    Confirm Booking
                  </LoadingButton>
                </div>
              </div>
            </section>

            {/* Full Screen Demo Button */}
            <section className="text-center">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Full Screen Loading
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Click the button below to see the full-screen loading animation
              </p>
              <button
                onClick={() => {
                  const fullScreenLoader = document.createElement('div');
                  fullScreenLoader.innerHTML = `
                    <div style="position: fixed; inset: 0; z-index: 9999;">
                      <!-- Full screen loading would be rendered here -->
                    </div>
                  `;
                  document.body.appendChild(fullScreenLoader);
                  
                  setTimeout(() => {
                    document.body.removeChild(fullScreenLoader);
                  }, 3000);
                }}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
              >
                Show Full Screen Loading
              </button>
            </section>

            {/* Usage Examples */}
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white text-center">
                Usage Examples
              </h2>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto">
{`// Import the components
import Loading, { Spinner, LoadingButton } from '@/components/ui/loading';
import PageLoading from '@/components/ui/page-loading';

// Default loading with message
<Loading message="Finding nearby drivers..." />

// Different sizes
<Loading size="sm" message="Connecting..." />
<Loading size="lg" message="Processing payment..." />

// Minimal variant (no message or progress bar)
<Loading variant="minimal" size="md" />

// Full screen loading
<Loading variant="full-screen" message="Initializing app..." />

// Simple spinner
<Spinner size="md" />

// Loading button
<LoadingButton isLoading={isSubmitting}>
  Book Ride
</LoadingButton>

// Page loading (full screen with branding)
<PageLoading />`}
                </pre>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
