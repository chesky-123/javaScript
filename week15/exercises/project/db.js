import { createClient } from "@supabase/supabase-js";




export const client = createClient(
    process.env.SUPERBASE_URL,
    process.env.API_KEY
);




