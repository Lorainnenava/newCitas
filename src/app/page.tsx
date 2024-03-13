import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import PaginaPrincipal from '../components/mainView';

export default function Home() {
    const myToken = cookies().has('my-token');
    if (myToken) {
        redirect('/Dashboard');
    }
    return <PaginaPrincipal />;
}
