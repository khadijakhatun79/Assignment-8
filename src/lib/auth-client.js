import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    baseURL: "http://localhost:3000",  
  baseURL: "https://assignment-8-wheat.vercel.app",  
});