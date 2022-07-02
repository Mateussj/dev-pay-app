import { useState } from "react";
import { handleRegister } from './register.presenter'

export default function () {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [cpf, setCpf] = useState('');
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
						Name:
						<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
					</label>

					<label>
						Email:
						<input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
					</label>

					<label>
						CPF:
						<input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />
					</label>

					<label>
						Password:
						<input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
					</label>

					<button onClick={() => handleRegister({ name, email, cpf, password })}> Salvar </button>
				</div>
			</div>
		</div >
	);
}
