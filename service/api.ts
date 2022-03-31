// API Wrapper around window.fetch
export const api = {
  get: (url: string, options?: RequestInit = {}) => {
    return fetch(`http://localhost:3000/api/${url}`, {
      ...options,
      headers: {
        ...options.headers,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return response.json().then((error) => {
          throw error;
        });
      })
      .catch((error) => {
        throw error;
      });
  },

  post: (url: string, body: any, options?: RequestInit = {}) => {
    return fetch(`http://localhost:3000/api/${url}`, {
      ...options,
      method: "POST",
      headers: {
        ...options.headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return response.json().then((error) => {
          throw error;
        });
      })
      .catch((error) => {
        throw error;
      });
  },
};
