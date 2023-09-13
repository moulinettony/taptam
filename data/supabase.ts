// supabase.ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://olmzdcdyqplepgpqnvlk.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9sbXpkY2R5cXBsZXBncHFudmxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1Nzg3NDQsImV4cCI6MjAwOTE1NDc0NH0.3bGzSwOL8hX1-RDvAtLHXtk15ISp1kb0WHHQYoug5ak";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
