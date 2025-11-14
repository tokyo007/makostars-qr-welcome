// Type definition for gtag
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

/**
 * Track page views in Google Analytics
 * @param path - The page path (e.g., '/', '/bookmark', '/book-fair-2025')
 * @param title - Optional page title
 */
export const trackPageView = (path: string, title?: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: title || document.title,
      page_location: window.location.href,
    });
    
    console.log(`GA4 Page View Tracked: ${path}`);
  }
};

/**
 * Track custom events in Google Analytics
 * @param eventName - Name of the event
 * @param eventParams - Additional parameters
 */
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, eventParams);
    console.log(`GA4 Event Tracked: ${eventName}`, eventParams);
  }
};
