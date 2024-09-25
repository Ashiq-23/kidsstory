import { createContext, useState } from "react";

// Export the context
export const CommentContext = createContext();

// CommentProvider component
export const CommentProvider = ({ children }) => {
    const [comment, setComment] = useState("This is the default comment");

    return (
        <CommentContext.Provider value={{comment, setComment}}>
            {children}
        </CommentContext.Provider>
    );
};
