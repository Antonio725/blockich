import React, { useState } from 'react'
import "./newPostForm.css"

const NewPostForm = () => {

    const [state, setState] = useState({
        title: "",
        description: "",
        file: null
    })

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(state)
    }

    return (
        <div className="w-4/5 mx-auto">
            <div className="text-2xl text-indigo-500 font-bold mt-12 mb-8">
                Create New Post
            </div>
            <div className="shadow-md px-8 py-4 bg-gray-50 rounded-md">
                <form onSubmit={ event => handleSubmit(event) }>
                    <div className="text-gray-700 font-semibold text-xl mb-5">
                        New Post
                    </div>
                    <div className="">
                        <label className="text-gray-700 font-semibold" htmlFor="id_for_title">
                            Title
                        </label>
                        <input type="text"
                               value={ state.title }
                               onChange={ event => handleChange(event) }
                               id="id_for_title"
                               className="mt-2 mb-4 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                               name="title"
                               placeholder="Enter title"
                        />
                        <label className="text-gray-700 font-semibold" htmlFor="id_for_desc">
                            Short description
                        </label>
                        <textarea id="id_for_desc"
                                  value={ state.description }
                                  onChange={ event => handleChange(event) }
                                  className="mt-2 mb-4 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                  name="description"
                                  placeholder="Enter Description"
                        />
                        <label className="text-gray-700 font-semibold" htmlFor="id_for_file">
                            Upload file
                        </label>
                        <input type="file"
                               onChange={ event => handleChange(event) }
                               id="id_for_file"
                               className="w-full mt-2 newPostFile"
                               name="file"
                               placeholder="Enter Description"
                        />
                    </div>

                    <button type="submit"
                            className="py-2 px-4 mt-6 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        Submit
                    </button>

                </form>
            </div>
        </div>
    );
}

export default NewPostForm