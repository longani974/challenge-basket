function AjouterScore({ display, toggleMontrerAjouterScore, nom, prenom }) {
    return (
        <div
            className={`${
                display ? "block" : "hidden"
            } w-full h-full absolute top-0 left-0 flex items-center justify-center`}
        >
            <div className="bg-white w-5/6 h-5/6 px-4 py-4 relative z-10 rounded-xl">
                {nom + " " + prenom}
            </div>
            <div
                onClick={toggleMontrerAjouterScore}
                className="w-full h-full bg-gray-900 opacity-50 absolute top-0 left-0"
            ></div>
        </div>
    );
}

export default AjouterScore;
