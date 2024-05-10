"use client";
import {ComponentProps, useCallback} from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from "@/contexts/firebase";
import AuthForm from "@/components/AuthForm";
import {Either} from "@/types/either.ts";
import { useRouter } from 'next/navigation';

type AuthFormProps = ComponentProps<typeof AuthForm>;

export default function Page() {
    const router = useRouter();

    const handleSubmit = useCallback<AuthFormProps["onSubmit"]>(async (values) => {
        try {
            const {email, password} = values;
            await createUserWithEmailAndPassword(auth, email, password);
            router.push("/");
        } catch (error: unknown) {
            if (error instanceof Error) {
                return Either.left(error.message);
            }
            return Either.left("Something went wrong");
        }
    }, [router]);

    return (
        <div className="flex items-center justify-center h-screen">
            <AuthForm onSubmit={handleSubmit} type="signUp"/>
        </div>
    );
}