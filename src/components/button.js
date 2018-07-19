import styled from 'styled-components'
import media from '../utils/media'
import { dark, white, acid } from '../utils/colors'

const Button = styled.div`
	display: flex;
	align-items: center;
	font-size: 1em;
	font-weight: 500;
	letter-spacing: 0.3px;
	color: ${dark};
	text-decoration: none;
	text-align: center;
	padding: 0.6em 1.2em;
	background-color: ${white};
	cursor: pointer;
	margin: 1em 0.3em;
	border-radius: 100px;
	line-height: 20px;
	box-shadow: 0 2px 4px ${acid};
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	user-select: none;

	&:active {
		background-color: ${acid};
	}

	${media.mbl`
		margin: 1em 0.5em;
	`};
	${media.tab`
		margin: 1em 0.75em;
	`}
	${media.desk`
		&:hover {
			box-shadow: 0 4px 4px ${acid};
		}
	`};
`

export default Button
