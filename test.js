require(`svelte/ssr/register`)

const Parent = require(`./Parent.html`)
const Child = require(`./Child.html`)
const assert = require(`assert`)

const { html } = Parent.render({
	data: {
		Child,
	},
})

const expected = `<h1>sup</h1>
<div>
<p>
	o hai
</p>
</div>
`

assert.equal(html, expected)
