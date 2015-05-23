##React Generator

**Pre release, don't actually try using this on real stuff please ;)**

##Install

	npm install reactg

###Usage

This is a very minimal generator right now. After installing, you can run

	reactg component Testing
	//or
	reactg Testing

These both do the same thing, the second is just short hand. Later on I would like to add
an `reactg action Testing` and allow you to choose what flux library you are using, along with
setting an output path for actions and stores. 

###reactg.json

You can specify default config variables in `reactg.json`. For now, there's only two options:

	{
	  "constructor": true,
	  "extension": "jsx"
	}

`constructor`: if you want constructors included when generating a component
`extension`: what extension to use when outputting your component