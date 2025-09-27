import React from 'react'

const Reference = ({ data }) => {
    if (!data.reference) return null;

    const references = data.reference.split(',');

    return data.reference && (
        <div className="content content__reference">
            <div className="content__reference-title">Reference</div>
            <div className="content__reference-content">
                {references.map((reference, index) => (
                    <div key={index} className="content__reference-content__item">
                        <a href={reference} target="_blank" rel="noopener noreferrer">{reference}</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Reference