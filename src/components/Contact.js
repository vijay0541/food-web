import { Form } from "react-router-dom";

const Contact = () => {
    return (
        <div className="flex flex-col mt-1 bg-gradient-to-br from-yellow-200 to bg-red-200">
            <h1 className="border rounded-3xl w-7/12 text-4xl font-bold my-4 mx-auto py-3 text-center bg-gradient-to-br from-blue-200 via-teal-200 to-sky-400">Contact Us...</h1>
            <form className="w-6/12 flex flex-col mx-auto my-2 rounded-full">
                <input type="text" placeholder="Name" className="border rounded-lg py-2 px-3 my-3"/>
                <input type="text" placeholder="Email" className="border rounded-lg py-2 px-3 my-3"/>
                <input type="text" placeholder="Message" className="border rounded-lg py-2 px-3 my-3"/>
                <button className="w-24 border mx-auto p-3 my-2 rounded-full bg-gray-400 font-bold">Submit</button>
            </form>
        </div>
    )
}

export default Contact;