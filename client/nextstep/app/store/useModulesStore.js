import { create } from "zustand";

const useModuleStore = create((set, get) => ({
  domain: [],
  courses: [],
  modules: [],
  lessons: [],
  learningContent: [],

  getLearningContent: async (token, level) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_DEV_URL}/api/sendlearningcontent/${level}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        return console.log("Error fetching data.");
      }

      const data = await response.json();
      console.log("fetched data for learning modules: ", data);
      set({
        domain: data.domain,
        courses: data.course,
        modules: data.module,
        lessons: data.lesson,
        learningContent: data.learningContent,
      });
    } catch (error) {
      console.log(
        "Something went wrong, please try again.",
        "ErrorMessage: ",
        error.message,
        "Error: ",
        error
      );
    }
  },
}));

export default useModuleStore;
