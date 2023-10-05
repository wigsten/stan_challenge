# Setup
- Ensure you have Node and NPM installed
- Run `npm install` to install all required packages
- To run a local dev server run `npm run start`. This will boot a server on `http://localhost:8080`
- To run a production build run `npm run build`. Ensure you have the data.json served in the root.

# Decision on technical approach
- I basically ran with the approach of `making it work first`, followed by `making it better`. I have tried to optimise where possible and structure the code in a way that makes sense to me. I'm a big believer of `what changes together, stays together`, and trying to keep each file as simplistic as possible. The idea being that the more simple and re-usable each code-snippet is - the simpler the unit tests would be to write and to test against.
I tried to utilise a component library where everything is considered a block, and then basically each page or route pulls in what's needed to display it.

# Improvements on my solution
Would be on the technical implementation of the various events. Events can be tricky and I think my solution follows the brief, but it could have been done in a more neat way. For instance if there was multiple carousels my solution would not work as well as it does with just the one.
I would have have added more memoizations and hooks, such as useCallback & useMemo to really improve on the performance of the app. For such a small sample this probably doesn't affect the user in any way - but exponentially this would have a greater impact on the load on the browser. 


# If give more time
I ran out of time but given more time I would have 
- written unit tests. Especially for some critical parts like the carousel.
- added a state library like Redux or MobX to maintain the state across the app 
- set up the fetch API properly; only fetching 6 items, proper error handling, time-outs, and success as well
- added a 'load more' container/card at the end of the carousel to load more programs
- better graceful error handling (and a more simple and wrap-able solution)


