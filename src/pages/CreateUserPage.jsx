import {useNavigate} from 'react-router-dom';
import UserForm from '../components/UserForm';

const CreateUserPage = () => {
    const navigate = useNavigate();
    const handleSubmit = (userData) => {  
        console.log('Creating user:', userData);
        navigate('/users');
    };
    return (
        <div>
            <h1>Create New User</h1>
            <UserForm onSubmit={handleSubmit} isEditing={false} />
        </div>  
    );
};

export default CreateUserPage;