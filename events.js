'use strict'; // Enforce use of strict verion of JavaScript

/*  @Doc
    This module contains the EventBus factory function, that can be used to create
    a enclosed event bus system.    

    @Todo
    - Clean up the codes
    - Add remove event listener method
    - Create a lib for this event bus
*/


function EventBus(event_names = []) {
    /*  @Docs
        Factory function for creating isolated event bus instances with a clean interface.
        Function takes in an array of event_names. Events can also be added/created later on.
    */

    // Create a DOM element object that will be used for managing events
    const eventEmitter = document.createElement("div");

    /* Create the container objects for the events and their corresponding event handlers */

    // events is a keyvalue store for the event names
    // const events = {};
    // event_names.forEach((event_name) => events[event_name] = event_name);
    // Above is obsolete, because it can be done, by simply mapping event.type to an array or smth.

    // _events is a key value store that matches event name to event object
    const _events = {};
    // _event_handlers is a key value store that matches event_name to event_handler attachment function.
    const _event_handlers = {};

    // Curried onChange function that attaches event handlers to events
    // Create a curried function that allows partial application for event handler attachment.
    const onChange = (event_name) => (fn) => eventEmitter.addEventListener(event_name, fn, false);

    // Fires off an event that corresponds to the event given
    function fire(event) {
        // Accepts both event object and event names as input to fire an event
        // The exported event object from the event bus, should be event names, and not event objects.

        if (typeof event === "string")
            eventEmitter.dispatchEvent(_getEvent(event));
        else if (typeof event === "object")
            eventEmitter.dispatchEvent(event);
        else
            throw new Error(`Invalid event type: "${typeof event}" used`);

        // If the event's is not valid, exit function
        if (!_events[event.type])
            return; // Throw an error instead.
        // Move check up to beore firing event.
        // Can try to check with the _getEvent method
    }

    const _getEvent = (event_name) => _events[event_name];
    const _getEventName = (event) => event.type;

    // Function that adds a single event to store
    function addEvent(event_name) {
        // Create new event definitions
        _events[event_name] = new Event(event_name);

        // Create a add event handler function
        _event_handlers[event_name] = onChange(event_name);
    }

    // Function that add an array of events
    const addEvents = (event_names) => event_names.forEach(addEvent)

    // @Todo  Make sure that all given event_names are strings.
    addEvents(event_names);

    // Construct and return the EventBus object
    return {
        event_names,
        events: _events,
        on: _event_handlers,
        onChange,
        addEvent,
        addEvents,
        fire
    };
}