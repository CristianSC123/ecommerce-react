

function LoginTemplate({children}) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-800 to-blue-600">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
                    Iniciar Sesión
                </h2>
                {children}
            </div>
        </div>
    )
}

export default LoginTemplate