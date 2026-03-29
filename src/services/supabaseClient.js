import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lvawbcendpltkdrqniww.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2YXdiY2VuZHBsdGtkcnFuaXd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ3MTc4MTgsImV4cCI6MjA5MDI5MzgxOH0.qC_UbuiGkS9AfriWJHe1hwUlVzEPSfIG8sPo9Ht-Euo'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
