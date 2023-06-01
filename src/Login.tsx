/** @jsxImportSource @emotion/react */
import React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { Button, TextField } from '@mui/material';
import { css } from '@emotion/react';
import { useState } from 'react';
import { authenticateUser, createUser } from 'services/login.service';

const fieldStyle = css({
	width: '90%',
	margin: '2vh',
});

const buttonStyle = css({
	margin: '2vh',
	height: '10vh',
	width: '90%',
});

Login.propTypes = {
	handleHome: PropTypes.func.isRequired,
};

function Login(props: any) {
	const flipCard = () => {
		const [flip, setFlip] = useState<string>('options');
		const [username, setUsername] = useState<string>('');
		const [password, setPassword] = useState<string>('');
		const [login, setLogin] = useState<boolean>(false);

		const handleSubmitSignIn = async (
			e: React.FormEvent<HTMLFormElement>
		) => {
			e.preventDefault();
			const response = await authenticateUser(username, password);
			setLogin(response?.data.authenticated ?? false);
		};

		const handleSubmitCreate = async (
			e: React.FormEvent<HTMLFormElement>
		) => {
			e.preventDefault();
			const response = await createUser(username, password);
			console.log(response);
		};

		const handleSignIn = () => {
			setFlip('signIn');
		};

		const handleCreateNew = () => {
			setFlip('createNew');
		};

		const handleOptions = () => {
			setFlip('options');
		};

		switch (flip) {
			case 'options':
				return (
					<Box>
						<Button
							css={buttonStyle}
							variant="contained"
							onClick={handleSignIn}
						>
							Sign In
						</Button>
						<Button
							css={buttonStyle}
							variant="contained"
							onClick={handleCreateNew}
						>
							Create New Account
						</Button>
						<Button
							css={buttonStyle}
							variant="contained"
							onClick={props.handleHome}
						>
							Return to Home
						</Button>
					</Box>
				);

			case 'signIn':
				return (
					<Box component="form" onSubmit={handleSubmitSignIn}>
						<div>
							<h2>Sign In</h2>
							<TextField
								css={fieldStyle}
								id="username"
								label="username"
								onChange={(e) => setUsername(e.target.value)}
							/>
							<TextField
								css={fieldStyle}
								id="password"
								label="password"
								type="password"
								onChange={(e) => setPassword(e.target.value)}
							/>
							<Button type="submit">sign in</Button>
							<Button
								css={buttonStyle}
								variant="contained"
								onClick={handleOptions}
							>
								Go Back
							</Button>
							<h3> {login} </h3>
						</div>
					</Box>
				);

			case 'createNew':
				return (
					<Box component="form" onSubmit={handleSubmitCreate}>
						<div>
							<h2>Create New Account</h2>
							<TextField
								css={fieldStyle}
								id="username"
								label="username"
								onChange={(e) => setUsername(e.target.value)}
							/>
							<TextField
								css={fieldStyle}
								id="password"
								label="password"
								type="password"
								onChange={(e) => setPassword(e.target.value)}
							/>
							<TextField
								css={fieldStyle}
								id="confirm"
								label="confirm password"
								type="password"
							/>
							<Button type="submit">sign in</Button>
							<Button
								css={buttonStyle}
								variant="contained"
								onClick={handleOptions}
							>
								Go Back
							</Button>
						</div>
					</Box>
				);
		}
	};

	return <Box>{flipCard()}</Box>;
}

export default Login;
