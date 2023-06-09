/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Avatar, Button, Card, CardContent, Tooltip } from '@mui/material';
import QuestList from 'QuestList';
import Login from 'Login';

import { css } from '@emotion/react';

const containerStyle = css({
	margin: '5%',
});

const cardStyle = css({
	padding: '1vw',
	margin: '1vw',
	textAlign: 'center',
});

const buttonStyle = css({
	margin: '2vh',
	height: '10vh',
	width: '90%',
});

const avatarStyle = css({
	marginLeft: '80%',
	marginBottom: '2vh',
	height: '8vh',
	width: '8vh',
});

function Home() {
	const flipCard = () => {
		const [flip, setFlip] = useState<String>('home');

		const handleNewAssignment = () => {
			setFlip('assign');
		};

		const handleAddYourOwn = () => {
			setFlip('add');
		};

		const handleNarrowDown = () => {
			setFlip('narrow');
		};

		const handleViewList = () => {
			setFlip('list');
		};

		const handleLogin = () => {
			setFlip('login');
		};

		const handleHome = () => {
			setFlip('home');
		};

		switch (flip) {
			case 'home':
				return (
					<CardContent className="home">
						<Avatar css={avatarStyle} onClick={handleLogin}>
							/
						</Avatar>
						<Tooltip title="If you have no idea what to do with yourself, get assigned a random activity.">
							<Button
								css={buttonStyle}
								variant="contained"
								onClick={handleNewAssignment}
							>
								New Assignment
							</Button>
						</Tooltip>
						<Tooltip title="If you are feeling somewhat decisive, take some time to select preferences to help curate a task that you're interested in">
							<Button
								css={buttonStyle}
								variant="contained"
								onClick={handleNarrowDown}
							>
								Narrow it Down
							</Button>
						</Tooltip>
						<Tooltip title="If you have a lot of ideas and some spare time, add your own quests to the mix.">
							<Button
								css={buttonStyle}
								variant="contained"
								onClick={handleAddYourOwn}
							>
								Add Your Own Quest
							</Button>
						</Tooltip>
						<Tooltip title="See all in progress and completed quests">
							<Button
								css={buttonStyle}
								variant="contained"
								onClick={handleViewList}
							>
								View All Quests
							</Button>
						</Tooltip>
					</CardContent>
				);

			case 'assign':
				return (
					<CardContent className="assign">
						<h2>Your Mission</h2>
						<h3>Organize your closet</h3>
						<p>
							- select some items that you don't wear anymore to
							donate
						</p>
					</CardContent>
				);

			case 'add':
				return <CardContent className="home">ADD</CardContent>;

			case 'narrow':
				return <CardContent className="home">filters</CardContent>;

			case 'list':
				return <QuestList />;

			case 'login':
				return <Login handleHome={handleHome} />;

			default:
				return null;
		}
	};

	return (
		<Container css={containerStyle}>
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<Card css={cardStyle}>{flipCard()}</Card>
				</Grid>
			</Grid>
		</Container>
	);
}

export default Home;
