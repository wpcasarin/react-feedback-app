import { createContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import FeedbackData from '../data/FeedBackData';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([...FeedbackData]);

  const [feedbackEdit, setFeebackEdit] = useState({
    item: {},
    edit: false,
  });

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuid();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const editFeedback = (item) => {
    setFeebackEdit({ item: item, edit: true });
  };

  const updateFeedback = (id, updItem) =>
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item)),
    );
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
