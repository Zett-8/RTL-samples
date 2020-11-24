

export interface User {
  id: string,
  name: string
}

export const getUser = (): Promise<User> => {
  return new Promise(resolve => setTimeout(() => resolve({ id: '1', name: 'David'}), 1000))
}

