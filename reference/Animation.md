
#Animation

Animations change CSS properties of elements over time, like: position, width or color.

##Quick facts

- Animations can be reversed at any time. You can call {@link Lava.animation.Abstract#reverseDirection} to run it backwards.
- You can animate several properties simultaneously
- You can create animation without a target (DOM element that it will animate), and set it later.
- You can supply a custom transition method

###Example

```javascript
var config = {
	// milliseconds
	duration: 1500,

	// you can supply either transition name or transition callback
	// transition_name: 'inSine',

	transition: function(x) {
		return (x < 0.5) ? Firestorm.Transitions.inOutCubic(x*2) : Firestorm.Transitions.inOutCubic(1 - (x - 0.5)*2);
	},
	// properties, that will be animated
	animators: [
		// "type" refers to class name from Lava.animators. Other properties represent config for that class
		{type: 'Color', from: [255, 255, 255], to: [128, 255, 128], property: 'background-color'},
		// 'delta' represents the distance. In this case, it will animate width from 25px to 500px
		{type: 'Integer', from: 25, delta: 475, property: 'width'}
	]
}

var animation = new Lava.animation.Standard(config, Firestorm.getElementById('example_element'));
animation.reverseDirection();
animation.start();
```

This will animate element's width from 500px to 25px, and color from light-green to white.

##Architecture

Animations and classes are the most time-critical parts of any framework, so they are always optimized for best performance.

- When animation starts - it adds itself to the list of active tasks via call to {@link Lava.Cron#acceptTask}.
- When first task is added to {@link Lava.Cron} - it starts a timer, which periodically calls it's {@link Lava.Cron#onTimer} callback.
- Cron's `onTimer` than calls `onTimer()` method of all active tasks.
- At the same time, Cron asks every animation if it's still active via call to `isRunning()`. When animation stops -
Cron removes it from it's list of active tasks.
- When there are no more active tasks - timer stops.

Each animation has a "transition" function (analog of JQuery's "easings"). Transition determines the actual animation's
value, depending on it's current percent.

Inside animation instance:
- In calls to `onTimer()` it receives current system time from Cron.
- Than it calculates it's current percent by the following formula: `percent = (now - started_time) / duration` (0 <= percent <= 1).
- Percent than is passed to it's transition: `transition_value = transition(percent)`.
	`transition_value` is usually between 0 and 1, but may exceed those bounds.
- Finally, `transition_value` is passed to animators, which set properties on animation's DOM elements

Animator is a class, that knows, how to set the desired properties.
For example, color values must be rounded and written in `rgb(...)` form.

##Emulated animations

Sometimes, you will want to use browser transitions, and receive an event when such animation ends.
This task is performed by {@link Lava.animation.Emulated} - it does not use {@link Lava.Cron},
instead it starts a single timeout on <var>window</var>.

Emulated animations work by applying CSS classes and changing properties of elements on start and end of the animation.
And they can also be reversed, but:
- Smoothness and correctness in this case is not always guaranteed.
- After reversal, it will run for full amount of time.