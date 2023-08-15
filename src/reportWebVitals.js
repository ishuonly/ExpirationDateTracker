// Import necessary modules and resources
const reportWebVitals = onPerfEntry => {
  // Check if the onPerfEntry function is provided and is a valid function
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Import the web-vitals library and access its metric functions
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Call each metric function with the provided onPerfEntry function
      getCLS(onPerfEntry); // Cumulative Layout Shift (CLS)
      getFID(onPerfEntry); // First Input Delay (FID)
      getFCP(onPerfEntry); // First Contentful Paint (FCP)
      getLCP(onPerfEntry); // Largest Contentful Paint (LCP)
      getTTFB(onPerfEntry); // Time to First Byte (TTFB)
    });
  }
};

// Export the reportWebVitals function
export default reportWebVitals;