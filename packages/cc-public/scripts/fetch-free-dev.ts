/**
 * fetch-free-dev
 * 
 * - fetch the markdown of free-for-dev's list of free cloud service offerings
 * - parse using remark()
 * - traverse using unist-utils to get links within sections
 * - output JSON
 */

import axios from 'axios';
const remark = require('remark')
const visit = require('unist-util-visit')
const is = require('unist-util-is')
const findAfter = require('unist-util-find-after')
const findAllAfter = require('unist-util-find-all-after')
const between = require('unist-util-find-all-between')
const filter = require('unist-util-filter')
const inspect = require('unist-util-inspect')
import { nanoid } from 'nanoid'

import {Node as AstNode, Parent as AstParent} from 'unist';
import {Heading, ListItem, Paragraph, Text, Link} from 'mdast';


const remoteSourceUrl = "https://raw.githubusercontent.com/ripienaar/free-for-dev/master/README.md"

const writeOut = (s: string) => process.stdout.write(s);

const headingText = (heading:AstParent) => (heading) ? heading.children[0].value : ''

const fetchFromFreeDev = async () => {
	
	axios.get(remoteSourceUrl, {
		"params": {
		},
		"headers": {
		}
	})
		.then((response) => {
			writeOut('[');

			const tree:AstParent = remark().parse(response.data);
			
			visit(tree, {type:'heading', depth:2}, 
				(section:Heading) => {
					const sectionRecord:any = {
						title: headingText(section),
						related: []
					}
					const nextSection:Heading = findAfter(tree, section, 'heading');
					// console.log(headingText(section), '-->', headingText(nextSection))
					const subsection = (nextSection) ? between(tree, section, nextSection) : findAllAfter(tree, section);
					subsection.forEach((chunk:AstParent) => {
						visit(chunk, 'listItem', 
							(listItem:ListItem) => {
								const p:Paragraph = listItem.children[0] as Paragraph;
								const link:Link = p.children[0] as Link;
								const description = p.children[1] as Text;
								// console.log(p);
								if (link.url) {
									sectionRecord.related.push({
										title: (link.children && link.children[0].value) || 'hm',
										description: description ? description.value : '',
										url: link.url
									})
								}
							}
						)
					});
					writeOut(JSON.stringify(sectionRecord));
					if (nextSection) writeOut(",");
				}
			);

			writeOut(']');
		})
		.catch((err) => {
			console.error("ERROR:", err);
		})
	
}

fetchFromFreeDev();

