export default class envs {
    static BP_BUCKET: string = process.env.NEXT_PUBLIC_BP_BUCKET!;
    static SUPABASE_URL: string = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    static SUPABASE_KEY: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
}