import RecipeSubmissionForm from "@/components/RecipeSubmission/RecipeSubmissionForm";
import SubmittedRecipe from "@/components/RecipeSubmission/SubmittedRecipe";
import React from "react";

const RecipeSubmission = () => {
  return (
    <div>
      <RecipeSubmissionForm />
      <SubmittedRecipe />
    </div>
  );
};

export default RecipeSubmission;

export const metadata = {
  title: "Recipe Submission",
  description: "Submit your recipes to share with the community",
};
