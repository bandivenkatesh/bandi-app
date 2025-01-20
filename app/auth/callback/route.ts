import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
    try {
        const requestUrl = new URL(request.url);
        const code = requestUrl.searchParams.get('code');

        if (!code) {
            throw new Error('No code provided in authentication callback');
        }

        const cookieStore = cookies();
        const supabase = createRouteHandlerClient({
            cookies: () => cookieStore
        });

        const { error } = await supabase.auth.exchangeCodeForSession(code);
        
        if (error) {
            throw error;
        }

        return NextResponse.redirect(new URL('/', request.url));
    } catch (error) {
        console.error('Auth callback error:', error);
        // Add error details to the redirect URL
        const errorUrl = new URL('/auth-error', request.url);
        errorUrl.searchParams.set('message', (error as Error).message);
        return NextResponse.redirect(errorUrl);
    }
}