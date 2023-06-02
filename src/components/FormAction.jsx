export default function FormAction({
    handleSubmit,
    isDisabled=false,
    type='Button',
    action='submit',
    text
}){
    return(
        <>
        {
            type==='Button' ?
            <button
                type={action}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-beige-600 hover:bg-beige-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-beige-500 mt-10"
                onClick={handleSubmit}
                disabled={isDisabled}
            >
                {text}
            </button>
            :
            <></>
        }
        </>
    )
}