import Login from './container';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const SignIn = () => {
    const myToken = cookies().has('my-token');
    if (myToken) {
        redirect('/Dashboard');
    }
    return <Login />;
};

export default SignIn;
