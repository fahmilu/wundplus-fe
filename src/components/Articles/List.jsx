"use client";
import { useState, useMemo } from "react";
import ArticlesCard from "./Card";
import Pagination from "../Pagination";

const ArticlesList = ({ articles = [] }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOrder, setSortOrder] = useState('desc'); // 'asc' or 'desc'
    const articlesPerPage = 9;
    
    // Sort articles by date (using published_date, can be changed to submitted_date)
    const sortedArticles = useMemo(() => {
        const otherArticles = articles.filter(article => !article.is_featured);
        
        return otherArticles.sort((a, b) => {
            const dateA = new Date(a.published_date || a.submitted_date || '1970-01-01');
            const dateB = new Date(b.published_date || b.submitted_date || '1970-01-01');
            
            if (sortOrder === 'asc') {
                return dateA - dateB;
            } else {
                return dateB - dateA;
            }
        });
    }, [articles, sortOrder]);
    
    // Calculate pagination
    const totalPages = Math.ceil(sortedArticles.length / articlesPerPage);
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const currentArticles = sortedArticles.slice(startIndex, endIndex);
    
    // Generate page numbers for pagination
    const pageNumbers = useMemo(() => {
        const pages = [];
        const maxVisiblePages = 5;
        
        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            const startPage = Math.max(1, currentPage - 2);
            const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
            
            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }
        }
        
        return pages;
    }, [currentPage, totalPages]);
    
    const handlePageChange = (page) => {
        setCurrentPage(page);
        // Scroll to top when page changes
        // window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            // window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    
    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            // window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    
    const handleSortChange = (newSortOrder) => {
        setSortOrder(newSortOrder);
        setCurrentPage(1); // Reset to first page when sorting changes
    };
    
    return (
        <section className="articles-list">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between sm:items-center gap-y-4 mb-4">
                    <h3 data-color="brand">Artikel</h3>
                    {/* Sort Controls */}
                    <div className="flex flex-col md:flex-row sm:items-center sm:space-x-2 space-y-2">
                        <span className="text-sm text-gray-600 sm:block hidden">Sort by date:</span>
                        <div className="flex w-full shadow-lg rounded-full overflow-hidden">
                            <button
                                onClick={() => handleSortChange('desc')}
                                className={`px-4 py-2 flex-1 text-base ${
                                    sortOrder === 'desc'
                                        ? 'bg-wund-red text-white'
                                        : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                Newest First
                            </button>
                            <button
                                onClick={() => handleSortChange('asc')}
                                className={`px-4 py-2 flex-1 text-base border-l ${
                                    sortOrder === 'asc'
                                        ? 'bg-wund-red text-white'
                                        : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                Oldest First
                            </button>
                        </div>
                    </div>
                </div>
                {/* Regular Articles Section */}
                <div className="regular-articles">
                    
                    {/* Articles Grid */}
                    <div className="articles-list__grid">
                        {currentArticles.map(article => (
                            <ArticlesCard key={article.id} article={article} />
                        ))}
                    </div>
                    
                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <Pagination handlePrevious={handlePrevious} handleNext={handleNext} handlePageChange={handlePageChange} currentPage={currentPage} totalPages={totalPages} pageNumbers={pageNumbers} />
                    )}
                </div>
            </div>
        </section>
    );
};

export default ArticlesList;