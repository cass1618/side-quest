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

function Home() {
	const [flip, setFlip] = useState<Boolean>(false);

	const handleNewAssignment = () => {
		setFlip(!flip);
		console.log(flip);
	};

	return (
		<Container css={containerStyle}>
			<Grid container spacing={2}>
				<Grid item xs={4}>
					<Card css={cardStyle}>
						{!flip ? (
							<CardContent className="front">
								<Tooltip title="If you have no idea what to do with yourself, get assigned a random activity">
									<Button onClick={handleNewAssignment}>
										New Assignment
									</Button>
								</Tooltip>
							</CardContent>
						) : (
							<CardContent className="back">
								<h3>Your Mission</h3>
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
