import React from 'react';
import Lane from '../../components/Lane/Lane';
import useDataFetching from '../../Hooks/useDataFetching';
import './Board.css';

const lanes = [
    {id: 1, title: 'To do'},
    {id: 2, title: 'In progress'},
    {id: 3, title: 'Review'},
    {id: 4, title: 'Done'},
]

function Board(){
    const [loading, error, tasks] = useDataFetching('https://my-json-server.typicode.com/Bryan-source/myAPI/tasks');
    return(
        <div className='Board-wrapper'>
            {
                lanes.map((lane) => (
                    <Lane 
                        key={lane.id} 
                        title={lane.title}
                        loading={loading}
                        error={error}
                        tasks={tasks.filter((task) => task.lane === lane.id)}/>
                ))
            }
        </div>
    );
}

export default Board;