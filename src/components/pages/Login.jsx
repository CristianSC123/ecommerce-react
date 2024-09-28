import axios from "axios";
import { API_URL } from "../../constants/env";
import { setToken } from "../../helpers/authentication";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginTemplate from "../templates/LoginTemplate";

export const Login = () => {
    const nav = useNavigate();
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        setError(null);
        e.preventDefault();

        const data = {
            email: e.target.email.value,
            password: e.target.password.value,
        };

        axios.post(`${API_URL}/public/login`, data)
            .then((response) => {
                setToken(response.data.data.token);
                nav("/");
            })
            .catch((e) => {
                setError(e.response?.data?.message || "Error al iniciar sesión");
            });
    };

    return (
        <LoginTemplate>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Correo Electrónico"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white font-semibold py-2 rounded-lg hover:from-blue-700 hover:to-blue-500 transition duration-300"
                    >
                        Iniciar sesión
                    </button>
                </div>
                {error && (
                    <p className="text-center p-2 bg-red-100 text-red-800">
                        {error}
                    </p>
                )}
            </form>
        </LoginTemplate>
    );
};

export default Login;
