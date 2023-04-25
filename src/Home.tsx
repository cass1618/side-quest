/** @jsxImportSource @emotion/react */
import React, { MouseEventHandler, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button, Card, CardContent, Tooltip } from '@mui/material';

import { css } from '@emotion/react';

const containerStyle = css({
	margin: '5%',
});

const cardStyle = css({
	padding: '1vw',
	margin: '1vw',
});

const buttonStyle = css({
	margin: '1vh',
});

function Home() {
	const [flip, setFlip] = useState<Boolean>(false);

	const handleNewAssignment = () => {
		setFlip(!flip);
	};

	const handleAddYourOwn = () => {
		console.log('add your own');
	};

	const handleNarrowDown = () => {
		console.log('select filters');
	};

	return (
		<Container css={containerStyle}>
			<Grid container spacing={2}>
				<Grid item xs={4}>
					<Card css={cardStyle}>
						{!flip ? (
							<CardContent className="front">
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
							</CardContent>
						) : (
							<CardContent className="back">
								<h2>Your Mission</h2>
								<h3>Organize your closet</h3>
								<p>
									{' '}
									- select some items that you don't wear
									anymore to donate
								</p>
							</CardContent>
						)}
					</Card>
				</Grid>
				<Grid item xs={4}>
					<Card css={cardStyle}>Card 2</Card>
				</Grid>
				<Grid item xs={4}>
					<Card css={cardStyle}>Card 3</Card>
				</Grid>
			</Grid>
		</Container>
	);
}

export default Home;
