/* ---------===== custom props ====--------- */

export interface Dog {
  name: string;
  age?: number | null;
  breed?: string;
  personality?: string;
  photo?: string;
  id: number;
  owner: { id: number };
}

/* ---------===== auth models =====--------- */

export interface Profile {
  name: string;
  photo?: string;
  id: number;
  createdAt: string;
  updatedAt: string;
  dogs?: Dog[]; 
}

export interface User {
  name: string;
  email: string;
  profile: { id: number };
  id: number;
  createdAt: string;
  updatedAt: string;
}
