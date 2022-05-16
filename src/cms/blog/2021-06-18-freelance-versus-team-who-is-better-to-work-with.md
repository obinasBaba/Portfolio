---
contentKey: blog
title: "Javascript Event Loop Simplified"
date: 2021-06-18T08:45:54.969Z
thumbnail: /img/moon.png
tags:

- tag: "#react"

---
<!--StartFragment-->


instead of a single event queue, which holds only events, the event loop has at least two queues that, in addition to
events, hold other actions performed by the browser. These actions are called tasks and are grouped into two categories:
macrotasks (or often just called tasks) and microtasks.

Examples of macrotasks include creating the main document object, parsing

HTML, executing mainline (or global) JavaScript code, changing the current URL, as

well as various events such as page loading, input, network events, and timer events.From the browser's perspective, a
macrotask represents one discrete, self-contained unit of work. After running a task, the browser can continue with
other assignments such as re-rendering the UI of the page, or performing garbage collection.

Microtasks, on the other hand, are smaller tasks that update the application state and should be executed before the
browser continues with other assignments such as re-rendering the UI. Examples include promise callbacks and DOM
mutation changes.

Microtasks should be executed as soon as possible, in an asynchronous way, but without the cost of executing a whole new
macrotask. Microtasks enable us to execute certain actions before the UI is re-rendered, thereby avoiding unnecessary UI
rendering that might show inconsistent application states.

The implementation of an event loop should use at least one queue for macrotasks and at least one queue for microtasks.
Event loop implementations usually go beyond that, and have several queues for different types of macro- and microtasks.
This enables the event loop to prioritize types of tasks; for example, giving priority to performance sensitive tasks
such as user input. On the other hand, because there are many browsers and JavaScript execution environments out in the
wild, you shouldn't be surprised if you run into event loops with only a single queue for both types of tasks together.

The event loop is based on two fundamental principles:

■ Tasks are handled one at a time.

■ A task runs to completion and can't be interrupted by another task.

Let's take a look at figure 13.1, which depicts these two principles.

![](file:////tmp/wps-obinas/ksohtml/wpsWZx9ZY.jpg)

On a high level, figure 13.1 shows that in a single iteration, the event loop first checks the macrotask queue, and if
there's a macrotask waiting to be executed, starts its execution. Only after the task is fully processed (or if there
were no tasks in the queue), the event loop moves onto processing the microtask queue. If there's a task waiting in that
queue, the event loop takes it and executes it to completion. This is performed for all microtasks in the queue. Note
the difference between handling the macrotask and microtask queues: In a single loop iteration, one macrotask at most is
processed (others are left waiting in the queue), whereas all microtasks are processed.

When the microtask queue is finally empty, the event loop checks whether a UI

render update is required, and if it is, the UI is re-rendered. This ends the current iteration of the event loop, which
goes back to the beginning and checks the macrotask queue again.

Now that we have a high-level understanding of the event loop, let's check some of

the interesting details shown in figure 13.1:

■ Both task queues are placed outside the event loop, to indicate that the act of adding tasks to their matching queues
happens outside the event loop. If this wasn't the case, any events that occur while JavaScript code is being executed
would be ignored. Because we most definitely don't want to do this, the acts of detecting and adding tasks are done
separately from the event loop.

■ Both types of tasks are executed one at a time, because JavaScript is based on a singlethreaded execution model. When
a task starts executing, it's executed to its

completion, without being interrupted by another task. Only the browser can

stop the execution of a task; for example, if the task starts being too selfish by

taking up too much time or memory.

■ All microtasks should be executed before the next rendering, because their goal is to update the application state
before rendering occurs.

■ The browser usually tries to render the page 60 times per second, to achieve 60 frames per second (60 fps), a frame
rate that's often considered ideal for smooth

motion, such as animations---meaning, the browser tries to render a frame every 16 ms. Notice how the "Update rendering"
action, shown in figure 13.1, happens

inside the event loop, because the page content shouldn't be modified by

another task while the page is being rendered. This all means that, if we want to

achieve smooth-running applications, we don't have much time to process tasks

in a single event-loop iteration. A single task and all microtasks generated by that task should ideally complete within
16 ms.

Now, let's consider three situations that can occur in the next event-loop iteration,

after the browser has completed a page render:

■ The event loop reaches the "Is rendering required?" decision point before

another 16 ms has elapsed. Because updating the UI is a complex operation, if

there isn't an explicit need to render the page, the browser may choose not to

perform the UI rendering in this loop iteration.

■ The event loop reaches the "Is rendering required?" decision point roughly

around 16 ms after the last rendering. In this case, the browser updates the UI,

and users will experience a smooth-running application.

■ Executing the next task (and all related microtasks) takes much more than 16

ms. In this case, the browser won't be able to re-render the page at the target

frame rate, and the UI won't be updated. If running the task code doesn't take

up too much time (more than a couple of hundred milliseconds), this delay

might not even be perceivable, especially if there isn't much motion going on

in the page. On the other hand, if we take too much time, or animations are

running on the page, users will probably perceive the web page as slow and

nonresponsive. In a worst-case scenario, in which a task gets executed for more

than a couple of seconds, the user's browser shows the dreaded "Unresponsive

script" message. (Don't worry, later in the blog I'll show you a technique

for breaking complex tasks into smaller ones that won't clog the event loop.)

**Dealing with computationally expensive processing**

The single-threaded nature of JavaScript is probably the largest gotcha in complex

JavaScript application development. While JavaScript is busy executing, user interaction in the browser can become, at
best, sluggish, and, at worst, unresponsive.

The browser may stutter or seem to hang, because all updates to the rendering of a page are suspended while JavaScript
is executing.

Reducing all complex operations that take any more than a few hundred milliseconds into manageable portions becomes a
necessity if we want to keep the interface responsive. Additionally, most browsers will produce a dialog box warning the
user that a script has become "unresponsive" if it has run nonstop for at least 5 seconds, while some other browsers
will even silently kill any script running for more than 5 seconds. You may have been to a family reunion where a
garrulous uncle won't stop talking and insists on telling the same stories over and over again. If no one else gets a
chance to break in and get a word in edgewise, the conversation's not going to be pleasant for anyone (except for Uncle
Bruce). Likewise, code that hogs all the processing time

results in an outcome that's less than desirable; producing an unresponsive user interface is never good. But situations
will almost certainly arise that require us to process a significant amount of data, situations such as manipulating a
couple of thousand DOM elements, for example.

On these occasions, timers can come to the rescue and become especially useful.

Because timers are capable of effectively suspending the execution of a piece of

JavaScript until a later time, they can also break individual pieces of code into fragments that aren't long enough to
cause the browser to hang. Taking this into account, we can convert intensive loops and operations into nonblocking
operations. Let's look at the following example of a task that's likely to take a long time.
