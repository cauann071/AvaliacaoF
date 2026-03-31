import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = "https://ygdejcsrspptikdykpmi.supabase.co";
const SUPABASE_KEY = "sb_publishable_6PT8apeQ-hjLOOKUvZYehg_4QGQh_5i";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;