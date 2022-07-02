import { useState } from "react";
import { handleLogin } from "./login.presenter";

export default function () {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<div className="col-md-12">
			<div className="card card-container">
				<img
					src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
					alt="profile-img"
					className="profile-img-card"
				/>
				<div>
					<label>
						Email:
						<input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
					</label>

					<label>
						Password:
						<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
					</label>

					<button onClick={() => handleLogin({ email, password })}> Login </button>
				</div>
			</div>
		</div >
	);
}
