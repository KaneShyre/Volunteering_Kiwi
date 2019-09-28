@extends('base')

@section('main')
<div class="row">
<div class="col-sm-12">
    <h1 class="display-3">Events</h1>    
  <table class="table table-striped">
    <thead>
        <tr>
          <td>ID</td>
          <td>Event Name</td>
          <td>Number of volunteers</td>
          <td>Location</td>
          <td>Event Time</td>
          <td>Description</td>
          <td>Interests</td>
        </tr>
    </thead>
    <tbody>
        @foreach($events as $event)
        <tr>
            <td>{{$event->id}}</td>
            <td>{{$event->event_name}}</td>
            <td>{{$event->number_volunteers}}</td>
            <td>{{$event->location}}</td>
            <td>{{$event->event_time}}</td>
            <td>{{$event->description}}</td>
            <td>{{$event->interests}}</td>
            
        </tr>
        @endforeach
    </tbody>
  </table>
<div>
</div>
@endsection