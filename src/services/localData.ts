// src/services/localData.ts

/**
 * A universal local storage service for any type of data.
 * Handles CRUD (Create, Read, Update, Delete) operations generically.
 */

export const localData = {
  // Get all items from a specific key
  getAll<T>(key: string): T[] {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  },

  // Save a full array (overwrite)
  setAll<T>(key: string, items: T[]): void {
    localStorage.setItem(key, JSON.stringify(items));
  },

  // Add a single item
  add<T extends { id: string | number }>(key: string, item: T): void {
    const current = this.getAll<T>(key);
    this.setAll<T>(key, [...current, item]);
  },

  // Update an existing item by id
  update<T extends { id: string | number }>(key: string, updated: T): void {
    const current = this.getAll<T>(key);
    const next = current.map((item) => (item.id === updated.id ? updated : item));
    this.setAll<T>(key, next);
  },

  // Remove an item by id
  remove<T extends { id: string | number }>(key: string, id: string | number): void {
    const current = this.getAll<T>(key);
    const next = current.filter((item) => item.id !== id);
    this.setAll<T>(key, next);
  },

  // Clear all data for a key
  clear(key: string): void {
    localStorage.removeItem(key);
  },
};
