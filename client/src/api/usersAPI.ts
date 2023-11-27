import { AdminUser } from "../types/admin";

const API_URI = import.meta.env.VITE_API_URI

export async function register(user: AdminUser) {
  try {
    const response = await fetch(`${API_URI}/users/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    });

    if (!response.ok) {
      throw new Error(await response.text());
    }
    return response.json();
  } catch (error) {
    console.error('Registration failed:', error);
    throw error;
  }
}

export async function login(user: Partial<AdminUser>) {
  try {
    const response = await fetch(`${API_URI}/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    });
    if (!response.ok) {
      throw new Error(await response.text());
    }
    const res = await response.json();

    const adminResponse = res.user[0].is_admin

    localStorage.setItem("admin", adminResponse)

  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
}

export async function logOutApi() {
  try {
    const response = await fetch(`${API_URI}/users/logout`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // body: JSON.stringify(user)
      })
      localStorage.removeItem("admin");
    if (!response.ok) {
      throw new Error(await response.text());
    }
    const res = await response.json();
    return res
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
}