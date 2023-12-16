import Login from '@/container/SignIn';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

async function handle() {
    const myToken = cookies().has('my-token');
    if (myToken) redirect('/Dashboard');
}
const SignIn = async () => {
    await handle();
    return <Login />;
};

export default SignIn;
