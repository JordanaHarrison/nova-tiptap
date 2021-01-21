import {Link} from "tiptap-extensions"

export default class CustomLink extends Link {

		constructor(props) {
			super({ ...props })
			this.target = props.target
		}

		get schema() {
			return {
				attrs: {
					href: {
						default: null
					},
					target: {
						default: null
					}
				},
				inclusive: false,
				parseDOM: [
					{
						tag: 'a[href]',
						getAttrs: (dom) => ({
							href: dom.getAttribute('href'),
							target: dom.getAttribute('target')
						})
					}
				],
				toDOM: (node) => [
					'a',
					{
						...node.attrs,
						target: this.target
					},
					0
				]
			}
		}
	}