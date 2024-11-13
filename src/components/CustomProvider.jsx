import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const context = createContext();
const { Provider } = context;

const CustomProvider = ({ children }) => {
    const [users, setUsers] = useState([
        { id: 1, name: "Jonathan" },
    ]);

    const agregarUsuario = (nuevoUsuario) => {
        setUsers([...users, nuevoUsuario]);
    };

    const providerValue = {
        users,
        agregarUsuario,
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
