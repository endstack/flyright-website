import styled from 'styled-components'
import { dark, purple } from '../utils/colors'

const LinkExternal = styled.a`
	color: ${dark};
	background-color: none;
	border: none;
	cursor: pointer;
	outline: none;
	text-decoration: none;
	box-shadow: none;
	border-bottom: ${props => (props.border ? `2.5px solid ${purple}` : `none`)};
	padding: ${props => (props.border ? `0 0 0.15em 0` : `none`)};
	margin: 0;

	&:hover div {
		color: ${props => (props.footer ? purple : `initial`)};
	}
`

export default LinkExternal
