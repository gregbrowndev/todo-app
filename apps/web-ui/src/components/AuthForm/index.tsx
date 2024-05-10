"use client";
import React, {useState, type FormEvent} from 'react';
import type {Either} from "@/types/either.ts";

interface Props {
    type: 'signIn' | 'signUp';
    onSubmit: (values: FormValues) => Promise<Either<string, void> | void>;
}

interface FormValues {
    email: string;
    password: string;
}

const AuthForm: React.FC<Props> = ({type, onSubmit}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string>();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const result = await onSubmit({
                email,
                password,
            });
            if (result && result.kind === 'left') {
                setError(result.value);
            }
        } catch (error: unknown) {
            setError("Something went wrong");
        }
    };

    return (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    placeholder="Email"
                    required
                    type="email"
                    value={email}
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    placeholder="******************"
                    required
                    type="password"
                    value={password}
                />
            </div>
            {error ? <p className="text-red-500 text-xs italic">{error}</p> : null}
            <div className="flex items-center justify-between">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    {type === 'signIn' ? 'Sign In' : 'Sign Up'}
                </button>
            </div>
        </form>
    );
}

export default AuthForm;