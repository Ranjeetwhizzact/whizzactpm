import React from 'react'
import { Plus } from "lucide-react"

function AddUserButton() {
    return (
        <span className="flex items-center text-white rounded-[20px] px-[15px] bg-[#0099ff] font-bold py-1.5 "><Plus /> <button>New Account</button></span>
    )
}

export default AddUserButton