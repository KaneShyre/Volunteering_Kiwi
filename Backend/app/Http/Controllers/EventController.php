<?php

namespace App\Http\Controllers;

use App\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $events = Event::all();
        return response()->json($events);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //return view('events.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'event_name'=>'required',
            'number_volunteers'=>'required',
            'location'=>'required',
            'event_time'=>'required',
        ]);

        $event = new Event([
            'event_name' => $request->get('event_name'),
            'number_volunteers' => $request->get('number_volunteers'),
            'location' => $request->get('location'),
            'event_time' => $request->get('event_time'),
            'description' => $request->get('description'),
            'interests' => $request->get('interests'),
        ]);
        $event->save();
        return redirect('/events')->with('succes', 'Event saved!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function show(Event $event)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function edit(Event $event)
    {
        $event = Event::find($id);
        //return view('events.edit', compact('event'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Event $event)
    {
        $request->validate([
            'event_name'=>'required',
            'number_volunteers'=>'required',
            'location'=>'required',
            'event_time'=>'required',
        ]);

        $event = Event::find($id);
        $event->event_name =  $request->get('event_name');
        $event->number_volunteers = $request->get('number_volunteers');
        $event->location = $request->get('location');
        $event->event_time = $request->get('event_time');
        $event->description = $request->get('description');
        $event->interests = $request->get('interests');
        $event->save();

        return redirect('/events')->with('success', 'Event updated!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function destroy(Event $event)
    {
        $event = Event::find($id);
        $event->delete();

        return redirect('/events')->with('success', 'Event deleted!');
    }
}
