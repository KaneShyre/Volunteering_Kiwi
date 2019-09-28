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
            array(  'event_name' => 'festival1',
                    'number_volunteers' => '50',
                    'location' => 'aqui',
                    'event_time' => '2019-09-30',
                    'description' => 'genial',
                    'interests' => 'hack'),
            array(  'event_name' => 'festival2',
                    'number_volunteers' => '70',
                    'location' => 'aca',
                    'event_time' => '2020-06-24',
                    'description' => 'malo',
                    'interests' => 'develop'),
            array(  'event_name' => 'festival3',
                    'number_volunteers' => '90',
                    'location' => 'alla',
                    'event_time' => '2021-07-03',
                    'description' => 'fome',
                    'interests' => 'rock'),
            array(  'event_name' => 'festival4',
                    'number_volunteers' => '100',
                    'location' => 'alli',
                    'event_time' => '2022-05-03',
                    'description' => 'bueno',
                    'interests' => 'juegos'),
    );

    //contador de filas creadas
    private $rows = 0;
    public function eventSeed() {
         //
        for($i=0;$i<count($this->events);$i++){

                //$this->command->info($this->events[$i]['email']);
                //$this->command->info($this->events[$i]['password']);
                $event_seed = new Event();            
                $event_seed->event_name = $this->events[$i]['event_name'];
                $event_seed->number_volunteers = $this->events[$i]['number_volunteers'];
                $event_seed->location = $this->events[$i]['location'];
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
