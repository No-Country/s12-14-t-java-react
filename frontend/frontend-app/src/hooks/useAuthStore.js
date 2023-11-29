import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



import { pageApi } from '../api/PageApi';
import { clearErrorMessage, onChecking, onLogin, onLogout, } from '../store/auth/authSlice';

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const navigateTo = useNavigate();

   

    const startRegister = async (User) => {

        console.log( pageApi )
        dispatch(onChecking());
        try {
            const { data } = await pageApi.post('/auth/register', { ...User });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({ name: data.name, uid: data.uid }));
            console.log('Usuario creado correctamente', 'Por favor complete su perfil', 'success');
            navigateTo( `/profile/${ data.uid }` );

        } catch (error) {
            console.log( error )
            console.log('Error al crear usuario', error.response.data?.msg, 'error');
            dispatch(onLogout(error.response.data?.msg || 'add valid email or password'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }

    }

    

    const checkAuthToken = async () => {
        const token = localStorage.getItem('token');

        if (!token) return dispatch(onLogout());

        try {
            const { data } = await pageApi.get('auth/renew');
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({ name: data.name, uid: data.uid }));
        } catch (error) {

            console.log(error);
            localStorage.clear();
            dispatch(onLogout());
        }
    }

    return {
        status,
        user,
        errorMessage,
        checkAuthToken,
        startRegister,
    }
}