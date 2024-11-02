import React from 'react';

const MoodFilters = ({ onMoodSelect }) => {
    const moods = ["happy", "adventurous", "cozy", "romantic"];

    return (
        <section id="mood-filters">
            <h2>Select Your Mood</h2>
            <div className="filter-buttons">
                {moods.map((mood, index) => (
                    <button
                        key={index}
                        onClick={() => onMoodSelect(mood)}
                        className="mood-button"
                    >
                        {mood.charAt(0).toUpperCase() + mood.slice(1)}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default MoodFilters;
