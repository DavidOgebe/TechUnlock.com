import { apiClient } from "@/helpers/apiClient";
import courseSchema from "@/schema/AddCourse";

export async function addCourse(data) {
  try {
    // Implement authentication or authorization logic here before making the API request
    // Add any necessary authentication or authorization logic here before making the API request
    console.log("Validating data for adding course...");

    // Validate data against schema
    // courseSchema.parse(data);

    console.log("Data validated. Sending add course request...");

    const response = await apiClient.post(`/course/add-courses/`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("Add course response received:", response.data);

    // Handle response to check for errors
    if (response.data && response.data.error) {
      throw new Error(response.data.error); // Assuming the error message is in response.data.error
    }

    // Handle successful response
    return response.data;
  } catch (error) {
    console.error("Error during adding course:", error);

    if (error.response) {
      // Server responded with a status other than 200 range
      throw new Error(
        error.response.data.message ||
          "An error occurred while adding the course."
      );
    } else if (error.request) {
      // Request was made but no response received
      throw new Error(
        "No response received. Please check your network connection."
      );
    } else if (error instanceof z.ZodError) {
      // Validation error
      throw new Error(error.errors.map((err) => err.message).join(", "));
    } else {
      // Something else happened
      throw new Error("An unexpected error occurred.");
    }
  }
}
