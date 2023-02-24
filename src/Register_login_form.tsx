/*
import React, { useState } from "react";
import mysql from 'mysql';
import { connection } from "./db";
type FormValues = {
    username: string;
    password: string;
};

const LoginForm = () => {
    const [formValues, setFormValues] = useState<FormValues>({
        username: "",
        password: "",
    });

    const history = useHistory();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        db.query(
            "SELECT * FROM users WHERE username = ? AND password = ?",
            [formValues.username, formValues.password],
            (error, results) => {
                if (error) throw error;
                if (results.length > 0) {
                    history.push("/dashboard");
                } else {
                    alert("Invalid login credentials");
                }
            }
        );
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <label>
                Username:
    <input
        type="text"
    name="username"
    value={formValues.username}
    onChange={handleInputChange}
    />
    </label>
    <label>
    Password:
    <input
        type="password"
    name="password"
    value={formValues.password}
    onChange={handleInputChange}
    />
    </label>
    <button type="submit">Log in</button>
        </form>
);
};

const RegisterForm = () => {
    const [formValues, setFormValues] = useState<FormValues>({
        username: "",
        password: "",
    });

    const history = useHistory();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        db.query(
            "INSERT INTO users (username, password) VALUES (?, ?)",
            [formValues.username, formValues.password],
            (error, results) => {
                if (error) throw error;
                if (results.affectedRows === 1) {
                    alert("Registration successful, please log in");
                    history.push("/login");
                } else {
                    alert("Error registering user");
                }
            }
        );
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <label>
                Username:
    <input
        type="text"
    name="username"
    value={formValues.username}
    onChange={handleInputChange}
    />
    </label>
    <label>
    Password:
    <input
        type="password"
    name="password"
    value={formValues.password}
    onChange={handleInputChange}
    />
    </label>
    <button type="submit">Register</button>
        </form>
);
};

export { LoginForm, RegisterForm };

function useHistory() {
    throw new Error("Function not implemented.");
}
*/