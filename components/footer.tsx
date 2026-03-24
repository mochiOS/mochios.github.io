export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mt-8 text-xs text-gray-400 dark:text-gray-600">
          © 2025-{new Date().getFullYear()} tas0dev and mochiOS contributors. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
