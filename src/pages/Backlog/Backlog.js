import React from 'react';
import Task from '../../components/Task/Task';
import useDataFetching from '../../Hooks/useDataFetching';

function Backlog(props) {

    const [loading, error, tasks] = useDataFetching('https://my-json-server.typicode.com/Bryan-source/myAPI/tasks');
    return (
        <div className='Backlog-wrapper'>
            <h2>Backlog</h2>
            <div className='Task-wrapper'>
                {loading || error ? (
                    <span>{error || 'Loading...'}</span>
                ) : (
                    tasks.map((task) => (
                        <Task
                            key={task.id}
                            title={task.title}
                            boyd={task.body}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default Backlog;