import React, { useState } from 'react';
import './CommunityForm.css';
import { addFeedback } from '../backendservice';

const CommunityForm = () => {
  const [name, setName] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit =async (e) => {
    var data={
      feedbackName:name,
      feedbackSuggestion:suggestion
    }
    e.preventDefault();
    try{
      if (name.trim() !== '' && suggestion.trim() !== '') {
        // Process the submission here
        console.log('Name:', name);
        console.log('Suggestion:', suggestion);
        console.log('data',data)
        const response=addFeedback(data);
        console.log('res',response)
        setSubmitted(true);
      } else {
        alert('Please enter your name and suggestion.');
      }  

    }catch (error) {
      console.error("Feedback error:", error);
    }
    
  };

  return (
    <div className="community-forum">
      <h1 className='sugh1'>Feedback Forum</h1>
      {submitted ? (
        <div className="submitted-message">
          <p>Thank you for your submission!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="name">Name:</label>
            <input
            className='sug-input'
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="suggestion">Suggestion:</label>
            <textarea
            className='sug-input'
              id="suggestion"
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
            ></textarea>
          </div>
          <button className='sug-submit' type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default CommunityForm;
