
import {RiShutDownLine} from 'react-icons/ri'
import { useAuth } from '../../hooks/auth';
import { api } from "../../services/api";
import { Container, Logout, Profile } from "./styles"; 

export function Header() {
    const { signOut, user } = useAuth();

     const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;


    return (
        <Container>
            <Profile to="/profile">
                <img
                    src={avatarUrl}
                    alt={user.name}
                />
                
                <div>
                    <span>Bem-Vindo</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>

            <Logout onClick={signOut}>
                <RiShutDownLine />
            </Logout>
        
        </Container>
    );
}