import { createClient } from '@supabase/supabase-js';
const url=import.meta.env.VITE_SUPABASE_URL || '';
const key=import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || '';
// Do not accept server secrets in a browser app. Public keys still require RLS.
export const configured=/^https:\/\/[a-z0-9-]+\.supabase\.co$/.test(url) && key.startsWith('sb_publishable_') && !key.includes('REPLACE');
export const supabase=configured ? createClient(url,key) : null;
