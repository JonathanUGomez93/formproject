import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const context = createContext();
const { Provider } = context;

const CustomProvider = ({ children }) => {
    const [users, setUsers] = useState(() => {
        const savedUsers = localStorage.getItem('users');
        return savedUsers ? JSON.parse(savedUsers) : [
            {
                id: 1,
                user: "Jonathan",
                email: "jurielgomez_1993@hotmail.com",
                password: "DameChamba2025",
                cart: []
            },
        ];
    });

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    const agregarUsuario = (nuevoUsuario) => {
        setUsers([...users, nuevoUsuario]);
    };

    const providerValue = {
        users,
        agregarUsuario
    };
    return (
        <Provider value={providerValue}>
            {children}
        </Provider>
    );
};
CustomProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export default CustomProvider;