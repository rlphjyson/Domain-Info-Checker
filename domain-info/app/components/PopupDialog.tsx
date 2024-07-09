const PopupDialog = ({ isOpen, onClose, message }: { isOpen: any, onClose: any, message: any }) => {
    return (
        <div className={`popup ${isOpen ? 'open' : ''}`}>
            <div className="popup-content flex flex-col gap-20 items-center bg-zinc-900 p-10 rounded-md">

                <h1 className="text-2xl font-bold">{message}</h1>
                <button className="close-btn btn btn-primary w-40  " onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default PopupDialog;