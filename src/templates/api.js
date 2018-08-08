import React from 'react'
import Helmet from 'react-helmet'
import TextXS from '../components/textXS'
import TextS from '../components/textS'
import TextM from '../components/textM'
import TextL from '../components/textL'
import TextXL from '../components/textXL'
import Wrapper from '../components/wrapper'
import Container from '../components/container'
import Column from '../components/column'
import Block from '../components/block'
import EmojiApi from '../components/emojiApi'
import Tri from '../components/tri'
import Form from '../components/form'
import FormInput from '../components/formInput'
import FormTextArea from '../components/formTextArea'
import Button from '../components/button'
import { dark } from '../utils/colors'

class Api extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			// none yet
		}
	}

	render() {
		const page = this.props.data.allContentfulPage.edges
		const { title, slug, description, keywords } = page[0].node // Page info
		const content = page[0].node.content.content // Array of page content

		return (
			<div>
				<Helmet>
					<title>{`${title} | Flyright`}</title>
					<meta name="title" content={title} />
					<meta name="description" content={description.description} />
					<meta name="keywords" content={keywords.join(', ')} />
					<meta property="og:type" content="website" />
					<meta property="og:title" content={title} />
					<meta property="og:description" content={description.description} />
					<meta property="og:url" content={`https://flyright.co/${slug}`} />
				</Helmet>
				<Column padding="1em 0 0 0">
					<Column padding="2em 0 0 0">
						<EmojiApi />
						<TextXL center padding="0.5em 0 0.25em 0">
							{title}
						</TextXL>
						<TextM center padding="0.5em 2em" style={{ maxWidth: '300px' }}>
							We’re building an API to make the travel data powering Flyright
							available for license.
						</TextM>
					</Column>
				</Column>
				<Column style={{ backgroundColor: dark, margin: '3em 0 2.5em 0' }}>
					<Container style={{ margin: '2em 0 1.5em' }}>
						{content[0].content.map(item => <Tri {...item} key={item.id} />)}
					</Container>
				</Column>
				<Column padding="0 0 2em 0">
					<TextL center padding="0.5em 0 0.25em 0">
						Get in touch
					</TextL>
					<TextM center padding="0.5em 2em" style={{ maxWidth: '300px' }}>
						Share your organization's needs and we'll build with that in mind.
					</TextM>
					<Form
						method="POST"
						action="https://formspree.io/team@flyright.co"
						autocomplete="off"
					>
						<FormInput type="text" name="name" placeholder="Name" />
						<FormInput type="text" name="company" placeholder="Company" />
						<FormInput type="text" name="position" placeholder="Position" />
						<FormInput type="email" name="email" placeholder="Email" />
						<FormTextArea name="message" placeholder="Your message" />
						<Button focus bigger type="submit">
							Send
						</Button>
					</Form>
				</Column>
			</div>
		)
	}
}

export default Api

export const apiPageQuery = graphql`
	query apiPageQuery($id: String!) {
		allContentfulPage(filter: { id: { eq: $id } }) {
			edges {
				node {
					id
					title
					slug
					description {
						description
					}
					keywords
					content {
						content {
							... on ContentfulContainer {
								id
								title
								content {
									... on ContentfulTri {
										id
										icon {
											title
											description
											file {
												url
											}
										}
										title
										body {
											body
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
`
