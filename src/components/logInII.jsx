import '../css/logInFormII.css';
function LogInForm() {

    return (
        <div class="box">
            <h1 class="h1_text">KIU</h1>
            <hr class="line" />
            <div class="container">
                <p>ID</p>
                <input type="text" />
            </div>
            <div class="container">
                <p>PASSWORD</p>
                <input type="password" />
            </div>
            <div class="container">
                <button >LOG IN </button>
            </div>
            <p class="addition">Register</p>
        </div>
    );
}

export default LogInForm