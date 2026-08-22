const API_BASE_URL = 'http://localhost:3001/api';

/**
 * Fetches all categories for a given subject (default: OS)
 */
export async function fetchCategories(subject = 'OS') {
  try {
    const response = await fetch(`${API_BASE_URL}/categories?subject=${encodeURIComponent(subject)}`);
    if (!response.ok) throw new Error('Failed to fetch categories');
    const data = await response.json();
    return data.categories || [];
  } catch (error) {
    console.error('API Error [fetchCategories]:', error);
    return [];
  }
}

/**
 * Fetches a random question optionally filtered by category
 */
export async function fetchRandomQuestion(category = '', subject = 'OS') {
  try {
    let url = `${API_BASE_URL}/question/random?subject=${encodeURIComponent(subject)}`;
    if (category) {
      url += `&category=${encodeURIComponent(category)}`;
    }
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch random question');
    return await response.json();
  } catch (error) {
    console.error('API Error [fetchRandomQuestion]:', error);
    return null;
  }
}

/**
 * Submits user practice session score to backend database
 */
export async function submitProgress(payload) {
  try {
    const response = await fetch(`${API_BASE_URL}/progress/rate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!response.ok) throw new Error('Failed to record progress');
    return await response.json();
  } catch (error) {
    console.error('API Error [submitProgress]:', error);
    return { success: false };
  }
}

/**
 * Fetches aggregated practice analytics
 */
export async function fetchAnalytics() {
  try {
    const response = await fetch(`${API_BASE_URL}/analytics`);
    if (!response.ok) throw new Error('Failed to fetch analytics');
    return await response.json();
  } catch (error) {
    console.error('API Error [fetchAnalytics]:', error);
    return null;
  }
}
