import { useState } from 'react';

const App = () => {
    const [username, setusername] = useState('');
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        setfirstname('');
        setusername('');
        setlastname('');
        console.log(username, firstname, lastname);
    };
    return (
        <div className="bg-zinc-400 h-screen flex items-center justify-center">
            <form
                className="flex flex-col gap-2 items-center p-4 "
                onSubmit={submitHandler}
            >
                <input
                    className="px-2 py-1 rounded-lg "
                    type="text"
                    name="username"
                    placeholder="username"
                    value={username}
                    onChange={(e) => {
                        setusername(e.target.value);
                    }}
                />
                <input
                    className="px-2 py-1 rounded-lg "
                    type="text"
                    name="firstname"
                    placeholder="firstname"
                    value={firstname}
                    onChange={(e) => {
                        setfirstname(e.target.value);
                    }}
                />
                <input
                    className="px-2 py-1 rounded-lg "
                    type="text"
                    name="lastname"
                    placeholder="lastname"
                    value={lastname}
                    onChange={(e) => {
                        setlastname(e.target.value);
                    }}
                />
                <button className="py-1 px-3 border-4 bg-slate-200 rounded-2xl border-slate-900 ">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default App;
