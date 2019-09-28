<?php

use Illuminate\Database\Seeder;
use App\Event;

class EventsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */

    private $events= array(
            array(  'event_name' => 'Firenze Rocks',
                    'number_volunteers' => '50',
                    'country' => 'Italy',
                    'city' => 'Firenze',
                    'event_time' => '2020-06-11',
                    'description' => 'Rock Festival',
                    'interests' => 'Hard Rock/Metal, Rock'),
            array(  'event_name' => 'Marsatac',
                    'number_volunteers' => '70',
                    'country' => 'France',
                    'city' => 'Marseille',
                    'event_time' => '2018-06-15',
                    'description' => 'Hip-Hop Festival',
                    'interests' => 'Electronic, Hip-Hop/Rap'),
            array(  'event_name' => 'Download Festival Madrid',
                    'number_volunteers' => '90',
                    'country' => 'Spain',
                    'city' => 'Madrid',
                    'event_time' => '2019-06-30',
                    'description' => 'Hard Rock Festival',
                    'interests' => 'Hard Rock/Metal'),
            array(  'event_name' => 'Mad Cool',
                    'number_volunteers' => '100',
                    'country' => 'Spain',
                    'city' => 'Madrid',
                    'event_time' => '2019-07-11',
                    'description' => 'Pop Festival',
                    'interests' => 'Electronic, Pop, Rock'),
            array(  'event_name' => 'BBF Barcelona Beach Festival',
                    'number_volunteers' => '30',
                    'country' => 'Spain',
                    'city' => 'Barcelona',
                    'event_time' => '2019-07-13',
                    'description' => 'Electronic Music Festival',
                    'interests' => 'Electronic'),
            array(  'event_name' => 'Dcode',
                    'number_volunteers' => '40',
                    'country' => 'Spain',
                    'city' => 'Madrid',
                    'event_time' => '2019-09-07',
                    'description' => 'Rock Festival',
                    'interests' => 'Electronic, Rock'),
    );

    private $rows = 0;
    public function eventSeed() {
         //
        for($i=0;$i<count($this->events);$i++){

                //$this->command->info($this->events[$i]['email']);
                //$this->command->info($this->events[$i]['password']);
                $event_seed = new Event();            
                $event_seed->event_name = $this->events[$i]['event_name'];
                $event_seed->number_volunteers = $this->events[$i]['number_volunteers'];
                $event_seed->country = $this->events[$i]['country'];
                $event_seed->city = $this->events[$i]['city'];
                $event_seed->event_time = $this->events[$i]['event_time'];
                //dd($this->events[$i]['description']);
                $event_seed->description = $this->events[$i]['description'];
                $event_seed->interests = $this->events[$i]['interests'];
                $event_seed->save();
                $this->rows++;
        }
    }
    //function run
    public function run()
    {
            self::eventSeed();
            $this->command->info($this->rows.' :Events!');


    }
}
