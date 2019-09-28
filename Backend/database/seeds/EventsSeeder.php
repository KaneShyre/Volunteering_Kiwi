<?php

use Illuminate\Database\Seeder;
use App\User;

class EventsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    //Array users test
    private $users= array(
            array(  'event_name' => 'festival1',
                    'number_volunteers' => '50',
                    'location' => 'aqui',
                    'event_time' => '2019-09-30'),
            array(  'event_name' => 'festival2',
                    'number_volunteers' => '70',
                    'location' => 'aca',
                    'event_time' => '2020-06-24'),
            array(  'event_name' => 'festival3',
                    'number_volunteers' => '90',
                    'location' => 'alla',
                    'event_time' => '2021-07-03'),
            array(  'event_name' => 'festival4',
                    'number_volunteers' => '100',
                    'location' => 'alli',
                    'event_time' => '2022-05-03'),
    );

    //contador de filas creadas
    private $rows = 0;
    public function eventSeed() {
         //
        for($i=0;$i<count($this->events);$i++){

                //$this->command->info($this->users[$i].' Users cargados!');
                $this->command->info($this->events[$i]['email']);
                $this->command->info($this->events[$i]['password']);
                $event_seed = new Event();            
                $event_seed->name = $this->events[$i]['event_name'];
                $event_seed->email = $this->events[$i]['number_volunteers'];
                $event_seed->password = bcrypt($this->events[$i]['location']);
                $event_seed->role = $this->events[$i]['event_time'];
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
