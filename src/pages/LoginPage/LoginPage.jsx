import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default function LoginPage({ handleSignUp }) {
    return (
        <>
            <h1>Sign In</h1>
            <SignUpForm handleSignUp={handleSignUp}/>
        </>
    );
}