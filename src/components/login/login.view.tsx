import { useState } from "react";
import { handleLogin } from "./login.presenter";
import "./login.css";

export default function () {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<div className="col-md-12 login-container">
			<div className="card card-container">
				<img
					src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
					alt="profile-img"
					className="profile-img-card"
				/>
				<div>
					<label>
						<input className="login-input" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
					</label>
					<label>
						<input className="login-input" type="password" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)} />
					</label>

					<button onClick={() => handleLogin({ email, password })}> Login </button>
				</div>
			</div>
		</div >
	);
}
