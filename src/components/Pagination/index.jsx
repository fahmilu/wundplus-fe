const Pagination = ({ handlePrevious, handleNext, handlePageChange, currentPage, totalPages, pageNumbers }) => {
    return (
        <div className="pagination flex justify-center items-center mt-20 space-x-10">
            {/* Previous Button */}
            <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width={35} height={34} viewBox="0 0 35 34" fill="none">
                    <path d="M0.949951 17.05C0.949951 26.37 8.57996 34 17.9 34C27.22 34 34.8499 26.37 34.8499 17.05C34.8499 7.73005 27.22 0.100098 17.9 0.100098C8.57996 0.100098 0.949951 7.73005 0.949951 17.05ZM9.53992 17.54C9.41992 17.18 9.41992 16.8101 9.53992 16.5701C9.53992 16.4501 9.65997 16.33 9.77997 16.21L14.6199 11.3701C15.0999 10.8901 15.8299 10.8901 16.3199 11.3701C16.8099 11.8501 16.7999 12.5801 16.3199 13.0701L13.5399 15.8501H26.3699C27.0999 15.8501 27.58 16.3301 27.58 17.0601C27.58 17.7901 27.0999 18.27 26.3699 18.27H13.5399L16.3199 21.05C16.7999 21.53 16.7999 22.26 16.3199 22.75C16.0799 22.99 15.8399 23.1101 15.4699 23.1101C15.0999 23.1101 14.8599 22.99 14.6199 22.75L9.77997 17.9099C9.65997 17.7899 9.53992 17.67 9.53992 17.55V17.54Z" fill="#DE0026" />
                </svg>

            </button>
            
            {/* Page Numbers */}
            <div className="flex space-x-4">
                {pageNumbers.map(pageNum => (
                    <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`w-10 h-10 border rounded aspect-square flex items-center justify-center ${
                            currentPage === pageNum
                                ? 'bg-wund-red text-white border-wund-red'
                                : 'hover:bg-gray-100'
                        }`}
                    >
                        {pageNum}
                    </button>
                ))}
            </div>
            
            {/* Next Button */}
            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="disabled:opacity-50 disabled:cursor-not-allowed"
            >
            <svg xmlns="http://www.w3.org/2000/svg" width={35} height={34} viewBox="0 0 35 34" fill="none">
                <path d="M17.0999 0.100098C7.77985 0.100098 0.149902 7.73005 0.149902 17.05C0.149902 26.37 7.77985 34 17.0999 34C26.4199 34 34.0499 26.37 34.0499 17.05C34.0499 7.73005 26.4199 0.100098 17.0999 0.100098ZM25.2198 17.8999L20.3799 22.74C20.1399 22.98 19.8999 23.1001 19.5299 23.1001C19.1599 23.1001 18.9199 22.98 18.6799 22.74C18.1999 22.26 18.1999 21.53 18.6799 21.04L21.4598 18.26H8.62988C7.89988 18.26 7.41992 17.78 7.41992 17.05C7.41992 16.32 7.89988 15.8401 8.62988 15.8401H21.4598L18.6799 13.0601C18.1999 12.5801 18.1999 11.8501 18.6799 11.3601C19.1599 10.8701 19.8899 10.8801 20.3799 11.3601L25.2198 16.2C25.3398 16.32 25.4598 16.4401 25.4598 16.5601C25.5798 16.8001 25.5798 17.17 25.4598 17.53C25.4598 17.65 25.3398 17.7699 25.2198 17.8899V17.8999Z" fill="#DE0026" />
            </svg>

            </button>
        </div>
    );
}

export default Pagination;